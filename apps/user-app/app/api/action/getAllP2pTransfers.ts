"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../authLib/auth";

export async function getRecentP2pTransfers() {
  try {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session && session?.user?.id) {
      const data = await prisma.p2pTransfer.findMany({
        where: {
          // @ts-ignore
          OR: [
            { fromUserId: Number(session?.user?.id) },
            { toUserId: Number(session?.user?.id) },
          ],
        },
        select: {
          toUser: { select: { id: true, fullname: true } },
          fromUser: { select: { id: true, fullname: true } },
          amount: true,
          startTime: true,
          status: true,
          id: true,
        },
        orderBy: { startTime: "desc" },
      });
      console.log("below are transfers of user p2p");
      console.log(data);
      //   const sent =
      //     data?.sentTransfers.map((obj) => ({ user: obj.toUserId })) || [];
      //   const received = data?.receivedTransfers || [];
      //   const allTransfers = [...sent, ...received];
      //   {
      //     isReceived?: boolean;
      //     date: Date;
      //     amount: number;
      //     id: number;
      //     user: string;
      //   }
      const mappedData = data.map((obj) => ({
        isReceived: obj?.toUser?.id === Number(session?.user?.id),
        amount: obj?.amount,
        date: obj?.startTime?.toDateString(),
        id: obj?.id,
        user:
          obj?.toUser?.id === Number(session?.user?.id)
            ? obj?.fromUser?.fullname
            : obj?.toUser?.fullname,
      }));
      console.log(mappedData);
      return mappedData;
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
