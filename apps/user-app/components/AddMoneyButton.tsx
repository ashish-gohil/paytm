"use client";

import { useAppSelector } from "../app/api/action/lib/hooks";
import { createOnRampTransaction } from "../app/api/action/onRampTransaction";

export default function ({ allBanksObj }: { allBanksObj: any }) {
  const { selectedBank, amount } = useAppSelector((state) => ({
    selectedBank: state.bankOptions.selectedBank,
    amount: state.transfer.addAmount,
  }));
  return (
    <button
      className="bg-blue-400 hover:bg-blue-500 p-1 rounded-md duration-200 disabled:bg-blue-300 disabled:text-gray-600 disabled:cursor-not-allowed"
      onClick={async () => {
        const selectedBankObj = allBanksObj.filter(
          (bank: any) => bank.id === selectedBank
        );

        if (selectedBankObj.length === 1) {
          await createOnRampTransaction(selectedBankObj[0]?.id, amount);
          window.location.href = selectedBankObj[0]?.redirectUrl || "";
        }
      }}

      //   disabled={isError ? true : false}
    >
      Add Money
    </button>
  );
}
