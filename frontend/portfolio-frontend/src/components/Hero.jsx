import { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [flip, setFlip] = useState(false);

  return (
    // Toda la tarjeta
    <section className="pt-16 flex flex-col justify-center items-center h-screen">
      {/* div que envuelve toda la tarjeta */}
      {/* Con motion.div añadiendo props pasamos de rotateY: 0 a rotateY: 180 */}
      <motion.div
        transition={{ duration: 0.6 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        className="relative w-full h-full max-h-96 transform-3d border-2 border-solid max-w-3xl p-8"
      >
        <div className="absolute inset-0 backface-hidden">
          <div className="flex gap-5 p-2 items-center">
            {/* Parte izquierda de la tarjeta */}
            <div className="pt-7 ">
              <p>De los fogones al código, con las mismas ganas de siempre.</p>
              <p className="mt-3"> Full Stack developer (Junior).</p>
            </div>

            {/* Parte derecha de la tarjeta */}
            <div className="flex flex-col">
              {/*Navbar de la parte superior de la imágen */}
              <nav>
                <div className="flex gap-4 whitespace-nowrap cursor-pointer">
                  <a href="#about">Sobre mí</a>
                  <a href="#stack">Stacks</a>
                  <a href="#projects">Proyectos</a>
                  <button
                    className="cursor-pointer"
                    onClick={() => setFlip(true)}
                  >
                    Contacto
                  </button>
                </div>
              </nav>
              <img
                className="pt-3 max-h-86 w-full"
                src="src\assets\profile-photo.png"
                alt="Foto de perfil"
              />
            </div>
          </div>
        </div>

        {/* Cara trasera */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <button className="cursor-pointer" onClick={() => setFlip(false)}>
            Atrás
          </button>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
