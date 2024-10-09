"use client";

import React, { createContext, useContext, useState } from 'react'
import { links } from '@/lib/data'
// Create a type for the section name
type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  return (
    //Passing the activeSection and setActiveSection to the children
    <ActiveSectionContext.Provider
        value={{ activeSection, setActiveSection }}
    > {children} </ActiveSectionContext.Provider>
)
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
  }
