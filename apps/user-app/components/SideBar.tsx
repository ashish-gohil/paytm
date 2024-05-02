"use client";
import HomeIcon from "./HomeIcon";
import SidebarItem from "./SidebarItem";
import TransectionIcon from "./TransectionIcon";
import TransferIcon from "./TransferIcon";
import P2PTransfer from "./P2PTransfer";
import { ActiveTab } from "../app/dashboard/layout";

interface SidebarParams {
  activeTab: ActiveTab;
  setActiveTab: (arg0: ActiveTab) => void;
}
export default function ({ activeTab, setActiveTab }: SidebarParams) {
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
        <SidebarItem
          itemName="P2PTransfer"
          isActive={activeTab === "P2PTransfer"}
          onClick={() => {
            setActiveTab("P2PTransfer");
          }}
        >
          <P2PTransfer />
        </SidebarItem>
      </div>
    </div>
  );
}
