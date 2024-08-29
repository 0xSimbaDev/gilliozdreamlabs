import type { NextPage } from "next";
import WCUComponent, { WCUComponentType } from "./WCUComponent";
import { useLanguage } from "../context/LanguageContext";

type Language = "ENG" | "FR";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {
  const { language } = useLanguage() as { language: Language };

  const translations: Record<Language, { headline: string; subheading: string; wcuComponents: WCUComponentType[] }> = {
    ENG: {
      headline: "Expertise That Sets Us Apart",
      subheading: "Transforming Workflows, Maximizing Productivity",
      wcuComponents: [
        { title: "Partners in Growth", description: "We're not just consultants; we're your partners in digital transformation, empowering your team to achieve maximum efficiency, productivity, and growth.", icon: "/growth.svg" },
        { title: "Microsoft Experience", description: "Our team has honed their skills at Microsoft, working with leading CRM and customer service platforms.", icon: "/experience.svg" },
        { title: "Expert Team", description: "Seasoned software developers and strategists with diverse technical expertise.", icon: "/team.svg" },
        { title: "Workflow Optimization", description: "We leverage our experience to optimize your workflows and enhance customer experiences.", icon: "/workflow.svg" },
        { title: "Custom Notion Solutions", description: "We create tailored Notion workspaces that perfectly align with your unique business needs.", icon: "/solution.svg" },
        { title: "Seamless Integration", description: "Our proficiency in various development tools ensures a smooth and tailored Notion experience.", icon: "/integration.svg" },
      ]
    },
    FR: {
      headline: "L'expertise qui nous distingue",
      subheading: "Transformer les flux de travail, maximiser la productivité",
      wcuComponents: [
        { title: "Partenaires dans la croissance", description: "Nous ne sommes pas seulement des consultants ; nous sommes vos partenaires dans la transformation numérique, permettant à votre équipe d'atteindre une efficacité, une productivité et une croissance maximales.", icon: "/growth.svg" },
        { title: "Expérience Microsoft", description: "Notre équipe a perfectionné ses compétences chez Microsoft, en travaillant avec les principales plateformes de CRM et de service client.", icon: "/experience.svg" },
        { title: "Équipe d'experts", description: "Développeurs de logiciels et stratèges expérimentés possédant une expertise technique diversifiée.", icon: "/team.svg" },
        { title: "Optimisation du flux de travail", description: "Nous tirons parti de notre expérience pour optimiser vos flux de travail et améliorer l'expérience client.", icon: "/workflow.svg" },
        { title: "Solutions Notion personnalisées", description: "Nous créons des espaces de travail Notion sur mesure qui s'alignent parfaitement avec vos besoins commerciaux uniques.", icon: "/solution.svg" },
        { title: "Intégration transparente", description: "Notre maîtrise de divers outils de développement garantit une expérience Notion fluide et personnalisée.", icon: "/integration.svg" },
      ]
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center py-[285px] px-[150px] gap-14 bg-cover bg-no-repeat bg-center text-center text-white font-montserrat md:px-6 md:py-10 ${className}`}
      style={{ backgroundImage: "url('/home-section@3x.png')" }}
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:max-w-sm">
        <h1 className="text-[1.5rem] m-0 font-bold sm:text-[1.2rem]">
          {translations[language].headline}
        </h1>
        <div className="text-[1rem] text-center sm:text-[0.8rem]">
          {translations[language].subheading}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 text-left md:flex-col md:items-center md:justify-center">
        {/* Iterate over pairs of components */}
        {translations[language].wcuComponents.map((_, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className="flex flex-row items-start justify-start gap-6 md:flex-col">
                <WCUComponent {...translations[language].wcuComponents[index]} className="hover:scale-105 transition-transform" />
                {translations[language].wcuComponents[index + 1] && ( 
                  <WCUComponent {...translations[language].wcuComponents[index + 1]} className="hover:scale-105 transition-transform" />
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