import type { NextPage } from "next";
import SolutionComponent from "./SolutionComponent";

export type SolutionSection1Type = {
  className?: string;
};

const SolutionSection: NextPage<SolutionSection1Type> = ({
  className = "",
}) => {
  return (
    <div className={`self-stretch flex flex-col items-center justify-center py-[285px] px-[150px] box-border gap-[70px] bg-[url('/solution-section@3x.png')] bg-cover bg-no-repeat bg-[center] text-left text-17xl text-white font-montserrat md:pl-[30px] md:pr-[30px] md:box-border ${className}`}>
      <div className="self-stretch h-[170px] flex flex-col items-start justify-start gap-[30px] md:items-center md:justify-center">
        <b className="self-stretch relative md:text-center">
          <span>{` Transform Your `}</span>
          <span className="text-blueviolet">Business</span>
          <span> with Notion</span>
        </b>
        <div className="w-[710px] relative text-lg inline-block md:text-center ">
          <span>{`Say goodbye to scattered tools and missed opportunities. Notion, tailored by `}</span>
          <b className="text-blueviolet">
            <span>{`Quantboost `}</span>
          </b>
            <span>
              Technology, empowers your team with a unified workspace that fosters
              collaboration, streamlines workflows, and scales with your
              business.
            </span>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[30px] text-lg">
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
    </div>
  );
};

export default SolutionSection;