"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "./Logo";

export default function () {
  const session = useSession();
  console.log(session?.status);
  return (
    <div className="flex flex-row items-center bg-blue-50 p-2 justify-between h-13">
      <div>
        <Logo />
      </div>
      <div className="flex flex-row justify-between items-center">
        {session?.status === "authenticated" ? (
          <>
            <div className="flex w-8 h-8 p-2 bg-orange-300 rounded-full items-center justify-center">
              <p>{session?.data?.user?.email?.[0]?.toUpperCase()}</p>
            </div>
            <div className="p-2">
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                }}
              >
                LogOut
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="p-2">
              <button
                onClick={() => {
                  signIn(undefined, { callbackUrl: "/dashboard" });
                }}
              >
                UserLogin
              </button>
            </div>
            <div className="p-2">
              <button onClick={() => {}}>MerchentLogin</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
