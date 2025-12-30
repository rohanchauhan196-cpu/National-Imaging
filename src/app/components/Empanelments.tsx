import { motion } from 'motion/react';

const empanelments = [
  { name: 'CGHS', logo: '🏥' },
  { name: 'ECHS', logo: '⚕️' },
  { name: 'Railway', logo: '🚂' },
  { name: 'ESI', logo: '🏢' },
  { name: 'BSES', logo: '⚡' },
  { name: 'Delhi Govt', logo: '🏛️' },
  { name: 'NDMC', logo: '🏙️' },
  { name: 'DMRC', logo: '🚇' },
];

const Empanelments = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md mb-4 text-sm"
          >
            Our Empanelments
          </motion.span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Trusted by <span className="text-primary">Leading Organizations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to be empaneled with major government and private organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {empanelments.map((emp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center border border-border"
            >
              <div className="text-4xl mb-2">{emp.logo}</div>
              <p className="text-sm">{emp.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Empanelments;
