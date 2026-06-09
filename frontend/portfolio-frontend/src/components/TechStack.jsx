import Layout from "./Layout";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function TechStack() {
  const technologies = [
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    },
    {
      name: "TailwindCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Spring",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    },
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    },
    {
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
    },
    {
      name: "MariaDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original-wordmark.svg",
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
  ];

  return (
    <>
      <div className="py-20 md:py-52">
        <Layout>
          <h2 className="text-2xl md:text-4xl font-serif py-3 md:py-5 pb-5 md:pb-15">
            Tech Stack
          </h2>

          <div className="w-3/4 md:w-full gap-5 md:gap-10 grid grid-cols-2 md:grid-cols-4 place-items-center">
            {technologies.map((tech, index) => (
              // Entramos en el array buscando el indice de cada elemento para no duplicar nada.
              // Hemos creado cada imagen de manera que simplificamos código.
              <motion.div
                key={tech.name}
                className="w-2/4"
                initial={{ translateY: 50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-25 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </Layout>
        <div className="border-b w-full h-full py-7"></div>
      </div>
    </>
  );
}

export default TechStack;
