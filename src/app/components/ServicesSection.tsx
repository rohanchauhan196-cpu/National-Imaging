import { motion } from 'motion/react';
import { Microscope, Activity, Stethoscope, Droplet, Heart, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Pathology',
    description: 'Comprehensive blood tests, urine analysis, and tissue examination with accurate results.',
    color: 'bg-blue-100 text-blue-600',
    link: '/services/pathology'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Radiology',
    description: 'Advanced imaging services including X-Ray, CT Scan, MRI, and Ultrasound.',
    color: 'bg-red-100 text-red-600',
    link: '/services/radiology'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Cardiology Tests',
    description: 'ECG, Echo, TMT, and comprehensive cardiac health assessments.',
    color: 'bg-purple-100 text-purple-600',
    link: '/services/cardiology'
  },

];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted">
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Comprehensive <span className="text-primary">Diagnostic Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art diagnostic facilities with experienced professionals
            ensuring accurate and timely results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full border border-border">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;