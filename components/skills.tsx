"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      // stagger the animation of each skill <li> element
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export default function Skills() {
  const { ref } = useSectionInView(0.75, "Skills");
  return (
    <section
        id="skills"
        ref={ref}
        className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
        <SectionHeading> My Skills </SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {
                skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        // these props are used to trigger the animation when the element is in view and only once
                        whileInView="animate"
                        viewport={{
                        once: true,
                        }}
                        // custom prop is used to pass the index of the current skill into fadeInAnimationVariants
                        custom={index}
                    >
                    {skill}
                  </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
