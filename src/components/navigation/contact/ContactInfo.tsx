import React from "react";
import addressImage from "@/assets/location-icon.svg";
import callImage from "@/assets/call-icon.svg";
import emailImage from "@/assets/email-icon.svg";
import facebook from "@/assets/facebook-icon.svg";
import instagram from "@/assets/instagram-icon.svg";
import linkedin from "@/assets/linkedin-icon.svg";
import youtube from "@/assets/youtube-icon.svg";
import twitter from "@/assets/twitter-icon.svg";

interface ContactInfoProps {
  address: string;
  call: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = (props) => {
  return (
    <div className="bg-[#4B1B2B] self-stretch px-5 py-2 w-full">
      <div className="flex items-center justify-between flex-wrap w-full gap-2">
        <div className="flex flex-wrap items-center justify-start sm:justify-center sm:flex-1">
          <div className="self-stretch flex justify-between gap-3 items-center pr-8">
            <a href="#">
              <img
                loading="lazy"
                src={addressImage}
                alt=""
                className="aspect-square object-contain object-center w-3 fill-zinc-50 fill-opacity-50 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <div className="text-neutral-50 text-xs font-bold leading-7 tracking-widest grow whitespace-nowrap">
              <span className="text-zinc-50 text-opacity-50">Address :</span>{" "}
              <span className="text-neutral-50">{props.address}</span>
            </div>
          </div>
          <div className="self-stretch flex justify-between gap-3 items-center pr-8">
            <a href="#">
              <img
                loading="lazy"
                src={callImage}
                alt=""
                className="aspect-square object-contain object-center w-3 fill-zinc-50 fill-opacity-50 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <div className="text-neutral-50 text-xs font-bold leading-7 tracking-widest grow whitespace-nowrap">
              <span className="text-zinc-50 text-opacity-50">Call</span>{" "}
              <span className="text-neutral-50"> : {props.call}</span>
            </div>
          </div>
          <div className="self-stretch flex justify-between gap-3 items-center">
            <a href="#">
              <img
                loading="lazy"
                src={emailImage}
                alt=""
                className="aspect-square object-contain object-center w-3 fill-zinc-50 fill-opacity-50 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <div className="text-neutral-50 text-xs font-bold leading-7 tracking-widest grow whitespace-nowrap">
              <span className="text-zinc-50 text-opacity-50">Email</span>{" "}
              <span className="text-neutral-50"> : {props.email}</span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <div className="flex items-center justify-start space-x-4">
            <a href="#">
              <img
                loading="lazy"
                src={facebook}
                alt=""
                className="opacity-50 aspect-square object-contain object-center w-[16px] fill-neutral-50 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src={instagram}
                alt=""
                className="opacity-50 aspect-square object-contain object-center w-[16px] fill-neutral-50 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src={linkedin}
                alt=""
                className="opacity-50 aspect-[0.96] object-contain object-center w-[16px] fill-neutral-50 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src={twitter}
                alt=""
                className="opacity-50 aspect-[1.23] object-contain object-center w-[16px] fill-neutral-50 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                src={youtube}
                alt=""
                className="opacity-50 aspect-[1.45] object-contain object-center w-[16px] fill-neutral-50 overflow-hidden shrink-0 max-w-full my-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
