import {
  careatorlogo,
  css,
  git,
  html,
  javascript,
  jazz,
  mongodb,
  nestjs,
  nodeDeveloper,
  nodejs,
  piktorlabslogo,
  premia,
  reactDeveloper,
  reactjs,
  redux,
  sr,
  tailwind,
  threejs,
  typescript,
  ustlogo,
  vax,
  webDeveloper,
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
    icon: webDeveloper,
  },
  {
    title: "React Developer",
    icon: reactDeveloper,
  },
  {
    title: "Backend Developer",
    icon: nodeDeveloper,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest Js",
    icon: nestjs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Developer III - Software Engineer ",
    company_name: "UST Global",
    icon: ustlogo,
    iconBg: "#383E56",
    date: "January 2023 - Till Date",
    points: [
      "Developed a single-page application within a short timeframe using HTML5 and JavaScript.",
      "Implemented intricate animation logic using GSAP and JavaScript.",
      "Utilized OKTA APIs to establish authorization and authentication features in one of the applications.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Piktrolabs",
    icon: piktorlabslogo,
    iconBg: "#E6DEDD",
    date: "June 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed to the migration of a web application from Angular to React.js, enhancing its performance and user experience by leveraging modern technology.",
      "Crafted Node.js logic for filtering AWS logs, optimizing log management and analysis processes for improved system monitoring and troubleshooting.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Careator",
    icon: careatorlogo,
    iconBg: "#383E56",
    date: "April 2021 - June 2022",
    points: [
      "	Effectively managed the user interfaces (UI) for four distinct web applications",
      "Developed engaging and interactive animations for multiple web applications, enhancing user engagement and overall aesthetics.",
      "	Implemented a robust user authentication and role-based access control system, enhancing security and ensuring controlled access for users within the applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product",
    name: "Smrutikanta Rout",
    designation: "Fullstack Developer",
    company: "UST",
    image: sr,
  },
  {
    testimonial:
      "I've never met a web developer whose exceptional teamwork and unwavering commitment greatly contribute to our team's success.",
    name: "Arun",
    designation: "Fullstack Developer",
    company: "UST",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Premia",
    description:
      "The project aimed to showcase the exceptional features of the Karizma XMR bike and effectively engage potential customers.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Jquery",
        color: "blue-text-gradient",
      },
    ],
    image: premia,
    source_code_link: "#",
  },
  {
    name: "VAX",
    description:
      "The project was initiated to assess the security and reliability of T-Mobile's diverse range of client-tailored APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: vax,
    source_code_link: "#",
  },
  {
    name: "Jazz",
    description:
      "The project's primary goal is to streamline project management for T-Mobile developers by creating a dedicated website. This platform enables developers to efficiently set up project structures resembling GitLab, establish CI/CD pipelines, and provision AWS Lambdas as required.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Aws",
        color: "green-text-gradient",
      },
    ],
    image: jazz,
    source_code_link: "#",
  },
];

export { experiences, projects, services, technologies, testimonials };
