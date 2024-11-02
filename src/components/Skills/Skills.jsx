import { Helmet } from "react-helmet";
import {
  SiAmazonaws,
  SiDocker,
  SiExpo,
  SiIonic,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiVite
} from "react-icons/si";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import "./Skills.css";

const SKILLS_TITLE = "TP | What can I do?";

function Skills() {
  return (
    <>
      <Helmet>
        <title>{SKILLS_TITLE}</title>
      </Helmet>
      <Header />
      <main className="container skills-content">
        <div className="sub-container">
          <h2 className="skills-header">
            {`Frontend & Backend Development`}<span className="text-tertiary">.</span>
          </h2>
          <div className="skill-icon-container">
            <div className="skill">
              <SiAmazonaws className="skill-logo" id="aws" />
              <p className="skill-name">AWS</p>
            </div>
            <div className="skill">
              <SiDocker className="skill-logo" id="docker" />
              <p className="skill-name">Docker</p>
            </div>
            <div className="skill">
              <SiExpo className="skill-logo" id="expo" />
              <p className="skill-name">Expo</p>
            </div>
            <div className="skill">
              <SiIonic className="skill-logo" id="ionic" />
              <p className="skill-name">Ionic</p>
            </div>
            <div className="skill">
              <SiMongodb className="skill-logo" id="mongodb" />
              <p className="skill-name">MongoDB</p>
            </div>
            <div className="skill">
              <SiNestjs className="skill-logo" id="nestjs" />
              <p className="skill-name">NestJS</p>
            </div>
            <div className="skill">
              <SiNextdotjs className="skill-logo" id="nextjs" />
              <p className="skill-name">Next.js</p>
            </div>
            <div className="skill">
              <SiNodedotjs className="skill-logo" id="nodejs" />
              <p className="skill-name">Node.js</p>
            </div>
            <div className="skill">
              <SiReact className="skill-logo" id="react" />
              <p className="skill-name">React.js</p>
            </div>
            <div className="skill">
              <SiSqlite className="skill-logo" id="sqlite" />
              <p className="skill-name">SQLite</p>
            </div>
            <div className="skill">
              <SiTailwindcss className="skill-logo" id="tailwind" />
              <p className="skill-name">Tailwind CSS</p>
            </div>
            <div className="skill">
              <SiVite className="skill-logo" id="vite" />
              <p className="skill-name">Vite</p>
            </div>
          </div>
        </div>
              </main>
      <Footer />
      <Tabs />
    </>
  );
}
export default Skills;
