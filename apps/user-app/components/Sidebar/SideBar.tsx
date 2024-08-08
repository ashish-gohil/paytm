"use client";
// import HomeIcon from "../Icons/HomeIcon";
import SidebarItem from "./SidebarItem";
import TransferIcon from "../Icons/TransferIcon";
import { ActiveTab } from "../../app/dashboard/layout";
import P2PTransferIcon from "../Icons/P2PTransferIcon";

interface SidebarParams {
  activeTab: ActiveTab;
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (arg0: ActiveTab) => void;
}
export default function ({ activeTab, setActiveTab }: SidebarParams) {
  return (
    <div className="bg-purple-200 w-[20%] h-screen">
      <div className="flex flex-col px-1 justify-center items-center pt-10">
        {/* <SidebarItem
          itemName="Home"
          isActive={activeTab === "Home"}
          onClick={() => {
            setActiveTab("Home");
          }}
        >
          <HomeIcon />
        </SidebarItem> */}
        <SidebarItem
          itemName="Transfer"
          isActive={activeTab === "Bank Transfer"}
          onClick={() => {
            setActiveTab("Bank Transfer");
          }}
        >
          <TransferIcon />
        </SidebarItem>
        {/* <SidebarItem
          itemName="Transaction"
          isActive={activeTab === "Transaction"}
          onClick={() => {
            setActiveTab("Transaction");
          }}
        >
          <TransectionIcon />
        </SidebarItem> */}
        <SidebarItem
          itemName="P2PTransfer"
          isActive={activeTab === "P2PTransfer"}
          onClick={() => {
            setActiveTab("P2PTransfer");
          }}
        >
          <P2PTransferIcon />
        </SidebarItem>
      </div>
    </div>
  );
}
