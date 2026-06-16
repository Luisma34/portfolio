import ProjectsCard from "./ProjectsCard";
import Layout from "./Layout";
import inplayImg from "../assets/InplayEvents/foto-31.jpg";
import dorImg from "../assets/football-shop.png";
import libraryImg from "../assets/library-manager.png";
import ticTacToeImg from "../assets/tic-tac-toe.png";

function Projects({ className, namePage, headingClass = "text-2xl md:text-4xl font-serif py-3 md:py-5 pb-5 md:pb-15" }) {
  return (
    <>
      {/* V.1 Próximamente vamos a implementar URL para cada proyecto */}
      <div id="projects" className={`${className}`}>
        <Layout>
          <h2 className={headingClass}>
            {namePage}
          </h2>
          {/* IMPLEMENTAR LOCATION PARA CAMBIAR LAYOUT EN LA URL */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-10 w-full">
            {/* Inplay */}
            <a
              href="https://github.com/Luisma34/Inplay-Events"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectsCard
                image={inplayImg}
                project={"Inplay Events"}
                description={"Gestión de club de padel."}
                stack={"React, Bootstrap,Spring Boot."}
                className="object-top xl:object-top"
              ></ProjectsCard>
            </a>

            {/* Proyecto DOR */}
            <a
              href="https://github.com/Luisma34/Proyecto_final_DOR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectsCard
                image={dorImg}
                project={"Proyecto DOR 2024"}
                description={"Proyecto para diseño de interfaces web."}
                stack={"HTML, CSS, Bootstrap, Figma."}
              ></ProjectsCard>
            </a>

            {/* Library Manager */}
            <a
              href="https://github.com/Luisma34/LibraryManager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectsCard
                image={libraryImg}
                project={"Library manager"}
                description={"Libreria para administrar tu biblioteca personal."}
                stack={"HTML, CSS, JavaScript Vanilla."}
              ></ProjectsCard>
            </a>

            {/* Tic tac toe */}
            <a
              href="https://github.com/Luisma34/Tres-en-raya-Tic-tac-toe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectsCard
                image={ticTacToeImg}
                project={"Tic tac toe"}
                description={"Tres en raya para web Odin."}
                stack={"HTML, CSS, JavaScript Vanilla."}
              ></ProjectsCard>
            </a>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Projects;
