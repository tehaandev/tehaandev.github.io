import { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa6";
import resume from "../../assets/docs/resume-tehaan-perera.pdf";
import img from "../../assets/homepage-picture.png";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import "./Home.css";

const HOME_TITLE = "TP | Welcome!";
const RESUME_BTN = `Download CV`;

const LINKEDIN_URL = "https://www.linkedin.com/in/tehaan-perera/";
const GITHUB_URL = "https://github.com/tehaandev";
const RESUME_URL = resume;
const STACK_OVERFLOW_URL =
  "https://stackoverflow.com/users/23388746/tehaan-perera";

function clickHandler(ref) {
  let url;
  switch (ref) {
    case "linkedin":
      url = LINKEDIN_URL;
      break;
    case "github":
      url = GITHUB_URL;
      break;
    case "stackoverflow":
      url = STACK_OVERFLOW_URL;
      break;
    case "resume":
      url = RESUME_URL;
      break;
    default:
      url = "";
  }
  window.open(url, "_blank");
}

function Home() {
  useEffect(() => {
    document.title = HOME_TITLE;
  });
  return (
    <>
      <Header />
      <main className="container home-layout two-card-layout">
        <div className="home-layout-card-left">
          <h4 className="intro-txt greet-msg-txt">Hello, My name is</h4>
          <h1 className="intro-txt">Tehaan Perera</h1>
          <h3 className="intro-txt">
            And I'm a{" "}
            <span className="text-tertiary">full-stack developer.</span>
          </h3>
          <p>
            I’m a full-stack developer based in Sri Lanka. Currently I’m a
            second-year undergraduate majoring in Computer Science.
          </p>
          <p>
            I’m passionate about developing lightweight, superfast web apps with
            a pixel-perfect UI and an intuitive UX.
          </p>
          <div className="home-page-btns">
            <Button
              className="resume-btn"
              text={RESUME_BTN}
              onClick={() => clickHandler("resume")}
            />
            <div className="social-media-btns">
              <Button
                className="social-media-btn"
                text={<FaLinkedinIn />}
                onClick={() => clickHandler("linkedin")}
              />
              <Button
                className="social-media-btn"
                text={<FaGithub />}
                onClick={() => clickHandler("github")}
              />
              <Button
                className="social-media-btn"
                text={<FaStackOverflow />}
                onClick={() => clickHandler("stackoverflow")}
              />
            </div>
          </div>
        </div>
        <div className="home-layout-card-right">
          <img className="home-img" src={img} alt="Tehaan Perera" />
        </div>
      </main>
      <Footer />
      <Tabs />
    </>
  );
}

export default Home;
