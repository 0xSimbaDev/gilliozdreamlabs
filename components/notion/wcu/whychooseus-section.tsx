import type { NextPage } from "next";
import WCUComponent from "./WCUComponent";
import { WCUComponentType, WhyChooseUsType } from "../../../types";
import { motion } from "motion/react"

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {

  const data = {
    why_choose_us: {
      "headline": "Expertise That Sets Us Apart",
      "subheading": "Transforming Workflows, Maximizing Productivity",
      "wcuComponents": [
        { "title": "Partners in Growth", "description": "We're not just consultants; we're your partners in digital transformation, empowering your team to achieve maximum efficiency, productivity, and growth.", "icon": "/partners-growth.svg" },
        { "title": "Microsoft Experience", "description": "Our team has honed their skills at Microsoft, working with leading CRM and customer service platforms.", "icon": "/microsoft-experience.svg" },
        { "title": "Expert Team", "description": "Seasoned software developers and strategists with diverse technical expertise.", "icon": "/expert-team.svg" },
        { "title": "Workflow Optimization", "description": "We leverage our experience to optimize your workflows and enhance customer experiences.", "icon": "/workflow-optimization.svg" },
        { "title": "Custom Notion Solutions", "description": "We create tailored Notion workspaces that perfectly align with your unique business needs.", "icon": "/custom-notion.svg" },
        { "title": "Seamless Integration", "description": "Our proficiency in various development tools ensures a smooth and tailored Notion experience.", "icon": "/seamless-integration.svg" }
      ]
    },
  }

  return (
    <section
      className={`${className}`}
    >
      <motion.div 
        initial="hidden"
        whileInView={{ opacity: 1, y:-50 }}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center justify-center gap-14 bg-cover bg-no-repeat bg-center text-center text-white font-montserrat md:px-6 md:py-10 "
      >
        <div className="flex flex-col items-center justify-center text-dark_bg"> 
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-blueviolet">
            {data.why_choose_us?.headline}
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
            {data.why_choose_us?.subheading} 
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-left md:flex-col md:items-center md:justify-center">
          {data.why_choose_us?.wcuComponents.map((componentData: WCUComponentType, index: number) => { 
            if (index % 2 === 0) {
              return (
                <div key={index} className="flex flex-row items-start justify-start gap-6 md:flex-col">
                  <WCUComponent {...componentData} className="hover:scale-105 transition-transform" />
                  {data.why_choose_us.wcuComponents[index + 1] && ( 
                    <WCUComponent {...data.why_choose_us.wcuComponents[index + 1]} className="hover:scale-105 transition-transform" />
                  )}
                </div>
              );
            }
            return null; 
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;