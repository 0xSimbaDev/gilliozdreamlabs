import type { NextPage } from "next";

export type ProblemSectionType = {
  className?: string;
};

const ProblemSection: NextPage<ProblemSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center py-[285px] px-[150px] bg-[url('/problem-section@3x.png')] bg-cover bg-no-repeat bg-[center] text-left text-17xl text-white font-montserrat md:flex-col gap-[30px] md:pl-[30px] md:pr-[30px] md:box-border ${className}`}
    >
      <div className="w-[487.5px] h-[229px] flex flex-col items-start justify-start gap-[30px] md:flex-col md:items-center md:justify-start">
        <b className="self-stretch relative md:text-center">
          Lost Time, Scattered Tools, Missed Opportunities
        </b>
        <div className="self-stretch relative text-lg md:text-center">
          Reclaim Control with a Unified Workspace
        </div>
      </div>
      <img
        className="w-[277px] relative h-[376px] object-cover"
        alt=""
        src="/content-image@2x.png"
      />
    </div>
  );
};

export default ProblemSection;
