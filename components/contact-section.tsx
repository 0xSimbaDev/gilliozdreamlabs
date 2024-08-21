import type { NextPage } from "next";
import ContactForm from './ContactForm';

export type ContactSectionType = {
  className?: string;
};

const ContactSection: NextPage<ContactSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[895px] flex flex-col items-center justify-center gap-[70px] bg-[url('/contact-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-white font-montserrat md:self-stretch md:w-auto md:flex-col ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[30px]">
        <h1 className="m-0 relative text-inherit font-bold font-[inherit]">
          Contact Us
        </h1>
        <div className="relative text-lg text-center">
          Any question or remarks? Just write us a message!
        </div>
      </div>
      <div className="[backdrop-filter:blur(380px)] rounded-xl bg-gray-900 border-gray-800 border-[2px] border-solid flex flex-row items-center justify-start p-5 gap-[30px] text-11xl md:flex-col md:items-center md:justify-center">
        <div className="self-stretch w-[506px] flex flex-col items-start justify-start p-10 box-border gap-[41px] md:flex-col">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <h1 className="m-0 w-[426px] relative text-inherit tracking-[-0.02em] font-semibold font-[inherit] inline-block">
              Let’s connect
            </h1>
            <div className="w-[415px] relative text-base tracking-[-0.01em] inline-block opacity-[0.8]">
              We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly.
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
