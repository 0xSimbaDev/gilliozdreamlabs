import type { NextPage } from "next";
import ContactForm from './ContactForm';

export type ContactSectionType = {
  className?: string;
};

const ContactSection: NextPage<ContactSectionType> = ({ className = "" }) => {
  return (
    <section 
      className={`flex flex-col items-center justify-center gap-4 bg-cover bg-no-repeat bg-top text-white font-montserrat h-screen md:h-auto p-6${className}`}
      style={{ backgroundImage: "url('/contact-section@3x.png')" }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[1.5rem] font-bold sm:text-[1.2rem]"> 
          Contact Us
        </h1>
        <h3 className="text-sm font-light text-center sm:text-xs">
          Any question or remarks? Just write us a message!
        </h3>
      </div>
      <div className="backdrop-blur-3xl rounded-xl bg-gray-900 border-gray-800 border-2 flex flex-col items-center justify-center p-6 gap-6 text-left md:items-center md:justify-center sm:max-w-[300px]"> 
        <div className="w-full max-w-xl flex flex-col gap-6"> 
          <div className="flex flex-col gap-0">
            <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] sm:text-[1.2rem]">
              Let’s connect
            </h2>
            <p className="text-[1rem] tracking-[-0.01em] opacity-80 sm:text-[0.8rem]"> 
              We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;