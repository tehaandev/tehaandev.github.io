import "./About.css";
import {useEffect} from "react";
import Calcey from "../../assets/calcey.svg";

const ABOUT_TITLE = "TP | Who am I?";

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
            C#, Java, Node.js, PHP, Python, SQL,
          </span>{" "}
          and more. I am a quick learner and I am always eager to take on new
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
              className="home-img"
              src={Calcey}
              alt="Calcey Technologies, LLC."
            />
          </div>
          <div className="about-layout-card-right">
            <h3 className="text-center">
              Calcey <span className="time-duration">Nov 2023 - Feb 2024</span>
            </h3>
            <p className="time-duration text-center"></p>
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
    </main>
  );
}
export default About;
