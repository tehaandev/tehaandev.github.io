import { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa6";
import resume from "../../assets/docs/resume-tehaan-perera.pdf";
import img from "../../assets/homepage-picture.png";
import Button from "../Button/Button";
import "./Home.css";

const HOME_TITLE = "TP | Home";
const RESUME_BTN = `Download CV`;

const LINKEDIN_URL = "https://www.linkedin.com/in/tehaan-perera/";
const GITHUB_URL = "https://github.com/tehaandev";
const RESUME_URL = resume;
const STACK_OVERFLOW_URL =
  "https://stackoverflow.com/users/23388746/tehaan-perera";

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
          And I'm a <span className="text-tertiary">Developer.</span>
        </h3>
        <p>
          I’m a developer and UX/UI enthusiast based in Sri Lanka. Currently I’m
          a second-year undergraduate majoring in Computer Science.
        </p>
        <p>
          I’m passionate about developing lightweight, superfast web apps with a
          pixel-perfect UI and an intuitive UX.
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
  window.open(STACK_OVERFLOW_URL, "_blank");
}
export default Home;
