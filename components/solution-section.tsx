import type { NextPage } from "next";
import SolutionComponent from "./SolutionComponent";
import { useLanguage } from "../context/LanguageContext";
import { Language, SolutionSection1Type } from "../types";

const SolutionSection: NextPage<SolutionSection1Type> = ({
  className = "",
}) => {
  const { language } = useLanguage() as { language: Language }; 

  const translations: Record<Language, { headline: string; subheading: string; solutions: { heading: string, subHeading: string }[] }> = {
    ENG: {
      headline: "Transform Your Business with Notion",
      subheading: "Say goodbye to scattered tools and missed opportunities. Notion, tailored by Quantboost Technology, empowers your team with a unified workspace that fosters collaboration, streamlines workflows, and scales with your business.",
      solutions: [
        { heading: "Centralized Hub", subHeading: "All your essential tools and data are in one place, accessible from anywhere." },
        { heading: "Scalable Solution", subHeading: "Easily adapt and expand your Notion workspace as your business grows." },
        { heading: "Streamline Workflow", subHeading: "Customize Notion to match your unique processes, eliminating the need for multiple tools." },
        { heading: "Enhance Collaboration", subHeading: "Foster seamless communication and knowledge sharing among your team." },
        { heading: "Expert Guidance", subHeading: "Leverage Quantboost's expertise to tailor Notion precisely to your needs." },
        { heading: "Secure & Accessible", subHeading: "Your data in Notion is securely stored and accessible from anywhere, giving you peace of mind and flexibility." },
        { heading: "Data Control", subHeading: "You have full control over your data, with options to easily back up and export it whenever needed." },
        { heading: "Tailored Solutions", subHeading: "We customize Notion to fit your unique needs, whether you're integrating with existing systems or building a new tech stack from the ground up." },
      ],
    },
    FR: {
      headline: "Transformez votre entreprise avec Notion",
      subheading: "Dites adieu aux outils dispersés et aux opportunités manquées. Notion, personnalisé par Quantboost Technology, permet à votre équipe de disposer d'un espace de travail unifié qui favorise la collaboration, rationalise les flux de travail et s'adapte à la croissance de votre entreprise.",
      solutions: [
        { heading: "Hub centralisé", subHeading: "Tous vos outils et données essentiels sont réunis en un seul endroit, accessibles de partout." },
        { heading: "Solution évolutive", subHeading: "Adaptez et développez facilement votre espace de travail Notion au fur et à mesure que votre entreprise grandit." },
        { heading: "Rationalisez votre flux de travail", subHeading: "Personnalisez Notion pour qu'il corresponde à vos processus uniques, éliminant ainsi le besoin de multiples outils." },
        { heading: "Améliorez la collaboration", subHeading: "Favorisez une communication fluide et un partage des connaissances au sein de votre équipe." },
        { heading: "Conseils d'experts", subHeading: "Tirez parti de l'expertise de Quantboost pour adapter Notion précisément à vos besoins." },
        { heading: "Sécurisé et accessible", subHeading: "Vos données dans Notion sont stockées en toute sécurité et accessibles de n'importe où, vous offrant tranquillité d'esprit et flexibilité." },
        { heading: "Contrôle des données", subHeading: "Vous avez le contrôle total de vos données, avec des options pour les sauvegarder et les exporter facilement quand vous le souhaitez." },
        { heading: "Solutions sur mesure", subHeading: "Nous personnalisons Notion pour répondre à vos besoins spécifiques, que vous intégriez des systèmes existants ou que vous construisiez une nouvelle pile technologique à partir de zéro." },
      ],
    },
  };

  return (
    <section
      className={`flex flex-col items-center justify-center py-20 md:py-10 px-6 md:px-10 bg-cover bg-no-repeat bg-center text-white font-montserrat ${className}`}
      style={{ backgroundImage: "url('/solution-section@3x.png')" }}
    >
      <div className="text-content w-full max-w-5xl mb-12 text-left"> 
        <h1 className="text-[1.5rem] md:text-center sm:text-[1rem]">
          {translations[language].headline}
        </h1>
        <p className="text-lg md:text-center sm:text-[0.8rem]">
          {translations[language].subheading}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-5xl">
        {translations[language].solutions.map((solution, index) => (
          <SolutionComponent key={index} {...solution} />
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;