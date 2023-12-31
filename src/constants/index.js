import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  mvp,
  mb,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  storybook,
  angular,
  azure,
  formik,
  shoopy,
  shoopy2,
  looky,
  youtube
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Programming Instructor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "formik",
    icon: formik,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Storybook ",
    icon: storybook,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "MVP Solutions",
    icon: mvp,
    iconBg: "#383E56",
    date: "May 2022 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Programming Instructor",
    company_name: "Mind Builders Academy",
    icon: mb,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Present",
    points: [
      "creating engaging lesson plans ",
      "mentoring students to achieve their programming goals."

    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce (Shoopy)",
    description:
      "e-commerce website built with React framework Using TypeScript,  React bootstrap, react router dom, Formik, yup, axios, slickcarousel, reactslick, lottie files.",
    tags: [

      {
        name: "React.JS",
        color: "pink-text-gradient",
      },
    ],
    image: shoopy2,
    source_code_link: "https://github.com/ahmed-abdelmageed/e-commerce",
    website_link: "https://e-commerce-one-silk.vercel.app/"
  },
  {
    name: "Youtube Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React.JS",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/ahmed-abdelmageed/youtube-react",
    website_link: "https://youtube-react-mu.vercel.app/"

  },
  {
    name: "Movies (Looky)",
    description:
      "Movies website using react cli, react router dom, useContext, useNavigate, useEffect, useState, axios,- formik , yup , bootstrap , react,bootstrap, lottie files",
    tags: [
      {
        name: "React.JS",
        color: "pink-text-gradient",
      },
    ],
    image: looky,
    source_code_link: "https://github.com/ahmed-abdelmageed/my-app",
    website_link: "https://moviesangular-gm7y.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };