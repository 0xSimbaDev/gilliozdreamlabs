import type { NextPage } from "next";
import SolutionComponent from "./SolutionComponent";
import { useTranslation } from "../context/TranslationContext";
import { SolutionSection1Type } from "../types";
import { Key } from "react";

const SolutionSection: NextPage<SolutionSection1Type> = ({
  className = "",
}) => {
  const { translations } = useTranslation(); 

  return (
    <section
      className={`flex flex-col items-center justify-center py-20 md:py-10 px-6 md:px-10 bg-cover bg-no-repeat bg-center text-white font-montserrat ${className}`}
      style={{ backgroundImage: "url('/solution-section@3x.png')" }}
    >
      <div className="text-content w-full max-w-5xl mb-12 text-left">
        <h1 className="text-[1.5rem] md:text-center sm:text-[1rem]">
          {translations.solution?.headline} 
        </h1>
        <p className="text-lg md:text-center sm:text-[0.8rem]">
          {translations.solution?.subheading} 
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-5xl">
        {translations.solution?.solutions.map((solution: { heading: string | undefined; subHeading: string | undefined; }, index: Key | null | undefined) => (
          <SolutionComponent key={index} heading={solution.heading} subHeading={solution.subHeading} />
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;