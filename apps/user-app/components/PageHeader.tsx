export default function ({ header }: { header: string }) {
  return (
    <>
      <div className="p-5">
        <p className="font-extrabold text-purple-700 text-3xl">{header}</p>
      </div>
      <div className="w-full bg-purple-200 h-[2px]"></div>
    </>
  );
}
