import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Hero />

      <TechStack />

      <Projects className={"pt-15 md:pt-7"} namePage={"Proyectos"} />
    </>
  );
}

export default Home;
