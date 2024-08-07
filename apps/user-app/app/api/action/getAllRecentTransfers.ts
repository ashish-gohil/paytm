"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../authLib/auth";

export async function getRecentTransfers() {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.id) {
      const data = await prisma.onRampTransaction.findMany({
        where: {
          // @ts-ignore
          userId: Number(session?.user?.id),
        },
      });
      console.log(data);
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
