import { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [flip, setFlip] = useState(false);

  return (
    // Toda la tarjeta

    <section className="pt-20 flex flex-col justify-center items-center h-screen">
      <div transition={{ duration: 0.6 }}>
        {/* div que envuelve toda la tarjeta */}
        {/* Con motion.div añadiendo props pasamos de rotateY: 0 a rotateY: 180 */}
        <article className="relative ">
          <div>
            <div className="flex gap-5 p-2 items-center text-black-700">
              {/* Parte izquierda de la tarjeta */}
              <div className="pt-8 flex flex-col ">
                <p>
                  De los fogones al código, con las mismas ganas de siempre.
                </p>
                <p className="mt-3"> Full Stack developer (Junior).</p>
              </div>

              {/* Parte derecha de la tarjeta */}
              <div className="flex flex-col">
                <img
                  className="pt-5 max-h-86 w-full "
                  src="src\assets\profile-photo.png"
                  alt="Foto de perfil"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Hero;
