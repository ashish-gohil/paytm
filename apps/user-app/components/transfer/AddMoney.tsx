import SelectBankDropdown from "../SelectBankDropdown";
import HorizontalLineSaperator from "../HorizontalLineSaperator";
import PriceInput from "../PriceInput";
import { getBankOptions } from "../../app/api/action/getBankOptions";
import AddMoneyButton from "../AddMoneyButton";

// export const provider = {
//   BOB: "bob",
//   ICICI: "icici",
//   SBI: "sbi",
// };
// export type BankOption = {
//   value: string;
//   name: string;
//   redirectUrl: string;
// };

export default async function () {
  const allBankOptions = await getBankOptions();

  return (
    <>
      <div className="header font-semibold p-1">Add Money</div>
      <HorizontalLineSaperator />
      <div className="flex flex-col p-1 ">
        <PriceInput className="" placeHolderText="0.00" labelText="Price" />
        <SelectBankDropdown
          title={"Select Bank"}
          allBankOptions={allBankOptions}
        />
      </div>
      <div className="w-full flex justify-center my-2 ">
        <AddMoneyButton allBanksObj={allBankOptions} />
      </div>
    </>
  );
}
