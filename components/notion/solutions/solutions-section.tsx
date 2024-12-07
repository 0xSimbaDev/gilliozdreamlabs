import type { NextPage } from "next";
import SolutionComponent from "./SolutionComponent";
import { SolutionSectionType } from "../../../types";
import { Key } from "react";
import { motion } from "motion/react"

const SolutionsSection: NextPage<SolutionSectionType> = ({ className = "",}) => {

const data = {
    solution: {
        "headline": "Transform Your Business with Notion",
        "subheading": "Say goodbye to scattered tools and missed opportunities. Notion, tailored by GilliozDreamLabs, empowers your team with a unified workspace that fosters collaboration, streamlines workflows, and scales with your business.",
        "solutions": [
            { "heading": "Centralized Hub", "subHeading": "All your essential tools and data are in one place, accessible from anywhere." },
            { "heading": "Scalable Solution", "subHeading": "Easily adapt and expand your Notion workspace as your business grows." },
            { "heading": "Streamline Workflow", "subHeading": "Customize Notion to match your unique processes, eliminating the need for multiple tools." },
            { "heading": "Enhance Collaboration", "subHeading": "Foster seamless communication and knowledge sharing among your team." },
            { "heading": "Expert Guidance", "subHeading": "Leverage GilliozDreamLabs's expertise to tailor Notion precisely to your needs." },
            { "heading": "Secure & Accessible", "subHeading": "Your data in Notion is securely stored and accessible from anywhere, giving you peace of mind and flexibility." },
            { "heading": "Data Control", "subHeading": "You have full control over your data, with options to easily back up and export it whenever needed." },
            { "heading": "Tailored Solutions", "subHeading": "We customize Notion to fit your unique needs, whether you're integrating with existing systems or building a new tech stack from the ground up." }
        ]
    },
}

return (
    <section className={`${className}`}>
        <motion.div 
            initial="hidden"
            whileInView={{ opacity: 1, y:-50 }}
            transition={{duration: 0.3}}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center justify-center py-20 md:py-10 px-6 md:px-10 text-dark_bg font-montserrat gap-10"
        >
            <div className="text-content w-full max-w-5xl px-4 text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-blueviolet">
                {data.solution?.headline} 
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                {data.solution?.subheading} 
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-5xl">
                {data.solution?.solutions.map((solution: { heading: string | undefined; subHeading: string | undefined; }, index: Key | null | undefined) => (
                <SolutionComponent key={index} heading={solution.heading} subHeading={solution.subHeading} />
                ))}
            </div>
        </motion.div>
    </section>
    );
};

export default SolutionsSection;