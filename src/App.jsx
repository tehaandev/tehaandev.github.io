import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";

// Lazy Components
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const HOME_ROUTE = "/*";
const ABOUT_ROUTE = "/about";
const SKILLS_ROUTE = "/skills";
const PORTFOLIO_ROUTE = "/portfolio";
const CONTACT_ROUTE = "/contact";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={SKILLS_ROUTE} element={<Skills />} />
          <Route path={PORTFOLIO_ROUTE} element={<Portfolio />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
