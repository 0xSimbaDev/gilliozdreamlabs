import type { NextPage } from "next";
import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import HomeSection from "../components/home-section";
import ProblemSection from "../components/problem-section";
import SolutionSection from "../components/solution-section";
import ProcessSection from "../components/process-section";
import WhyChooseUs from "../components/why-choose-us";
import ContactSection from "../components/contact-section";
import { LanguageProvider } from "../context/LanguageContext";


const Index: NextPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
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
    <div className="w-full h-full relative bg-gray-400 overflow-hidden flex flex-col items-center justify-center md:flex-col">
      <LanguageProvider> 
        <Header />
        <main className="w-full">
          <section id="home">
            <HomeSection />
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
          <section id="contact">
            <ContactSection />
          </section>
          
        </main>
      </LanguageProvider>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 w-[50px] h-[50px] bg-[#8C30F5] text-white rounded-full shadow-lg cursor-pointer"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Index;