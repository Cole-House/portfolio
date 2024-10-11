import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(thresh = 0.75, sectionName: SectionName) {
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    // useInView is a hook that returns a ref and a boolean value
    const {ref, inView} = useInView({
        threshold: thresh,
    });

    useEffect(() => { 
        // if the user is viewing the section and the last click was more than 1 second ago then we will set the section
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return { ref };
}