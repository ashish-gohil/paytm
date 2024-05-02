import Link from "next/link";
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
    <Link
      href={`/dashboard/${itemName !== "Home" ? itemName.toLowerCase() : ""}`}
      className={`cursor-pointer flex flex-row justify-items-start items-center p-1  w-full pl-2 ${isActive ? "bg-slate-400" : ""}`}
      onClick={onClick}
    >
      <div className="pr-1">{children}</div>
      <div className="">{itemName}</div>
    </Link>
  );
}
