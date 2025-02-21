import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kashif Ali",
  initials: "KA",
  url: "https://kashiivirus.web.app/",
  location: "Karachi, Sindh, Pakistan",
  locationLink: "https://www.google.com/maps/place/Karachi",
  description:
    "Experienced Software Engineer & Frontend Developer | Expertise in React.js | Enthusiastic about Web Technologies and Scalable Solutions | Eager to Join Collaborative Projects",
  summary:
    "Frontend & Full Stack Developer with 4+ years of experience in React.js, Node.js, and Vue.js, specializing in building scalable and user-friendly web applications. Passionate about innovation, problem-solving, and delivering high-performance solutions. 🚀",
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Typescript",
    "Node.js",
    "Tailwind CSS",
    "Firebase",
    "MongoDB",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "kashifrajperali@gmail.com",
    tel: "+923043780106",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kashifalirajper",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kashifalirajper/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "@kashifrajperali@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sohomax",
      href: "https://www.sohomax.co/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/sohomax.png",
      start: "October 2023",
      end: "January 2025",
      description:
        "I’ve been developing responsive front-end components with [React.js](https://react.dev/) (using react-hook-form, yup resolver, react-query) and [Tailwind CSS](https://tailwindcss.com/). Currently, I’m working on [**Compass**](https://compass.forsit.co.kr/) using Vue Nuxt, a sales tracking platform integrating data from **Amazon, Qoo10, Walmart, and Shopify**.  I also work on web scraping with [Node.js](https://nodejs.org/) and [Puppeteer](https://pptr.dev/) for TikTok, Amazon, and more. My focus includes **API development, software optimization, and UI design**, while managing **version control on GitHub** and team collaboration via Slack.",
    },
    {
      company: "SayEagle",
      badges: [],
      href: "https://sayeagle.com/",
      location: "OnSite",
      title: "Full Stack Developer",
      logoUrl: "/sayeagle.png",
      start: "January 2023",
      end: "November 2023",
      description:
        "I developed [SayEagle](https://sayeagle.com/), a comprehensive web application similar to **AppFolio**, featuring portals for **managers, admins, tenants, and vendors**. I led the **design and deployment** using [React.js](https://react.dev/) to create a responsive and seamless user experience. On the backend, I built **scalable serverless solutions** with [Node.js](https://nodejs.org/) and **Firebase Functions**, ensuring real-time data integrity via [Firebase Firestore](https://firebase.google.com/docs/firestore). I also worked on **secure authentication**, **real-time updates**, and optimized **serverless APIs** for high performance. Collaborating closely with product managers, designers, and a cross-functional team, I ensured high-quality deliverables. Additionally, I mentored junior developers, fostering a culture of learning and growth within the team.",
    },
    {
      company: "Appsnation",
      href: "https://appsnation.co/",
      badges: [],
      location: "OnSite",
      title: "Full Stack Developer",
      logoUrl: "/appsnation.png",
      start: "April 2021",
      end: "December 2022",
      description:
        "I worked on **large-scale projects**, including a **task management system** and an **employee monitoring system** that tracked screen activity and productivity hours. As a **Frontend Developer** for [CNBC](https://www.cnbc.com/), I collaborated with teams to deliver **high-quality user experiences** while ensuring **scalability and functionality**. I also contributed to **full-stack development**, designing both **client-side and server-side architectures**, managing databases for **efficient data handling**, and troubleshooting issues to optimize performance. Additionally, I built **mobile-responsive features**, ensuring a seamless experience across devices.",
    },
  ],
  education: [
    {
      school: "Sindh Madressatul Islam University",
      href: "https://smiu.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/smiu.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "HackerRank",
      href: "https://www.hackerrank.com/certificates/c9e3c15092b3",
      degree: "Frontend Developer (React)",
      logoUrl: "/hackerRank.jpeg",
      start: "21 Oct",
      end: "2024",
    },
    {
      school: "HackerRank",
      href: "https://www.hackerrank.com/certificates/c4cbdd47a3c2",
      degree: "JavaScript (Intermediate)",
      logoUrl: "/hackerRank.jpeg",
      start: "06 Jun",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Easy Travel Planner",
      href: "https://easy-trave-planner.vercel.app/",
      dates: "Feb 2025",
      active: true,
      description:
        "Easy Travel Planner is an AI-powered trip planning tool that helps users find budget-friendly hotels and optimal visiting times for attractions using real-time insights. Built with cutting-edge AI, it simplifies travel planning without the need for manual research.",
      technologies: [
        "React",
        "Gemini API",
        "Firebase",
        "Google Auth",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://easy-travel-planner.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kashifalirajper/easy-travel-planner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/etp.png",
      video: "",
    },
    {
      title: "SayEagle",
      href: "https://sayeagle.com/",
      dates: "Jan 2023 - Nov 2023",
      active: true,
      description:
        "SayEagle is a comprehensive property management platform that streamlines operations for managers, admins, tenants, and vendors. It offers real-time data management, secure authentication, and an intuitive user experience.",
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "Cloud Firestore",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sayeagle.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sayEagle-web.png",
      video: "",
    },
    {
      title: "CNBC",
      href: "https://www.cnbc.com",
      dates: "April 2021 - September 2021",
      active: true,
      description:
        "Contributed to the front-end development of CNBC's website using React, enhancing user experience, performance, and responsiveness with modern UI components.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Redux",
        "Webpack",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.cnbc.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cnbc.png",
      video: "",
    },
    {
      title: "Revaiv",
      href: "https://revaiv.vercel.app/",
      dates: "January 2025",
      active: true,
      description:
        "RevAiv is a health management app that helps users track and improve hormonal symptoms and chronic conditions like PCOS, Thyroid, and Weight Gain with a holistic approach.",
      technologies: [
        "React.js",
        "JavaScript",
        "Firebase",
        "Google Auth",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://revaiv.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kashifalirajper/Revaiv-FE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rev.png",
      video: "",
    },
  ]
} as const;
