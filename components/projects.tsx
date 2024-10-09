import React, {useRef} from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section>
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

