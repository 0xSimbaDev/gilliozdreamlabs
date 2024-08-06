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
      className={`w-[500px] flex flex-row items-start justify-start gap-[30px] text-left text-5xl text-white font-montserrat ${className}`}
    >
      <div className="w-[130px] relative h-[260px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-2xl w-[100px] h-[100px] overflow-hidden"
          alt=""
          src={icon}
        />
        <img
          className="absolute top-[0px] left-[130px] max-w-full overflow-hidden h-[260px]"
          alt=""
          src="/vector-11.svg"
        />
      </div>
      <div className="w-[314px] relative h-[260px]">
        <b className="absolute top-[0px] left-[0px] inline-block w-[314px] h-[41.4px]">
          {title}
        </b>
        <div className="absolute top-[56.4px] left-[0px] text-lg inline-block w-[297px] h-[188.4px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default WCUComponent;
