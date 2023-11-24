import CalcIcon from "@/assets/calculator-icon.svg";

const BmiCalculator = () => {
  return (
    <div className="bg-[#2B2024] self-center z-[1] w-full -mt-28 pl-20 pt-11 pb-12 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:mt-10">
            <div className="text-neutral-50 text-5xl font-black leading-[58px] uppercase">
              <span>Body Mass</span>
              <div className="flex">
                <span>Index </span>
                <div className="ml-6 text-[#FD0054] text-[24px] leading-loose">
                  <span className="font-semibold">CALCULATE BMI</span>
                  <hr className="border-1 border-[#FD0054] w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <div className="flex w-[214px] max-w-full items-stretch justify-between gap-5 self-start">
              <div className="flex items-stretch justify-between gap-2.5">
                <input
                  type="radio"
                  className="aspect-square object-contain object-center w-5 fill-white opacity-50 overflow-hidden shrink-0 max-w-full"
                />
                <label className="text-neutral-50 text-xl font-bold leading-6 tracking-widest grow whitespace-nowrap self-start">
                  IMPERIAL
                </label>
              </div>
              <div className="flex items-stretch justify-between gap-2.5">
                <input
                  type="radio"
                  className="aspect-square object-contain object-center w-5 fill-white opacity-50 overflow-hidden shrink-0 max-w-full"
                />
                <label className="text-neutral-50 text-xl font-bold leading-6 tracking-widest grow whitespace-nowrap self-start">
                  METRIC
                </label>
              </div>
            </div>
            <div className="flex w-full items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="bg-zinc-50 bg-opacity-20 flex grow basis-[0%] flex-col">
                    <input
                      type="text"
                      placeholder="FIT"
                      className="text-neutral-50 text-2xl font-bold leading-7 pt-5 pb-3.5 px-3.5 opacity-50 whitespace-nowrap bg-transparent focus-visible:outline-0"
                    />
                  </div>
                  <div className="bg-zinc-50 bg-opacity-20 flex grow basis-[0%] flex-col">
                    <input
                      type="text"
                      placeholder="IN"
                      className="text-neutral-50 text-2xl font-bold leading-7 pt-5 pb-3.5 px-4 opacity-50 whitespace-nowrap bg-transparent focus-visible:outline-0"
                    />
                  </div>
                  <div className="text-neutral-50 text-2xl font-bold leading-7 tracking-widest">
                    HEIGHT
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="bg-zinc-50 bg-opacity-20 flex grow basis-[0%] flex-col col-span-2">
                    <input
                      type="text"
                      placeholder="KG"
                      className="text-neutral-50 text-2xl font-bold leading-7 pt-5 pb-3.5 px-3.5 opacity-50 whitespace-nowrap bg-transparent focus-visible:outline-0"
                    />
                  </div>
                  <div className="text-neutral-50 text-2xl font-bold leading-7 tracking-widest whitespace-nowrap">
                    WEIGHT
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-rose-600 flex justify-between gap-3 pl-10 pr-10 py-4 max-md:px-5 max-md:mt-16">
                  <div className="text-neutral-50 text-2xl font-bold leading-7 tracking-widest">
                    CALCULATE
                  </div>
                  <img
                    loading="lazy"
                    src={CalcIcon}
                    className="aspect-square object-contain object-center w-[20PX] fill-neutral-50 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    alt="calculator"
                  />
                </div>
                <div className="text-neutral-50 text-2xl font-bold leading-7 tracking-widest"></div>
              </div>
            </div>
            <div className="flex w-[522px] max-w-full items-stretch justify-between gap-5 mt-6 self-start max-md:flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
