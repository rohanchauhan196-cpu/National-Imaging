import { motion } from 'motion/react';
import { Microscope, Activity, Award, Users, Heart, Target } from 'lucide-react';

const AboutPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerChildren = {
        whileInView: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 Mix-blend-overlay"></div>
                <div className="container mx-auto px-4 z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
                    >
                        Guiding you along the path to wellness with precision and care.
                    </motion.p>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Welcome to <span className="text-primary">National Imaging and Path Labs</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                It is our endeavor at National Imaging and Path Labs to provide the best possible standards in terms of diagnostic capabilities in medical imaging and pathological services.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our dedication lies in being associated with health and supporting our patients by providing them with comprehensive diagnostic services in terms of testing.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
                                alt="Modern Medical Laboratory"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        {...fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We provide a wide range of diagnostic services to cater to the requirements of individuals as well as healthcare providers.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerChildren}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Medical Imaging</h3>
                            <p className="text-muted-foreground">
                                We provide state-of-the-art imaging techniques, including X-rays, CT scans, MRIs, Ultrasound, and more. These services are crucial for accurate diagnosis and treatment planning.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary">
                            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                                <Microscope className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Pathology Services</h3>
                            <p className="text-muted-foreground">
                                Our pathology lab offers a full spectrum of tests, from routine blood work to advanced diagnostic biopsies, helping physicians identify and manage a wide range of conditions.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-1 relative"
                        >
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Advanced Medical Technology"
                                className="relative rounded-2xl shadow-xl z-10"
                            />
                        </motion.div>
                        <motion.div
                            {...fadeInUp}
                            className="order-1 md:order-2"
                        >
                            <div className="bg-primary/10 w-fit p-3 rounded-xl mb-6">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                We firmly believe in using the latest available technology with a bid to assure quality outcomes. The latest imaging and diagnostic technologies equip our research facilities.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                This means that we are in a position to offer accurate results within the shortest time possible. Our technological upgradation ensures that we stay ahead in the pool of available medical technologies.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team & Mission Grid */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div {...fadeInUp}>
                            <div className="flex items-center gap-4 mb-6">
                                <Users className="w-10 h-10 text-secondary" />
                                <h2 className="text-3xl font-bold">Our Team</h2>
                            </div>
                            <p className="text-white/90 text-lg leading-relaxed">
                                Our team includes extremely competent and experienced professionals, like radiologists, pathologists, laboratory technicians, and others, all coming together for the best care of each patient. We at first prioritize our patients and aim to ensure that you are comfortable and relaxed throughout your diagnostic experience.
                            </p>
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                            <div className="flex items-center gap-4 mb-6">
                                <Target className="w-10 h-10 text-secondary" />
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                            </div>
                            <p className="text-white/90 text-lg leading-relaxed">
                                For facilitating easily accessible, accurate, and quality diagnostic services to empower both patients as well as healthcare professionals to make informed decisions for better health outcomes.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Message */}
            <section className="py-24 text-center bg-muted/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
                        <p className="text-2xl font-serif italic text-foreground/80 mb-6">
                            "Thank you for placing your trust in National Imaging & Path Labs for the purposes of diagnosing your conditions. We are with you in this journey of healthcare, guiding you along the path to wellness."
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
