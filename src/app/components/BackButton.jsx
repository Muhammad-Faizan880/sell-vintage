export default function BackButton() {
  return (
    <>
      <div className="flex justify-start pt-[20px] px-[20px]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <h3 className="text-[#1c1c1c] font-graphik font-normal text-[14px] leading-[18px] mt-[1px]">
          Back to shop
        </h3>
      </div>
    </>
  );
}
