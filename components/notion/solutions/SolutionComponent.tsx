import type { NextPage } from "next";
import { SolutionComponentType } from "../../../types";

const SolutionComponent: NextPage<SolutionComponentType> = ({
  className = "",
  heading,
  subHeading,
}) => {
  return (
    <div
      className={`relative h-[180px] w-[241.8px] overflow-hidden flex flex-col items-center justify-center px-[15px] gap-[15px] text-left text-dark_bg font-montserrat rounded-lg sm:h-auto hover:scale-105 hover:shadow-lg transform transition-transform duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blueviolet to-transparent rounded-lg py-[2px]">
        <div className="h-full w-full bg-white rounded-lg p-4 flex flex-col justify-center items-start gap-4">
          <b className="relative inline-block text-[1rem] text-blueviolet hover:text-white">
            {heading}
          </b>
          <div className="flex-1 relative text-sm inline-block text-[0.8rem] pr-6">
            {subHeading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionComponent;