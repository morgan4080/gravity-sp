import React, { useRef, useState } from "react";
import logo from "@/assets/logo.svg";
import arrow1 from "@/assets/Path 6.svg";
import arrow2 from "@/assets/Path 7.svg";
import arrow3 from "@/assets/Path 8.svg";
import arrow4 from "@/assets/Path 9.svg";
import { Menu } from "@/types";

type NavProps = {
  appName: string;
  menuItems: Menu[];
};

const NavbarMd: React.FC<NavProps> = ({ appName, menuItems }) => {
  const mobileMenu = useRef<HTMLUListElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  const oCmenu = () => {
    // change menu to close
    setOpen(!isOpen);
    if (!isOpen) {
      mobileMenu.current?.classList.add("top-[0px]");
      mobileMenu.current?.classList.add("opacity-100");
      mobileMenu.current?.classList.add("z-[10]");
    } else {
      mobileMenu.current?.classList.remove("top-[0px]");
      mobileMenu.current?.classList.remove("opacity-100");
      mobileMenu.current?.classList.remove("z-[10]");
    }
  };

  return (
    <nav className="flex items-center justify-between bg-[#2B2024] bg-opacity-95">
      <div className="text-neutral-50 text-lg font-bold bg-rose-600 self-stretch flex flex-col items-center justify-center p-4 space-y-2">
        <img
          loading="lazy"
          src={logo}
          className="object-contain object-center w-12 overflow-hidden self-center"
          alt="logo"
        />
        <div className="flex flex-wrap pt-2 text-center">{appName}</div>
      </div>
      <ul
        ref={mobileMenu}
        role="menu"
        className="bg-[#2B2024] md:flex md:items-center z-[-1] md:z-auto md:static fixed w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 gap-14"
      >
        {isOpen ? (
          <li className="flex mb-6 items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="bg-rose-600 rounded-md p-2">
                <img
                  loading="lazy"
                  src={logo}
                  className="object-contain object-center w-12 overflow-hidden self-center"
                  alt="logo"
                />
              </div>
              <div className="flex flex-wrap pt-2 text-center text-white text-2xl">
                {appName}
              </div>
            </div>

            <button
              onClick={() => {
                oCmenu();
              }}
              type="button"
              className="p-2"
            >
              <svg
                className="text-white w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </li>
        ) : null}
        {menuItems.map((item, index) => (
          <li key={index} role="menuitem">
            <a
              role={`navigation-${item.name}`}
              href={item.link}
              className="self-stretch flex flex-col"
            >
              <div className="text-white text-lg font-bold  whitespace-nowrap">
                {item.name}
              </div>
              {item.current ? (
                <svg
                  width="31"
                  height="3"
                  viewBox="0 0 31 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9996 1.455H0.71875"
                    stroke="#FAFAFA"
                    strokeWidth="2"
                  />
                </svg>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
      <div
        role="mobile-menu-toggle-collapsed"
        aria-expanded={isOpen}
        aria-hidden={!isOpen}
        className="flex items-start justify-between gap-5 md:hidden"
      >
        <button
          onClick={() => {
            oCmenu();
          }}
          type="button"
          className="p-2"
        >
          {isOpen ? (
            <svg
              className="text-white w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="text-white w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <a
        role="CTA"
        href="/"
        className="bg-rose-600 self-stretch flex justify-between items-center gap-5 pl-12 pr-8 py-4"
      >
        <div className="text-white text-lg font-bold ">
          GET STARTED FOR FREE
        </div>
        <div className="self-center flex items-stretch gap-1 my-auto max-md:justify-center">
          <img
            loading="lazy"
            src={arrow1}
            className="aspect-[0.6] object-contain object-center w-[9px] stroke-[2px] stroke-neutral-50 opacity-25 overflow-hidden shrink-0 max-w-full"
            alt={""}
          />
          <img
            loading="lazy"
            src={arrow2}
            className="aspect-[0.6] object-contain object-center w-[9px] stroke-[2px] stroke-neutral-50 opacity-50 overflow-hidden shrink-0 max-w-full"
            alt={""}
          />
          <img
            loading="lazy"
            src={arrow3}
            className="aspect-[0.6] object-contain object-center w-[9px] stroke-[2px] stroke-neutral-50 opacity-75 overflow-hidden shrink-0 max-w-full"
            alt={""}
          />
          <img
            loading="lazy"
            src={arrow4}
            className="aspect-[0.6] object-contain object-center w-[9px] stroke-[2px] stroke-neutral-50 overflow-hidden shrink-0 max-w-full"
            alt={""}
          />
        </div>
      </a>
    </nav>
  );
};

export default NavbarMd;
