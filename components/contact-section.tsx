import type { NextPage } from "next";

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
              Send us a message for inquiry.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="self-stretch flex flex-row items-start justify-start gap-3.5 z-[4]">
              <input
                className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 flex-1 rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500"
                name="first_name"
                placeholder="First Name"
                type="text"
              />
              <input
                className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 flex-1 rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500"
                name="last_name"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <input
              className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 self-stretch rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500 z-[3]"
              name="email"
              placeholder="Email"
              type="text"
            />
            <input
              className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 self-stretch rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500 z-[2]"
              name="phone_number"
              placeholder="Phone Number"
              type="text"
            />
            <textarea
              className="border-gray-700 border-[1px] border-solid bg-gray-600 font-montserrat text-mini [outline:none] self-stretch rounded-8xs box-border h-[111px] flex flex-col items-start justify-start py-3 px-3.5 text-gray-500 z-[1]"
              placeholder="Message"
            />
            <button className="cursor-pointer [border:none] py-3 px-2.5 bg-blueviolet self-stretch rounded-8xs flex flex-row items-center justify-center z-[0]">
              <div className="relative text-lg tracking-[-0.01em] font-semibold font-montserrat text-white text-left">
                Send
              </div>
            </button>
          </div>
        </div>
        <img
          className="w-[516px] h-[536px] overflow-hidden shrink-0 object-cover md:hidden"
          alt=""
          src="/image-box@2x.png"
        />
      </div>
    </div>
  );
};

export default ContactSection;
