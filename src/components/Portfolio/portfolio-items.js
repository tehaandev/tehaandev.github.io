import papermunchImg from "../../assets/portfolio/papermunch.png"
import turtlesOfLk from "../../assets/portfolio/turtlesOfLk.png"
import portfolioImg from "../../assets/portfolio/portfolio.png"
import matImg from "../../assets/portfolio/mat.png"
import imgImg from "../../assets/portfolio/ims.png"


export const PORTFOLIO = {
    portfolio: {
        id: 4,
        name: "Portfolio",
        imgUrl: portfolioImg,
        description: "Personal portfolio website to showcase the work I've done.",
        technologies: [
            "Vite",
            "React.js"
        ],
        url: "https://tehaandev.github.io"
    },
    mat: {
        id: 3,
        name: "MAT International",
        imgUrl: matImg,
        description: "A company website for MAT International (Pvt) Ltd. to showcase their product portfolio.",
        technologies: [
            "React.js",
            "Amazon Amplify",
            "Amazon SNS"
        ],
        url: "https://mat.lk"
    },
    ims: {
        id: 2,
        name: "Inventory Management System",
        imgUrl: imgImg,
        description: "A basic inventory manangement system with CRUD operations and authentication.",
        technologies: [
            "Angular",
            "Ionic",
            "Node.js",
            "Express.js",
            "Auth0",
            "SQLite"
        ],
        url: "https://github.com/tehaandev/inventory-management-system"
    },
    turtlesOfLk: {
        id: 1,
        name: "Turtles Of LK",
        imgUrl: turtlesOfLk,
        description: "Frontend for a ticketing system for a local turtle hatchery (BSc. year 1 assignment).",
        technologies: [
            "Alpine.js",
            "Tailwind CSS",
        ],
        url: "https://github.com/tehaandev/turtles-lk/"
    },
    papermunch: {
        id: 0,
        name: "Papermunch.com",
        imgUrl: papermunchImg,
        description: "A past paper website for local Advanced Level students (decommissioned).",
        technologies: [
            "WordPress",
            "AdSense",
            "Hostinger"
        ],
        url: ""
    }

};