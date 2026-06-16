// Importamos el sistema de routing de React Router.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importamos los componentes de las páginas que queremos mostrar.
import Home from "../pages/Home"; // Página principal("/")
import Contact from "../pages/Contact"; // Página de contacto ("/contacto")
import Navbar from "../components/Navbar";
import ProjectsPage from "../pages/ProjectsPage";
import Privacy from "../pages/Privacy";
import About from "../pages/About";
import Footer from "../components/Footer";

function AppRouter() {
  // Este componente se encarga de controlar la navegación de la App
  // Decide qué página se muestra según la URL
  return (
    //Activa el sistema de routing (escucha la URL del navegador)
    <BrowserRouter>
      {/* Navbar aqui al usar useLocation
      Puesto encima de Routes para que aparezca en todas las páginas. */}
      <Navbar />
      {/*Contenedor de todas las rutas disponibles*/}
      <Routes>
        {/* 
          Ruta principal:
          Si la URL es "/" → se renderiza el componente Home
        */}
        <Route path="/" element={<Home />} />

        {/* 
          Ruta de contacto:
          Si la URL es "/contact" → se renderiza el componente Contact
        */}
        <Route path="/contact" element={<Contact />} />

        {/* Ruta para la página independiente de proyectos */}
        <Route path="/projectsPage" element={<ProjectsPage />} />

        {/* Política de privacidad */}
        <Route path="/privacy" element={<Privacy />} />

        {/* Sobre mí */}
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer aparece en todas las páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
