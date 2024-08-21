import type { NextPage } from "next";
import WCUComponent, { WCUComponentType } from "./WCUComponent";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center py-[285px] px-[150px] box-border gap-[70px] bg-[url('/home-section@3x.png')] bg-cover bg-no-repeat bg-[center] text-center text-17xl text-white font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[30px]">
        <h1 className="m-0 relative text-inherit font-bold font-[inherit]">
        Expertise That Sets Us Apart
        </h1>
        <div className="relative text-lg text-center">
        Transforming Workflows, Maximizing Productivity
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[30px] text-left text-lg md:flex-col md:items-center md:justify-center">
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <WCUComponent
            title="Partners in Growth"
            description="We're not just consultants; we're your partners in digital transformation, empowering your team to achieve maximum efficiency, productivity, and growth."
            icon="/growth.svg"
            className="hover:scale-[1.05] transition-transform"
          />
          <WCUComponent
            title="Microsoft Experience"
            description="Our team has honed their skills at Microsoft, working with leading CRM and customer service platforms."
            icon="/experience.svg"
            className="hover:scale-[1.05] transition-transform"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <WCUComponent
            title="Expert Team"
            description="Seasoned software developers and strategists with diverse technical expertise."
            icon="/team.svg"
            className="hover:scale-[1.05] transition-transform"
          />
          <WCUComponent
            title="Workflow Optimization"
            description="We leverage our experience to optimize your workflows and enhance customer experiences."
            icon="/workflow.svg"
            className="hover:scale-[1.05] transition-transform"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <WCUComponent
            title="Custom Notion Solutions"
            description="We create tailored Notion workspaces that perfectly align with your unique business needs."
            icon="/solution.svg"
            className="hover:scale-[1.05] transition-transform"
          />
          <WCUComponent
            title="Seamless Integration"
            description="Our proficiency in various development tools ensures a smooth and tailored Notion experience."
            icon="/integration.svg"
            className="hover:scale-[1.05] transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;