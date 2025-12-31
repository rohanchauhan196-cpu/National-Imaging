import { motion } from 'motion/react';
import { Microscope, CheckCircle2, FlaskConical, Clock, ShieldCheck, Home, Activity, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import aboutImg from '../../assets/about1.jpeg';

const PathologyServicesPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax-like fixed attachment */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${aboutImg})` }}
                ></div>
                {/* Gradient Overlay for Text Readability & Style */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 backdrop-blur-[2px]"></div>

                <div className="container mx-auto px-4 z-10 text-center text-white relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <Microscope className="w-8 h-8 text-blue-200" />
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
                    >
                        Pathology Services <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                            in Dwarka
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Precision Diagnostics. Reliable Results. Better Health.
                    </motion.p>
                </div>
            </section>

            {/* Intro Content - Floating Card Style */}
            <section className="relative -mt-20 pb-20 z-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        <div className="p-10 md:p-14 text-center">
                            <h2 className="text-3xl font-bold mb-6 text-slate-800">
                                Welcome to <span className="text-primary">National Imaging & Path Labs</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-8"></div>
                            <p className="text-lg text-slate-600 leading-loose">
                                We provide sophisticated and reliable pathology services for proper diagnosis and appropriate treatment. Our lab performs tasks through automated testing systems and strict quality control, ensuring every result is trusted by doctors and patients alike. We offer general, preventive, and specialized tests all under one roof, supervised by qualified pathologists.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer / Major Tests */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left Side: Services List */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                                Our Offerings
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-slate-900">Comprehensive Test Menu</h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                From routine blood work to advanced molecular diagnostics, we handle all samples with the utmost care to provide distinct and accurate health information.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Blood Tests (CBC, Sugar, Lipid, LFT, KFT)',
                                    'Vitamin & Hormone Testing',
                                    'Fever & Infection Profiles',
                                    'Cancer Markers & Tumor Screening',
                                    'Urine & Stool Routine Exam',
                                    'Biopsy & Histopathology'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm transition-colors"
                                    >
                                        <div className="bg-primary/10 p-2.5 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side: Why Choose Us Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-[450px] w-full"
                        >
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

                                <FlaskConical className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
                                <h3 className="text-2xl font-bold mb-2 relative z-10">Why Choose Us?</h3>
                                <p className="text-slate-300 mb-8 relative z-10">Experience the difference with our patient-centric approach.</p>

                                <ul className="space-y-5 relative z-10">
                                    {[
                                        'Automated analyzers for excessive precision',
                                        'Online reports for faster access',
                                        'Affordable preventive packages',
                                        'Painless sample collection by experts',
                                        'Expert pathologist review',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-200 text-sm font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Highlights - Glass Morphism */}
            <section className="py-20 relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                                <Home className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Home Sample Collection</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Cherish convenience? Book a home pickup. Our trained staff ensures all safety protocols are followed for a smooth process. From appointment to digital reporting, we make it seamless.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all group"
                        >
                            <div className="bg-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/50 group-hover:scale-110 transition-transform">
                                <Activity className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Role of Pathology</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Early diagnosis of silent diseases like diabetes, thyroid, and liver issues starts here. Regular testing is crucial for preventive care and effective treatment management.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Common Questions</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What type of pathology testing services do you offer?",
                                a: "We provide all kinds of blood tests, urine tests, stool tests, thyroid tests, diabetic tests, vitamin tests, infectious disease tests, tumor marker tests, histopathology tests, and advanced molecular tests."
                            },
                            {
                                q: "Quando should I go to get my pathology test performed?", // 'When' in Latin style for medical feels, or just typo in original -> fixing to When
                                a: "In cases where you may be experiencing fatigue, fever, pain, weight changes, or if your physician advises a check-up or follow-up."
                            },
                            {
                                q: "Do I need to fast before blood tests?",
                                a: "Tests like blood sugar fasting, lipid profile, and certain hormone tests require 8–10 hours of fasting. Our team will guide you while booking."
                            },
                            {
                                q: "How soon are reports available?",
                                a: "Most routine test results are shared on the same day, while advanced tests may take more time."
                            },
                            {
                                q: "Are your results trustworthy?",
                                a: "Yes. Our lab follows strict quality checks and uses advanced automated machines for high accuracy."
                            }
                        ].map((faq, index) => (
                            <FAQItem key={index} question={faq.q === "Quando should I go to get my pathology test performed?" ? "When should I get tested?" : faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Book Your Test Today</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                            Reliable services, accurate results, and home collection convenience.
                        </p>

                        <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                            <div className="text-left">
                                <h3 className="text-xl font-semibold mb-1">National Imaging & Path Labs</h3>
                                <p className="text-blue-100 text-sm">Dwarka, New Delhi</p>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                            <div className="text-left">
                                <p className="text-xs text-blue-200 uppercase tracking-widest mb-1">Call for Appointment</p>
                                <p className="text-3xl font-bold tracking-tight">97111 27333</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-lg border border-border overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="overflow-hidden"
            >
                <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/50 bg-muted/20">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

export default PathologyServicesPage;
