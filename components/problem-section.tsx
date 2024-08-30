import type { NextPage } from "next";
import { useLanguage } from "../context/LanguageContext";
import { Language, ProblemSectionType } from "../types";

const ProblemSection: NextPage<ProblemSectionType> = ({ className = "" }) => {
  const { language } = useLanguage() as { language: Language };

  const translations = {
    ENG: {
      headline: "Lost Time, Scattered Tools, Missed Opportunities",
      subheading: "Reclaim Control with a Unified Workspace",
      lostTime: "Lost Time",
      scatteredTools: "Scattered Tools",
      missedOpportunities: "Missed Opportunities"
    },
    FR: {
      headline: "Temps Perdu, Outils Dispersés, Opportunités Manquées",
      subheading: "Reprenez le Contrôle avec un Espace de Travail Unifié",
      lostTime: "Temps Perdu",
      scatteredTools: "Outils Dispersés",
      missedOpportunities: "Opportunités Manquées"
    }
  };

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
            {translations[language].lostTime} 
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
            {translations[language].scatteredTools} 
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
            {translations[language].scatteredTools} 
          </a>
        </div>
      </div>

      <h3 className="text-lg font-light text-center text-sm md:text-[1rem] sm:text-[0.7rem] mt-6">
        {translations[language].subheading} 
      </h3>
    </section>
  );
};

export default ProblemSection;