export default function PrimaryButton({ children, onClick }) {
  return (
    <>
    <div className="pt-[32px]">
      <div onClick={onClick} className="flex justify-center items-center mx-auto gap-1 rounded-sm h-[42px] w-[260px] bg-black cursor-pointer">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          className="text-white"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
        <h3 className="text-white text-center text-[14px] font-graphik font-normal leading-[20px]">
          ADD AN ITEM TO SELL
        </h3>
      </div>
      </div>
    </>
  );
}
