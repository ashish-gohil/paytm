export default function ({
  labelText,
  isPrice = false,
  placeHolderText = "",
  className='',
  inputValue,
  inputChangeHandler
  
}: {
  labelText: string;
  isPrice: boolean;
  placeHolderText: string;
  className? : string;
  inputValue : string | number | undefined;
inputChangeHandler: (e:React.ChangeEvent<HTMLInputElement>)=>void
}) {
  return (
    <div className={className}>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelText}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {isPrice ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">₹</span>
          </div>
        ) : (
          ""
        )}
        <input
          type="text"
          name="price"
          id="price"
          className={`block w-full rounded-md border-0 py-1.5 ${isPrice ? "pl-7" : "pl-1"} pr-1 text-gray-900 ring-purple-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6`}
          placeholder={placeHolderText}
          value={inputValue}
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
}
