import "./App.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

// Lazy Components
// const Home = React.lazy(() => import('./components/Home/Home'));
// const About = React.lazy(() => import('./components/About/About'));
// const Skills = React.lazy(() => import('./components/Skills/Skills'));
// const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
// const Contact = React.lazy(() => import('./components/Contact/Contact'));

const HOME_ROUTE = "/";
const ABOUT_ROUTE = "/about";
const SKILLS_ROUTE = "/skills";
const PORTFOLIO_ROUTE = "/portfolio";
const CONTACT_ROUTE = "/contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={<Home />}
        />
        <Route
          path={ABOUT_ROUTE}
          element={<About />}
        />
        <Route
          path={SKILLS_ROUTE}
          element={<Skills />}
        />
        <Route
          path={PORTFOLIO_ROUTE}
          element={<Portfolio />}
        />
        <Route
          path={CONTACT_ROUTE}
          element={<Contact />}
        />
      </Routes>
    </>
  );
}

export default App;
