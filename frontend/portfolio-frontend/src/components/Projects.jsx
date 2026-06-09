import ProjectsCard from "./ProjectsCard";
import Layout from "./Layout";

function Projects() {
  return (
    <>
      <div id="projects" className="pt-18 md:pt-8">
        <Layout>
          <h2 className="text-2xl md:text-4xl font-serif py-3 md:py-5 pb-5 md:pb-15">
            Proyectos
          </h2>
          <div className="grid grid-cols-3">
            <ProjectsCard
              image={"src/assets/InplayEvents/foto-31.jpg"}
              project={"Inplay Events"}
              description={"Gestión de club de padel."}
              stack={"React, Bootstrap,Spring Boot."}
            ></ProjectsCard>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Projects;
