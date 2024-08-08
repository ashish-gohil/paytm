"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../authLib/auth";

export async function p2pTransfer(to: number, amount: number) {
  const session = await getServerSession(authOptions);
  try {
    // @ts-ignore
    if (session && session?.user?.id) {
      const recipient = await prisma.user.findUnique({
        where: {
          mobileNumber: String(to),
        },
      });
      if (!recipient?.id) {
        throw new Error("User does not found!");
      }
      return prisma.$transaction(async (tx) => {
        // 1. Decrement amount from the sender.
        const sender = await tx.user.update({
          data: {
            availableBalance: {
              decrement: amount * 100,
            },
          },
          where: {
            //@ts-ignore
            id: Number(session?.user?.id),
          },
        });

        console.log(sender);
        // 2. Verify that the sender's balance didn't go below zero.
        if (sender.availableBalance < 0) {
          throw new Error(
            `${sender?.fullname} doesn't have enough to send ${amount}`
          );
        }

        // 3. Increment the recipient's balance by amount
        const recipient = await tx.user.update({
          data: {
            availableBalance: {
              increment: amount * 100,
            },
          },
          where: {
            mobileNumber: String(to),
          },
        });
        const p2pTransfer = await tx.p2pTransfer.create({
          data: {
            status: "SUCCESSFUL",
            fromUserId: sender?.id,
            toUserId: recipient?.id,
            amount,
          },
        });

        console.log(recipient);
        console.log(p2pTransfer);
        return true;
      });
    }
  } catch (err: any) {
    console.log(err.message);
    console.error(err);
    const recipient = await prisma.user.findUnique({
      where: {
        mobileNumber: String(to),
      },
    });
    if (recipient?.id) {
      await prisma.p2pTransfer.create({
        data: {
          status: "FAILED",
          fromUserId: Number(session?.user?.id),
          toUserId: recipient?.id,
          amount,
        },
      });
    }
  }
  return null;
}
