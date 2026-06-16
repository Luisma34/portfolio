import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Layout from "./Layout";

const iconsVariant = {
  normal: { y: 0, opacity: 1 },
  hover: { y: [-50, 0], opacity: [0, 1] },
};

// MEJORA EN PANTALLAS GRANDES

function Hero() {
  return (
    <Layout>
      <section className="flex flex-col pt-18 md:pt-32" id="home">
        {/* flex-col en movil (imagen arriba, texto abajo) y flex-row en desktop (lado a lado) */}
        <div className="flex flex-col md:flex-row px-2 md:px-15 gap-5 items-center text-black-700">
          {/* Foto de perfil */}
          {/* relative por si quiero añadir algo encima de la foto en el futuro */}
          <div className="relative">
            <img
              className="mx-auto h-fit w-1/2 md:h-4/5 md:w-3/4 pt-1"
              src="src/assets/photo-studio.png"
              alt="Foto de perfil"
            />
          </div>

          {/* Bloque de texto */}
          <div className="flex flex-col w-3/4 md:w-4xl gap-4 md:p-4 items-center md:items-end xl:items-start justify-center md:justify-end md:self-end">
            {/* Solo hay un h1 por pagina, importante para el SEO */}
            <h1 className="text-2xl md:text-4xl font-serif">
              Soy Luis Manuel, Full Stack developer (Junior).
            </h1>

            {/* leading-relaxed para que el texto no quede tan apretado */}
            <p className="text-base md:mt-3 md:leading-relaxed font-sans">
              Programador web titulado en DAW. Te invito a explorar mi portfolio
              para conocerme un poco más. Si buscas a alguien con compromiso y
              ganas de crecer, no dudes en ponerte en contacto conmigo.
            </p>

            <div
              id="contact"
              className="flex self-start transition duration-1000 gap-5 text-white w-fit h-fit bg-transparent pt-2 cursor-pointer"
            >
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/luis-manuel-cord%C3%B3n-%C3%A1lvarez-357620356/"
                target="_blank"
                // noopener: Evita que la nueva página tome el control de esta ventana (evita ataques de Phising mediante 'window.opener')
                // noreferrer: Oculta la información de procedencia (IP/URL de mi portfolio) por privacidad y seguridad.
                rel="noopener noreferrer"
                // Enseñamos los diferentes estados del componente
                variants={{
                  normal: { backgroundColor: "rgb(44,44,44)" },
                  hover: { backgroundColor: "#0072b1" },
                }}
                initial="normal"
                whileHover="hover"
                transition={{ duration: 0.4 }}
                className="w-9 h-9 md:w-13 md:h-13 flex items-center justify-center rounded-full text-white"
              >
                <motion.span
                  variants={iconsVariant}
                  transition={{ duration: 0.4 }}
                >
                  <FaLinkedin />
                </motion.span>
              </motion.a>

              {/* Whatsapp */}
              <motion.a
                href="https://wa.me/34623025851?text=Hola, he visto tu portfolio y me gustaría contactar contigo para una entrevista."
                target="_blank"
                // Prevención contra ataques malisiosos.
                rel="noopener noreferrer"
                variants={{
                  normal: { backgroundColor: "rgb(44,44,44)" },
                  hover: { backgroundColor: "#128c7e" },
                }}
                initial="normal"
                whileHover="hover"
                transition={{ duration: 0.4 }}
                className="w-9 h-9 md:w-13 md:h-13 flex items-center justify-center rounded-full text-white"
              >
                <motion.span
                  variants={iconsVariant}
                  transition={{ duration: 0.4 }}
                >
                  <FaWhatsapp />
                </motion.span>
              </motion.a>

              {/* Gmail */}
              <motion.a
                href="mailto:luisma.cordon@gmail.com?subject=Candidatura para vacante de desarrollador.&body=Hola, me gustaria contactar contigo..."
                variants={{
                  normal: { backgroundColor: "rgb(44,44,44)" },
                  hover: { backgroundColor: "#EA4335" },
                }}
                initial="normal"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="w-9 h-9 md:w-13 md:h-13 flex items-center justify-center rounded-full text-white  "
              >
                <motion.span
                  variants={iconsVariant}
                  transition={{ duration: 0.3 }}
                >
                  <SiGmail />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </div>
        {/* Texto debajo de la foto y el texto */}
        <div className="rounded-sm border border-black bg-black px-2 py-2 font-mono text-xs text-white mt-8 mx-2 md:mt-15 w-3/4 md:w-full self-center">
          <p className="flex items-center justify-center tracking-wider">
            <span>
              <span className="flex items-center justify-center tracking-wider p-0.5">
                ¿Buscando un portfolio?
              </span>
              El código de esta web es de open source.{" "}
              <a
                className="underline text-red-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Luisma34/portfolio"
              >
                Ver en GitHub
              </a>
            </span>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default Hero;
