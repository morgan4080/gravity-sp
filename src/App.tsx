import React from "react";
import ContactInfo from "@/components/navigation/contact/ContactInfo.tsx";
import NavbarMd from "@/components/navigation/navbar/NavbarMd.tsx";
import BmiCalculator from "@/components/calculator/BmiCalculator.tsx";
import ClassTile from "@/components/classes/ClassTile.tsx";
import ArrowIcon from "@/assets/arrow-icon.svg";
import RunnerIcon from "@/assets/runner-icon.svg";

function App() {
  return (
    <main className="relative overflow-hidden">
      <div className="bg-[#94103C]">
        <header className="max-w-7xl w-full mx-auto z-10">
          <ContactInfo
            address={"123 Street"}
            call={"0720732423"}
            email={"info@gravitysports.com"}
          />
          <NavbarMd
            appName={"GRAVITY SPORTS"}
            menuItems={[
              {
                name: "HOME",
                link: "/",
                current: true,
              },
              {
                name: "ABOUT",
                link: "/",
                current: false,
              },
              {
                name: "PORTFOLIO",
                link: "/",
                current: false,
              },
              {
                name: "CLASSES",
                link: "/",
                current: false,
              },
              {
                name: "BLOG",
                link: "/",
                current: false,
              },
              {
                name: "CONTACTS",
                link: "/",
                current: false,
              },
            ]}
          />
        </header>
      </div>
      <div className="bg-[#94103C] self-stretch flex w-full flex-col items-center pb-12 max-md:max-w-full">
        <div className="flex flex-col items-center mb-20 w-full">
          <div className="flex w-[518px] max-w-full flex-col items-center px-14 py-12 border-[10px] border-solid border-rose-600 max-md:mt-10 max-md:px-5 scale-75">
            <div className="text-neutral-50 text-5xl font-bold leading-[61px] opacity-80 whitespace-nowrap mt-8 max-md:text-4xl max-md:leading-[54px]">
              MAKE YOUR
            </div>
            <div className="text-neutral-50 text-[200px] font-bold leading-[243px] self-stretch mt-16 max-md:mt-10">
              BODY
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/22577d66-3035-4151-a862-196d129f135b?apiKey=7df16b57401b4ba9b895e2a4705e64d0&"
              className="aspect-[1.36] object-contain object-center w-[57px] overflow-hidden max-w-full ml-24 mt-4 mb-8 self-start max-md:ml-2.5"
              alt="Introduction"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-12">
          <BmiCalculator />
          <svg
            className="max-w-5xl mx-auto opacity-40"
            viewBox="0 0 1410 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.15"
              d="M705 35C1094.36 35 1410 27.165 1410 17.5C1410 7.83502 1094.36 0 705 0C315.639 0 0 7.83502 0 17.5C0 27.165 315.639 35 705 35Z"
              fill="#2B2024"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto max-md:px-5">
        <div className="py-24">
          <div className="self-center flex items-center w-[200px] max-w-full gap-4 mx-auto">
            <hr className="aspect-[22.5] object-contain object-center w-[45px] border-[2px] border-rose-600 overflow-hidden shrink-0 max-w-full" />
            <div className="text-rose-600 text-3xl font-bold leading-10 tracking-widest self-stretch grow whitespace-nowrap">
              OUR CLASSES
            </div>
          </div>
          <div className="mx-auto text-stone-800 text-center text-6xl font-bold leading-[73px] uppercase self-center max-w-[496px] mt-14 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
            Sed fringilla, quam consectetur ultrices{" "}
          </div>

          <div className="flex flex-col md:grid md:grid-cols-4 gap-8 mt-28">
            <ClassTile />
            <ClassTile />
            <ClassTile />
            <ClassTile />
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-12 py-12">
        <div className="my-12">
          <div className="bg-[#2B2024]">
            <div className="flex w-full flex-col items-stretch px-5 py-12 md:p-24">
              <div className="w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[84%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:max-w-full max-md:mt-8">
                      <div className="flex items-center gap-4">
                        <hr className="aspect-[22.5] object-contain object-center w-[45px] border-[2px] border-rose-600 overflow-hidden shrink-0 max-w-full" />
                        <div className="text-rose-600 text-3xl font-bold leading-10 tracking-widest self-stretch grow whitespace-nowrap">
                          ABOUT US
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-neutral-50 text-6xl font-bold leading-[73px] tracking-[3.5999999046325684px] uppercase self-stretch mt-8 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                          Nulla id accumsan erat
                        </div>
                        <hr className="aspect-[47] object-contain object-center w-[94px] border-[2px] border-rose-600 overflow-hidden shrink-0 max-w-full mt-36 max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-neutral-50 text-2xl leading-7 tracking-widest opacity-50 mt-8 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consetetur .
              </div>
              <div className="flex w-full items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <img
                      loading="lazy"
                      src={RunnerIcon}
                      className="w-[42px] stroke-[2px] stroke-rose-600 overflow-hidden shrink-0 max-w-full"
                      alt="runner"
                    />
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-neutral-50 text-left text-xl font-bold leading-6 tracking-widest whitespace-nowrap">
                        GYM
                      </div>
                      <div className="text-neutral-50 text-3xl font-bold leading-10 tracking-widest uppercase whitespace-nowrap mt-2">
                        Morbi sodales
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <hr className="w-full border-[1px] border-[#FD0054] overflow-hidden grow basis-[0%]" />
                  </div>
                  <div className="flex justify-between gap-5 mt-6 pr-px max-md:max-w-full max-md:justify-center">
                    <div className="text-neutral-50 text-xl leading-6 tracking-widest opacity-50 mt-1.5">
                      consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                    </div>
                    <div className="bg-rose-600 self-stretch flex basis-[0%] flex-col items-stretch px-3 py-4">
                      <div className="text-neutral-50 text-center text-xl font-bold leading-6 tracking-widest whitespace-nowrap">
                        READ
                      </div>
                      <div className="text-neutral-50 text-center text-xl font-bold leading-6 tracking-widest whitespace-nowrap mt-1.5">
                        MORE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <img
                      loading="lazy"
                      src={RunnerIcon}
                      className="w-[42px] stroke-[2px] stroke-rose-600 overflow-hidden shrink-0 max-w-full"
                      alt="runner"
                    />
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-neutral-50 text-left text-xl font-bold leading-6 tracking-widest whitespace-nowrap">
                        GYM
                      </div>
                      <div className="text-neutral-50 text-3xl font-bold leading-10 tracking-widest uppercase whitespace-nowrap mt-2">
                        hendrerit id
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <hr className="w-full border-[1px] border-[#FD0054] overflow-hidden grow basis-[0%]" />
                  </div>
                  <div className="flex justify-between gap-5 mt-6 pr-px max-md:max-w-full max-md:justify-center">
                    <div className="text-neutral-50 text-xl leading-6 tracking-widest opacity-50 mt-1.5">
                      consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                    </div>
                    <div className="bg-rose-600 self-stretch flex basis-[0%] flex-col items-stretch px-3 py-4">
                      <div className="text-neutral-50 text-center text-xl font-bold leading-6 tracking-widest whitespace-nowrap">
                        READ
                      </div>
                      <div className="text-neutral-50 text-center text-xl font-bold leading-6 tracking-widest whitespace-nowrap mt-1.5">
                        MORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-6">
          <div className="absolute bg-[#FD0054] flex flex-col w-full ml-auto pl-16 pr-20 pt-8 pb-6 bottom-44 -right-5 md:-right-1/3">
            <div className="text-neutral-50 text-5xl font-bold leading-[58px] max-w-[326px] max-md:text-4xl max-md:leading-[54px]">
              WANT TO PRACTICE <br /> AT HOME ?
            </div>
            <div className="mt-8 pr-9 max-md:pr-5">
              <div className="flex items-center gap-4 text-stone-800 text-center text-2xl font-bold leading-7 tracking-widest mt-1">
                CLICK HERE
                <img loading="lazy" src={ArrowIcon} alt="click-arrow" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 h-full w-full">
            <div className="bg-[#D3064A] col-span-3 min-h-[500px]" />
            <div className="col-span-2 min-h-[500px]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto py-24">
        <div className="self-center flex items-center w-[200px] max-w-full gap-4 mx-auto">
          <hr className="aspect-[22.5] object-contain object-center w-[45px] border-[2px] border-rose-600 overflow-hidden shrink-0 max-w-full" />
          <div className="text-rose-600 text-3xl font-bold leading-10 tracking-widest self-stretch grow whitespace-nowrap">
            TIME TABLE
          </div>
        </div>
        <div className="text-stone-800 text-center text-6xl font-bold leading-[73px] self-center whitespace-nowrap mt-14 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          PROFESSIONAL WEEKLY SCHEDULE
        </div>
      </div>
    </main>
  );
}

export default App;
