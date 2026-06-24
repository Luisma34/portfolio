import { useEffect, useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [burguer, menuBurguer] = useState(false);
  const location = useLocation();
  const year = new Date().getFullYear();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    menuBurguer(false);
  }, [location.pathname]);

  const linkClass = (path) =>
    location.pathname === path
      ? "underline text-red-500"
      : "hover:underline hover:text-red-500 transition-colors duration-200";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 py-4 tracking-wide backdrop-blur-md border-b border-black/5"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        <div className="w-full md:max-w-6xl xl:max-w-full xl:px-15 mx-auto px-8 flex justify-between items-center">
          {/* Logo */}
          {location.pathname === "/" ? (
            <a href="#home" className="text-black">
              Luis M. Cordón
            </a>
          ) : (
            <Link to="/" className="text-black">
              Luis M. Cordón
            </Link>
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
            {burguer ? null : <HiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {burguer && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-30"
              onClick={() => menuBurguer(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-1/3 flex flex-col items-start gap-5 px-6 py-4 z-50 shadow-xl bg-white md:hidden"
            >
              <button
                className="self-end cursor-pointer text-2xl"
                onClick={() => menuBurguer(false)}
              >
                <HiX />
              </button>
              <Link to="/about" className={`text-2xl ${linkClass("/about")}`}>
                Sobre mí
              </Link>
              <Link
                to="/projectsPage"
                className={`text-2xl ${linkClass("/projectsPage")}`}
              >
                Proyectos
              </Link>
              <Link
                to="/contact"
                className={`text-2xl ${linkClass("/contact")}`}
              >
                Contacto
              </Link>

              {/* Footer del panel */}
              <div className="mt-auto border-t border-gray-200 w-full pt-4 pb-2 flex flex-col gap-1">
                <p className="text-xs text-gray-400">
                  © {year} Luis Manuel Cordón Álvarez
                </p>
                <Link
                  to="/privacy"
                  className="text-xs text-gray-400 hover:text-red-500 hover:underline transition-colors duration-200"
                >
                  Política de privacidad
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
