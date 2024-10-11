"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  // useSectionInView is a custom hook used to set the active section
  const { ref } = useSectionInView(0.75, 'About');

  return (
    <motion.section
        ref={ref} 
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        {/* We are passing the "children" prop into the react component we made */}
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        After graduating with my Bachelor's in{" "}
        <span className="font-medium">3 years</span> I decided to pursue my
        passion for programming and through contract work I gained experience in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        My favorite part of programming is the{" "}
        <span className="font-medium"> act of creating. </span> I <span className="italic">love</span> the
        feeling of ideating and developing solutions that solve{" "}<span className="font-medium"> real problems </span>
        for{" "} <span className="font-medium"> real people. </span> My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Python and always looking to
        learn new technologies. I am currently sharpening my skills as a {" "}
        <span className="font-medium">Software Engineer Resident </span> at {""}
        <span className="font-medium underline cursor-pointer"><a href="https://headstarter.co/" target="_blank" rel="noopener noreferrer">Headstarter</a></span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy time outside hiking, biking, surfing, playing soccer, trying ono food spots and chilling with my cat ^ u ^ . I also enjoy
        watching netflix/anime, football and {" "} <span className="font-medium">learning new things everyday</span>. I am currently learning about{" "}
        <span className="font-medium">Python and it's AI application to web apps</span>. I'm also
        learning about prompting and meta-prompting.
      </p>
    </motion.section>
  )
}
