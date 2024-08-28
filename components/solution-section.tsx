import type { NextPage } from "next";
import SolutionComponent from "./SolutionComponent";

export type SolutionSection1Type = {
  className?: string;
};

const SolutionSection: NextPage<SolutionSection1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center py-20 md:py-10 px-6 md:px-10 bg-cover bg-no-repeat bg-center text-white font-montserrat ${className}`}
      style={{ backgroundImage: "url('/solution-section@3x.png')" }}
    >
      <div className=" w-full max-w-5xl mb-12 text-left"> 
        <h1 className="text-[1.5rem] md:text-center sm:text-[1rem]">
          <span>{` Transform Your `}</span>
          <span className="text-blueviolet">Business</span>
          <span> with Notion</span>
        </h1>
        <p className="text-lg md:text-center sm:text-[0.8rem]"> 
          <span>{`Say goodbye to scattered tools and missed opportunities. Notion, tailored by `}</span>
          <b className="text-blueviolet font-bold sm:text-[0.9rem]">
            <span>{`Quantboost `}</span>
          </b>
          <b className="font-bold sm:text-[0.9rem]">
            <span>{` Technology`}</span>
          </b>
          <span>
            , empowers your team with a unified workspace that fosters
            collaboration, streamlines workflows, and scales with your business.
          </span>
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-5xl">
        <SolutionComponent
        heading="Centralized Hub"
        subHeading="All your essential tools and data are in one place, accessible from anywhere."
        />
        <SolutionComponent
        heading="Scalable Solution"
        subHeading="Easily adapt and expand your Notion workspace as your business grows."
        />
        <SolutionComponent
        heading="Steamline Workflow"
        subHeading="Customize Notion to match your unique processes, eliminating the need for multiple tools."
        />
        <SolutionComponent
        heading="Enhance Collaboration"
        subHeading="Foster seamless communication and knowledge sharing among your team."
        />
        <SolutionComponent
        heading="Expert Guidance"
        subHeading="Leverage Quantboost's expertise to tailor Notion precisely to your needs."
        />
        <SolutionComponent
        heading="Secure & Accessible"
        subHeading="Your data in Notion is securely stored and accessible from anywhere, giving you peace of mind and flexibility."
        />
        <SolutionComponent
        heading="Data Control"
        subHeading="You have full control over your data, with options to easily back up and export it whenever needed."
        />
        <SolutionComponent
        heading="Tailored Solutions"
        subHeading="We customize Notion to fit your unique needs, whether you're integrating with existing systems or building a new tech stack from the ground up."
        />
      </div>
    </section>
  );
};

export default SolutionSection;