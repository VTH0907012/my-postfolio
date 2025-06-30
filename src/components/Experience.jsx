

import { experiences } from "../data/experiences";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-primary text-light">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="text-secondary mr-4">02.</span> WORK EXPERIENCE
          </h2>
          <div className="w-full md:w-1/3 h-px bg-slate ml-4"></div>
        </div>

        <motion.div
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="flex group"
              variants={itemVariants}
            >
              <div className="hidden md:block w-1/5 text-right pr-8">
                <p className="text-secondary text-sm">{exp.period}</p>
              </div>
              <div className="w-full md:w-4/5 pl-0 md:pl-8 border-l-2 border-secondary/30 relative pb-8">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-secondary transform scale-0 group-hover:scale-100 transition"></div>

                <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                <p className="text-secondary mb-4 font-medium">{exp.role}</p>

                {exp.responsibilities && (
                  <div className="mb-4">
                    <h4 className="text-light font-semibold mb-2">
                      Responsibility:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && (
                  <div className="mb-4">
                    <h4 className="text-light font-semibold mb-2">
                      Technology used:
                    </h4>
                    <p className="text-slate">{exp.technologies.join(", ")}</p>
                  </div>
                )}

                {exp.projects && (
                  <div>
                    <h4 className="text-light font-semibold mb-2">Projects:</h4>
                    <ul className="space-y-3">
                      {exp.projects.map((project, i) => (
                        <li key={i} className="text-slate">
                          <p className="font-medium">{project.name}:</p>
                          <p>{project.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
