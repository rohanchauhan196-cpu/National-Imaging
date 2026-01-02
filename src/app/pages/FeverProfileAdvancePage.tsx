import { motion } from 'motion/react';
import { FlaskConical, Clock, ShieldCheck, AlertCircle, Thermometer, User, CheckCircle2, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeverProfileAdvancePage = () => {
    const faqs = [
        {
            question: "How is this different from Fever Profile – Basic?",
            answer: "This profile includes CRP and Blood Culture, making it more accurate for prolonged fever."
        },
        {
            question: "Is fasting required for this package?",
            answer: "No, fasting is not required."
        },
        {
            question: "How long does it take to get reports?",
            answer: "Most reports are available within 24–48 hours, while culture may take longer."
        },
        {
            question: "Is this test safe?",
            answer: "Yes, all tests are safe and routinely performed."
        },
        {
            question: "Should I consult a doctor after testing?",
            answer: "Yes, a doctor should always review and interpret the reports."
        }
    ];

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
                            Advanced Diagnostic
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Fever Profile <br />
                            <span className="text-blue-200">Advanced</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            A comprehensive diagnostic workup for symptomatic, repeated, or inexplicable fevers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 1,600</div>
                        <div className="text-xs text-slate-400 mb-6">*Inclusive of all taxes</div>

                        <Link to="/contact" className="block w-full py-3.5 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/30 mb-3">
                            Book Now
                        </Link>
                        <p className="text-xs text-center text-slate-500">
                            No Fasting Required
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 space-y-20">

                {/* Description Text */}
                <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        The Fever Profile – Advance is a comprehensive diagnostic workup specifically designed for people enduring symptomatic, repeated, or inexplicable fevers. When a patient experiences a protracted episode of fever that does not respond to initial management, a basic workup may not always help in attributing the cause. The Fever Profile – Advance serves as a superior diagnostic tool for physicians for bacterial, inflammatory, and systemic infection diagnosis.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        This package is particularly recommended for patients suffering from high-grade fever, total loss of strength, chills, or body pains-or those whose symptoms are even yet after taking basic medications. This will help diagnose the underlying reason for fever by blood analysis, search for infection, and run a culture test rather than just guesswork.
                    </p>
                </section>

                {/* Included Tests Table */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Detailed Breakdown</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Included Tests and Their Purpose</h2>
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
                                    { name: "Complete Blood Count (CBC)", purpose: "Detects infection and changes in blood cells" },
                                    { name: "Urine Analysis", purpose: "Checks for urinary tract infections" },
                                    { name: "Widal Test", purpose: "Screens for typhoid fever" },
                                    { name: "Malarial Antigen Test", purpose: "Detects malaria infection" },
                                    { name: "C-Reactive Protein (CRP)", purpose: "Measures inflammation and infection severity" },
                                    { name: "Blood Culture & Sensitivity", purpose: "Identifies bacterial infection and effective antibiotics" },
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 font-semibold text-slate-800">{row.name}</td>
                                        <td className="p-4 text-slate-600">{row.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h3 className="font-bold text-lg text-primary mb-2">Advanced Protection</h3>
                        <p className="text-slate-700">
                            Blood Culture & Sensitivity is an important test as it helps identify bacteria for infection and also aids the physician in selecting the appropriate antibiotic for patients, thereby preventing antibiotic resistance.
                        </p>
                    </div>
                </section>

                {/* Importance & Who Should Consider */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Why Important */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Why Fever Profile – Advanced Is Important?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Prolonged fever may be an indication of serious diseases like bacterial sepsis or resistant infections",
                                "Helps identify bacteria for infection and aids in selecting the appropriate antibiotic",
                                "prevents antibiotic resistance",
                                "CRP allows the measurement of the severity of infections or inflammation"
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
                            <User className="w-6 h-6 text-blue-600" /> Who Should Consider This Package?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Patients with a fever that lasted more than 3-5 days",
                                "The patients in whom the fever does not subside after the first course of medication",
                                "Those suffering from recurrent fever",
                                "Patients suspected of bacterial or systemic infection",
                                "Anyone who feels weak, chilly, or has unexplained pains in the body"
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
                                <Clock className="w-5 h-5 text-blue-500" /> Patient Instructions Before Testing
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Fasting is not required for this package",
                                    "Drink adequate water unless advised otherwise",
                                    "Inform the lab about any ongoing medicines or antibiotics",
                                    "Avoid starting new antibiotics before sample collection",
                                    "Follow the doctor’s advice if the fever is very high"
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
                                    "Do not stop prescribed medicines without consulting a doctor",
                                    "Blood culture samples should be collected before antibiotics, if possible",
                                    "Patients with severe symptoms should seek immediate medical care",
                                    "Children and elderly patients should be tested under supervision"
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

                {/* Key Benefits */}
                <section className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                    <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-orange-600" /> Key Benefits of Fever Profile – Advanced
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Accurate detection of bacterial and inflammatory causes of fever",
                            "Helps select the right antibiotic through culture testing",
                            "Reduces delay in diagnosis and treatment",
                            "Prevents complications from untreated infections",
                            "Suitable for complex or long-lasting fever cases"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                                <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
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

            </div>
        </div>
    );
};

export default FeverProfileAdvancePage;
