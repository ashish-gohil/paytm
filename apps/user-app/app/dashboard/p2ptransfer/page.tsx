// import AddMoney from "../../../components/transfer/AddMoney";
// import Balance from "../../../components/transfer/Balance";
import Card from "../../../components/Card";
import PageHeader from "../../../components/PageHeader";
// import RecentTransfer from "../../../components/transfer/RecentTransfer";
// import TransectionHistory from "../../../components/transfer/RecentTransfer";
import SendMoney from "../../../components/p2p/SendMoney";
import RecentP2pTransfer from "../../../components/p2p/recentP2pTransfer";

export default function () {
  return (
    <div className="w-full bg-purple-100">
      <PageHeader header={"P2P Transfer"} />
      <div className="m-1">
        <div className="grid grid-cols-2 gap-1">
          <Card className="h-full max-h-60 max-w-[900px]">
            <SendMoney />
          </Card>
          <div className="grid grid-flow-row gap-1 ">
            <Card className="">
              <RecentP2pTransfer />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
