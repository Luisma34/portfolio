import { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [flip, setFlip] = useState(false);

  return (
    // Toda la tarjeta
    <section className="pt-18 flex flex-col justify-center items-center h-screen">
      {/* div que envuelve toda la tarjeta */}
      {/* Con motion.div pasamos de rotateY: 0 a rotateY: 180 */}
      <motion.div
        transition={{ duration: 0.6 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        className="relative w-full max-w-xl h-full max-h-96 [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 backface-hidden">
          {/*Navbar de la parte superior de la imágen */}
          <nav>
            <div className="flex gap-6 cursor-pointer">
              <a href="#about">Sobre mí</a>
              <a href="#stack">Stacks</a>
              <a href="#projects">Proyectos</a>
              <button className="cursor-pointer" onClick={() => setFlip(true)}>
                Contacto
              </button>
            </div>
          </nav>
          {/* Parte izquierda de la tarjeta */}
          <div>Hola soy Luis, Full Stack developer (Junior).</div>

          {/* Parte derecha de la tarjeta */}
          <div>
            <img src="" alt="Foto de perfil" />
          </div>
        </div>

        {/* Cara trasera */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <button className="cursor-pointer" onClick={() => setFlip(false)}>Atrás</button>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
