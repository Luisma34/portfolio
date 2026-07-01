// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import Layout from "./Layout";
import inplayImg from "../assets/InplayEvents/foto-31.jpg";
import libraryImg from "../assets/library-manager.png";
import ticTacToeImg from "../assets/tic-tac-toe.png";

function Projects({
  className,
  namePage,
  headingClass = "text-2xl md:text-4xl font-serif py-3 md:py-5 pb-5 md:pb-15",
}) {
  return (
    <>
      {/*Los proyectos tienen que subir más elegantes*/}
      <div id="projects" className={`${className}`}>
        <Layout>
          <h2 className={headingClass}>{namePage}</h2>
          {/* IMPLEMENTAR LOCATION PARA CAMBIAR LAYOUT EN LA URL */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-10 w-full">
            {/* Inplay */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true }}
            >
              <ProjectsCard
                image={inplayImg}
                project={"Inplay Events"}
                description={"Gestión de club de padel."}
                stack={"React, Bootstrap, Spring Boot."}
                className="object-top xl:object-top"
                projectsUrl="https://github.com/Luisma34/Inplay-Events"
                projectsDemo="https://luisma34.github.io/Inplay-Events/"
              />
            </motion.div>

            {/* Library Manager */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectsCard
                image={libraryImg}
                project={"Library Manager"}
                description={"Librería para administrar tu biblioteca personal."}
                stack={"HTML, CSS, JavaScript Vanilla."}
                projectsUrl="https://github.com/Luisma34/LibraryManager"
                projectsDemo="https://luisma34.github.io/LibraryManager/"
              />
            </motion.div>

            {/* Tic tac toe */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectsCard
                image={ticTacToeImg}
                project={"Tic Tac Toe"}
                description={"Tres en raya para web Odin."}
                stack={"HTML, CSS, JavaScript Vanilla."}
                projectsUrl="https://github.com/Luisma34/Tres-en-raya-Tic-tac-toe"
                projectsDemo="https://luisma34.github.io/Tres-en-raya-Tic-tac-toe/"
              />
            </motion.div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Projects;
