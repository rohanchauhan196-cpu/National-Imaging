import { motion } from 'motion/react';
import { CheckCircle2, Clock, Shield, Users, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'NABL Certified',
    description: 'Nationally accredited testing laboratory ensuring highest quality standards.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Quick Reports',
    description: 'Same-day reports for most tests with online access to results.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Accurate Results',
    description: 'Advanced technology and expert pathologists for precise diagnostics.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Team',
    description: 'Highly qualified and experienced medical professionals.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Home Collection',
    description: 'Free sample collection from your doorstep at your convenience.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Affordable Pricing',
    description: 'Competitive prices with various health package options.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md mb-4 text-sm"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl mb-6">
              Your Trusted Partner in <span className="text-primary">Healthcare</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With state-of-the-art facilities and a commitment to excellence, 
              we provide reliable diagnostic services that you can trust for your health needs.
            </p>

            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-muted rounded-xl hover:shadow-sm transition-all duration-300 border border-border"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-14 h-14 bg-secondary text-white rounded-xl flex items-center justify-center mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sm:col-span-2 bg-secondary text-white rounded-xl p-8 shadow-md"
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.5 }}
                    className="text-3xl mb-1"
                  >
                    500+
                  </motion.p>
                  <p className="text-sm text-white/80">Tests Available</p>
                </div>
                <div>
                  <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.6 }}
                    className="text-3xl mb-1"
                  >
                    50k+
                  </motion.p>
                  <p className="text-sm text-white/80">Happy Patients</p>
                </div>
                <div>
                  <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.7 }}
                    className="text-3xl mb-1"
                  >
                    24/7
                  </motion.p>
                  <p className="text-sm text-white/80">Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;