import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import { useLanguage } from './LanguageContext';

interface TranslationContextType {
  translations: any; 
  setTranslations: (translations: any) => void;
}

const TranslationContext = createContext<TranslationContextType>({
  translations: {}, 
  setTranslations: () => {},
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [translations, setTranslations] = useState({});
  const { language } = useLanguage() as { language: Language }; 

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../lang/${language}.json`); 
        setTranslations(response.default); 
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    };

    loadTranslations(); 
  }, [language]);

  return (
    <TranslationContext.Provider value={{ translations, setTranslations }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);