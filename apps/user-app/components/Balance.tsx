import HorizontalLineSaperator from "./HorizontalLineSaperator";

export default function () {
  return (
    <>
      <div className="header font-semibold p-1">Balances</div>
      <div className="flex flex-col">
        <HorizontalLineSaperator />
        <div className="flex p-1 justify-between">
          <div className="">Total Balance</div>
          <div className="pl-1">{`${100} ₹`}</div>
        </div>
        <HorizontalLineSaperator />

        <div className="flex p-1 justify-between">
          <div className="">Locked Balance</div>
          <div className="pl-1">{`${0} ₹`}</div>
        </div>
        <HorizontalLineSaperator />

        <div className="flex p-1 justify-between">
          <div className="">Available Balance</div>
          <div className="pl-1">{`${100} ₹`}</div>
        </div>
        <HorizontalLineSaperator />
      </div>
    </>
  );
}
