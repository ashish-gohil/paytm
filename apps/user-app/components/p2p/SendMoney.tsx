"use client";
import { useState } from "react";
import HorizontalLineSaperator from "../HorizontalLineSaperator";
import { p2pTransfer } from "../../app/api/action/p2pTransaction";
import PopUp from "../Popup";

export default function () {
  const [amount, setAmount] = useState<string | undefined>();
  const [mobileNumber, setMobileNumber] = useState<string | undefined>();
  const [isAmountError, setIsAmountError] = useState(true);
  const [isNumberError, setIsNumberError] = useState(true);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isMobileNumberVerified, setIsMobileNumberVerified] = useState(false);
  const sendMoneyButtonHandler = async () => {
    // window.location.href = selectdBank?.redirectUrl || "";
    try {
      const rec = await p2pTransfer(Number(mobileNumber), Number(amount));
      console.log(rec);
      setMessage("Transfer Successfull!");
      setIsSuccess(true);
    } catch (err: any) {
      setMessage(err?.message);
      setIsSuccess(false);
    } finally {
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <div className="header font-semibold p-1 text-center">Send Money</div>
      <HorizontalLineSaperator />
      <div className="flex flex-col p-1 ">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Amount
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">₹</span>
          </div>

          <input
            type="text"
            name="price"
            id="price"
            className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-purple-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6`}
            placeholder={"0.00"}
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              if (!Number(e.target.value)) {
                setIsAmountError(true);
              } else {
                setIsAmountError(false);
              }
            }}
          />
        </div>
        {amount && isAmountError ? (
          <p className="text-red-500 text-xs">Enter valid amount</p>
        ) : (
          ""
        )}{" "}
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Mobile Number
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">₹</span>
        </div> */}

          <input
            type="text"
            name="price"
            id="mobileNumber"
            className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-purple-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6`}
            placeholder={"Enter Mobile Number."}
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
              if (!Number(e.target.value)) {
                setIsNumberError(true);
              } else {
                setIsNumberError(false);
              }
            }}
          />
        </div>
        {mobileNumber && isNumberError ? (
          <p className="text-red-500 text-xs">Enter valid mobile number</p>
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex justify-center my-2 ">
        <button
          className="bg-blue-400 hover:bg-blue-500 p-1 rounded-md duration-200 disabled:bg-blue-300 disabled:text-gray-600 disabled:cursor-not-allowed"
          onClick={sendMoneyButtonHandler}
          disabled={isAmountError || isNumberError ? true : false}
        >
          Send Money
        </button>
      </div>
      {isModalOpen ? (
        <PopUp
          message={message}
          isSuccess={isSuccess}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        ""
      )}
    </>
  );
}
