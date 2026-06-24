import Projects from "../components/Projects";
import Layout from "../components/Layout";
import { useEffect } from "react";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {/*Los proyectos tienen que subir más elegantes*/}
      <div className="pt-25 md:pt-36 pb-15">
        <Layout>
          <div className="border-b w-9/12 md:w-full"></div>
          <div className="pt-2 md:pt-5 pb-2 md:pb-5">
            <p className="text-red-500 leading-relaxed md:text-xl font-sans text-center ">
              Últimos proyectos
            </p>
            <h1 className="text-2xl md:text-4xl text-center leading-relaxed font-sans">
              Esto es lo que he construido hasta ahora.
            </h1>
            <p className="md:pt-2 text-center max-w-2xl mx-auto">
              Aquí reúno todo lo que he ido construyendo: proyectos de clase,
              experimentos personales y pequeñas ideas que se convirtieron en
              código.
            </p>
          </div>
        </Layout>
        <Layout>
          <div className="border-b w-9/12 md:w-full"></div>
        </Layout>
        <Projects
          className="pt-8"
          namePage="Destacados"
          headingClass="text-xs uppercase tracking-widest text-red-500 pb-5 md:pb-10 w-full"
        />
      </div>
    </>
  );
}

export default ProjectsPage;
