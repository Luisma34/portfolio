import { useEffect, useState } from "react";
import logo from "../assets/LogoLM.png";
import { HiMenu, HiX } from "react-icons/hi";
import { div } from "framer-motion/client";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Actualiza el estado según la posición del scroll
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Solo se ejecuta al montar el componente

  return (
    <nav
      className={` flex justify-between fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? "shadow-lg bg-neutral-950" : "bg-transparent"}`}
    >
      <a>
        <img src={logo} className="h-10" alt="Logo" />
      </a>
      <ul className="hidden text-white gap-6 md:flex">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <HiX /> : <HiMenu />}

        {menuAbierto && (
          <div>
            <a href="#home" onClick={() => setMenuAbierto(false)}>
              Inicio
            </a>
            <a href="#about">Sobre mí</a>
            <a href="#contact">Contacto</a>
          </div>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
