import type { NextPage } from "next";
import WCUComponent from "./WCUComponent";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[895px] flex flex-col items-center justify-center py-[70px] px-[150px] box-border gap-[70px] bg-[url('/whychooseus@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-17xl text-white font-montserrat ${className}`}
    >
      <b className="relative">Why Choose Us?</b>
      <div className="self-stretch flex flex-col items-center justify-center gap-[30px] text-left text-lg md:flex-col md:items-center md:justify-center">
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <WCUComponent
            title="Partners in Growth"
            description="We're not just consultants; we're your partners in digital transformation, empowering your team to achieve maximum efficiency, productivity, and growth."
            icon="100x100x1244245639"
          />
          <WCUComponent
            title="Microsoft Experience"
            description="Our team has honed their skills at Microsoft, working with leading CRM and customer service platforms."
            icon="100x100x1057832645"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <WCUComponent
            title="Expert Team"
            description="Seasoned software developers and strategists with diverse technical expertise."
          />
          <WCUComponent
            title="Workflow Optimization"
            description="We leverage our experience to optimize your workflows and enhance customer experiences."
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <WCUComponent
            title="Custom Notion Solutions"
            description="We create tailored Notion workspaces that perfectly align with your unique business needs."
          />
          <WCUComponent
            title="Seamless Integration"
            description="Our proficiency in various development tools ensures a smooth and tailored Notion experience."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;