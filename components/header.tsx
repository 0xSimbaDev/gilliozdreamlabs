import type { NextPage } from 'next';
import { HeaderType } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// NavLink Component: 
const NavLink = ({ href, children }: { href: string; children: string }) => (
  <Link href={href} legacyBehavior>
    <a className="text-blueviolet no-underline decoration-non text-xs font-inter">{children}</a>
  </Link>
);

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full sticky top-0 z-[20] ">
      <div className={`flex items-center justify-between px-6 py-4 h-[50px] ${className}`}>
        {/* Logo */}
        <Link className='' href="/" legacyBehavior>
          <a className="flex items-center">
            <Image
              src="/logo.png"
              alt="GilliozDreamLabs Logo"
              width={370}
              height={250}
              className="md:hidden"
            />
            <Image
              src="/logo_2.png"
              alt="GilliozDreamLabs Logo"
              width={50}
              height={50}
              className="hidden md:block"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="sm:hidden flex items-center gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services/notion-solutions">Notion Solutions</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:block hidden p-2 bg-transparent"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src="/menu.svg" alt="Menu Icon" className="w-6 h-6" />
        </button>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B78CFF] to-transparent"></div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-[30%] h-full bg-white shadow-lg z-50 flex flex-col p-6">
            <button
              className="self-end text-2xl font-bold bg-transparent"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <img src="/close.svg" alt="Menu Icon" className="w-6 h-6" />
            </button>
            <nav className="mt-6 flex flex-col gap-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services/notion-solutions">Notion Solutions</NavLink>
            </nav>
          </div>
          
        </>
      )}
    </header>
  );
};

export default Header;