// type FuncArg = {
//   title?: string;
//   options:
//   selectedBank? : any;
//   // eslint-disable-next-line no-unused-vars
//   onChangeOption: (val:any) => void;
// };
"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../app/api/action/lib/hooks";
import { setSelectedBank } from "../app/api/action/lib/features/bankOptionsSlice";

export default function ({ title, allBankOptions }: any) {
  const dispatch = useAppDispatch();
  const [selectedBank, setSelectedBankOption] = useState(allBankOptions[0]?.id);
  useEffect(() => {
    dispatch(setSelectedBank(allBankOptions[0]?.id));
  }, []);
  const changeBankOptionHandler = (e: any) => {
    console.log(e.target);
    setSelectedBankOption(e.target.value);
    dispatch(setSelectedBank(e.target.value));
  };
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {title || "Select Option"}
      </label>
      <select
        id="banks"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        value={selectedBank}
        defaultValue={allBankOptions[0]?.id}
        onChange={changeBankOptionHandler}
      >
        {allBankOptions.map((op: any) => (
          <option value={op?.id}>{op?.providerName}</option>
        ))}
      </select>
    </>
  );
}
