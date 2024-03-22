import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import "./Portfolio.css";
import { PORTFOLIO } from "./portfolio-items";

const TITLE = "TP | Work I've done";

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header />
      <main className="container ">
        <div className="sub-container">
          <h1 className="page-header">Portfolio.</h1>
          <div className="portfolio-container ">
            {Object.keys(PORTFOLIO).map((key) => {
              const technologies = PORTFOLIO[key].technologies;
              return (
                <div className="portfolio-card" key={PORTFOLIO[key].id}>
                  <div className="portfolio-img">
                    <img src={PORTFOLIO[key].imgUrl} alt="" />
                  </div>
                  <div className="portfolio-desc">
                    <h3>{PORTFOLIO[key].name}</h3>
                    <p>{PORTFOLIO[key].description}</p>
                    <h4>Technologies used.</h4>
                    <ul>
                      {technologies.map((element) => {
                        return <li key={element}>{element}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <Tabs />
    </>
  );
}

export default Portfolio;
