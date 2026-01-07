import { motion } from 'motion/react';
import { Heart, Activity, Stethoscope, Clock, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, FileText, Pulse } from 'lucide-react';
import { useState } from 'react';
import aboutImg from '../../assets/about1.jpeg';
import SEO from '../components/SEO';

const CardiologyServicesPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <SEO
                title="Cardiology Services"
                description="Expert Cardiology services in Dwarka including ECG, 2D Echo, TMT, and Holter Monitoring. Trusted heart care."
                keywords="cardiologist dwarka, ecg test, 2d echo test, tmt test, heart specialist delhi"
            />
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${aboutImg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-purple-900/70 backdrop-blur-[2px]"></div>

                <div className="container mx-auto px-4 z-10 text-center text-white relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <Heart className="w-8 h-8 text-rose-200" />
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
                    >
                        Cardiology Tests <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-purple-200">
                            in Dwarka
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Advanced Heart Care. Accurate Diagnosis. Trusted Results.
                    </motion.p>
                </div>
            </section>

            {/* Intro Content */}
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
                            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-purple-500 mx-auto rounded-full mb-8"></div>
                            <p className="text-lg text-slate-600 leading-loose">
                                National Imaging & Path Labs, Dwarka, New Delhi, provides well-equipped and accurate diagnosis in cardiac conditions for the early detection of diseases related to the heart. Our centre has all the modern cardiology-related machines and experienced specialists to cover all diagnostic needs. Accurate and fast reports are required for better treatment planning and monitoring.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Test Menu & Why Choose Us */}
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
                            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-semibold text-sm mb-4">
                                Our Offerings
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-slate-900">Major Cardiology Tests</h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                We offer comprehensive cardiac screening packages monitored by certified cardiologists.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'ECG – Electrocardiogram',
                                    '2D Echo – Ultrasound of Heart',
                                    'TMT – Treadmill Stress Test',
                                    'Holter Monitoring (24-hour)'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02, backgroundColor: '#fff1f2' }}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm transition-colors"
                                    >
                                        <div className="bg-rose-50 p-2.5 rounded-lg">
                                            <Activity className="w-5 h-5 text-rose-500" />
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
                                <Stethoscope className="w-12 h-12 text-rose-400 mb-6 relative z-10" />
                                <h3 className="text-2xl font-bold mb-2 relative z-10">Why Choose Us?</h3>
                                <p className="text-slate-300 mb-8 relative z-10">Dedicated cardiac care with precision.</p>

                                <ul className="space-y-5 relative z-10">
                                    {[
                                        'Advanced diagnostic machines',
                                        'Certified experienced specialists',
                                        'Fast & accurate digital reports',
                                        'Affordable pricing',
                                        'Hygienic & safe environment',
                                        'Easy appointment scheduling'
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

            {/* Test Details */}
            <section className="py-20 relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#881337_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* ECG */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-rose-500/50 transition-all group"
                        >
                            <div className="bg-rose-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-rose-900/50">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">ECG Test</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Diagnoses irregular heartbeats, heart rate disorders, and chest pain causes. Instant reports available.
                            </p>
                            <ul className="text-rose-200 text-xs space-y-1">
                                <li>• Quick & painless</li>
                                <li>• Instant report</li>
                                <li>• Emergency use</li>
                            </ul>
                        </motion.div>

                        {/* 2D Echo */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">2D Echo</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Ultrasound imaging to examine heart chambers, valves, and blood flow motion.
                            </p>
                            <ul className="text-blue-200 text-xs space-y-1">
                                <li>• No radiation</li>
                                <li>• Detailed assessment</li>
                                <li>• Early detection</li>
                            </ul>
                        </motion.div>

                        {/* TMT */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all group"
                        >
                            <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/50">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">TMT (Treadmill Test)</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Checks heart function during exercise to diagnose blocked blood supply.
                            </p>
                            <ul className="text-green-200 text-xs space-y-1">
                                <li>• Blockage risk check</li>
                                <li>• Fitness assessment</li>
                                <li>• Prevention focus</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <AlertCircleIcon className="w-12 h-12 text-rose-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Cardiology Tests Are Important</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Early detection tests help diagnose the abnormality related to the heart before it reaches a severe stage. Cardiology tests support physicians in informed decision-making, thereby improving the success rate of treatment with reduced health risk.
                    </p>
                    <div className="grid sm:grid-cols-2 text-left gap-4 max-w-2xl mx-auto">
                        <li className="flex gap-2 text-slate-700"> <CheckCircle2 className="text-rose-500 w-5 h-5" /> Detect early symptoms of heart disease</li>
                        <li className="flex gap-2 text-slate-700"> <CheckCircle2 className="text-rose-500 w-5 h-5" /> Prevent major heart attacks and stroke</li>
                        <li className="flex gap-2 text-slate-700"> <CheckCircle2 className="text-rose-500 w-5 h-5" /> Monitor heart health in diabetic patients</li>
                        <li className="flex gap-2 text-slate-700"> <CheckCircle2 className="text-rose-500 w-5 h-5" /> Identify causes of fainting & fatigue</li>
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
                                q: "Do I need a prescription for cardiology tests?",
                                a: "Yes, for 2D Echo and TMT. ECG can be done instantly."
                            },
                            {
                                q: "Are reports available the same day?",
                                a: "Yes, ECG and other tests usually have same-day reporting."
                            },
                            {
                                q: "How long does a TMT test take?",
                                a: "Around 20–30 minutes based on patient tolerance."
                            },
                            {
                                q: "Is 2D Echo painful?",
                                a: "No, it is a non-invasive and completely safe ultrasound test."
                            },
                            {
                                q: "Can I get a test done without prior booking?",
                                a: "Walk-in available for ECG; others may require appointments."
                            }
                        ].map((faq, index) => (
                            <FAQItem key={index} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-900"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Book Your Cardiology Test Today</h2>
                        <p className="text-xl text-rose-100 max-w-2xl mx-auto mb-12">
                            Take a smart step toward a healthy heart. Trustworthy services to help you protect your heart health with confidence.
                        </p>

                        <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                            <div className="text-left">
                                <h3 className="text-xl font-semibold mb-1">National Imaging & Path Labs</h3>
                                <p className="text-rose-100 text-sm">Dwarka, New Delhi</p>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                            <div className="text-left">
                                <p className="text-xs text-rose-200 uppercase tracking-widest mb-1">Call Now</p>
                                <p className="text-2xl font-bold tracking-tight">97111 27333 | 92172 44110</p>
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

const AlertCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
)

export default CardiologyServicesPage;
