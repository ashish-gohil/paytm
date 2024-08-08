"use server";
import prisma from "@repo/db/client";
export async function getAllTransactions() {
  try {
    const allBanks = await prisma.user.findUnique({
      where: {
        id: 1,
      },
      select: {
        onRampTransactions: true,
        sentTransfers: true,
        receivedTransfers: true,
      },
    });

    return allBanks;
  } catch (err) {
    console.log(err);
  }
  return [];
}
