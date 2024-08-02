"use client";

import { useState } from "react";
import { useAppDispatch } from "../app/api/action/lib/hooks";
import { setAmount } from "../app/api/action/lib/features/transferSlice";

export default function ({
  labelText,
  placeHolderText = "",
  className = "",
}: {
  labelText: string;
  placeHolderText: string;
  className?: string;
}) {
  const [amount, setPrice] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const setAmountHandler = (e: any) => {
    setPrice(e.target.value);
    dispatch(setAmount(Number(e.target.value)));
    if (!Number(e.target.value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <>
      <div className={className}>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {labelText}
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
            placeholder={placeHolderText}
            value={amount}
            onChange={setAmountHandler}
          />
        </div>
      </div>
      {amount && isError ? (
        <p className="text-red-500 text-xs">Enter valid number</p>
      ) : (
        ""
      )}
    </>
  );
}
