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
      className={`h-[160px] overflow-hidden flex flex-col items-center justify-center py-0 px-[15px] box-border gap-[15px] text-left text-lg text-white font-montserrat ${className}`}
    >
      <b className="w-[241.8px] relative inline-block">{heading}</b>
      <div className="w-[241.8px] flex-1 relative text-sm inline-block">
        {subHeading}
      </div>
    </div>
  );
};

export default SolutionComponent;