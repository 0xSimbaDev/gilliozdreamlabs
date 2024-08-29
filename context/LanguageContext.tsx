import { createContext, ReactNode, useContext, useState } from "react";

const LanguageContext = createContext({
  language: "ENG",
  setLanguage: (language: string) => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("ENG");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);