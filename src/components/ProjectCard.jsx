
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-secondary/10 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-secondary/10 flex flex-col h-full">
      <div className="relative overflow-hidden group h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            {project.subtitle && (
              <p className="text-secondary text-sm mb-2">{project.subtitle}</p>
            )}
            <p className="text-light text-sm mb-3 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span key={index} className="bg-primary/80 text-secondary px-2 py-1 text-xs rounded">
                  {tech.includes(':') ? tech.split(':')[0] : tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-light/80">{project.period}</span>
              <div className="flex space-x-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                    className="text-light hover:text-secondary transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    {/* Github icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {/* ...path giữ nguyên... */}
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" 
                    className="text-light hover:text-secondary transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    {/* Demo icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* ...path giữ nguyên... */}
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.subtitle && (
              <p className="text-secondary text-sm">{project.subtitle}</p>
            )}
          </div>
          <span className="text-xs bg-primary/20 text-secondary px-2 py-1 rounded">
            {project.role}
          </span>
        </div>
        
        <div className="flex items-center text-sm text-slate mb-4">
          <span>{project.period}</span>
          <span className="mx-2">•</span>
          <span>{project.members} member{project.members > 1 ? 's' : ''}</span>
        </div>

        <p className="text-slate mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-light text-sm font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-white/5 text-slate text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
