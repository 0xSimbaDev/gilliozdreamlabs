import type { NextPage } from "next";
import ContactForm from './ContactForm';
import { useLanguage } from "../context/LanguageContext";

type Language = "ENG" | "FR";

export type ContactSectionType = {
  className?: string;
};

const ContactSection: NextPage<ContactSectionType> = ({ className = "" }) => {
  // Get the language from the context
  const { language } = useLanguage() as { language: Language };

  // Define translations
  const translations: Record<Language, { headline: string; subheading: string; connect: string; connectDescription: string }> = {
    ENG: {
      headline: "Contact Us",
      subheading: "Any question or remarks? Just write us a message!",
      connect: "Let’s connect",
      connectDescription: "We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly."
    },
    FR: {
      headline: "Contactez-nous",
      subheading: "Des questions ou des remarques ? Envoyez-nous simplement un message !",
      connect: "Connectons-nous",
      connectDescription: "Nous aimerions avoir de vos nouvelles ! Veuillez remplir le formulaire ci-dessous et nous vous contacterons sous peu."
    }
  };

  return (
    <section
      className={`flex flex-col items-center justify-center gap-4 bg-cover bg-no-repeat bg-top text-white font-montserrat h-screen md:h-auto p-6 ${className}`}
      style={{ backgroundImage: "url('/contact-section@3x.png')" }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[1.5rem] font-bold sm:text-[1.2rem]">
          {translations[language].headline}
        </h1>
        <h3 className="text-sm font-light text-center sm:text-xs">
          {translations[language].subheading}
        </h3>
      </div>
      <div className="backdrop-blur-3xl rounded-xl bg-gray-900 border-gray-800 border-2 flex flex-col items-center justify-center p-6 gap-6 text-left md:items-center md:justify-center sm:max-w-[300px]">
        <div className="w-full max-w-xl flex flex-col gap-6">
          <div className="flex flex-col gap-0">
            <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] sm:text-[1.2rem]">
              {translations[language].connect}
            </h2>
            <p className="text-[1rem] tracking-[-0.01em] opacity-80 sm:text-[0.8rem]">
              {translations[language].connectDescription}
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;