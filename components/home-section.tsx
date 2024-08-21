import type { NextPage } from "next";

export type HomeSectionType = {
  className?: string;
};

const HomeSection: NextPage<HomeSectionType> = ({ className = "" }) => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main
      className={`self-stretch flex flex-row items-center justify-center py-[285px] px-[150px] gap-[30px] bg-[url('/home-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-white font-montserrat lg:self-stretch lg:w-auto lg:pl-[100px] lg:pr-[100px] lg:box-border md:self-stretch md:w-auto md:flex-col md:items-center md:justify-center md:pl-0 md:pr-0 md:box-border sm:w-auto sm:[align-self:unset] sm:h-auto sm:flex-col ${className}`}
    >
       <div className="w-[555px] h-[294px] flex flex-col items-start justify-start gap-[30px] md:h-auto md:flex-col md:items-center md:justify-center">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] md:text-center">
          Simplify, Streamline, Succeed: Quantboost's Notion Solutions
        </h1>
        <h3 className="m-0 w-[298.4px] relative text-lg font-normal font-[inherit] inline-block md:text-center">
          Empower Your Team, Eliminate Chaos, Achieve More
        </h3>
        <button 
          className="cursor-pointer [border:none] py-[18px] px-0 bg-blueviolet w-[150px] shadow-[0px_0px_25px_rgba(140,_48,_245,_0.25)] rounded-2xl overflow-hidden flex flex-row items-center justify-center box-border"
          onClick={handleContactClick} 
        >
        <b className="relative text-lg font-montserrat text-white text-left">
          Contact Us
        </b>
      </button>
      </div>
      <img
        className="w-[555px] relative rounded-2xl h-[325px] object-cover lg:pr-0 lg:box-border sm:self-stretch sm:w-auto sm:flex-1 sm:rounded-2xl sm:h-auto"
        alt=""
        src="/image@2x.png"
      />
    </main>
  );
};

export default HomeSection;
