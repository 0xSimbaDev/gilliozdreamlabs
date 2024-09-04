import type { NextPage } from "next";
import Image from 'next/image';
import { WCUComponentType } from "../types";

const WCUComponent: NextPage<WCUComponentType> = ({
  className = "",
  title,
  description,
  icon,
}) => {
  return (
    <div className={`flex flex-row items-start justify-start text-left text-lg text-white font-montserrat w-[380px] sm:max-w-[320px] ${className}`}>
      <div className="relative h-[140px] w-[130px]">
        <div className="absolute top-0 left-0 shadow-[0px_7px_16px_rgba(0,_0,_0,_1)] rounded-2xl bg-gray-900 flex items-center justify-center p-1 w-[70px] h-[70px] sm:w-[50px] sm:h-[50px]">
          <Image
            src={icon || ''} 
            alt="" 
            fill 
          />
        </div>
        <Image
          src="/vector-11.svg"
          alt="" 
          width={130} 
          height={130}
          className="absolute top-0 left-[100px] max-w-full h-[130px]"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-3">
        <b className="sm:text-base"> 
          {title}
        </b>
        <div className="flex-1 text-xs sm:text-[0.7rem]"> 
          {description}
        </div>
      </div>
    </div>
  );
};

export default WCUComponent;