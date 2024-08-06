import type { NextPage } from "next";
import PartnersInGrowth from "./partners-in-growth";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[895px] flex flex-col items-center justify-start gap-[70px] bg-[url('/whychooseus@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-white font-montserrat ${className}`}
    >
      <b className="relative">Why Choose Us?</b>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[30px] text-5xl md:flex-col md:items-center md:justify-center">
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <PartnersInGrowth
            title="Partners in Growth"
            description="We're not just consultants; we're your partners in digital transformation, empowering your team to achieve maximum efficiency, productivity, and growth."
            icon="/growth.svg"
          />
          <div className="w-[500px] flex flex-row items-start justify-start gap-[30px]">
            <div className="w-[130px] relative h-[194px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-2xl w-[100px] h-[100px] overflow-hidden"
                alt=""
                src="/experience.svg"
              />
              <img
                className="absolute top-[0px] left-[130px] max-w-full overflow-hidden h-[194px]"
                alt=""
                src="/vector-111.svg"
              />
            </div>
            <div className="w-[296px] relative h-[142px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[296px]">
                Microsoft Experience
              </b>
              <div className="absolute top-[44px] left-[0px] text-lg inline-block w-[252.6px]">
                Our team has honed their skills at Microsoft, working with
                leading CRM and customer service platforms.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <div className="w-[500px] flex flex-row items-start justify-start gap-[30px]">
            <div className="w-[130px] relative h-[172px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-2xl w-[100px] h-[100px] overflow-hidden"
                alt=""
                src="/team.svg"
              />
              <img
                className="absolute top-[0px] left-[130px] max-w-full overflow-hidden h-[172px]"
                alt=""
                src="/vector-112.svg"
              />
            </div>
            <div className="w-[227px] relative h-[172px]">
              <b className="absolute top-[0px] left-[0px]">Expert Team</b>
              <div className="absolute top-[44px] left-[0px] text-lg inline-block w-[227px]">
                Seasoned software developers and strategists with diverse
                technical expertise.
              </div>
            </div>
          </div>
          <div className="w-[500px] flex flex-row items-start justify-start gap-[30px]">
            <div className="w-[130px] relative h-[194px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-2xl w-[100px] h-[100px] overflow-hidden"
                alt=""
                src="/workflow.svg"
              />
              <img
                className="absolute top-[0px] left-[130px] max-w-full overflow-hidden h-[194px]"
                alt=""
                src="/vector-111.svg"
              />
            </div>
            <div className="w-[295px] relative h-[164px]">
              <b className="absolute top-[0px] left-[0px]">
                Workflow Optimization
              </b>
              <div className="absolute top-[44px] left-[0px] text-lg inline-block w-[227px]">
                We leverage our experience to optimize your workflows and
                enhance customer experiences.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <div className="w-[500px] flex flex-row items-start justify-start gap-[30px]">
            <div className="w-[130px] relative h-[172px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-2xl w-[100px] h-[100px] overflow-hidden"
                alt=""
                src="/solution.svg"
              />
              <img
                className="absolute top-[0px] left-[130px] max-w-full overflow-hidden h-[172px]"
                alt=""
                src="/vector-112.svg"
              />
            </div>
            <div className="w-[314px] relative h-[142px]">
              <b className="absolute top-[0px] left-[0px]">
                Custom Notion Solutions
              </b>
              <div className="absolute top-[44px] left-[0px] text-lg inline-block w-[227px]">
                We create tailored Notion workspaces that perfectly align with
                your unique business needs.
              </div>
            </div>
          </div>
          <div className="w-[500px] flex flex-row items-start justify-start gap-[30px]">
            <div className="w-[129.5px] relative h-[194px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-2xl w-[100px] h-[100px] overflow-hidden"
                alt=""
                src="/integration.svg"
              />
              <img
                className="absolute top-[0px] left-[130px] max-w-full overflow-hidden h-[194px]"
                alt=""
                src="/vector-111.svg"
              />
            </div>
            <div className="w-[266px] relative h-[164px]">
              <b className="absolute top-[0px] left-[0px]">
                Seamless Integration
              </b>
              <div className="absolute top-[44px] left-[0px] text-lg inline-block w-[227px]">
                Our proficiency in various development tools ensures a smooth
                and tailored Notion experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
