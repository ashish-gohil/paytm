"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
// import { Provider } from "@prisma/client";
import { authOptions } from "../../lib/auth";

import { Provider } from "../../../components/transfer/AddMoney";

export async function createOnRampTransaction(
  provider: Provider,
  amount: number
) {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.id) {
      console.log(session?.user?.id);
      const data = await prisma.onRampTransaction.create({
        data: {
          provider,
          amount: amount * 100,
          startTime: new Date(),
          token: String(Math.random()), // idealy it should be provided by bank, by calling bank api with userid and amount
          // @ts-ignore
          userId: Number(session?.user?.id || 1),
        },
      });
      console.log(data);
      return true;
    }
  } catch (err) {
    // console.log(err);
    return false;
  }
}
