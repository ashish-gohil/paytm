"use client";
import { getRecentTransfers } from "../app/api/action/getAllRecentTransfers";
import HorizontalLineSaperator from "./HorizontalLineSaperator";
import { useState, useEffect } from "react";
type RecentTransfer = {
  isReceived?: boolean;
  date: Date;
  amount: number;
  id: number;
};
export default function () {
  const [recentTransfers, setRecentTransfers] = useState<RecentTransfer[]>([
    { isReceived: true, date: new Date(), amount: 100, id: 2 },
  ]);
  const getAllRecentTransfers = async () => {
    const data = (await getRecentTransfers()) || [];
    //@ts-ignore
    if (data?.message) {
      setRecentTransfers([]);
    } else {
      setRecentTransfers(
        //@ts-ignore
        data?.map(({ startTime, amount, id }) => {
          return { isReceived: true, date: startTime, amount, id };
        })
      );
    }
  };
  useEffect(() => {
    getAllRecentTransfers();
  }, []);
  return (
    <>
      <div className="header font-semibold p-1">Recent Transfer</div>
      <HorizontalLineSaperator />

      <div className="flex flex-col max-h-28 overflow-scroll overflow-x-clip">
        {recentTransfers.map((tnx) => {
          return (
            <div className="flex p-1 justify-between items-center">
              <div className="flex flex-col ">
                <div className="text-xs">
                  {tnx.isReceived ? "Received" : "Sent"}
                </div>
                {/* //sent/received/processing */}
                <div className="text-[10px]">{tnx.date.toDateString()}</div>
              </div>
              <div className="pl-1">{`${tnx.isReceived ? "+" : "-"}${tnx.amount / 100} ₹`}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
