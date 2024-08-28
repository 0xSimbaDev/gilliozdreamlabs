import type { NextPage } from "next";

export type ProcessSectionType = {
  className?: string;
};

const ProcessSection: NextPage<ProcessSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[895px] flex flex-row items-center justify-center p-6 box-border gap-[70px] bg-[url('/process-section@3x.png')] bg-cover bg-no-repeat bg-[center] text-white font-montserrat md:flex-col md:px-[30px] md:h-auto ${className}`}
    >
      <div className="w-[554px] md:w-1/2 mb-8 md:mb-0 text-left sm:max-w-sm sm:w-auto"> 
        <h1 className="text-[1.5rem] md:text-4xl font-bold mb-4 sm:text-[1.2rem] sm:text-center"> 
          Our Simple, Effective Process
        </h1>
        <p className="text-[1rem] font-light sm:text-[0.8rem] sm:text-center">
          We believe in a straightforward, collaborative approach to transforming your workspace. From initial consultation to ongoing support, we'll guide you through each step, ensuring a seamless transition to a more efficient and productive way of working.
        </p>
      </div>
      <img
        className="w-[619px] object-contain rounded-lg md:rounded-xl sm:max-w-[350px]"
        alt=""
        src="/processes-image@2x.png"
      />
    </div>
  );
};

export default ProcessSection;