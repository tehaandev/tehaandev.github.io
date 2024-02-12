import {
  FaHouse,
  FaCircleQuestion,
  FaBriefcase,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Tabs.css";

function Tabs() {
  return (
    <div className="tabs-container">
      <NavLink to="/" className="tab">
        <FaHouse />
      </NavLink>
      <NavLink to="about" className="tab">
        <FaCircleQuestion />
      </NavLink>
      <NavLink to="/skills" className="tab">
        <FaCode />
      </NavLink>
      <NavLink to="portfolio" className="tab">
        <FaBriefcase />
      </NavLink>
      <NavLink to="contact" className="tab">
        <FaPaperPlane />
      </NavLink>
    </div>
  );
}
export default Tabs;
