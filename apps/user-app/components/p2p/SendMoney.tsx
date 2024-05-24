"use client";
import { useState } from "react";
import HorizontalLineSaperator from "../HorizontalLineSaperator";
import InputWithLabel from "../InputWithLabel";
import { p2pTransfer } from "../../app/api/action/p2pTransaction";

export default function () {
  const [amount, setAmount] = useState<string | undefined>();
  const [mobileNumber, setMobileNumber] = useState<string | undefined>();
  const [isAmountError, setIsAmountError] = useState(true);
  const [isNumberError, setIsNumberError] = useState(true);
  const [isMobileNumberVerified, setIsMobileNumberVerified] = useState(false);

  return (
    <>
      <div className="header font-semibold p-1 text-center">Send Money</div>
      <HorizontalLineSaperator />
      <div className="flex flex-col p-1 ">
        <InputWithLabel
          placeHolderText="0.00"
          isPrice={true}
          labelText="Amount"
          className=""
          inputChangeHandler={(e) => {
            setAmount(e.target.value);
            if (!Number(e.target.value)) {
              setIsAmountError(true);
            } else {
              setIsAmountError(false);
            }
          }}
          inputValue={amount}
        />
        {amount && isAmountError ? (
          <p className="text-red-500 text-xs">Enter valid amount</p>
        ) : (
          ""
        )}
        <InputWithLabel
          placeHolderText="Enter Mobile Number."
          isPrice={false}
          labelText="Mobile Number"
          className=""
          inputChangeHandler={(e) => {
            setMobileNumber(e.target.value);
            if (!Number(e.target.value)) {
              setIsNumberError(true);
            } else {
              setIsNumberError(false);
            }
          }}
          inputValue={mobileNumber}
        />
        {mobileNumber && isNumberError ? (
          <p className="text-red-500 text-xs">Enter valid mobile number</p>
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex justify-center my-2 ">
        <button
          className="bg-blue-400 hover:bg-blue-500 p-1 rounded-md duration-200 disabled:bg-blue-300 disabled:text-gray-600 disabled:cursor-not-allowed"
          onClick={async () => {
            // window.location.href = selectdBank?.redirectUrl || "";
            const rec = await p2pTransfer(Number(mobileNumber), Number(amount));
            console.log(rec);
          }}
          disabled={isAmountError || isNumberError ? true : false}
        >
          Send Money
        </button>
      </div>
    </>
  );
}
