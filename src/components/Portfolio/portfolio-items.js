import imgImg from "../../assets/portfolio/ims.png";
import matImg from "../../assets/portfolio/mat.png";
import papermunchImg from "../../assets/portfolio/papermunch.png";
import portfolioImg from "../../assets/portfolio/portfolio.png";
import turtlesOfLk from "../../assets/portfolio/turtlesOfLk.png";
import artistryImg from "../../assets/portfolio/artistry.png";
import ohmyf1Img from "../../assets/portfolio/ohmyf1.png";

export const PORTFOLIO = {
  ohmyf1:{
    id: 6,
    name: "ohmyF1.com (Coming Soon)",
    imgUrl: ohmyf1Img,
    description: "A platform for Formula 1 fans to get real-time stats and updates.",
    technologies: ["Next.js", "Mongo DB", "Shadcn", "Ant Design", "Tailwind CSS"],
    url: "https://ohmyf1.com/",
  },
  artistry:{
    id: 5,
    name: "Artistry",
    imgUrl: artistryImg,
    description: "A platform for artists to showcase their work and connect with other artists.",
    technologies: ["Next.js", "PostgreSQL (Supabase)", "Amazon S3", "Ant Design"],
    url: "https://artistry-liard.vercel.app/",
  },
  portfolio: {
    id: 4,
    name: "Portfolio",
    imgUrl: portfolioImg,
    description: "Personal portfolio website to showcase the work I've done.",
    technologies: ["React.js", "Axios", "NestJS", "Amazon SNS"],
    url: "https://tehaan.me",
  },
  mat: {
    id: 3,
    name: "MAT International",
    imgUrl: matImg,
    description:
      "A company website for MAT International (Pvt) Ltd. to showcase their product portfolio.",
    technologies: ["React.js", "Amazon Amplify", "Amazon SNS"],
    url: "https://mat.lk",
  },
  ims: {
    id: 2,
    name: "Inventory Management System",
    imgUrl: imgImg,
    description:
      "A basic inventory manangement system with CRUD operations and authentication.",
    technologies: [
      "Angular",
      "Ionic",
      "Node.js",
      "Express.js",
      "Auth0",
      "SQLite",
    ],
    url: "https://github.com/tehaandev/inventory-management-system",
  },
  turtlesOfLk: {
    id: 1,
    name: "Turtles Of LK",
    imgUrl: turtlesOfLk,
    description:
      "Frontend for a ticketing system for a local turtle hatchery (BSc. year 1 assignment).",
    technologies: ["Alpine.js", "Tailwind CSS"],
    url: "https://github.com/tehaandev/turtles-lk/",
  },
  papermunch: {
    id: 0,
    name: "Papermunch.com",
    imgUrl: papermunchImg,
    description:
      "A past paper website for local Advanced Level students (decommissioned).",
    technologies: ["WordPress", "AdSense", "Hostinger"],
    url: "",
  },
};
