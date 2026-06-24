import Layout from "../components/Layout";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-25 md:pt-36 pb-15 min-h-screen">
      <Layout>
        {/* Header */}
        <div className="border-b w-full" />
        <div className="pt-2 md:pt-5 pb-2 md:pb-5 w-full">
          <p className="text-red-500 leading-relaxed md:text-xl font-sans text-center">
            Sobre mí
          </p>
          <h1
            className="text-2xl md:text-5xl text-center leading-tight mt-2"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            De la hostelería al código.
          </h1>
        </div>
        <div className="border-b w-full" />

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 max-w-2xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base md:text-lg"
        >
          <p>
            Llevo más de 10 años trabajando en hostelería. Eso me enseñó a
            trabajar bajo presión, a organizarme cuando todo va rápido y a
            resolver problemas con lo que tienes a mano.
          </p>
          <p>
            En 2023 decidí dar el salto. Estudié el ciclo de DAW y desde
            entonces estoy construyendo proyectos reales con React, Spring Boot
            y todo lo que hace falta para hacer interfaces que funcionen bien y
            se vean mejor.
          </p>
          <p>No vengo del camino típico, y creo que eso suma.</p>
        </motion.div>
      </Layout>
    </div>
  );
}

export default About;
