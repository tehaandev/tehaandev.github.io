import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Tabs from "./components/Tabs/Tabs";

// Lazy Components
const Home = lazy(() => import("./components/Home/Home.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Skills = lazy(() => import("./components/Skills/Skills.jsx"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));

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
      <Footer />
      <Tabs />
    </>
  );
}

export default App;
