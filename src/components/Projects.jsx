
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary text-light">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="text-secondary mr-4">03.</span> PROJECT PARTICIPATION
          </h2>
          <div className="w-full md:w-1/3 h-px bg-slate ml-4"></div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="flex h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
