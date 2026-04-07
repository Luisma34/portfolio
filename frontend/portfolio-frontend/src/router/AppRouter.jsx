{
  /* Es el módulo donde define la navegación de tu aplicación.
Es decir, es el archivo que decide: qué componente se renderiza según la URL.*/
}
// Importamos el sistema de routing de React Router.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importamos los componentes de las páginas que queremos mostrar.
import Home from "../pages/Home"; // Página principal("/")
import Contact from "../pages/Contact"; // Página de contacto ("/contacto")


function AppRouter() {

  // Este componente se encarga de controlar la navegación de la App
  // Decide qué página se muestra según la URL
  return (

    //Activa el sistema de routing (escucha la URL del navegador)
    <BrowserRouter>
    
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

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
