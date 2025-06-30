
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-primary text-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          ref={ref}
        >
          <motion.div variants={itemVariants} className="flex items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              <span className="text-secondary mr-4">01.</span> About
            </h2>
            <div className="w-full md:w-1/3 h-px bg-slate ml-4"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              className="md:w-2/3"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                {/* Personal Info */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-secondary mb-2">Personal Info</h3>
                  <ul className="space-y-2 text-slate">
                    {[
                      { label: "Dob:", value: "09/07/2001" },
                      { label: "Gender:", value: "Male" },
                      { label: "Phone:", value: "0914549857" },
                      { label: "Email:", value: "thanhheu090701@gmail.com" },
                      { label: "Address:", value: "Ninh Kieu District, Can Tho City" }
                    ].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex"
                        variants={itemVariants}
                      >
                        <span className="w-24 font-medium">{item.label}</span>
                        <span>{item.value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-secondary mb-2">Links</h3>
                  <ul className="space-y-2 text-slate">
                    {[
                      { label: "Github:", url: "https://github.com/VTH090701", text: "VTH090701" },
                      { label: "", url: "https://github.com/VTH0907012", text: "VTH0907012" }
                    ].map((link, index) => (
                      <motion.li 
                        key={index} 
                        className="flex"
                        variants={itemVariants}
                      >
                        <span className="w-24 font-medium">{link.label}</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline"
                        >
                          {link.text}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-light mb-4">OBJECTIVE</h3>
                <motion.p 
                  className="mb-4 text-slate"
                  variants={itemVariants}
                >
                  I want to develop my programming skills and build professional
                  websites. My goal is to create practical products, optimize
                  performance and bring value to businesses and users.
                </motion.p>
                <ul className="space-y-2 text-slate mb-6">
                  {[
                    "Short term: Continue to improve programming skills, optimize software development processes and expand knowledge of system architecture.",
                    "Long term: Become a programmer capable of building and developing complete web systems, aiming for the best user experience and contributing to business development."
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex"
                      variants={itemVariants}
                    >
                      <span className="text-secondary mr-2">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-light mb-4">EDUCATION</h3>
                <motion.div 
                  className="bg-secondary/10 p-4 rounded-lg mb-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold">Can Tho University</h4>
                  <p className="text-slate">Information Technology</p>
                  <p className="text-sm text-slate/80">2019 - 2024</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="md:w-1/3 flex justify-center"
              variants={imageVariants}
            >
              <div className="relative w-64 h-64 group">
                <motion.div 
                  className="absolute inset-0 border-2 border-secondary rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"
                  whileHover={{ scale: 1.05 }}
                ></motion.div>

                <motion.div 
                  className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-secondary/20 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/Anh_CV.jpg`}
                    alt="V6 Thanh Hieu"
                    className="w-full h-full object-cover brightness-95 contrast-110 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300"
                  whileHover={{ scale: 1.5 }}
                ></motion.div>
                <motion.div 
                  className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-300"
                  whileHover={{ scale: 1.5 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;