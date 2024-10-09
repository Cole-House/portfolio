"use client";

import React, {useEffect, useRef} from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Projects() {
  const { setActiveSection } = useActiveSectionContext();
  // useInView is a hook that returns a ref and a boolean value
  const {ref, inView} = useInView({
    threshold: 0.75,
    });

  useEffect(() => { 
    if (inView) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);
  return (
    <section
        ref={ref} id="projects" className="scroll-mt-28 mb-28"
    >
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => ( 
                    // When you want to add "filters" then the key must be unique 
                    // React "Fragment" is a nempty element that doesn't clutter the DOM
                    <React.Fragment key={index}>
                        {/* taking in the project's data through "spreading" into the custom Project component */}
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}

