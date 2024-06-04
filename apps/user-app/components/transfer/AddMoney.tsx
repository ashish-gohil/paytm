"use client";
import { useState } from "react";
import { createOnRampTransaction } from "../../app/api/action/onRampTransaction";
import DropdownWithLabel from "../DropdownWithLabel";
import HorizontalLineSaperator from "../HorizontalLineSaperator";
import InputWithLabel from "../InputWithLabel";
// import { Provider } from "@prisma/client";
import { useRouter } from "next/navigation";
export enum Provider {
  BOB = "BOB",
  SBI = "SBI",
  ICICI = "ICICI",
}
export type BankOption = {
  value: Provider;
  name: string;
  redirectUrl: string;
};
const bankOptions: BankOption[] = [
  {
    value: Provider.BOB,
    name: "Bank of Baroda",
    redirectUrl:
      "https://www.bankofbaroda.in/personal-banking/digital-products/instant-banking/bob-world-internet-banking",
  },
  {
    value: Provider.SBI,
    name: "State Bank of India",
    redirectUrl: "https://www.onlinesbi.sbi/",
  },
  {
    value: Provider.ICICI,
    name: "ICICI Bank",
    redirectUrl:
      "https://www.icicibank.com/personal-banking/insta-banking/internet-banking",
  },
];
export default function () {
  const [selectdBank, setSelectedBank] = useState<BankOption | undefined>(
    bankOptions[0]
  );
  const [amount, setAmount] = useState<string | undefined>();
  const [isError, setIsError] = useState(true);
  const router = useRouter();

  const onChangeBankOption: (val: Provider) => void = (val) => {
    const bank =
      bankOptions.find((bank) => bank.value === val) || bankOptions[0];
    setSelectedBank(bank);
    console.log(selectdBank);
  };
  return (
    <>
      <div className="header font-semibold p-1">Add Money</div>
      <HorizontalLineSaperator />
      <div className="flex flex-col p-1 ">
        <InputWithLabel
          placeHolderText="0.00"
          isPrice={true}
          labelText="Price"
          className=""
          inputChangeHandler={(e) => {
            setAmount(e.target.value);
            if (!Number(e.target.value)) {
              setIsError(true);
            } else {
              setIsError(false);
            }
          }}
          inputValue={amount}
        />
        {amount && isError ? (
          <p className="text-red-500 text-xs">Enter valid number</p>
        ) : (
          ""
        )}
        <DropdownWithLabel
          options={bankOptions}
          title={"Select Bank"}
          onChangeOption={onChangeBankOption}
        />
      </div>
      <div className="w-full flex justify-center my-2 ">
        <button
          className="bg-blue-400 hover:bg-blue-500 p-1 rounded-md duration-200 disabled:bg-blue-300 disabled:text-gray-600 disabled:cursor-not-allowed"
          onClick={async () => {
            await createOnRampTransaction(
              selectdBank?.value || Provider.BOB,
              Number(amount) || 0
            );
            window.location.href = selectdBank?.redirectUrl || "";
          }}
          disabled={isError ? true : false}
        >
          Add Money
        </button>
      </div>
    </>
  );
}
