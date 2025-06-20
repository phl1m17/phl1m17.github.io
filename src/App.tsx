import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import AboutSection from "./pages/Home/AboutSection";
import LanguagesSection from "./pages/Home/LanguagesSection";
import ExtracurricularsSection from "./pages/Home/ExtracurricularsSection";

import ProjectsPage from "./pages/Projects/ProjectsPage";
import PhotographyPage from "./pages/VisualMediaPage/VisualMediaPage";

import "./App.css";

function MainContent() {
  const location = useLocation();
  const isProjects = location.pathname === "/projects";
  const isPhotography = location.pathname === "/photography";

  return (
    <main
      className={
        isProjects ? "projects-main" : isPhotography ? "photography-main" : ""
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AboutSection />
              <LanguagesSection />
              <ExtracurricularsSection />
            </>
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="head">
          <Header />
          <Nav />
        </div>

        <MainContent />

        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
