// components/contact-section.tsx
export type ContactSectionType = {
  className?: string;
};

// components/home-section.tsx
export type HomeSectionType = {
  className?: string;
};
  
// components/header.tsx
export type HeaderType = {
  className?: string;
};

// components/problem-section.tsx
export type ProblemSectionType = {
  className?: string;
};

// components/process-section.tsx
export type ProcessSectionType = {
  className?: string;
};

// components/solution-section.tsx
export type SolutionSectionType = {
  className?: string;
};

// components/SolutionComponent.tsx
export type SolutionComponentType = {
  className?: string;
  heading?: string;
  subHeading?: string;
};

// components/WCUComponent.tsx 
export type WCUComponentType = {
  className?: string;
  title?: string;
  description?: string;
  icon?: string;
};

// components/why-choose-us.tsx 
export type WhyChooseUsType = {
  className?: string;
};

// context/LanguageContext.tsx
export type Language = "ENG" | "FR";

// components/home/hero/hero-section.tsx
export type HeroSectionType = {
  className?: string;
};

// components/home/services/hero-section.tsx
export type ServicesSectionType = {
  className?: string;
}

// components/home/about/about-section.tsx
export type AboutComponentType = {
  className?: string;
};

// components/home/services/ServicesComponent.tsx
export type ServicesComponentType = {
  className?: string;
  title?: string;
  description?: string;
  icon?: string;
};

// components/home/about/DropdownItem.tsx
export type DropdownItemProps = {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  toggleDropdown: (id: number) => void;
};