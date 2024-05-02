import HorizontalLineSaperator from "./HorizontalLineSaperator";

export default function () {
  return (
    <>
      <div className="header font-semibold p-1">Recent Transfer</div>
      <HorizontalLineSaperator />

      <div className="flex flex-col">
        <div className="flex p-1 justify-between items-center">
          <div className="flex flex-col ">
            <div className="text-xs">{"Received"}</div>
            {/* //sent/received/processing */}
            <div className="text-[10px]">{"Thur May 02 2024"}</div>
          </div>
          <div className="pl-1">{`${"+"}${100} ₹`}</div>
        </div>
        <div className="flex p-1 justify-between items-center">
          <div className="flex flex-col ">
            <div className="text-xs">{"Received"}</div>
            {/* //sent/received/processing */}
            <div className="text-[10px]">{"Thur May 02 2024"}</div>
          </div>
          <div className="pl-1">{`${"+"}${100} ₹`}</div>
        </div>
        <div className="flex p-1 justify-between items-center">
          <div className="flex flex-col ">
            <div className="text-xs">{"Received"}</div>
            {/* //sent/received/processing */}
            <div className="text-[10px]">{"Thur May 02 2024"}</div>
          </div>
          <div className="pl-1">{`${"+"}${100} ₹`}</div>
        </div>
      </div>
    </>
  );
}
