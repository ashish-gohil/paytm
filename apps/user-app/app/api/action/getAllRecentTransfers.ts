"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@repo/db/client";

export async function getRecentTransfers() {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.userId) {
      const data = await prisma.onRampTransaction.findMany({
        where: {
          // @ts-ignore
          userId: Number(session?.user?.userId),
        },
      });
      return data;
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
