import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import ProjectsPage from "../pages/ProjectsPage";
import Privacy from "../pages/Privacy";
import About from "../pages/About";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      {/* Navbar fuera de Routes para que aparezca en todas las páginas */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectsPage" element={<ProjectsPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
