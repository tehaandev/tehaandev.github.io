import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Uni from "../../assets/apiit.png";
import Calcey from "../../assets/calcey.svg";
import AWS from "../../assets/certs/coursera_aws.jpeg";
import Ananda from "../../assets/school-crest.png";
import "./About.css";

const ABOUT_TITLE = "TP | Who am I?";
const AWS_CERT_URL =
  "https://coursera.org/share/d24aaeeb96ff6b0ad41512491418de61";

function About() {
  useEffect(() => {
    document.title = ABOUT_TITLE;
  });
  return (
    <main className="container about-content">
      <div className="sub-container intro-container">
        <h1 className="page-header">
          About <span className="text-tertiary">Me.</span>
        </h1>
        <p>
          I have experience in developing web apps using{" "}
          <span className="strong">React.js, Vite, Angular, Ionic</span> as well
          as UI frameworks such as{" "}
          <span className="strong"> Tailwind CSS.</span> I am also skilled in a
          variety of other programming languages and technologies, including{" "}
          <span className="strong">
            C#, Java, Node.js, PHP, Python, and SQL.
          </span>{" "}
          I am a quick learner and I am always eager to take on new challenges.
        </p>
        <p>
          In addition to my technical skills, I am also a team player and I have
          excellent communication and interpersonal skills. I am confident that
          I would be a valuable asset to any team. Furthermore I have the
          ability to adapt to new environments dcedms and learn new
          techonologies quickly and I'm determined to see projects from start to
          finish using each experience as an opportunity to expand my knowledge
          and skill set.
        </p>
        <p>
          As of now, I’ve worked on a projects varying from portfolio websites
          to business websites.
        </p>
      </div>
      <div className="sub-container">
        <h2>
          Work Experience<span className="text-tertiary">.</span>
        </h2>
        <div className="two-card-layout">
          <div className="about-layout-card-left">
            <img
              className="place-img"
              src={Calcey}
              alt="Calcey Technologies, LLC."
            />
          </div>
          <div className="about-layout-card-right">
            <h3 className="text-center">Calcey Technologies</h3>
            <h4 className="strong text-center sub-heading">Intern</h4>
            <p className="time-duration text-center">Nov 2023 - Feb 2024</p>
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
        <h2>
          Education<span className="text-tertiary">.</span>
        </h2>
        <div className="two-card-layout">
          <div className="about-layout-card-left">
            <img className="place-img" src={Uni} alt="APIIT" />
          </div>
          <div className="about-layout-card-right">
            <h3 className="text-center">Staffordshire University</h3>
            <h4 className="strong text-center sub-heading">
              BSc. (Hons.) in Computer Science.
            </h4>
            <p className="time-duration text-center">March 2023 - Present</p>
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
