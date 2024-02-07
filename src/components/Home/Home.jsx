import "./Home.css";
import {useEffect} from "react";
import {FaGithub, FaLinkedinIn, FaStackOverflow} from "react-icons/fa6";
import Button from "../Button/Button";
import img from "../../assets/homepage-picture.png";

const HOME_TITLE = "TP | Home";
const RESUME_BTN = "Download R\xE9sum\xE9";

function Home() {
  useEffect(() => {
    document.title = HOME_TITLE;
  });
  return (
    <main className="container home-layout">
      <div className="home-layout-card-left">
        <h4 className="greet-msg-txt">Hello!</h4>
        <h1 className="intro-txt">I'm Tehaan Perera</h1>
        <h3>
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
        <Button
          text={RESUME_BTN}
          onClick={clickHandler}
        />
        <div className="social-media-btns">
          <Button
            className="social-media-btn"
            text={<FaLinkedinIn />}
          />
          <Button
            className="social-media-btn"
            text={<FaGithub />}
          />
          <Button
            className="social-media-btn"
            text={<FaStackOverflow />}
          />
        </div>
      </div>
      <div className="home-layout-card-right">
        <img
          className="home-img"
          src={img}
          alt="Tehaan Perera"
        />
      </div>
    </main>
  );
}

function clickHandler() {
  console.log("click handled");
}

export default Home;
