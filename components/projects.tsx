import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';

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
// Since we kniow EXACTLY what values we are importing we can use "typeof" to define the type
type ProjectProps = (typeof projectsData)[number];

function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    return (
        <section className=' group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:mb-7 last:mb-0 relative'>
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                <ul className="flex flex-wrap mt-4 pt-5 gap-2 sm:mt-auto">
                    {
                        tags.map((tag, index) => (
                            <li 
                                key={index}
                                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                            >{tag}</li>
                        ))
                    }
                </ul>
            </div>

            <Image 
                src={imageUrl} 
                alt="Project..." 
                quality={95}
                // absolute takes the element out of the regular flow of the document, and takes up no space. positioned relative to section
                // for the image and description to switch sides for "even" projects we add the "group-even" class
                className='absolute top-8 -right-40absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[intial] group-even:-left-40'
            ></Image>
        </section>
    )
}
