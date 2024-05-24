"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@repo/db/client";

export async function getTransferBalances() {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.userId) {
      const user = await prisma.user.findUnique({
        where: {
          // @ts-ignore
          id: Number(session?.user?.userId),
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
