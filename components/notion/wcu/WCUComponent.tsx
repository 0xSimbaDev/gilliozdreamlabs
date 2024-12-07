import type { NextPage } from "next";
import Image from 'next/image';
import { WCUComponentType } from "../../../types";

const WCUComponent: NextPage<WCUComponentType> = ({
  className = "",
  title,
  description,
  icon,
}) => {
  return (
    <div className={`h-[150px] flex flex-row items-start justify-start text-dark_bg font-montserrat w-[380px] sm:max-w-[320px] gap-4 ${className}`}>
      <div className="">
        <div className="h-[45px] w-[45px] rounded-2xl bg-[#1E1F24] flex items-center justify-center p-1 sm:w-[50px] sm:h-[50px]">
          <Image src={icon || ""} alt="" width={25} height={25} />
        </div>
      </div>
      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#1E1F24] to-transparent z-0"></div>
      <div className="flex-1 flex flex-col items-start justify-start gap-4">
        <b className="sm:text-base md:text-lg lg:text-xl text-blueviolet"> 
          {title}
        </b>
        <div className="sm:text-sm md:text-base lg:text-xs"> 
          {description}
        </div>
      </div>
    </div>
  );
};

export default WCUComponent;