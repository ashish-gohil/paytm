"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../lib/auth";

export async function p2pTransfer(to: number, amount: number) {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.id) {
      // @ts-ignore
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
            `${session.user?.name} doesn't have enough to send ${amount}`
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
        console.log(recipient);
        return true;
      });
    }
  } catch (err) {
    console.log(err);
  }
  return null;
}
