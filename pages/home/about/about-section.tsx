import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import { AboutComponentType } from '../../../types';
import DropdownItem from './DropdownItem';

const AboutSection: NextPage<AboutComponentType> = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
        setOpenDropdown(openDropdown === id ? null : id);
};
    return (
        <section className="h-full flex items-center justify-center p-6 mt-[5rem]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Image Section */}
                <div className="flex justify-center items-center">
                <Image
                    src="/software_development_illustration_.png"
                    alt="Software Development Illustration"
                    width={400}
                    height={400}
                    className="rounded-md object-cover"
                    priority
                />
                </div>

                {/* Right Text Section */}
                <div className="flex flex-col items-start font-montserrat text-dark_bg">
                {/* Subheading */}
                <h3 className="text-sm font-semibold uppercase tracking-wide sm:text-base md:text-lg lg:text-xl">
                    About Us
                </h3>

                {/* Title */}
                <h1 className="text-4xl font-bold mt-2 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blueviolet">
                    Building a Smarter Digital Future Together
                </h1>

                {/* Body Text */}
                <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    We specialize in delivering innovative technology solutions tailored to
                    drive growth and success. With a focus on excellence and collaboration, we
                    empower businesses to achieve their goals in a rapidly evolving digital landscape.
                </p>

                {/* Dropdown Section */}
                <div className="max-w-3xl w-full">
                    <DropdownItem
                    id={1}
                    title="Our Mission and Vision"
                    content="Committed to redefining innovation and delivering solutions that matter."
                    isOpen={openDropdown === 1}
                    toggleDropdown={toggleDropdown}
                    />
                    <DropdownItem
                    id={2}
                    title="Our Unique Advantages"
                    content="Leveraging cutting-edge technologies to provide superior value."
                    isOpen={openDropdown === 2}
                    toggleDropdown={toggleDropdown}
                    />
                    <DropdownItem
                    id={3}
                    title="Our Expert Team"
                    content="A group of seasoned professionals driving impactful results."
                    isOpen={openDropdown === 3}
                    toggleDropdown={toggleDropdown}
                    />
                </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
