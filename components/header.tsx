import type { NextPage } from "next";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch overflow-hidden flex flex-row items-center justify-center py-[15px] px-40 gap-[30px] text-left text-5xl text-blueviolet font-montserrat lg:pl-40 lg:pr-40 lg:box-border md:flex-row md:flex-wrap md:items-center md:justify-start md:pl-[30px] md:pr-[30px] md:box-border ${className}`}
    >
      <h1 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] flex items-center h-[29px] z-[2]">
        <span>
          <span>QUANTBOOST</span>
          <span className="text-white"> TECHNOLOGY</span>
        </span>
      </h1>
      <div className="h-[29px] overflow-hidden flex flex-row items-center justify-start gap-[30px] z-[1] md:hidden md:w-auto md:[align-self:unset] md:flex-row">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block">
          Home
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block">
          Problem
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block">
          Solution
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block">
          Advantage
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block">
          Our Process
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-inter text-white text-left inline-block">
          Contact Us
        </button>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative overflow-hidden shrink-0 hidden z-[0] md:flex">
        <img
          className="absolute h-3/6 w-9/12 top-[25%] right-[12.5%] bottom-[25%] left-[12.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </button>
    </header>
  );
};

export default Header;
