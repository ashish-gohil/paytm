"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@repo/db/client";

export async function getTransferBalances() {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.userId) {
      const data = await prisma.onRampTransaction.findMany({
        where: {
          // @ts-ignore
          userId: Number(session?.user?.userId),
        },
        select: {
          status: true,
          amount: true,
        },
      });
      let totalBalance = 0;
      let lockedBalance = 0;
      data.forEach((sts) => {
        if (sts.status === "SUCCESSFUL" || sts.status === "LOCKED") {
          totalBalance += sts.amount;
        }
        if (sts.status === "LOCKED") {
          lockedBalance += sts.amount;
        }
      });
      return {
        totalBalance,
        lockedBalance,
        availableBalance: totalBalance - lockedBalance,
      };
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
