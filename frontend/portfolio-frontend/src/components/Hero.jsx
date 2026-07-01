import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Layout from "./Layout";
import profilePhoto from "../assets/photo-studio.png";

const iconsVariant = {
  normal: { y: 0, opacity: 1 },
  hover: { y: [-50, 0], opacity: [0, 1] },
};

function Hero() {
  return (
    <Layout>
      <section className="flex flex-col pt-18 md:pt-32" id="home">
        <div className="flex flex-col md:flex-row px-2 md:px-15 gap-5 items-center text-black-700">
          {/* Foto */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              className="mx-auto rounded-2xl h-fit w-1/2 md:h-4/5 md:w-3/4 pt-1"
              src={profilePhoto}
              alt="Foto de perfil"
            />
          </motion.div>

          <motion.div
            className="flex flex-col w-3/4 md:w-4xl gap-4 md:p-4 items-center md:items-end xl:items-start justify-center md:justify-end md:self-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <h1 className="text-2xl md:text-4xl font-serif">
              Soy Luis Manuel, Full Stack developer (Junior).
            </h1>

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
                rel="noopener noreferrer"
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
          </motion.div>
        </div>
        <div className="rounded-sm border border-black bg-black px-4 py-3 font-mono text-xs text-white mt-8 md:mt-15 w-full self-center">
          <p className="text-center tracking-wider leading-relaxed">
            ¿Buscando un portfolio? El código de esta web es open source.{" "}
            <a
              className="underline text-red-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Luisma34/portfolio"
            >
              Ver en GitHub
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default Hero;
