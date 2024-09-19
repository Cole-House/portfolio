"use client"

import Image from 'next/image'
import React from 'react'
import myImage from '@/public/myPortrait.jpg'
import { motion } from "framer-motion";

export default function Intro() {
  return (
    // better to use sections when everything INSIDE is related to each other 
    <section> 
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "tween",
                      duration: 0.2,
                    }}
                >
                  <Image 
                    src={myImage}
                    alt="Cole's portrait"
                    width={192}
                    height={192}
                    quality="95"
                    // priority will get this to load first 
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
                    <motion.span 
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                     👋
                    </motion.span>  
                </motion.div>
            </div>
        </div>

        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello, I'm Cole.</span> I'm an aspiring{" "}
            <span className="font-bold">Software Developer</span> with experience in{" "}
            <span className="font-bold">Full-Stack and AI</span> . I enjoy
            building <span className="italic">web-apps</span>. that improve{" "}
            <span className="underline">people's lives</span>.
        </motion.h1>

    </section>
  )
}
