import type { NextPage } from "next";

export type SolutionSectionType = {
  className?: string;
};

const SolutionSection: NextPage<SolutionSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[895px] flex flex-col items-center justify-center gap-[70px] bg-[url('/solution-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-17xl text-white font-montserrat md:pl-[30px] md:pr-[30px] md:box-border ${className}`}
    >
      <b className="relative md:text-center">
        Your All-In-One Centralized Workspace
      </b>
      <div className="w-[722px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-gray-300 h-[441px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[5px] box-border gap-2.5 text-left">
        <div className="self-stretch bg-gray-200 overflow-hidden flex flex-row flex-wrap items-start justify-start gap-2.5">
          <button className="cursor-pointer [border:none] p-0 bg-gray-100 w-[130px] rounded-2xl h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <b className="w-[93px] relative text-2xs inline-block font-montserrat text-white text-left shrink-0">
              Centralized Hub
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[130px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <b className="w-[93px] relative text-2xs inline-block font-montserrat text-white text-center shrink-0">
              Enhance Collaboration
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[130px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <b className="w-[93px] relative text-2xs inline-block font-montserrat text-white text-center shrink-0">
              Steamline Workflow
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[130px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <b className="w-[93px] relative text-2xs inline-block font-montserrat text-white text-center shrink-0">
              Scalable Solution
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[130px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <b className="w-[93px] relative text-2xs inline-block font-montserrat text-white text-center shrink-0">
              Expert Guidance
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[130px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <b className="w-[93px] relative text-2xs inline-block font-montserrat text-white text-center shrink-0">
              Tailored Solution
            </b>
          </button>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start p-[30px]">
          <b className="self-stretch flex-1 relative md:text-center">
            All your essential tools and data are in one place, accessible from
            anywhere.
          </b>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
