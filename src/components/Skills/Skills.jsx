import {
  SiAlpinedotjs,
  SiAngular,
  SiCsharp,
  SiCss3,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import "./Skills.css";
import { useEffect } from "react";

const SKILLS_TITLE = "TP | What can I do?";
function Skills() {
  useEffect(() => {
    document.title = SKILLS_TITLE;
  });
  return (
    <main className="container skills-content">
      <div className="skill-icon-container">
        <div className="skill">
          <SiAlpinedotjs className="skill-logo" id="alpine" />
        </div>
        <div className="skill">
          <SiAngular className="skill-logo" id="angular" />
        </div>
        <div className="skill">
          <SiCsharp className="skill-logo" id="csharp" />
        </div>
        <div className="skill">
          <SiCss3 className="skill-logo" id="css3" />
        </div>
        <div className="skill">
          <SiHtml5 className="skill-logo" id="html5" />
        </div>
        <div className="skill">
          <SiIonic className="skill-logo" id="ionic" />
        </div>
        <div className="skill">
          <SiJavascript className="skill-logo" id="javascript" />
        </div>
        <div className="skill">
          <SiNodedotjs className="skill-logo" id="nodejs" />
        </div>
        <div className="skill">
          <SiPhp className="skill-logo" id="php" />
        </div>
        <div className="skill">
          <SiReact className="skill-logo" id="react" />
        </div>
        <div className="skill">
          <SiSqlite className="skill-logo" id="sqlite" />
        </div>
        <div className="skill">
          <SiTailwindcss className="skill-logo" id="tailwind" />
        </div>
        <div className="skill">
          <SiTypescript className="skill-logo" id="typescript" />
        </div>
        <div className="skill">
          <SiVite className="skill-logo" id="vite" />
        </div>
      </div>
    </main>
  );
}
export default Skills;
