import { ReactNode } from "react";

export default function ({
  children,
  itemName,
  isActive,
  onClick,
}: {
  children: ReactNode;
  itemName: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex flex-row justify-items-start items-center p-1  w-full pl-2 ${isActive ? "bg-slate-400" : ""}`}
      onClick={onClick}
    >
      <div className="pr-1">{children}</div>
      <div className="">{itemName}</div>
    </div>
  );
}
