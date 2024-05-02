"use client";
import { useState } from "react";
import HomeIcon from "./HomeIcon";
import SidebarItem from "./SidebarItem";
import TransectionIcon from "./TransectionIcon";
import TransferIcon from "./TransferIcon";

type ActiveTab = "Home" | "Transfer" | "Transaction";
export default function () {
  const [activeTab, setActiveTab] = useState<ActiveTab>("Home");
  return (
    <div className="bg-purple-200 w-[20%] h-screen">
      <div className="flex flex-col px-1 justify-center items-center pt-10">
        <SidebarItem
          itemName="Home"
          isActive={activeTab === "Home"}
          onClick={() => {
            setActiveTab("Home");
          }}
        >
          <HomeIcon />
        </SidebarItem>
        <SidebarItem
          itemName="Transfer"
          isActive={activeTab === "Transfer"}
          onClick={() => {
            setActiveTab("Transfer");
          }}
        >
          <TransferIcon />
        </SidebarItem>
        <SidebarItem
          itemName="Transaction"
          isActive={activeTab === "Transaction"}
          onClick={() => {
            setActiveTab("Transaction");
          }}
        >
          <TransectionIcon />
        </SidebarItem>
      </div>
    </div>
  );
}
