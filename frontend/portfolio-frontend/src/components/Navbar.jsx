import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [burguer, menuBurguer] = useState(false);
  const location = useLocation();

  // Clases activas/inactivas para los links del desktop
  const linkClass = (path) =>
    location.pathname === path
      ? "underline text-red-500"
      : "hover:underline hover:text-red-500 transition-colors duration-200";

  return (
    <>
      {/* Navbar fija */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 py-4 tracking-wide backdrop-blur-md border-b border-black/5"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        <div className="w-full md:max-w-6xl xl:max-w-full xl:px-15 mx-auto px-8 flex justify-between items-center">

          {/* Logo */}
          {location.pathname === "/" ? (
            <a href="#home" className="text-black">Luis M. Cordón</a>
          ) : (
            <Link to="/" className="text-black">Luis M. Cordón</Link>
          )}

          {/* Links desktop */}
          <div className="hidden md:flex gap-8">
            <Link to="/about" className={linkClass("/about")}>
              Sobre mí
            </Link>
            <Link to="/projectsPage" className={linkClass("/projectsPage")}>
              Proyectos
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Contacto
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <button
            className="cursor-pointer text-2xl md:hidden"
            onClick={() => menuBurguer(!burguer)}
          >
            {burguer ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* ============================================================
          TODO: REDISEÑAR MENÚ HAMBURGUESA
          Objetivo: panel lateral que entra desde la derecha con:
          - Overlay oscuro detrás (bg-black/40) que al clicar cierra el menú
          - Panel blanco (w-3/4 max-w-xs) con motion initial={{ x: "100%" }}
          - Cabecera: label "MENÚ" a la izquierda + botón X a la derecha
          - Links grandes (text-2xl, font-serif) con gap-8
          - Footer del panel: nombre + rol separados por border-t
          - closeMenu() en cada link para cerrar al navegar
          ============================================================ */}

      <AnimatePresence>
        {burguer && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col right-2 items-start gap-5 fixed top-4 w-fit px-6 py-4 backdrop-blur-md rounded-2xl z-50 shadow-xl bg-white border border-gray-200"
          >
            <button
              className="self-end cursor-pointer"
              onClick={() => menuBurguer(false)}
            >
              <HiX />
            </button>
            <Link to="/about" className="transition duration-300 hover:-translate-y-1">
              Sobre mí
            </Link>
            <Link to="/projectsPage" className="transition duration-300 hover:-translate-y-1">
              Proyectos
            </Link>
            <Link to="/contact" className="transition duration-300 hover:-translate-y-1">
              Contacto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
