// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProjectsCard = ({ project, description, stack, image }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Imagen */}
      <img src={image} alt={project} className="w-full h-72 object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-semibold mb-1">{project}</h3>
        <p className="text-white/80 text-sm mb-2">{description}</p>
        <span className="text-white/50 text-xs">{stack}</span>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
