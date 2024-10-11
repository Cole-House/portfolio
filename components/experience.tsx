"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { experiencesData } from "@/lib/data";
  import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  return (
    <section>
        <SectionHeading>My Experiences</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((experience, index) => (
                    //We use React.Fragment to wrap the VerticalTimelineElement and avoid using key on a third party package
                    <React.Fragment key={index}> 
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af", 
                            }}
                            date={experience.date}
                            icon={experience.icon}
                            iconStyle={{ background: "white", fontSize: "1.5rem",}}
                        >
                            <h3 className="font-semibold capitalize">{experience.title}</h3>
                            <p className="font-normal !mt-0">{experience.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{experience.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>

                ))
            }
        </VerticalTimeline>
    </section>
  )
}
