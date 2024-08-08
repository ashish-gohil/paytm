"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SideBar from "../../components/Sidebar/SideBar";

export type ActiveTab =
  | "Home"
  | "Bank Transfer"
  | "Transaction"
  | "P2PTransfer";

export default function ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();
  console.log("path", pathname);
  const [activeTab, setActiveTab] = useState<ActiveTab>(() => {
    const pathName = pathname.split("/").at(-1);
    switch (pathName) {
      case "transfer":
        return "Bank Transfer";
      case "home":
        return "Home";
      case "p2ptransfer":
        return "P2PTransfer";

      case "transaction":
        return "Transaction";
      default:
        return "Home";
    }
  });
  return (
    <div className="flex flex-row">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {children}
    </div>
  );
}
