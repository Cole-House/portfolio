"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
// Since we kniow EXACTLY what values we are importing we can use "typeof" to define the type
type ProjectProps = (typeof projectsData)[number];

// We performed small optimization by separating the Project component from the Projects component, allowing projects to be used by clients
export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    //need to give this hook two things "target": reference to the element you want to animate  
    // "offset": what point do you want the animation to start and at what point do you want it to end
    const ref = useRef<HTMLDivElement>(null);
    // scrollYProgress is a value between 0 and 1 that represents the scroll position of the target element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    // useTransform is a function that takes a value and maps it to another value; intakes the scrollYProgress value
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1.0]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1.0]);


    return (
        <motion.div 
            ref={ref} 
            style = {{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section 
            className=' bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:mb-7 last:mb-0 relative sm:group-even:pl-8 rounded-lg'
        >
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
                className='absolute top-8 -right-40absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:right-[intial] group-even:-left-40'
            ></Image>
        </section>
        </motion.div>
    )
}