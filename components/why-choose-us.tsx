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
          <div className="w-[380px] flex flex-row items-start justify-start">
            <div className="w-[130px] relative h-[140px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_7px_16px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-gray-1000 w-[70px] h-[70px] overflow-hidden flex flex-row items-center justify-center p-[15px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/riteamfill.svg"
                />
              </div>
              <img
                className="absolute top-[0px] left-[100px] max-w-full overflow-hidden h-[140px]"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
              <b className="self-stretch relative">Expert Team</b>
              <div className="self-stretch flex-1 relative text-xs">
                Seasoned software developers and strategists with diverse
                technical expertise.
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[140px] flex flex-row items-start justify-start">
            <div className="w-[130px] relative h-[140px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_7px_16px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-gray-1000 w-[70px] h-[70px] overflow-hidden flex flex-row items-center justify-center p-[15px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/hugeiconsworkflowcircle05.svg"
                />
              </div>
              <img
                className="absolute top-[0px] left-[100px] max-w-full overflow-hidden h-[140px]"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px]">
              <b className="self-stretch relative">Workflow Optimization</b>
              <div className="self-stretch flex-1 relative text-xs">
                We leverage our experience to optimize your workflows and
                enhance customer experiences.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] md:flex-col">
          <div className="w-[380px] flex flex-row items-start justify-start">
            <div className="w-[130px] relative h-[140px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_7px_16px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-gray-1000 w-[70px] h-[70px] overflow-hidden flex flex-row items-center justify-center p-[15px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/antdesignsolutionoutlined.svg"
                />
              </div>
              <img
                className="absolute top-[0px] left-[100px] max-w-full overflow-hidden h-[140px]"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
              <b className="self-stretch relative">Custom Notion Solutions</b>
              <div className="self-stretch flex-1 relative text-xs">
                We create tailored Notion workspaces that perfectly align with
                your unique business needs.
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[140px] flex flex-row items-start justify-start">
            <div className="w-[130px] relative h-[140px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_7px_16px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-gray-1000 w-[70px] h-[70px] overflow-hidden flex flex-row items-center justify-center p-[15px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/carbonintegration.svg"
                />
              </div>
              <img
                className="absolute top-[0px] left-[100px] max-w-full overflow-hidden h-[140px]"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
              <b className="self-stretch relative">Seamless Integration</b>
              <div className="self-stretch flex-1 relative text-xs">
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
