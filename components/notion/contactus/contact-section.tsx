import type { NextPage } from "next";
import ContactForm from "./ContactForm";
import { useTranslation } from "../../../context/TranslationContext";
import { ContactSectionType } from "../../../types";

const ContactSection: NextPage<ContactSectionType> = ({ className = "" }) => {
  
  const data = {
    contact: {
      "headline": "Contact Us",
      "subheading": "Any question or remarks? Just write us a message!",
      "connect": "Let’s connect",
      "connectDescription": "We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly."
    },
  }

  return (
    <section
      className={`flex flex-col items-center justify-center gap-4 bg-cover bg-no-repeat bg-top text-white font-montserrat h-screen md:h-auto p-6 ${className}`}
    >
      <div className="flex flex-col items-center justify-center text-dark_bg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-blueviolet">
          {data.contact?.headline}
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
          {data.contact?.subheading}
        </p>
      </div>
      <div className="rounded-xl border-2 border-solid border-blueviolet flex flex-col items-center justify-center p-6 gap-6 md:items-center md:justify-center sm:max-w-[300px]">
        <div className="w-full max-w-xl flex flex-col gap-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;