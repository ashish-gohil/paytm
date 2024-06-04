"use client";
import { BankOption } from "./transfer/AddMoney";
// import { Provider } from "@prisma/client";
import { Provider } from "./transfer/AddMoney";
type FuncArg = {
  title?: String;
  options: BankOption[];
  defaultSelected?: String;
  onChangeOption: (val: Provider) => void;
};

export default function ({
  title,
  options,
  defaultSelected,
  onChangeOption,
}: FuncArg) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {title || "Select Option"}
      </label>
      <select
        id="banks"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        onChange={(e) => {
          // for (var enumMember in Object.keys(Provider)) {
          //   console.log(Provider);
          //   if (enumMember === e.target.value) {
          //     // onChangeOption(Provider[index]);
          //     onChangeOption(Provider.BOB);
          //   }
          // }
          switch (e.target.value) {
            case Provider.BOB:
              console.log(e.target.value);
              onChangeOption(Provider.BOB);
              break;
            case Provider.ICICI:
              onChangeOption(Provider.ICICI);
              break;
            case Provider.SBI:
              onChangeOption(Provider.SBI);
              break;
            default:
              onChangeOption(Provider.BOB);
          }
        }}
      >
        {options.map((op) => (
          <option value={op.value}>{op.name}</option>
        ))}
      </select>
    </>
  );
}
