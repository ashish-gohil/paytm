import GetPaytmButton from "../components/GetPaytmButton";
import Image from "next/image";
export default function Page(): JSX.Element {
  return (
    <div className="block relative">
      <div className="block sm:ml-[7%] sm:mr-[22%] sm:p-[7%] sm:mb-[25rem] bg-sky-200  sm:rounded-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between w-full">
          <div className="grid grid-flow-row-dense px-10 py-10 w-full items-center justify-center relative overflow-visible">
            <div className=" p-1">
              <p className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl  text-center sm:text-left text-gray-800">
                Quick, easy <br />
                Safe <br /> payments
              </p>
            </div>
            <div className="pt-5">
              <p className="text-center sm:text-left text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light font-sans">
                Pay, get paid, grow a business, and more. Join the tens of
                millions of people on PayTm.
              </p>
            </div>
            <div className="flex justify-center items-center pt-5 sm:justify-start">
              <GetPaytmButton />
            </div>
          </div>
          <div className="relative w-full sm:w-[160%] ">
            <Image
              className="sm:rounded-[16px]"
              alt="'Image"
              src={
                "https://images.ctfassets.net/gkyt4bl1j2fs/1h5eef6Hd2rJIt5aB0hhTn/862a378332b917d1d375329481044d67/home-hero-mobile.png?w=750&h=500&q=50&fm=webp&bg=transparent"
              }
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
