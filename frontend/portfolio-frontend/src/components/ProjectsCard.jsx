// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsCard = ({
  project,
  description,
  stack,
  image,
  className,
  projectsUrl,
  projectsDemo,
}) => {
  return (
    <motion.div
      className="relative aspect-4/3 md:aspect-video overflow-hidden rounded-2xl cursor-pointer group mx-0"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Imagen */}
      <img
        src={image}
        alt={project}
        className={`w-full h-full object-cover ${className}`}
      />

      {/* Gradiente móvil — nombre siempre visible
          Los enlaces se renderizan condicionalmente: si un proyecto no tiene
          repositorio público o demo desplegada, el icono no aparece. */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent md:hidden flex items-end justify-between p-2">
        <h3 className="text-white text-xs font-semibold">{project}</h3>
        <div className="flex gap-2">
          {projectsUrl && (
            <a
              href={projectsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-60 transition-opacity duration-200"
            >
              <FiGithub className="text-sm" />
            </a>
          )}
          {projectsDemo && (
            <a
              href={projectsDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-60 transition-opacity duration-200"
            >
              <FiExternalLink className="text-sm" />
            </a>
          )}
        </div>
      </div>

      {/* Overlay desktop — hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-between p-6">
        <div className="self-end">
          <div className="flex flex-row gap-3">
            {projectsUrl && (
              <a
                href={projectsUrl}
                className="text-white hover:opacity-60 transition-opacity duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-xl" />
              </a>
            )}
            {projectsDemo && (
              <a
                href={projectsDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-60 transition-opacity duration-200"
              >
                <FiExternalLink className="text-xl" />
              </a>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold mb-1">{project}</h3>
          <p className="text-white/80 text-sm mb-2">{description}</p>
          <span className="text-white/50 text-xs">{stack}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
