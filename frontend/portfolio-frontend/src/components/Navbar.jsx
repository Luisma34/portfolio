import { useEffect, useState } from "react";

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

  return <nav>Navbar</nav>;
}

export default Navbar;
