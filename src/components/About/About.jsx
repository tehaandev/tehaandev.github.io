import "./About.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Calcey from "../../assets/calcey.svg";
import Ananda from "../../assets/school-crest.png";
import Uni from "../../assets/apiit.png";
import AWS from "../../assets/certs/coursera_aws.jpeg";

const ABOUT_TITLE = "TP | Who am I?";
const AWS_CERT_URL =
  "https://coursera.org/share/d24aaeeb96ff6b0ad41512491418de61";

function About() {
  useEffect(() => {
    document.title = ABOUT_TITLE;
  });
  return (
    <main className="container about-content">
      <div className="sub-container">
        <h1>
          About <span className="text-tertiary">Me.</span>
        </h1>
        <p>
          I'm a Computer Science undergraduate currently working as an Intern at
          Calcey. I am known for my adaptability, fast learning abilities, and
          discipline. Although I'm currently in the early stages of my journey,
          my passion for technology and my commitment to continuous improvement
          have propelled me forward. I'm determined to see projects from start
          to finish using each experience as an opportunity to expand my
          knowledge and skill set.
        </p>
        <p>
          I have experience in developing frontends for web apps using{" "}
          <span className="text-tertiary">React, Vite, Angular, Ionic</span>{" "}
          etc. I am also skilled in a variety of other programming languages and
          technologies, including{" "}
          <span className="text-tertiary">
            C#, Java, Node.js, PHP, Python, SQL
          </span>
          , and more. I am a quick learner and I am always eager to take on new
          challenges.
        </p>
        <p>
          In addition to my technical skills, I am also a team player and I have
          excellent communication and interpersonal skills. I am confident that
          I would be a valuable asset to any team.
        </p>
      </div>
      <div className="sub-container">
        <h2>Work Experience.</h2>
        <div className="two-card-layout">
          <div className="about-layout-card-left">
            <img
              className="place-img"
              src={Calcey}
              alt="Calcey Technologies, LLC."
            />
          </div>
          <div className="about-layout-card-right">
            <h3 className="text-center">Calcey</h3>
            <p className="time-duration text-center">Jan 2009 - Dec 2022</p>
            <ul>
              <li>
                Worked in a team responsible for developing and maintaining
                custom mobile and web apps for high-end clientele using Angular
                and Ionic Framework.
              </li>
              <li>
                Gained experience in conducting dev testing by running multiple
                test cases.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-container">
        <h2>Education.</h2>
        <div className="two-card-layout">
          <div className="about-layout-card-left">
            <img className="place-img" src={Uni} alt="APIIT" />
          </div>
          <div className="about-layout-card-right">
            <h3 className="text-center">Staffordshire University</h3>
            <p className="time-duration text-center">March 2023 - Present</p>
            <ul>
              <li>BSc. (Hons.) in Computer Science.</li>
            </ul>
          </div>
        </div>
        <div className="two-card-layout">
          <div className="about-layout-card-left">
            <img className="place-img" src={Ananda} alt="Ananda College" />
          </div>
          <div className="about-layout-card-right">
            <h3 className="text-center">Ananda College</h3>
            <p className="time-duration text-center">Jan 2009 - Dec 2022</p>
            <ul>
              <li>GCE Advanced Level</li>
              <li>GCE Ordinary Level</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-container">
        <h2>Certifications.</h2>
        <div className="two-card-layout">
          <div className="about-layout-card-left">
            <img className="place-img" src={AWS} alt="APIIT" />
          </div>
          <div className="about-layout-card-right">
            <h3 className="text-center">AWS Cloud Practitioner Essentials</h3>
            <p className="time-duration text-center">Jan 2024</p>
            <ul>
              <li>Awarded by Coursera</li>
              <Link to={AWS_CERT_URL} target="_blank">
                <li className="text-tertiary">
                  View Certificate <FaExternalLinkAlt />.
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
