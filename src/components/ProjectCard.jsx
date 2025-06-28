const ProjectCard = ({ project }) => {
  return (
    <div className="bg-secondary/10 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-secondary/10">
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" 
                    className="text-light hover:text-secondary transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
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

        <p className="text-slate mb-4">{project.description}</p>
        
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