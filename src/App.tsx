import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import AboutSection from "./pages/Home/AboutSection";
import LanguagesSection from "./pages/Home/LanguagesSection";
import ExtracurricularsSection from "./pages/Home/ExtracurricularsSection";

import ProjectsPage from "./pages/Projects/ProjectsPage";
import PhotographyPage from "./pages/Photography/PhotographyPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="head">
          <Header />
          <Nav />
        </div>

        <main>
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
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
