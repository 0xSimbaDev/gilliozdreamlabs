import type { NextPage } from "next";
import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import HeroSection from "../components/home/hero/hero-section"
import ServicesSection from "../components/home/services/services-section";
import AboutSection from "../components/home/about/about-section";

const Index: NextPage = () => {
  return (
    <main className="w-full h-full gap-20 bg-[#FAF8FF] overflow-hidden flex flex-col items-center justify-center md:flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;