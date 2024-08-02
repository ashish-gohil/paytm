import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Appbar from "../components/Appbar";
import { Providers } from "./provider";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paytm like financial app",
  description:
    "App is used to transfer money to banks and receive money from contacts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Providers>
            <Appbar />
            {children}
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
