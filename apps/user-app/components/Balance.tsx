"use client";
import { useState, useEffect } from "react";
import HorizontalLineSaperator from "./HorizontalLineSaperator";
import { getTransferBalances } from "../app/api/action/getTransferBalance";

export default function () {
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [lockedBalance, setLockedBalance] = useState<number>(0);
  const [availableBalance, setAvailableBalance] = useState<number>(0);
  useEffect(() => {
    getAllbalances();
  }, []);

  const getAllbalances = async () => {
    const data = await getTransferBalances();
    if (!data?.message) {
      setAvailableBalance(data?.availableBalance || 0);
      setLockedBalance(data?.lockedBalance || 0);
      setTotalBalance(data?.totalBalance || 0);
    }
  };

  return (
    <>
      <div className="header font-semibold p-1">Balances</div>
      <div className="flex flex-col">
        <HorizontalLineSaperator />
        <div className="flex p-1 justify-between">
          <div className="">Total Balance</div>
          <div className="pl-1">{`${totalBalance / 100} ₹`}</div>
        </div>
        <HorizontalLineSaperator />

        <div className="flex p-1 justify-between">
          <div className="">Locked Balance</div>
          <div className="pl-1">{`${lockedBalance / 100} ₹`}</div>
        </div>
        <HorizontalLineSaperator />

        <div className="flex p-1 justify-between">
          <div className="">Available Balance</div>
          <div className="pl-1">{`${availableBalance / 100} ₹`}</div>
        </div>
        <HorizontalLineSaperator />
      </div>
    </>
  );
}
