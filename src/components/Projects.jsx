import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

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
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;