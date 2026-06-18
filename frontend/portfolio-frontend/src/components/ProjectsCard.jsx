// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ProjectsCard = ({ project, description, stack, image, className }) => {
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

      {/* Gradiente móvil — nombre siempre visible */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent md:hidden flex items-end p-2">
        <h3 className="text-white text-xs font-semibold">{project}</h3>
      </div>

      {/* Overlay desktop — hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-between p-6">
        <motion.div
          className="self-end"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowRight className="text-white text-xl" />
        </motion.div>
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
