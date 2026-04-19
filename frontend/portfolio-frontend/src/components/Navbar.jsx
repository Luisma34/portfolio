import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Función que se ejecuta cada vez que el usuario hace scroll
    const handleScroll = () => {
      // Estado que indica si el usuario ha hecho scroll más de 50px
      // Aunque el efecto solo es para que siga bajando el nombre a la izquierda toda la web
      setScrolled(window.scrollY > 50); // true si bajó más de 50px, false si no
    };

    // Registra el listener al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpieza: elimina el listener al desmontar el componente para evitar memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Array vacío: solo se ejecuta una vez al montar

  return (
    <nav
      className="fixed top-0 left-0 z-50 flex w-full px-6 py-4 tracking-wide backdrop-blur-md"
      style={{ fontFamily: "'Playfair Display',serif" }}
    >
      <div>
        <a href="#home" className="text-[#000000]">
          Luis Manuel Cordón Álvarez
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
