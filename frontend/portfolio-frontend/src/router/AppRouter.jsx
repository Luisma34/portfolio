// Importamos el sistema de routing de React Router.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importamos los componentes de las páginas que queremos mostrar.
import Home from "../pages/Home"; // Página principal("/")
import Contact from "../pages/Contact"; // Página de contacto ("/contacto")
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

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

        {/* 
          Ruta de projects:
          Si la URL es "/projects" → se renderiza el componente Projects
        */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
