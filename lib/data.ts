import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaHandHoldingWater } from "react-icons/fa";
import socialPlaiImg from "@/public/socialPlaiImg.png";
import dashboardImg from "@/public/dashboardImg.png";
import h2ocImg from "@/public/h2ocImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
// as const: makes it known that it should be these EXACT string values

export const experiencesData = [
  {
    title: "Graduated with Bachelor's",
    location: "University of Hawaii",
    description:
      "I graduated with honors in just three years, majoring in Information and Computer Science, while balancing a part-time job and extracurriculars. ",
    // React.createElement is used to render the icon component as a jsx react element
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Founding Member",
    location: "H2OC",
    description:
      "Education platform for property managers to combat deferred maintenance and rising insurance premiums. Acted as a technical-lead for research along with product and software development.",
    icon: React.createElement(FaHandHoldingWater),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "City & County of Honolulu",
    description:
      "Gained experience with full-stack developing modern web-apps that streamlined outdated processes for various departments. My stack included Typescript, Angular, Express/Node.js, Apex Charts and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Software Engineer Resident",
    location: "Headstarter",
    description:
      "Over the next four months, I’ll be working on challenging projects at the intersection of software development and AI, while gaining mentorship from industry professionals. I'm open to full-time opportunities, contact me below :)",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "SocialPLAI",
    description:
      "Worked as a team meeting with a client for Capstone Project. Developed the front-end and game logic for our synchronous online 2-player game designed to gather data to expedite accurate developmental delay diagnosis.",
    tags: ["React", "Bootstrap", "S3 Buckets", "Meteor", "MongoDB"],
    imageUrl: socialPlaiImg,
    linkUrl:
      "https://docs.google.com/presentation/d/1-dd_XB8rR4Qd6FTGiHRa98l97JPqsv0r/edit#slide=id.g22e7e34229a_0_6",
    codeUrl: "https://github.com/ucsfdigitalhealth/socialplai",
  },
  {
    title: "Data Dashboards",
    description:
      "Built multiple data dashboards for internal case management applications using MEAN stack, helping various departments save time gathering case stats through a specialized, modern and interactive interface. Led user group sessions to gather feedback and iterate on designs.",
    tags: [
      "Typescript",
      "Angular",
      "Express",
      "Node.js",
      "Apex Charts",
      "MongoDB",
      "Figma",
      "REST API",
    ],
    imageUrl: dashboardImg,
    linkUrl: "",
    codeUrl: "",
  },
  {
    title: "H2OC",
    description:
      "Developed educational platform to alleviate pain points for beneficiaries and aid conservation of Oahu condominiums with professionally curated curriculum, interactive lessons and topic videos utilizing AI.",
    tags: [
      "Bootstrap",
      "Lumen5",
      "Meteor",
      "MongoDB",
      "Chart.js",
      "Customer/Market Research",
    ],
    imageUrl: h2ocImg,
    linkUrl: "https://www.youtube.com/watch?v=2SWbr4vUf_A&t=10s",
    codeUrl: "https://github.com/ecadiena/H20C",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Express",
  "Python",
  "Flask",
  "RAG",
  "Figma",
  "Agile",
  "Framer Motion",
] as const;
