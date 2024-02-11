import { useEffect } from "react";
import { PORTFOLIO } from "./portfolio-items";
import "./Portfolio.css";

const TITLE = "TP | Work I've done";

function Portfolio() {
  useEffect(() => {
    document.title = TITLE;
  });
  return (
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
  );
}

export default Portfolio;
