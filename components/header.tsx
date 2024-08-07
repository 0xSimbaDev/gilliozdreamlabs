import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleScroll = () => {
    const sections = ['home', 'problem', 'solution', 'advantage', 'process', 'contact'];
    const scrollPosition = window.scrollY + 100; 

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`self-stretch overflow-hidden flex flex-row items-center justify-center py-[15px] px-40 gap-[30px] text-left text-5xl text-blueviolet font-montserrat lg:pl-40 lg:pr-40 lg:box-border md:flex-row md:flex-wrap md:items-center md:justify-start md:pl-[30px] md:pr-[30px] md:box-border ${className}`}>
      <h1 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] flex items-center h-[29px] z-[2]">
        <span>
          <span>QUANTBOOST</span>
          <span className="text-white"> TECHNOLOGY</span>
        </span>
      </h1>
      <nav className="h-[29px] overflow-hidden flex flex-row items-center justify-start gap-[30px] z-[1] md:hidden md:w-auto md:[align-self:unset] md:flex-row">
        <a href="#home" className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block ${activeSection === 'home' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
          Home
        </a>
        <a href="#problem" className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block ${activeSection === 'problem' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
          Problem
        </a>
        <a href="#solution" className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block ${activeSection === 'solution' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
          Solution
        </a>
        <a href="#advantage" className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block ${activeSection === 'advantage' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
          Advantage
        </a>
        <a href="#process" className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block ${activeSection === 'process' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
          Our Process
        </a>
        <a href="#contact" className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block ${activeSection === 'contact' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
          Contact Us
        </a>
      </nav>
      <button onClick={toggleSidebar} className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative overflow-hidden shrink-0 hidden z-[0] md:flex">
        <img
          className="absolute h-3/6 w-9/12 top-[25%] right-[12.5%] bottom-[25%] left-[12.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </button>
      {isSidebarOpen && (
        <div className="fixed inset-y-0 right-0 w-1/6 bg-[#121212] z-50 flex flex-col items-start p-4">
          <button onClick={toggleSidebar} className="self-end mb-4 text-blueviolet bg-transparent">X</button>
          <a href="#home" onClick={closeSidebar} className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block mb-2 ${activeSection === 'home' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
            Home
          </a>
          <a href="#problem" onClick={closeSidebar} className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block mb-2 ${activeSection === 'problem' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
            Problem
          </a>
          <a href="#solution" onClick={closeSidebar} className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block mb-2 ${activeSection === 'solution' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
            Solution
          </a>
          <a href="#advantage" onClick={closeSidebar} className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block mb-2 ${activeSection === 'advantage' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
            Advantage
          </a>
          <a href="#process" onClick={closeSidebar} className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block mb-2 ${activeSection === 'process' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
            Our Process
          </a>
          <a href="#contact" onClick={closeSidebar} className={`outline-none cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block mb-2 ${activeSection === 'contact' ? 'border-b-2 border-blueviolet' : ''}`} style={{ textDecoration: 'none' }}>
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
