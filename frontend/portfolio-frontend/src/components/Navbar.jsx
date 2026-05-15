// useState para estados locales, useEffect reservado para detectar el scroll más adelante
import { useState } from "react";
// HiMenu → icono hamburguesa | HiX → icono de cierre (X)
import { HiX, HiMenu } from "react-icons/hi";
// motion → elemento animable | AnimatePresence → ejecuta la animación "exit" antes de borrar del DOM.
// La siguiente línea es para decirle a ESLint que ignore el fallo de motion, el código funciona perfectamente.
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence} from "framer-motion";


function Navbar() {
  // Controla si el menú hamburguesa está abierto (true) o cerrado (false)
  const [burguer, menuBurguer] = useState(false);

  return (
    // Fragmento: devuelve dos elementos al mismo nivel sin añadir un div extra al DOM
    <>
      {/* Nav fija en la parte superior con desenfoque de fondo */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full py-4 tracking-wide backdrop-blur-md"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {/* Contenedor centrado — DEBE estar dentro del nav porque fixed ignora a los padres externos */}
        <div className="max-w-6xl mx-auto w-full px-6 flex justify-between items-center">
          {/* Nombre / logo — enlace ancla a la sección home */}
          <div>
            <a href="#home" className="text-[#000000]">
              Luis Manuel Cordón Álvarez
            </a>
          </div>

          {/* Links de navegación — hidden en móvil, visible desde md en adelante */}
          <div className="hidden md:flex gap-5">
            <a href="#about" className="hover:underline hover:text-red-500">
              Sobre mí
            </a>
            <a href="#projects" className="hover:underline hover:text-red-500">
              Proyectos
            </a>
            <a href="#contact" className="hover:underline hover:text-red-500">
              Contacto
            </a>
          </div>

          {/* Botón hamburguesa — solo visible en móvil (md:hidden lo oculta en desktop) */}
          {/* onClick invierte el estado con ! — si era false pasa a true y viceversa */}
          <button
            className="cursor-pointer text-2xl md:hidden"
            onClick={() => menuBurguer(!burguer)}
          >
            {/* !burguer → solo muestra el icono cuando el menú está cerrado */}
            {!burguer && <HiMenu />}
          </button>
        </div>
      </nav>

      {/* ============================================================
           MEJORAR MENÚ HAMBURGUESA
          - Definir paleta de colores primero
          - Aplicar color de fondo coherente (quitar border-blue-300)
          - Mejorar animación añadiendo scale
          ============================================================ */}

      {/* AnimatePresence detecta cuando el hijo sale del DOM y ejecuta la animación exit antes de borrarlo */}
      <AnimatePresence>
        {/* El menú solo existe en el DOM cuando burguer es true */}
        {burguer && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Empieza invisible y 20px arriba
            animate={{ opacity: 1, y: 0 }} // Llega a visible en su posición normal
            exit={{ opacity: 0, y: -20 }} // Al cerrarse vuelve a invisible y sube
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col right-2 items-start gap-5 fixed top-4 w-fit px-6 py-4 backdrop-blur-md rounded-2xl z-50 shadow-xl bg-white border border-blue-300"
          >
            {/* Botón X — self-end lo empuja al lado derecho dentro del flex-col */}
            <button
              className="self-end cursor-pointer"
              onClick={() => menuBurguer(!burguer)}
            >
              <HiX />
            </button>

            {/* Links móvil — hover:-translate-y-1 sube el link 4px al pasar el ratón */}
            <a
              href="#about"
              className="transition duration-300 hover:-translate-y-1"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="transition duration-300 hover:-translate-y-1"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="transition duration-300 hover:-translate-y-1"
            >
              Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
