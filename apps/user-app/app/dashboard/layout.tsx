"use client";
import { useState } from "react";
import SideBar from "../../components/Sidebar/SideBar";

export type ActiveTab = "Home" | "Transfer" | "Transaction" | "P2PTransfer";

export default function ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [activeTab, setActiveTab] = useState<ActiveTab>("Home");
  return (
    <div className="flex flex-row">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {children}
    </div>
  );
}
