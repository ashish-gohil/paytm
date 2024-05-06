"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@repo/db/client";
import { Provider } from "@prisma/client";

export async function createOnRampTransaction(
  provider: Provider,
  amount: number
) {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.userId) {
      const data = await prisma.onRampTransaction.create({
        data: {
          provider,
          amount: amount * 100,
          startTime: new Date(),
          // @ts-ignore
          userId: Number(session?.user?.userId || 1),
        },
      });
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
  return null;
}
