import Projects from "../components/Projects";
import Layout from "../components/Layout";

function ProjectsPage() {
  return (
    <>
      <div className="pt-25 p-10 md:pt-36 md:pb-15">
        <Layout>
          <div className="border-b w-9/12 md:w-full"></div>
        </Layout>
        <Projects />
        <Layout>
          <div className="border-b w-3/4 md:w-full py-7"></div>
        </Layout>
      </div>
    </>
  );
}

export default ProjectsPage;
