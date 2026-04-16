import { useEffect, useState } from "react";
import logo from "../assets/LogoLM.png";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado cuando el usuario baja en la página
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-neutral-950 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo del navbar */}
      <a href="#home">
        <img src={logo} className="h-10 rounded-full " alt="Logo" />
      </a>

      {/* Menú desktop: solo se ve en pantallas medianas o grandes */}
      <ul className="hidden gap-6 text-white md:flex">
        <li>
          <a
            href="#home"
            className="group relative overflow-hidden h-6 flex items-center"
          >
            <span className="transition-discrete duration-500 ease-out group-hover:-translate-y-full">
              Inicio
            </span>

            <span className="absolute left-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#C9A86A]">
              Inicio
            </span>
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="group relative overflow-hidden h-6 flex items-center"
          >
            <span className="transition-discrete duration-500 ease-out group-hover:-translate-y-full">
              Sobre mi
            </span>

            <span className="absolute left-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#C9A86A]">
              Sobre mi
            </span>
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="group relative overflow-hidden h-6 flex items-center"
          >
            <span className="transition-discrete duration-500 ease-out group-hover:-translate-y-full">
              Proyectos
            </span>

            <span className="absolute left-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#c9a86a]">
              Proyectos
            </span>
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="group relative overflow-hidden h-6 flex items-center"
          >
            <span className="transition-discrete duration-500 ease-out group-hover:-translate-y-full">
              Contacto
            </span>

            <span className="absolute left-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#C9A86A]">
              Contacto
            </span>
          </a>
        </li>
      </ul>

      {/* Botón hamburguesa: solo se ve en móvil */}
      <button
        className="text-2xl text-white md:hidden  transition duration-300 ease-in-out"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Menú móvil: aparece solo cuando el estado está en true */}
      <div
        className={`absolute top-full left-0 flex w-full flex-col items-center gap-6 bg-neutral-950 px-6 py-8 text-white shadow-lg md:hidden transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}  ease-in-out }`}
      >
        {/* pointer-events-none → cuando está cerrado e invisible,
             desactiva los clics para no bloquear lo que hay debajo */}

        <div className="flex flex-col gap-8 items-center">
          <a
            href="#home"
            className="group relative overflow-hidden h-6 flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className="text-base tracking-wide transition-all duration-500"
              style={{
                // STAGGER: cada link espera un poco más que el anterior.
                // index 0 → 0ms, index 1 → 60ms, index 2 → 120ms, index 3 → 180ms
                // Al cerrar siempre 0ms para que desaparezcan todos a la vez.
                transitionDelay: menuOpen ? "0ms" : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              Inicio
            </span>

            <span className="w-1 h-0 bg-[#C9A86A] transition-all duration-300 group-hover:h-5 ml-2"></span>
          </a>

          <a
            href="#about"
            className="group relative overflow-hidden h-6 flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className="text-base tracking-wide transition-all duration-500"
              style={{
                transitionDelay: menuOpen ? "60ms" : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              Sobre mi
            </span>

            <span className="w-1 h-0 bg-[#C9A86A] transition-all duration-300 group-hover:h-5 ml-2"></span>
          </a>

          <a
            href="#projects"
            className="group relative overflow-hidden h-6 flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className="text-base tracking-wide transition-all duration-500"
              style={{
                transitionDelay: menuOpen ? "120ms" : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              Proyectos
            </span>
            
            {/* La barra que aparece al hacer hover, con animación de crecimiento en altura */}
            <span className="w-1 h-0 bg-[#C9A86A] transition-all duration-300 group-hover:h-5 ml-2"></span>
          </a>

          <a
            href="#contact"
            className="group relative overflow-hidden h-6 flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className="text-base tracking-wide transition-all duration-500"
              style={{
                transitionDelay: menuOpen ? "180ms" : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              Contacto
            </span>

            <span className="w-1 h-0 bg-[#C9A86A] transition-all duration-300 group-hover:h-5 ml-2"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
