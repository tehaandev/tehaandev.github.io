import { Helmet } from "react-helmet";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Amplify from "../../assets/amplify.png";
import Uni from "../../assets/apiit.png";
import Calcey from "../../assets/calcey.svg";
import AWS from "../../assets/certs/coursera_aws.jpeg";
import META from "../../assets/certs/coursera_meta.png";
import Ananda from "../../assets/school-crest.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import "./About.css";

const ABOUT_TITLE = "TP | Who am I?";
const AWS_CERT_URL =
  "https://coursera.org/share/d24aaeeb96ff6b0ad41512491418de61";
const Meta_CERT_URL = 'https://coursera.org/share/ea9ccc508080ee928026a95723f82224'

function About() {
  return (
    <>
      <Helmet>
        <title>{ABOUT_TITLE}</title>
      </Helmet>
      <Header />
      <main className="container about-content">
        <div className="sub-container intro-container">
          <h1 className="page-header">
            About <span className="text-tertiary">Me.</span>
          </h1>
          <p>
            {`I’m a versatile web developer experienced with Next.js, React.js, Vite, and Ionic, leveraging Tailwind CSS for responsive UI. Skilled in JavaScript, TypeScript, Node.js, PHP, Python, and SQL, I adapt quickly to new tech and tackle challenges with a focus on high-quality, efficient solutions. My work spans from portfolio to business websites, with experience both in collaborative and solo project settings.`}
          </p>
        </div>
        <div className="sub-container">
          <h2>
            {`Work Experience`}<span className="text-tertiary">{`.`}</span>
          </h2>
          <div className="two-card-layout">
            <div className="about-layout-card-left">
              <img
                className="place-img"
                src={Amplify}
                alt="Amplify Solutions"
              />
            </div>
            <div className="about-layout-card-right">
              <h3 className="text-center">{`Amplify Solutions`}</h3>
              <h4 className="strong text-center sub-heading">
                {`Software Engineer`}
              </h4>
              <p className="time-duration text-center">{`March 2024 - Present | Part time`}</p>
              <ul>
                <li>
                  {`Spearheaded a dev team to deliver a sales management system for a major telecom provider, which was aimed at reducing sales fraud.`}
                </li>
                <li>
                  {`Conducted technical interviews and streamlined the developer hiring process.`}
                </li>
                <li>
                  {`Administered AWS infrastructure company-wide, while optimizing resource usage.`}
                </li>
              </ul>
            </div>
          </div>
          <div className="two-card-layout">
            <div className="about-layout-card-left">
              <img
                className="place-img"
                src={Calcey}
                alt="Calcey Technologies, LLC."
              />
            </div>
            <div className="about-layout-card-right">
              <h3 className="text-center">{`Calcey Technologies`}</h3>
              <h4 className="strong text-center sub-heading">{`Intern`}</h4>
              <p className="time-duration text-center">{`Nov 2023 - Feb 2024  | Full time`}</p>
              <ul>
                <li>
                  {`Assisted a senior development team in building custom software for a global logistics company, gaining hands-on experience with Angular, SQLite etc.`}
                </li>
                <li>
                  {`Gained experience in conducting dev testing by running
                  multiple test cases.`}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-container">
          <h2>
            {`Education`}<span className="text-tertiary">{`.`}</span>
          </h2>
          <div className="two-card-layout">
            <div className="about-layout-card-left">
              <img className="place-img" src={Uni} alt="APIIT" />
            </div>
            <div className="about-layout-card-right">
              <h3 className="text-center">{`Staffordshire University`}</h3>
              <h4 className="strong text-center sub-heading">
                {`BSc. (Hons.) in Computer Science.`}
              </h4>
              <p className="time-duration text-center">{`Dec 2025`}</p>
            </div>
          </div>
          <div className="two-card-layout">
            <div className="about-layout-card-left">
              <img className="place-img" src={Ananda} alt="Ananda College" />
            </div>
            <div className="about-layout-card-right">
              <h3 className="text-center">{`Ananda College`}</h3>
              <p className="time-duration text-center">{`Dec 2022`}</p>
              <ul>
                <li>{`GCE Advanced Level`}</li>
                <li>{`GCE Ordinary Level`}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-container">
          <h2>{`Certifications.`}</h2>
          <div className="two-card-layout">
            <div className="about-layout-card-left">
              <img className="place-img" src={META} 
              alt="Meta Front-End Developer" 
              />
            </div>
            <div className="about-layout-card-right">
              <h3 className="text-center">{`Meta Front-End Developer`}</h3>
              <p className="time-duration text-center">{`May 2024`}</p>
              <ul>
                <li>{`Awarded by Meta on Coursera`}</li>
                <Link to={Meta_CERT_URL} target="_blank">
                  <li className="text-tertiary">
                    {`View Certificate`} <FaExternalLinkAlt />.
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="two-card-layout">
            <div className="about-layout-card-left">
              <img className="place-img" src={AWS} alt="AWS Cloud Practitioner Essentials" />
            </div>
            <div className="about-layout-card-right">
              <h3 className="text-center">{`AWS Cloud Practitioner Essentials`}</h3>
              <p className="time-duration text-center">{`Jan 2024`}</p>
              <ul>
                <li>{`Awarded by Coursera`}</li>
                <Link to={AWS_CERT_URL} target="_blank">
                  <li className="text-tertiary">
                    {`View Certificate`} <FaExternalLinkAlt />.
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
      <Tabs />
    </>
  );
}
export default About;
