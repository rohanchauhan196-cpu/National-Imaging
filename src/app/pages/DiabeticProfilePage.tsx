import { motion } from 'motion/react';
import { FlaskConical, Clock, ShieldCheck, AlertCircle, TestTube, User, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DiabeticProfilePage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Is fasting mandatory for the Diabetic Profile?",
            answer: "Yes, fasting is required for Plasma Glucose (Fasting). Only water is allowed."
        },
        {
            question: "How often should this test be done?",
            answer: "Diabetic patients should take it every 3–6 months, while others can do it once a year."
        },
        {
            question: "Can this package detect early kidney damage?",
            answer: "Yes, tests like Serum Creatinine and Urine Microalbumin help detect early kidney issues."
        },
        {
            question: "Is HbA1c more important than fasting sugar?",
            answer: "Both are important. HbA1c shows long-term control, while fasting sugar shows current levels."
        },
        {
            question: "How soon will I get the reports?",
            answer: "Mostly reports are available within the same day."
        }
    ];

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
                            Diabetes Management
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Diabetic <br />
                            <span className="text-blue-200">Profile</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            Comprehensive monitoring for early detection and management of diabetes and its complications.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 1,000</div>
                        <div className="text-xs text-slate-400 mb-6">*Inclusive of all taxes</div>

                        <Link to="tel:+919711127333" className="block w-full py-3.5 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/30 mb-3">
                            Book Now
                        </Link>
                        <p className="text-xs text-center text-slate-500">
                            Fasting Required (8-10 Hours)
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 space-y-20">

                {/* Description Text */}
                <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        The Diabetic Profile Test is an array of tests that help in detecting diabetes, as well as its complications, at an early stage. It is a long-term medical condition that normally develops without noticeable symptoms, which, in turn, can cause many health problems.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Individuals who should take this test include patients already tested positive for diabetes, patients with a family history of diabetes, as well as obese patients or individuals who live a sedentary lifestyle. It is also essential for those experiencing frequent urination, thirst, fatigue, or unexplained body changes.
                    </p>
                </section>

                {/* Included Tests Table */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Detailed Breakdown</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Included Tests & Purpose</h2>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                                    <th className="p-4 font-bold text-sm uppercase tracking-wide w-1/3">Test Name</th>
                                    <th className="p-4 font-bold text-sm uppercase tracking-wide">Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { name: "Lipid Profile", purpose: "Evaluates cholesterol levels and assesses heart disease risk" },
                                    { name: "Fasting Sugar", purpose: "Measures the patient’s fasting blood glucose level" },
                                    { name: "HbA1c", purpose: "Reflects average glucose control during the past 3 months" },
                                    { name: "Serum Creatinine", purpose: "Assesses kidney function and filtration capacity" },
                                    { name: "Serum Uric Acid", purpose: "Detects metabolic imbalance and gout risk" },
                                    { name: "Urine Analysis", purpose: "Checks sugar, protein, and signs of infection" },
                                    { name: "Urine Spot Microalbumin", purpose: "Early detection of kidney damage due to diabetes" },
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 font-semibold text-slate-800">{row.name}</td>
                                        <td className="p-4 text-slate-600">{row.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Importance & Who Should Consider */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Why Important */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Why Is It Important?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Helps in the early diagnosis of diabetes",
                                "Monitors long-term blood sugar control",
                                "Detects early kidney and heart-related complications",
                                "Supports doctors in planning effective treatment",
                                "Helps prevent serious complications of diabetes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    <span className="text-emerald-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who Should Consider */}
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <User className="w-6 h-6 text-blue-600" /> Who Should Take This Profile?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Individuals with Type 1 or Type 2 Diabetes",
                                "People with a family history of diabetes",
                                "Overweight individuals or those with no physical exercise",
                                "Patients suffering from hypertension or cholesterol issues",
                                "Any person over 30 years needing a preventive check-up",
                                "Those experiencing frequent urination, thirst, or fatigue"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span className="text-blue-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Preparation & Precautions */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="flex items-center gap-2 font-bold text-lg text-slate-800 mb-4 pb-4 border-b">
                                <Clock className="w-5 h-5 text-blue-500" /> Patient Instructions
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "8–10-hour fasting is needed for Plasma Glucose (Fasting)",
                                    "Only plain water is allowed during fasting",
                                    "Avoid alcohol and smoking for at least 24 hours before the test",
                                    "Continue routine medications unless instructed otherwise",
                                    "Inform lab staff about ongoing medical conditions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="flex items-center gap-2 font-bold text-lg text-slate-800 mb-4 pb-4 border-b">
                                <AlertCircle className="w-5 h-5 text-red-500" /> Important Precautions
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Do not stop prescription medication for diabetes or BP",
                                    "Avoid strenuous exercise or stress before sample collection",
                                    "Inform lab about pregnancy or chronic conditions",
                                    "Place an order for a physical check to aid physician review"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
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
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions (FAQs)</h2>
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
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
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

            </div>
        </div>
    );
};

export default DiabeticProfilePage;
