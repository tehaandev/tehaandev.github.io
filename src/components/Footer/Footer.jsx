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
const COPYRIGHT = `\xA9 ${YEAR}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/tehaan-perera/";
const GITHUB_URL = "https://github.com/tehaandev";
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
    default:
      url = "";
  }
  window.open(url, "_blank");
}

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
              onClick={() => clickHandler("linkedin")}
            />
            <Button
              className="footer-btn"
              text={<FaGithub />}
              onClick={() => clickHandler("github")}
            />
            <Button
              className="footer-btn"
              text={<FaStackOverflow />}
              onClick={() => clickHandler("stackoverflow")}
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
              <Link className="text-tertiary" to={LINKEDIN_URL} target="_blank">
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

export default Footer;
