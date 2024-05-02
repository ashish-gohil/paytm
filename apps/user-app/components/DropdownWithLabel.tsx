"use client";
export default function () {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option selected>Choose a Bank</option>
        <option value="BOB">Bank of Baroda</option>
        <option value="SBI">State Bank of India</option>
        <option value="ICICI">ICICI Bank</option>
      </select>
    </>
  );
}
