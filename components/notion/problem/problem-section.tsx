
"use client"
import type { NextPage } from "next";
import { ProblemSectionType } from "../../../types";
import Image from 'next/image';
import { motion } from "motion/react"

const ProblemSection: NextPage<ProblemSectionType> = ({ className = "" }) => {
  
  const data = {
    problem: {
      "headline": "Lost Time, Scattered Tools, Missed Opportunities",
      "subheading": "Reclaim Control with a Unified Workspace",
      "lostTime": "Lost Time",
      "scatteredTools": "Scattered Tools",
      "missedOpportunities": "Missed Opportunities"
    },
  }

  return (
    <section
      className={` ${className}`}
    >
      <motion.div
        initial="hidden"
        whileInView={{ opacity: 1, y:-50 }}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.5 }}
        className="h-[237px] max-w-full font-montserrat text-dark_bg"
      >

        <div className="flex flex-row items-center justify-center gap-20 text-left">
          <div className="flex items-center gap-3 md:flex-col"> 
            <Image
              src="/lost_time.svg"
              width={62}
              height={62}
              alt="" 
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blueviolet">
              {data.problem?.lostTime} 
            </p>
          </div>

          <div className="flex items-center gap-3 md:flex-col">
            <Image
              src="/scattered_tools.svg"
              width={62}
              height={62}
              alt="" 
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blueviolet">
              {data.problem?.scatteredTools} 
            </p>
          </div>

          <div className="flex items-center gap-3 md:flex-col">
            <Image
              src="/missed_opportunity.svg"
              width={62}
              height={62}
              alt="" 
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blueviolet">
              {data.problem?.missedOpportunities} 
            </p>
          </div>
        </div>
        <div className="h-[2px] my-4 bg-gradient-to-r from-transparent via-[#B78CFF] to-transparent"></div>
        <p className="text-center mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
          {data.problem?.subheading} 
        </p>
      </motion.div>

    </section>
  );
};

export default ProblemSection;