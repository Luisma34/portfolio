import { useEffect, useState } from "react";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si es usuario baja más de 50px, scrolled se pone a true
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Eliminamos el listener cuando el componente desaparece, sino lo hicieramos seguiría ejecutándose.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); //Escribimos esto para decirle a React que lo ejecute solo una vez

  return <nav>Navbar</nav>;
}

export default Navbar;
