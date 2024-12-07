import type { NextPage } from "next";
import Image from 'next/image';
import { ProcessSectionType } from "../../../types";
import { motion } from "motion/react"

const ProcessSection: NextPage<ProcessSectionType> = ({ className = "" }) => {

  const data = {
    process: {
      "headline": "Our Simple, Effective Process",
      "description": "We believe in a straightforward, collaborative approach to transforming your workspace. From initial consultation to ongoing support, we'll guide you through each step, ensuring a seamless transition to a more efficient and productive way of working."
    },
  }

  return (
    <section
      className={`${className}`}
    >
      <motion.div 
        initial="hidden"
        whileInView={{ opacity: 1, y:-50 }}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-row items-center justify-center p-6 gap-14 text-dark_bg font-montserrat h-[895px] md:flex-col md:px-6 md:h-auto"
      >
        <div className="w-[554px] mb-8 md:mb-0 sm:max-w-sm sm:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-blueviolet">
            {data.process?.headline} 
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
            {data.process?.description} 
          </p>
        </div>
        <div className="w-auto">
          <Image
            src="/processes-image-eng@1.svg"
            width={519} 
            height={439} 
            alt="Process illustration"
            className="object-contain rounded-lg md:rounded-xl sm:max-w-[350px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;