// import AddMoney from "../../../components/transfer/AddMoney";
// import Balance from "../../../components/transfer/Balance";
import Card from "../../../components/Card";
import PageHeader from "../../../components/PageHeader";
// import RecentTransfer from "../../../components/transfer/RecentTransfer";
// import TransectionHistory from "../../../components/transfer/RecentTransfer";
import SendMoney from "../../../components/p2p/SendMoney";

export default function () {
  return (
    <div className="w-full bg-purple-100">
      <PageHeader header={"P2P Transfer"} />
      <div className="m-1 flex justify-center">
        <Card className="h-full max-h-60 max-w-[900px]">
          <SendMoney />
        </Card>
      </div>
    </div>
  );
}
