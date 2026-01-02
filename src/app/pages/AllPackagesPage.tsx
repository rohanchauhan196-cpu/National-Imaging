import { motion } from 'motion/react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import packageLab from '../../assets/package-lab.png';
import packageConsult from '../../assets/package-consult.png';
import packageImaging from '../../assets/package-imaging.png';

export const packages = [
    {
        name: 'Health Panel-Whole Body',
        price: '₹3000',
        popular: true,
        image: packageLab,
        link: '/packages/health-panel-whole-body',
        description: 'Comprehensive whole body checkup including Lipid, Liver, Kidney, Thyroid profiles and more.'
    },
    {
        name: 'Preventive Health Panel- Comprehensive',
        price: '₹1800',
        popular: false,
        image: packageConsult,
        link: '/packages/preventive-comprehensive',
        description: 'Preventive checkup covering vital organ functions and vitamin levels.'
    },
    {
        name: 'Preventive Health Panel- Comprehensive+',
        price: '₹2200',
        popular: true,
        image: packageImaging,
        link: '/packages/preventive-comprehensive-plus',
        description: 'Advanced preventive panel with additional features for deeper insights.'
    },
    {
        name: 'Routine Health panel',
        price: '₹1400',
        popular: false,
        image: packageLab,
        link: '/packages/routine-health',
        description: 'Essential health monitoring including Lipid, Liver, Kidney tests and Blood Sugar.'
    },
    {
        name: 'Fever Profile Basic',
        price: '₹800',
        popular: false,
        image: packageConsult,
        link: '/packages/fever-basic',
        description: 'Basic fever screening including CBC, Malaria, Widal, and Urine analysis.'
    },
    {
        name: 'Fever Profile Advance',
        price: '₹1600',
        popular: true,
        image: packageImaging,
        link: '/packages/fever-advance',
        description: 'Advanced fever investigation with Culture, CRP, and detailed antigen tests.'
    },
    {
        name: 'Fever Panel-I',
        price: '₹1400',
        popular: false,
        image: packageLab,
        link: '/packages/fever-panel-i',
        description: 'Comprehensive fever panel with Typhoid, Dengue, and Malaria screening.'
    },
    {
        name: 'EXTENDED IRON PROFILE',
        price: '₹1850',
        popular: false,
        image: packageConsult,
        link: '/packages/extended-iron-profile',
        description: 'Complete assessment of iron status including Ferritin and Transferrin.'
    },
    {
        name: 'Basic Iron Profile',
        price: '₹1000',
        popular: false,
        image: packageImaging,
        link: '/packages/basic-iron-profile',
        description: 'Essential iron tests including Serum Iron and TIBC.'
    },
    {
        name: 'Diabetic Profile',
        price: '₹1000',
        popular: false,
        image: packageLab,
        link: '/packages/diabetic-profile',
        description: 'Specialized profile for diabetes monitoring including HbA1c and Microalbumin.'
    },
];

const AllPackagesPage = () => {
    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary/5 py-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        All Health <span className="text-primary">Packages</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Explore our comprehensive range of health packages designed for your well-being.
                    </motion.p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <Link to={pkg.link} key={index} className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className={`flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border h-full ${pkg.popular ? 'border-primary shadow-primary/10' : 'border-border'
                                        }`}
                                >
                                    {/* Image Section */}
                                    <div className="h-48 overflow-hidden relative">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {pkg.popular && (
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                                                    <TrendingUp className="w-3 h-3" />
                                                    Popular
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold mb-2 line-clamp-2">{pkg.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{pkg.description}</p>

                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                                            <span className="text-sm font-medium text-primary flex items-center gap-1 group">
                                                View Details
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllPackagesPage;
