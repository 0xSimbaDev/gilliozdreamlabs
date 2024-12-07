import type { NextPage } from "next";
import Image from "next/image";
import { ServicesComponentType } from "../../../types";



const ServicesComponent: NextPage<ServicesComponentType> = ({
    className = "",
    title,
    description,
    icon,
}) => {
    return (
        <div className={`flex flex-col items-center gap-4 w-[380px] sm:max-w-[320px] ${className}`}>
            <div className="relative">
                <div className="h-[50px] w-[50px] rounded-2xl bg-[#2B2B2B] flex items-center justify-center p-1 sm:w-[50px] sm:h-[50px]">
                    <Image src={icon || ""} alt="" width={40} height={40} />
                </div>
            </div>
            <div className="flex flex-col gap-3 font-inter">
                <b className="text-center sm:text-base md:text-lg lg:text-xl text-blueviolet">
                {title}
                </b>
                <div className="sm:text-sm md:text-base lg:text-xs text-[#2B2B2B] ">
                {description}
                </div>
            </div>
        </div>
    );
};

export default ServicesComponent;
