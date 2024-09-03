import type { NextPage } from "next";
import WCUComponent from "./WCUComponent";
import { useTranslation } from "../context/TranslationContext";
import { WCUComponentType, WhyChooseUsType } from "../types";

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {

  const { translations } = useTranslation(); 

  return (
    <div
      className={`flex flex-col items-center justify-center py-[285px] px-[150px] gap-14 bg-cover bg-no-repeat bg-center text-center text-white font-montserrat md:px-6 md:py-10 ${className}`}
      style={{ backgroundImage: "url('/home-section@3x.png')" }}
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:max-w-sm sm:w-auto"> 
        <h1 className="text-[1.5rem] m-0 font-bold sm:text-[1.2rem]">
          {translations.why_choose_us?.headline}
        </h1>
        <div className="text-[1rem] text-center sm:text-[0.8rem]">
          {translations.why_choose_us?.subheading} 
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 text-left md:flex-col md:items-center md:justify-center">
        {translations.why_choose_us?.wcuComponents.map((componentData: WCUComponentType, index: number) => { 
          if (index % 2 === 0) {
            return (
              <div key={index} className="flex flex-row items-start justify-start gap-6 md:flex-col">
                <WCUComponent {...componentData} className="hover:scale-105 transition-transform" />
                {translations.why_choose_us.wcuComponents[index + 1] && ( 
                  <WCUComponent {...translations.why_choose_us.wcuComponents[index + 1]} className="hover:scale-105 transition-transform" />
                )}
              </div>
            );
          }
          return null; 
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;