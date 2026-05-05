// Importo useState para manejar estados locales y useEffect para efectos secundarios
import { useEffect, useState } from "react";
// Importo los iconos de menú hamburguesa y X de react-icons
import { HiX, HiMenu } from "react-icons/hi";
// Importo motion para animar elementos y AnimatePresence para detectar cuando un elemento sale del DOM
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  // Estado para saber si el usuario ha hecho scroll (reservado para futuros efectos visuales)
  const [scrolled, setScrolled] = useState(false);

  // Estado que controla si el menú hamburguesa está abierto (true) o cerrado (false)
  const [burguer, menuBurguer] = useState(false);

  return (
    // Fragmento de React: permite devolver dos elementos al mismo nivel sin añadir un div extra al DOM
    <>
      {/* Nav fijo en la parte superior, ocupa todo el ancho, con desenfoque de fondo */}
      <nav className="flex justify-between fixed top-0 left-0 z-50 w-full px-6 py-4 tracking-wide backdrop-blur-md ">
        {/* Nombre completo a la izquierda con tipografía Playfair Display */}
        <div>
          <a
            href="#home"
            className="text-[#000000]"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Luis Manuel Cordón Álvarez
          </a>
        </div>

        {/* Links de navegación — ocultos en móvil, visibles en pantallas medianas o más grandes */}
        <div className="hidden md:flex gap-5 ">
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

        {/* Botón hamburguesa — visible solo en móvil (md:hidden lo oculta en desktop) */}
        {/* onClick invierte el estado: !burguer convierte false en true y viceversa */}
        <button
          className="cursor-pointer text-2xl md:hidden"
          onClick={() => menuBurguer(!burguer)}
        >
          {/* !burguer: solo muestra el icono cuando el menú está cerrado (burguer = false) */}
          {/* Cuando burguer es true (menú abierto), !burguer es false y no renderiza nada */}
          {!burguer && <HiMenu />}
        </button>
      </nav>

      {/* ============================================================
          TODO: MEJORAR MENÚ HAMBURGUESA y LINKS
          - Definir paleta de colores de la web primero
          - Aplicar color de fondo coherente con la paleta (quitar border-blue-300)
          - Mejorar animación de entrada/salida (añadir scale)
          - Pulir espaciado y tipografía de los links
          ============================================================ */}

      {/* AnimatePresence detecta cuando un elemento hijo entra o sale del DOM y ejecuta la animación exit */}
      <AnimatePresence>
        {/* El menú desplegable solo existe en el DOM cuando burguer es true */}
        {burguer && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Empieza invisible y 20px hacia arriba
            animate={{ opacity: 1, y: 0 }} // Llega a visible y en su posición normal
            exit={{ opacity: 0, y: -20 }} // Al cerrarse vuelve a invisible y sube 20px
            transition={{ duration: 0.3 }} // La animación dura 0.3 segundos
            className="md:hidden flex flex-col right-2 items-start gap-5 fixed top-4 w-fit px-6 py-4 backdrop-blur-md rounded-2xl z-50 shadow-xl bg-white border border-blue-300"
          >
            {/* Botón X dentro del dropdown — cierra el menú poniendo burguer a false */}
            <button
              className="self-end cursor-pointer"
              onClick={() => menuBurguer(!burguer)}
            >
              <HiX />
            </button>
            {/* Links de navegación móvil — hover:-translate-y-1 sube el link al pasar el ratón */}
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
