import type { NextPage } from "next";
import { HeroSectionType } from "../../../types";
import { motion } from "motion/react"

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
    
const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

// Content Data
const data = {
    hero: {
        "headline": "Simplify | Streamline | Succeed",
        "subheading": "Empower Your Team, Eliminate Chaos, Achieve More",
        "buttonText": "Contact Us"
    }
};

return (
    <section
    className={`flex flex-col items-center justify-center bg-[url('/home-section@3x.png')] bg-cover bg-no-repeat bg-[center] text-white font-montserrat p-6 md:p-10 h-[636px] ${className}`}
    >
        <motion.div
            initial="hidden"
            whileInView={{ opacity: 1, y:-50 }}
            transition={{duration: 0.3}}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center font-montserrat text-dark_bg px-4"
        >
            <h1 className="text-[3rem] font-bold mb-4 sm:text-[1.2rem] uppercase mt-2 text-blueviolet">
            {data.hero.headline} 
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
            {data.hero.subheading} 
            </p>
            <button 
            className="bg-blueviolet text-white text-bold font-montserrat py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blueviolet cursor-pointer"
            onClick={handleContactClick} 
            >
            {data.hero.buttonText}
            </button>
        </motion.div>
    </section>
);
};

export default HeroSection;