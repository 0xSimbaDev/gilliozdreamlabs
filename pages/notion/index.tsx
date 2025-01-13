import type { NextPage } from "next";
import React, { useState, useEffect } from 'react';
import HeroSection from "../../components/notion/hero/hero-section";
import ProblemSection from "../../components/notion/problem/problem-section";
import SolutionSection from "../../components/notion/solutions/solutions-section";
import ProcessSection from "../../components/notion/process/process-section";
import WhyChooseUs from "../../components/notion/wcu/whychooseus-section";
import Header from "../../components/header";
import Footer from "../../components/footer";

const NotionSolutions: NextPage = () => {
const [showButton, setShowButton] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    const homeSection = document.getElementById('hero');
    if (homeSection) {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        setShowButton(window.scrollY > homeSectionBottom);
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

return (
    <main className="w-full h-full gap-20 relative bg-[#FAF8FF] overflow-hidden flex flex-col items-center justify-center md:flex-col">
        <div className="w-full">
            <Header />
            <section id="hero">
                <HeroSection />
            </section>
            <section id="problem">
                <ProblemSection />
            </section>
            <section id="solution">
                <SolutionSection />
            </section>
            <section id="process">
                <ProcessSection />
            </section>
            <section id="advantage">
                <WhyChooseUs />
            </section>
            {/* 
             */}
            <Footer />
        </div>
        {showButton && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-2 w-[50px] h-[50px] bg-[#8C30F5] text-white rounded-full shadow-lg cursor-pointer"
            >
            ↑
            </button>
        )}
    </main>
);
};

export default NotionSolutions;