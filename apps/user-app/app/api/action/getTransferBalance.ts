"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../authLib/auth";

export async function getTransferBalances() {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    console.log(session);
    if (session && session?.user?.id) {
      const user = await prisma.user.findUnique({
        where: {
          // @ts-ignore
          id: Number(session?.user?.id),
        },
        select: {
          availableBalance: true,
          lockedBalance: true,
        },
      });
      if (!user) {
        return {
          message: "No User found!",
        };
      } else {
        const { lockedBalance, availableBalance } = user;
        return {
          totalBalance: lockedBalance + availableBalance,
          lockedBalance,
          availableBalance,
        };
      }
    } else {
      return {
        message: "Unauthorized user!",
      };
    }
  } catch (err) {
    console.log(err);
  }
  return null;
}
