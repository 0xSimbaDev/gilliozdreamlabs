import type { NextPage } from "next";
import { useLanguage } from "../context/LanguageContext";
import { Language, ProcessSectionType } from "../types";

const ProcessSection: NextPage<ProcessSectionType> = ({ className = "" }) => {
  const { language } = useLanguage() as { language: Language };
  const imageSrc = language === 'ENG' ? '/processes-image-eng@1.svg' : '/processes-image-fr.svg';

  const translations: Record<Language, { headline: string; description: string }> = {
    ENG: {
      headline: "Our Simple, Effective Process",
      description: "We believe in a straightforward, collaborative approach to transforming your workspace. From initial consultation to ongoing support, we'll guide you through each step, ensuring a seamless transition to a more efficient and productive way of working."
    },
    FR: {
      headline: "Notre Processus Simple et Efficace",
      description: "Nous croyons en une approche simple et collaborative pour transformer votre espace de travail. De la consultation initiale au soutien continu, nous vous guiderons à chaque étape, assurant une transition en douceur vers un mode de travail plus efficace et productif."
    }
  };

  return (
    <section
      className={`flex flex-row items-center justify-center p-6 gap-14 bg-cover bg-no-repeat bg-center text-white font-montserrat h-[895px] md:flex-col md:px-6 md:h-auto ${className}`}
      style={{ backgroundImage: "url('/process-section@3x.png')" }}
    >
      <div className="w-[554px] md:w-1/2 mb-8 md:mb-0 text-left sm:max-w-sm sm:w-auto"> 
        <h2 className="text-[1.5rem] md:text-4xl font-bold mb-4 sm:text-[1.2rem] sm:text-center"> 
          {translations[language].headline} 
        </h2>
        <p className="text-[1rem] font-light sm:text-[0.8rem] sm:text-center">
          {translations[language].description} 
        </p>
      </div>
      <div className="w-auto">
        <img
          className="w-[619px] object-contain rounded-lg md:rounded-xl sm:max-w-[350px]"
          alt=""
          src={imageSrc}
        />
      </div>
    </section>
  );
};

export default ProcessSection;