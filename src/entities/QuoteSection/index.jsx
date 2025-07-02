export default function QuoteSection() {
  return (
    <div className="bg-gray-100 mt-24">
      <div className="page-width flex flex-col items-center justify-center py-16 h-full relative z-10 ">
        <div
          className="absolute page-width text-gray-200 text-left font-montserrat font-bold text-[150px] opacity-[0.12]"
          style={{ textShadow: '2px 2px 4px rgb(3, 7, 18)' }}
        >
          QUOTE
        </div>
        <div className="flex flex-col gap-1 z-10 w-full">
          <p className="text-gray-900 text-[18px] lg:text-[20px] text-right font-montserrat font-bold">
            The only limit to our realization of tomorrow is our doubts of
            today.
          </p>
          <h4 className="font-nunito text-gray-900 font-[500] px-4 py-2 rounded-lg text-[14px] lg:text-[16px] text-right">
            — Franklin D. Roosevelt
          </h4>
        </div>
      </div>
    </div>
  );
}
