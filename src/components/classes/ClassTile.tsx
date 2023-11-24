import RunnerIcon from "@/assets/runner-icon.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
const classTile = () => {
  return (
    <div className="flex w-full grow flex-col mx-auto pl-10 pr-10 pt-11 pb-12 border-2 border-solid border-stone-800 max-md:mt-10 max-md:px-5">
      <img
        loading="lazy"
        src={RunnerIcon}
        className="aspect-[0.82] object-contain object-center w-[60px] stroke-[3px] stroke-rose-600 overflow-hidden max-w-full self-start"
      />
      <div className="text-left text-stone-800 text-opacity-50 text-xl font-bold leading-6 tracking-widest self-stretch whitespace-nowrap mt-28 max-md:mt-10">
        GYM
      </div>
      <div className="text-left text-stone-800 text-3xl font-bold leading-10 tracking-widest uppercase self-stretch whitespace-nowrap mt-5">
        Morbi sodales
      </div>
      <hr className="aspect-[263] object-contain object-center w-full stroke-[1px] stroke-neutral-200 overflow-hidden self-stretch mt-8" />
      <div className="self-stretch flex justify-between gap-5 mt-12 mb-1.5 max-md:mt-10">
        <div className="text-stone-800 text-center text-xl font-bold leading-6 tracking-widest">
          MORE INFO
        </div>
        <img
          loading="lazy"
          src={ArrowIcon}
          className="aspect-[3.15] object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
        />
      </div>
    </div>
  );
};

export default classTile;
