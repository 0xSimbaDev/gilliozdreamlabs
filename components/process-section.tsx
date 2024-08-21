import type { NextPage } from "next";

export type ProcessSectionType = {
  className?: string;
};

const ProcessSection: NextPage<ProcessSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[895px] flex flex-row items-center justify-center py-[70px] px-[150px] box-border gap-[70px] bg-[url('/process-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-white font-montserrat md:flex-col ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-[30px]">
        <b className="relative md:text-center">Our Simple, Effective Process</b>
        <div className="w-[554px] relative text-lg inline-block md:text-center">
          We believe in a straightforward, collaborative approach to
          transforming your workspace. From initial consultation to ongoing
          support, we'll guide you through each step, ensuring a seamless
          transition to a more efficient and productive way of working.
        </div>
      </div>
      <img
        className="w-[619px] relative h-[539px] object-cover"
        alt=""
        src="/processes-image@2x.png"
      />
    </div>
  );
};

export default ProcessSection;