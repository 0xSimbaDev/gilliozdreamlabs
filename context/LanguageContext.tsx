import { createContext, ReactNode, useContext, useState } from "react";
import { Language } from "../types";

const LanguageContext = createContext({
  language: "ENG" as Language,
  setLanguage: (language: Language) => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ENG");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);