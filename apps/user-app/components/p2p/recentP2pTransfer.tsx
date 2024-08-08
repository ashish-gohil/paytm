"use client";
import { getRecentP2pTransfers } from "../../app/api/action/getAllP2pTransfers";
// import { getRecentTransfers } from "../../app/api/action/getAllRecentTransfers";
import HorizontalLineSaperator from "../HorizontalLineSaperator";
import { useState, useEffect } from "react";
type RecentTransfer = {
  isReceived?: boolean;
  date: string;
  amount: number;
  id: number;
  user: string;
};
export default function () {
  const [recentTransfers, setRecentTransfers] = useState<RecentTransfer[]>([]);
  const getAllRecentTransfers = async () => {
    const data = (await getRecentP2pTransfers()) || [];
    //@ts-ignore
    if (data?.message) {
      setRecentTransfers([]);
    } else {
      setRecentTransfers(
        //@ts-ignore
        data
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

      <div className="flex flex-col max-h-50 overflow-scroll overflow-x-clip">
        {recentTransfers.length > 0 ? (
          recentTransfers.map((tnx) => {
            return (
              <div className="flex p-1 justify-between items-center">
                <div className="flex flex-col ">
                  <div className="text-xs">
                    {tnx.isReceived ? "Received" : "Sent"}
                  </div>
                  <div className="text-[8px]">{tnx?.date}</div>
                </div>
                <div className="pl-1">{tnx?.user}</div>
                <div className="pl-1">{`${tnx.isReceived ? "+" : "-"}${tnx.amount} ₹`}</div>
              </div>
            );
          })
        ) : (
          <div className="items-center">
            <p className="text-[12px] items-center w-full">
              No Recent Transfer
            </p>
          </div>
        )}
      </div>
    </>
  );
}
