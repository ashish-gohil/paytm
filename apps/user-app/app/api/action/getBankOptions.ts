"use server";
import prisma from "@repo/db/client";
import { store } from "./serverStoreAction";
import { setBankOptions } from "./lib/features/bankOptionsSlice";
export async function getBankOptions() {
  try {
    const allBanks = await prisma.providerTypes.findMany({});
    store.dispatch(setBankOptions(allBanks));
    console.log("//////////////");

    console.log(allBanks);
    console.log("//////////////");
    return allBanks;
  } catch (err) {
    console.log(err);
  }
  return [];
}
