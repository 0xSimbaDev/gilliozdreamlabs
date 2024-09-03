import type { NextPage } from "next";
import { ProblemSectionType } from "../types";
import { useTranslation } from "../context/TranslationContext";

const ProblemSection: NextPage<ProblemSectionType> = ({ className = "" }) => {
  const { translations } = useTranslation();

  return (
    <section
      className={`flex flex-col items-center justify-center text-white font-montserrat p-6 md:p-10 ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-6 max-w-full text-left text-[1.2rem] sm:text-[0.8rem]">
        <div className="flex items-center gap-3 md:flex-col "> 
          <img
            className="w-[100px] h-[100px] object-cover"
            loading="lazy"
            alt=""
            src="/Lost_Time.svg"
          />
          <a className="font-bold no-underline text-center">
            {translations.problem?.lostTime} 
          </a>
        </div>

        <div className="flex items-center gap-3 md:flex-col">
          <img
            className="w-[100px] h-[100px] object-cover"
            loading="lazy"
            alt=""
            src="/Scattered_Tools.svg"
          />
          <a className="font-bold no-underline text-center">
            {translations.problem?.scatteredTools} 
          </a>
        </div>

        <div className="flex items-center gap-3 md:flex-col">
          <img
            className="w-[100px] h-[100px] object-cover" 
            loading="lazy"
            alt=""
            src="/Missed_Opportunities.svg"
          />
          <a className="font-bold no-underline text-center">
            {translations.problem?.missedOpportunities} 
          </a>
        </div>
      </div>

      <h3 className="text-lg font-light text-center text-sm md:text-[1rem] sm:text-[0.7rem] mt-6">
        {translations.problem?.subheading} 
      </h3>
    </section>
  );
};

export default ProblemSection;