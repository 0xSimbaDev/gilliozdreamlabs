import type { NextPage } from "next";

export type SolutionComponentType = {
  className?: string;
  heading?: string;
  subHeading?: string;
};

const SolutionComponent: NextPage<SolutionComponentType> = ({
  className = "",
  heading,
  subHeading,
}) => {
  return (
    <div
      className={`h-[180px] w-[241.8px] overflow-hidden flex flex-col items-center justify-center px-[15px] box-border gap-[15px] text-left text-white font-montserrat sm:h-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:-skew-y-3 hover:-skew-x-3 hover:bg-blueviolet ${className}`}
    >
      <div className="p-4 rounded-lg w-full h-full flex flex-col justify-center items-start gap-4"> 
        <b className="relative inline-block text-[1rem]">{heading}</b>
        <div className="flex-1 relative text-sm inline-block text-[0.8rem]">
          {subHeading}
        </div>
      </div>
    </div>
  );
};

export default SolutionComponent;