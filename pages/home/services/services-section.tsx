import { NextPage } from "next";
import React from "react";
import { ServicesSectionType } from "../../../types";
import ServicesComponent from "./ServicesComponents";
import { motion } from "motion/react"

// Services Data
const servicesData = [
    {
        title: "Mobile App Development",
        description: "We create high-performance mobile apps for iOS and Android, delivering seamless user experiences from concept to launch.",
        icon: "/mobile_light_white.svg",
    },
    {
        title: "Web Development",
        description: "We build responsive, user-friendly websites and custom web applications that drive engagement and results.",
        icon: "/desktop_light_white.svg",
    },
    {
        title: "Blockchain Services",
        description: "We help you leverage blockchain technology with services like smart contract development and decentralized applications.",
        icon: "/CPU_light_white.svg",
    },
    {
        title: "Custom Notion Solution",
        description: "We create tailored Notion solutions to optimize workflows, with custom templates and automations to boost productivity.",
        icon: "/Setting_line_light_white.svg",
    },
];

// Helper Function
// Groups Array or Chunk into 3
const chunkArray = (arr: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const serviceChunks = chunkArray(servicesData, 3);

const ServicesSection: NextPage<ServicesSectionType> = () => {
    return (
        <section className="">
            {/* Framer Motion Animation */}
            <motion.div
                initial="hidden"
                whileInView={{ opacity: 1, y:-50 }}
                transition={{duration: 0.5}}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col gap-10 py-10"
            >
                <div className="text-center font-montserrat text-dark_bg px-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                        Our Services
                    </h3>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-blueviolet">
                        What We Offer
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                        Empowering your business with tailored technology solutions
                    </p>
                    <hr className="my-6 border-t border-dashed border-violet-500 opacity-75" />
                </div>
                {/* Content Section */}
                <div className="relative grid items-center justify-center gap-20 ">
                        {/* Horizontal Divider */}
                    <div className="block md:hidden absolute top-[10] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B78CFF] to-transparent z-0"></div>
                    {/* Service Rows */}
                    {serviceChunks.map((chunk, rowIndex) => (
                        <div
                            key={`row-${rowIndex}`}
                            className="grid gap-7 justify-center grid-flow-col md:grid-cols-2 md:grid-flow-row sm:grid-cols-1 md:gid-flow-row"
                        >
                        {chunk.map((service, index) => (
                        <React.Fragment key={service.title}>
                            <ServicesComponent
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            />
                            {/* Vertical Divider */}
                            {index !== chunk.length - 1 && (
                            <div className={`block md:hidden relative top-[105px] w-[2px] bg-gradient-to-b from-transparent via-[#B78CFF] to-transparent`}></div>
                            )}
                        </React.Fragment>
                        ))}
                        </div>
                    ))}
                </div>
            </motion.div>

        </section>
    );
};

export default ServicesSection;
