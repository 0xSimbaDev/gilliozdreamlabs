import type { NextPage } from 'next';
import { useLanguage } from '../context/LanguageContext';
import { HeaderType } from '../types';

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage(); 

  return (
    <header className={`self-stretch overflow-hidden flex flex-row items-center justify-center py-[15px] px-40 gap-[30px] text-left text-5xl text-blueviolet font-montserrat lg:pl-40 lg:pr-40 lg:box-border md:flex-row md:flex-wrap md:items-center md:justify-start md:pl-[30px] md:pr-[30px] md:box-border ${className}`}>
      <h1 className="m-0 flex-1 relative text-inherit sm:text-[1.2rem] font-bold font-[inherit] flex items-center h-[29px] z-[2]">
        <span>
          <span>QUANTBOOST</span>
          <span className="text-white"> TECHNOLOGY</span>
        </span>
      </h1>
      <nav className="h-[29px] overflow-hidden flex flex-row items-center justify-start gap-[30px] z-[1] md:w-auto md:[align-self:unset] md:flex-row">
        <div className="flex"> 
          <button
            className={`py-2 px-4 rounded-l 
                        ${language === "ENG" ? 'bg-blueviolet text-white' : 'bg-gray-300 text-gray-700'} 
                        hover:bg-opacity-80 transition duration-300 cursor-pointer`}
            onClick={() => setLanguage("ENG")}
          >
            ENG
          </button>
          <button
            className={`py-2 px-4 rounded-r 
                        ${language === "FR" ? 'bg-blueviolet text-white' : 'bg-gray-300 text-gray-700'} 
                        hover:bg-opacity-80 transition duration-300 cursor-pointer`}
            onClick={() => setLanguage("FR")}
          >
            FR
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
