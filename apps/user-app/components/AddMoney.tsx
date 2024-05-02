import DropdownWithLabel from "./DropdownWithLabel";
import InputWithLabel from "./InputWithLabel";

export default function () {
  return (
    <div>
      <div>Add Money</div>
      <InputWithLabel placeHolderText="0.00" isPrice={true} labelText="Price" />
      <DropdownWithLabel />
    </div>
  );
}
