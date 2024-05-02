import AddMoney from "../../../components/AddMoney";
import Card from "../../../components/Card";
import PageHeader from "../../../components/PageHeader";

export default function () {
  return (
    <div className="w-full bg-purple-100">
      <PageHeader header={"Transfer"} />
      <div className="m-1">
        <div className="grid grid-cols-2 gap-1">
          <Card className="h-full">
            <AddMoney />
          </Card>
          <div className="grid grid-flow-row gap-1 ">
            <Card className="">
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </Card>
            <Card className=" ">
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
