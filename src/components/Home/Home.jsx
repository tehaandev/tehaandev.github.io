import "./Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import Button from "../Button/Button";
import img from "../../assets/homepage-picture.png";
import resume from "../../assets/docs/resume-tehaan-perera.pdf";

const HOME_TITLE = "TP | Home";
// const RESUME_BTN = `Download R\xE9sum\xE9`;
const RESUME_BTN = `Download CV`;

const LINKEDIN_URL = "https://www.linkedin.com/in/tehaan-perera/";
const GITHUB_URL = "https://github.com/tehaandev";
const RESUME_URL = resume;

function Home() {
  useEffect(() => {
    document.title = HOME_TITLE;
  });
  return (
    <main className="container home-layout two-card-layout">
      <div className="home-layout-card-left">
        <h4 className="intro-txt greet-msg-txt">Hello, My name is</h4>
        <h1 className="intro-txt">Tehaan Perera</h1>
        <h3 className="intro-txt">
          And I'm a <span className="text-tertiary">Frontend Developer.</span>
        </h3>
        <p>
          I'm a Computer Science undergraduate currently working as an Intern at
          Calcey. I am known for my adaptability, fast learning abilities, and
          discipline. Although I'm currently in the early stages of my journey,
          my passion for technology and my commitment to continuous improvement
          have propelled me forward. I'm determined to see projects from start
          to finish using each experience as an opportunity to expand my
          knowledge and skill set.
        </p>
        <div className="home-page-btns">
          <Button
            className="resume-btn"
            text={RESUME_BTN}
            onClick={resumeDownloader}
          />
          <div className="social-media-btns">
            <Button
              className="social-media-btn"
              text={<FaLinkedinIn />}
              onClick={linkedinBtnClick}
            />
            <Button
              className="social-media-btn"
              text={<FaGithub />}
              onClick={githubBtnClick}
            />
            <Button
              className="social-media-btn"
              text={<FaStackOverflow />}
              onClick={stackoverflowBtnClick}
            />
          </div>
        </div>
      </div>
      <div className="home-layout-card-right">
        <img className="home-img" src={img} alt="Tehaan Perera" />
      </div>
    </main>
  );
}

function resumeDownloader() {
  window.open(RESUME_URL, "_blank");
}

function linkedinBtnClick() {
  window.open(LINKEDIN_URL, "_blank");
}

function githubBtnClick() {
  window.open(GITHUB_URL, "_blank");
}
function stackoverflowBtnClick() {
  // window.open(LINKEDIN_URL, "_blank");
}
export default Home;
