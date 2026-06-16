import Layout from "../components/Layout";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-25 md:pt-36 pb-15 min-h-screen">
      <Layout>
        <div className="border-b w-9/12 md:w-full"></div>
        <div className="pt-2 md:pt-5 pb-2 md:pb-5 w-full">
          <p className="text-red-500 leading-relaxed md:text-xl font-sans text-center">
            Sobre mí
          </p>
          <h1 className="text-2xl md:text-4xl text-center leading-relaxed font-sans">
            Próximamente.
          </h1>
          <p className="md:pt-2 text-center max-w-2xl mx-auto text-gray-500">
            Aquí encontrarás mi historia, experiencia y lo que me mueve como
            desarrollador. Vuelve pronto.
          </p>
        </div>
        <div className="border-b w-9/12 md:w-full"></div>
      </Layout>
    </div>
  );
}

export default About;
