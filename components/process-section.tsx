import type { NextPage } from "next";

export type ProcessSectionType = {
  className?: string;
};

const ProcessSection: NextPage<ProcessSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[895px] flex flex-col items-center justify-center gap-[70px] bg-[url('/process-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-17xl text-white font-montserrat ${className}`}
    >
      <b className="w-[318px] relative inline-block">Our Process</b>
      <div className="flex flex-row items-center justify-center gap-[30px]">
        <img
          className="w-[339px] relative h-[539px] object-cover md:hidden"
          alt=""
          src="/content-image1@2x.png"
        />
        <img
          className="w-[772px] relative h-[672px] object-cover"
          alt=""
          src="/processes-image@2x.png"
        />
      </div>
    </div>
  );
};

export default ProcessSection;
