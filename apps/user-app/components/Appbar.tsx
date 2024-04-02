import logo from "../public/paytmLogo.svg";
import Logo from "./Logo";

export default function () {
  return (
    <div className="flex flex-row items-center bg-blue-50 p-2 justify-between">
      <div>
        <Logo />
      </div>
      <div className="flex flex-row justify-between">
        <div className="p-2">UserLogin</div>
        <div className="p-2">MerchentLogin</div>
      </div>
    </div>
  );
}
