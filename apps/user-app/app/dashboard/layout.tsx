import SideBar from "../../components/SideBar";

export default function ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
