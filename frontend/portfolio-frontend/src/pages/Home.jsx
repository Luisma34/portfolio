import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />

      <TechStack />

      <Projects className={"pt-15 md:pt-7"} namePage={"Proyectos"} />
    </>
  );
}

export default Home;
