import AddMoney from "../../../components/transfer/AddMoney";
import Balance from "../../../components/transfer/Balance";
import Card from "../../../components/Card";
import PageHeader from "../../../components/PageHeader";
import RecentTransfer from "../../../components/transfer/RecentTransfer";
// import TransectionHistory from "../../../components/transfer/RecentTransfer";

export default function () {
  return (
    <div className="w-full bg-purple-100">
      <PageHeader header={"Transfer"} />
      <div className="m-1">
        <div className="grid grid-cols-2 gap-1">
          <Card className="h-full max-h-60">
            <AddMoney />
          </Card>
          <div className="grid grid-flow-row gap-1 ">
            <Card className="">
              <Balance />
            </Card>
            <Card className=" ">
              <RecentTransfer />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
