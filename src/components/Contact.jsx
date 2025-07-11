
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

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-light">
      <div className="container mx-auto px-6">
        
        <motion.div
          className="flex items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="text-secondary mr-4">05.</span> Contact
          </h2>
          <div className="w-full md:w-1/3 h-px bg-slate ml-4"></div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h3>

          <motion.div
            className="bg-secondary/10 p-8 rounded-lg mb-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <motion.div className="flex items-center" variants={itemVariants}>
                <div className="bg-primary p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-slate mb-1">Email</h4>
                  <a href="mailto:thanhheu090701@gmail.com" className="text-light hover:text-secondary transition">
                    thanhheu090701@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center" variants={itemVariants}>
                <div className="bg-primary p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-slate mb-1">Phone</h4>
                  <a href="tel:+84914549857" className="text-light hover:text-secondary transition">
                    (+84) 914 549 857
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-slate mb-6">
              I'm open to new opportunities and collaborations. Feel free to reach out via email or phone - I'll respond as soon as possible!
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
