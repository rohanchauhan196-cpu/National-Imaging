import { motion } from 'motion/react';
import { CheckCircle2, FlaskConical, Clock, ShieldCheck, AlertCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HealthPanelWholeBodyPage = () => {
    // FAQ Data
    const faqs = [
        {
            question: "How often should this full-body checkup be done?",
            answer: "Once every 6–12 months for preventive care."
        },
        {
            question: "Will it help identify the cause of fatigue and weakness?",
            answer: "Yes, CBC, thyroid, and vitamin tests help find the exact reason."
        },
        {
            question: "Is fasting compulsory for this panel?",
            answer: "Yes, fasting is required for sugar and cholesterol accuracy."
        },
        {
            question: "How long does sample collection take?",
            answer: "Around 10–15 minutes only."
        },
        {
            question: "When will I receive my reports?",
            answer: "Reports are usually available within 24–48 hours."
        }
    ];

    // FAQ State
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">

            {/* Hero Section */}
            <div className="relative bg-primary py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-white max-w-2xl"
                    >
                        <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/20">
                            Comprehensive Checkup
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Health Panel <br />
                            <span className="text-blue-200">Whole Body</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            A complete health monitoring package to detect lifestyle disorders early and ensure total wellness.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 3,000</div>
                        <div className="text-xs text-slate-400 mb-6">*Inclusive of all taxes</div>

                        <Link to="/contact" className="block w-full py-3.5 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/30 mb-3">
                            Book Now
                        </Link>
                        <p className="text-xs text-center text-slate-500">
                            Home Collection Available
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 space-y-20">

                {/* Overview */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">About This Package</h2>
                        <div className="prose prose-lg text-slate-600 max-w-none">
                            <p>
                                Health Panel – Whole is a complete health checkup package offered by National Imaging & Path Labs. This is essentially aimed at monitoring the parameters of your health so as to enable you to detect the initial stages of lifestyle-related disorders.
                            </p>
                            <p>
                                Presently, due to stressful lifestyles, excessive working hours, improper eating habits, lack of physical activities, and environmental pollution, the silent stages of disorders like thyroid, diabetes, cholesterol, liver and renal functions, vitamin deficiencies, and compromised immunity are being witnessed. These are medically unidentified during the silent stages.
                            </p>
                            <p>
                                This full body check will give you an idea about how your principal organs are functioning, your blood condition, hormones, metabolism, and nutrients. This is the most effective preventive health check that will enable your doctors to plan a life and treatment strategy that will be most beneficial for you, even before you develop a serious disease. Getting this check done every year will keep you up-to-date on your health and prevent you from having complications ahead.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Included Tests */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">What's Inside</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Included Tests & Their Purpose</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Lipid Profile", desc: "Testing for Cholesterol and Triglycerides to Assess Heart Function and Stroke Risks" },
                            { name: "HbA1c", desc: "Displays the average blood sugar level of the past 3 months." },
                            { name: "Liver Function Test (LFT)", desc: "Tests for liver enzymes and protein to determine liver injury and/or the presence of fatty liver." },
                            { name: "Kidney Function Test (KFT)", desc: "Assesses kidney filtration and removal of waste products." },
                            { name: "Fasting Blood Sugar", desc: "Regulates and measures blood glucose in people with diabetes." },
                            { name: "Total Thyroid Profile (TFT)", desc: "Indicates the presence of an imbalance or deficiency of thyroid hormones that influence weight and mood." },
                            { name: "Complete Blood Count (CBC)", desc: "Tests for immunity, anemia, and infections." },
                            { name: "Urine Analysis", desc: "Aids in the detection of infection, renal disease, and complications arising from diabetes" },
                            { name: "Vitamin B12", desc: "Tests for a possible deficiency causing weakness, fatigue, and memory problems." },
                            { name: "Vitamin D", desc: "Evaluates bone strength, immunity, and calcium absorption." },
                            { name: "Iron Profile", desc: "Determines iron deficiencies and excesses that impact either hemoglobin or oxygen." },
                        ].map((test, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col"
                            >
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                                    <FlaskConical className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{test.name}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{test.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Why Important & Who Should Consider */}
                <section className="grid lg:grid-cols-2 gap-8">
                    {/* Why Important */}
                    <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6" /> Why is it Important?
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "To detect lifestyle disorders before they become severe",
                                "To continuously monitor major body functions",
                                "To protect the heart, liver, kidney, bone, and hormonal health",
                                "To identify hidden nutritional deficiencies",
                                "To plan timely treatment and healthy living strategies"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                    <span className="text-blue-50">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-blue-100 italic text-sm border-t border-white/20 pt-4">
                            This package supports complete wellness, especially for people with busy schedules who often ignore early signs of illness.
                        </p>
                    </div>

                    {/* Who Should Consider */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-primary" /> Who Should Consider?
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Adults above 25 years for yearly screening",
                                "People who feel tired, weak, or stressed often",
                                "Individuals with weight gain or loss, hair fall, or skin issues",
                                "Those having a family history of thyroid, diabetes, or heart disease",
                                "Office workers with long sitting hours and irregular routine",
                                "People recovering from illness or on long-term medication"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-slate-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Preparation & Precautions */}
                <section className="bg-slate-100 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-slate-500" /> Preparation Before Testing
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Overnight fasting of 8–10 hours is required",
                                    "Drink only water during fasting",
                                    "Avoid alcohol and smoking 24 hours before sample collection",
                                    "Wear light and comfortable clothing if undergoing scans on the same day",
                                    "Inform the team about pregnancy, medication, or allergies"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-red-500" /> Important Precautions
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Do not stop any prescribed medicines without a doctor’s advice",
                                    "Avoid heavy exercise before the blood sample is taken",
                                    "Share your previous reports for better comparison",
                                    "Inform the technician if you have a chronic illness like diabetes or hypertension"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-primary transition-colors focus:outline-none"
                                >
                                    {faq.question}
                                    <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openIndex === index ? 'auto' : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-slate-600 text-sm border-t border-slate-50">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="text-center pb-12">
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all">
                        Book Your Appointment Now
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default HealthPanelWholeBodyPage;
