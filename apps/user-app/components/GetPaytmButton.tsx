"use client";
import { useRouter } from "next/navigation";
import PaytmInitials from "./PaytmInitials";

export default function () {
  const router = useRouter();
  return (
    <button
      className="bg-blue-500 p-2 rounded-lg flex flex-row justify-center items-center   hover:translate-y-0.5 shadow-slate-600 shadow-lg relative hover:shadow-none duration-200"
      onClick={() => {
        router.push("/signup");
      }}
    >
      <div className=" justify-center items-center">
        <PaytmInitials />
      </div>
      <p className="pl-1 items-center justify-center font-extrabold text-gray-800">
        Get Paytm
      </p>
    </button>
  );
}
