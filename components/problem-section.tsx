import type { NextPage } from "next";
import { ProblemSectionType } from "../types";
import { useTranslation } from "../context/TranslationContext";
import Image from 'next/image';

const ProblemSection: NextPage<ProblemSectionType> = ({ className = "" }) => {
  const { translations } = useTranslation();

  return (
    <section
      className={`flex flex-col items-center justify-center text-white font-montserrat p-6 md:p-10 ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-6 max-w-full text-left text-[1.2rem] sm:text-[0.8rem]">
        <div className="flex items-center gap-3 md:flex-col "> 
          <Image
            src="/Lost_Time.svg"
            width={100}
            height={100}
            alt="" 
          />
          <a className="font-bold no-underline text-center">
            {translations.problem?.lostTime} 
          </a>
        </div>

        <div className="flex items-center gap-3 md:flex-col">
          <Image
            src="/Scattered_Tools.svg"
            width={100}
            height={100}
            alt="" 
          />
          <a className="font-bold no-underline text-center">
            {translations.problem?.scatteredTools} 
          </a>
        </div>

        <div className="flex items-center gap-3 md:flex-col">
          <Image
            src="/Missed_Opportunities.svg"
            width={100}
            height={100}
            alt="" 
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