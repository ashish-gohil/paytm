"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../authLib/auth";

export async function createOnRampTransaction(
  provider: string,
  amount: number
) {
  console.log("transaction:", provider, amount);
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.id) {
      console.log(session?.user?.id);
      const data = await prisma.onRampTransaction.create({
        data: {
          user: {
            connect: { id: Number(session?.user?.id) },
          },
          provider: {
            connect: { id: provider },
          },
          amount: amount * 100,
          startTime: new Date(),
          token: String(Math.random()), // idealy it should be provided by bank, by calling bank api with userid and amount
          // @ts-ignore
          // userId: Number(session?.user?.id || 1),
          // providerId: provider,
        },
      });
      console.log("//////////////////////////111");
      console.log(data);
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}
