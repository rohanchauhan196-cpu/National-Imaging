import { motion } from 'motion/react';
import { Check, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Full Body Checkup',
    price: '₹1800',
    tests: 6,
    popular: true,
    link: '/packages/preventive-comprehensive',
    features: [
      'Complete Hemogram',
      'Thyroid Profile',
      'LFT & TFT',
      'Lipid Profile',
      'Hba1c',
      'Iron Profile'
    ],
  },
  {
    name: 'Fever Profile – Advanced',
    price: '₹1600',
    tests: 6,
    popular: false,
    link: '/packages/fever-advance',
    features: [
      'Blood Culture & Sensitivity',
      'CRP (Quantative)',
      'Malaria Antigen',
      'Widal Test',
      'CBC',
      'Urine Analysis',
    ],
  },
  {
    name: 'Diabetic Profile',
    price: '₹1000',
    tests: 6,
    popular: false,
    link: '/packages/diabetic-profile',
    features: [
      'HbA1c',
      'Fasting Sugar',
      'Lipid Profile',
      'Serum Creatinine',
      'Uric Acid',
      'Urine Microalbumin',
    ],
  },
];

const TopPackages = () => {
  return (
    <section id="packages" className="py-20 bg-muted">
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
            Health Packages
          </motion.span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Top <span className="text-primary">Health Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive health screening packages designed to keep you and your family healthy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border-2 ${pkg.popular ? 'border-primary' : 'border-border'
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl text-primary">{pkg.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.tests} Tests Included</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={pkg.link}
                className={`block w-full py-3 rounded-md transition-colors duration-200 text-center ${pkg.popular
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                  }`}
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/all-packages" // Changed to point to the new page
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View All Packages
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TopPackages;
