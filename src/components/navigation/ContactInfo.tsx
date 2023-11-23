import React from "react";
import addressImage from '/location-icon.svg'

type ContactInfoProps = {
    address: string;
    call: string;
    email: string;
};

const ContactInfo: React.FC<ContactInfoProps> = (props) => {
    const handleButtonClick = () => {
        // handle button click event
    };

    return (
        <div className="bg-stone-800 bg-opacity-70 self-stretch flex flex-col items-center px-5 py-6 max-md:max-w-full">
            <div className="flex w-[1297px] max-w-full items-start justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                <div className="self-stretch flex justify-between gap-3">
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={addressImage}
                            alt=""
                            className="aspect-square object-contain object-center w-6 fill-zinc-50 fill-opacity-50 overflow-hidden shrink-0 max-w-full"
                        />
                    </button>
                    <div className="text-neutral-50 text-2xl font-bold leading-7 tracking-widest grow whitespace-nowrap mt-2">
                        <span className="text-zinc-50 text-opacity-50">Address :</span>{" "}
                        <span className="text-neutral-50">{props.address}</span>
                    </div>
                </div>
                <div className="self-center flex gap-2.5 my-auto">
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={props.callImage}
                            alt=""
                            className="aspect-square object-contain object-center w-[19px] stroke-[2px] stroke-zinc-50 stroke-opacity-50 overflow-hidden shrink-0 max-w-full"
                        />
                    </button>
                    <div className="text-neutral-50 text-2xl font-bold leading-7 tracking-widest grow whitespace-nowrap mt-1">
                        <span className="text-zinc-50 text-opacity-50">Call</span>{" "}
                        <span className="text-neutral-50"> : {props.call}</span>
                    </div>
                </div>
                <div className="flex gap-3 mt-1 self-start">
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={props.emailImage}
                            alt=""
                            className="aspect-[1.28] object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                        />
                    </button>
                    <div className="text-neutral-50 text-2xl font-bold leading-7 tracking-widest grow whitespace-nowrap mt-1">
                        <span className="text-zinc-50 text-opacity-50">Email </span>{" "}
                        <span className="text-neutral-50">: {props.email}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 self-start max-md:justify-center">
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={props.image1}
                            alt=""
                            className="aspect-square object-contain object-center w-[26px] fill-neutral-50 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </button>
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={props.image2}
                            alt=""
                            className="aspect-square object-contain object-center w-6 fill-neutral-50 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </button>
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={props.image3}
                            alt=""
                            className="aspect-[0.96] object-contain object-center w-[23px] fill-neutral-50 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </button>
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={props.image4}
                            alt=""
                            className="aspect-[1.23] object-contain object-center w-[27px] fill-neutral-50 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                    </button>
                    <button onClick={handleButtonClick}>
                        <img
                            loading="lazy"
                            src={props.image5}
                            alt=""
                            className="aspect-[1.45] object-contain object-center w-[29px] fill-neutral-50 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;