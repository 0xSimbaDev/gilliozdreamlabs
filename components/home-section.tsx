import type { NextPage } from "next";
import { useTranslation } from "../context/TranslationContext";
import { HomeSectionType } from "../types";

const HomeSection: NextPage<HomeSectionType> = ({ className = "" }) => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { translations } = useTranslation(); 

  return (
    <section
      className={`flex flex-col items-center justify-center bg-[url('/home-section@3x.png')] bg-cover bg-no-repeat bg-[center] text-white font-montserrat h-screen p-6 md:p-10 ${className}`}
    >
      <div className="text-content w-full text-center">
        <h1 className="text-[1.5rem] font-bold mb-4 sm:text-[1.2rem]">
          {translations.home?.headline} 
        </h1>
        <h3 className="text-[1rem] font-light mb-6 sm:text-[0.8rem]">
          {translations.home?.subheading} 
        </h3>
        <button 
          className="bg-blueviolet text-white text-bold font-montserrat py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blueviolet cursor-pointer"
          onClick={handleContactClick} 
        >
          {translations.home?.buttonText}
        </button>
      </div>
    </section>
  );
};

export default HomeSection;