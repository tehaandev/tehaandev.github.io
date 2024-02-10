import { useEffect } from "react";

import {
  SiAlpinedotjs,
  SiAngular,
  SiAmazonaws,
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
          <p className="skill-name">Alpine.js</p>
        </div>
        <div className="skill">
          <SiAngular className="skill-logo" id="angular" />
          <p className="skill-name">Angular</p>
        </div>
        <div className="skill">
          <SiAmazonaws className="skill-logo" id="aws" />
          <p className="skill-name">AWS</p>
        </div>
        <div className="skill">
          <SiCsharp className="skill-logo" id="csharp" />
          <p className="skill-name">C#</p>
        </div>
        <div className="skill">
          <SiCss3 className="skill-logo" id="css3" />
          <p className="skill-name">CSS3</p>
        </div>
        <div className="skill">
          <SiHtml5 className="skill-logo" id="html5" />
          <p className="skill-name">HTML5</p>
        </div>
        <div className="skill">
          <SiIonic className="skill-logo" id="ionic" />
          <p className="skill-name">Ionic</p>
        </div>
        <div className="skill">
          <SiJavascript className="skill-logo" id="javascript" />
          <p className="skill-name">JavaScript</p>
        </div>
        <div className="skill">
          <SiNodedotjs className="skill-logo" id="nodejs" />
          <p className="skill-name">Node.js</p>
        </div>
        <div className="skill">
          <SiPhp className="skill-logo" id="php" />
          <p className="skill-name">PHP</p>
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
          <SiTypescript className="skill-logo" id="typescript" />
          <p className="skill-name">TypeScript</p>
        </div>
        <div className="skill">
          <SiVite className="skill-logo" id="vite" />
          <p className="skill-name">Vite</p>
        </div>
      </div>
    </main>
  );
}
export default Skills;
