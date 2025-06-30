
import { skillCategories } from "../data/skills";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary text-light">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="text-secondary mr-4">04.</span> Skills
          </h2>
          <div className="w-full md:w-1/3 h-px bg-slate ml-4"></div>
        </div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="skill-category" variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 text-secondary border-b border-slate/50 pb-2">
                {category.category}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-secondary/10 transition-colors"
                    variants={itemVariants}
                  >
                    <div className="w-8 h-8 flex-shrink-0">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-contain 
                        filter brightness-0 invert-[70%] 
                        hover:brightness-100 hover:invert-0 
                        transition-all duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/default-skill.svg";
                        }}
                      />
                    </div>
                    <span className="text-light text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
