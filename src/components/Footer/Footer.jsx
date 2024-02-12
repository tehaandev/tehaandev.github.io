import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaPaperPlane,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Footer.css";

const YEAR = new Date().getFullYear();
const COPYRIGHT = `\xA9${YEAR}`;
const GITHUB_URL = "https://github.com/tehaandev";
const STACK_OVERFLOW_URL =
  "https://stackoverflow.com/users/23388746/tehaan-perera";

function Footer() {
  const NAVIGATE = useNavigate();
  const NAVIGATE_TO_CONTACTS = () => {
    NAVIGATE("/contact");
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-btns">
            <Button
              className="footer-btn"
              text={<FaLinkedinIn />}
              onClick={linkedinBtnClick}
            />
            <Button
              className="footer-btn"
              text={<FaGithub />}
              onClick={githubBtnClick}
            />
            <Button
              className="footer-btn"
              text={<FaStackOverflow />}
              onClick={stackoverflowBtnClick}
            />
            <Button
              className="footer-btn"
              text={<FaPaperPlane />}
              onClick={NAVIGATE_TO_CONTACTS}
            />
          </div>
          <hr className="footer-hr" />
          <div>
            <p>
              {COPYRIGHT}{" "}
              <Link className="text-tertiary" to={GITHUB_URL}>
                Tehaan Perera.
              </Link>
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
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

export default Footer;
