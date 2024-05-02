import DropdownWithLabel from "./DropdownWithLabel";
import InputWithLabel from "./InputWithLabel";

export default function () {
  return (
    <>
      <div className="header font-semibold p-1">Add Money</div>
      <div className="flex flex-col p-1">
        <InputWithLabel
          placeHolderText="0.00"
          isPrice={true}
          labelText="Price"
        />
        <DropdownWithLabel />
      </div>
      <div className="w-full flex justify-center my-2 ">
        <button className="bg-blue-400 hover:bg-blue-500 p-1 rounded-md duration-200">
          Add Money
        </button>
      </div>
    </>
  );
}
