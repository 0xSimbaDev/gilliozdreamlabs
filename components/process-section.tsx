import type { NextPage } from "next";
import { useTranslation } from "../context/TranslationContext";
import { useLanguage } from "../context/LanguageContext";
import { Language, ProcessSectionType } from "../types";

const ProcessSection: NextPage<ProcessSectionType> = ({ className = "" }) => {
  const { language } = useLanguage() as { language: Language };
  const imageSrc = language === 'ENG' ? '/processes-image-eng@1.svg' : '/processes-image-fr.svg';

  const { translations } = useTranslation();

  return (
    <section
      className={`flex flex-row items-center justify-center p-6 gap-14 bg-cover bg-no-repeat bg-center text-white font-montserrat h-[895px] md:flex-col md:px-6 md:h-auto ${className}`}
      style={{ backgroundImage: "url('/process-section@3x.png')" }}
    >
      <div className="w-[554px] md:w-1/2 mb-8 md:mb-0 text-left sm:max-w-sm sm:w-auto">
        <h2 className="text-[1.5rem] md:text-4xl font-bold mb-4 sm:text-[1.2rem] sm:text-center">
          {translations.process?.headline} 
        </h2>
        <p className="text-[1rem] font-light sm:text-[0.8rem] sm:text-center">
          {translations.process?.description} 
        </p>
      </div>
      <div className="w-auto">
        <img
          className="w-[619px] object-contain rounded-lg md:rounded-xl sm:max-w-[350px]"
          alt="Process illustration"
          src={imageSrc}
        />
      </div>
    </section>
  );
};

export default ProcessSection;