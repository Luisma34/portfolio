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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2 md:p-6">
        <motion.div
          className="self-end"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowRight className="self-end text-white text-xs md:text-xl" />
        </motion.div>
        <div className="justify-end">
          <h3 className="text-white text-xs md:text-xl font-semibold mb-1">
            {project}
          </h3>
          <p className="text-white/80 text-xs md:text-sm mb-2">{description}</p>
          <span className="text-white/50 text-xs hidden md:block">{stack}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
