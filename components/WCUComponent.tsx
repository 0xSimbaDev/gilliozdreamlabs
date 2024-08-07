import type { NextPage } from "next";

export type WCUComponentType = {
  className?: string;
  title?: string;
  description?: string;
  icon?: string;
};

const WCUComponent: NextPage<WCUComponentType> = ({
  className = "",
  title,
  description,
  icon,
}) => {
  return (
    <div
      className={`w-[380px] flex flex-row items-start justify-start text-left text-lg text-white font-montserrat ${className}`}
    >
      <div className="w-[130px] relative h-[140px]">
        <div
          className="absolute top-[0px] left-[0px] shadow-[0px_7px_16px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-gray-1000 w-[70px] h-[70px] overflow-hidden flex flex-row items-center justify-center p-[15px] box-border"
          src={icon}
        >
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/carbongrowth.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[100px] max-w-full overflow-hidden h-[140px]"
          alt=""
          src="/vector-11.svg"
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
        <b className="self-stretch relative">{title}</b>
        <div className="self-stretch flex-1 relative text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};

export default WCUComponent;
