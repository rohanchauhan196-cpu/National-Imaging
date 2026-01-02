import { motion } from 'motion/react';
import { FlaskConical, Clock, ShieldCheck, AlertCircle, Calendar, User, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RoutineHealthPanelPage = () => {
    const faqs = [
        {
            question: "Do I need fasting for this test?",
            answer: "Yes, fasting is necessary for correct sugar and cholesterol levels."
        },
        {
            question: "How often should I take this panel?",
            answer: "Once every 6–12 months for continuous monitoring."
        },
        {
            question: "How long does the test take?",
            answer: "Only 10–15 minutes for sample collection."
        },
        {
            question: "When will I receive the reports?",
            answer: "Usually within the same day."
        },
        {
            question: "Can this panel detect reasons for weakness?",
            answer: "Yes, thyroid and CBC help identify causes behind fatigue and low energy."
        },
        {
            question: "Is a doctor’s prescription required?",
            answer: "No, you can directly book this preventive package."
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
                            Essential Health Check
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Routine Health Panel
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            An elementary yet very crucial health checkup package that aims at assessing the fundamental workings of your body.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 1,400</div>
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

                {/* Description Text */}
                <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        Routine Health Panel: This is an elementary yet very crucial health checkup package that aims at assessing the fundamental workings of your body. Many health problems, particularly lifestyle diseases, begin secretly without manifesting any obvious signs in their initial stages. A routine tracking of your fundamental health indicators proves helpful in sensing early shifts and taking preventive measures before the onset of any serious complications.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        This health test package checks your risks associated with the heart, liver, and kidneys, the quality of your blood, thyroid function, and your sugar levels. Using the above tests, you get a quick health status update as to the position of your health and areas that need improvement.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Irrespective of the fact that you may be feeling healthy or if you're going through symptoms like fatigue, stress, and a change in weight, the above package will help you monitor your health position.
                    </p>
                </section>

                {/* Included Tests Table */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Detailed Breakdown</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Tests Included & Their Purpose</h2>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                                    <th className="p-4 font-bold text-sm uppercase tracking-wide w-1/3">Test Name</th>
                                    <th className="p-4 font-bold text-sm uppercase tracking-wide">Why It Is Done</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { name: "Lipid Profile", purpose: "Cholesterol and Triglycerides Test to determine Heart Health Status and Risks related to heart disease." },
                                    { name: "Liver Function Test (LFT)", purpose: "Tests for liver enzymes to rule out fatty liver, alcohol changes, and other problems with the liver." },
                                    { name: "Kidney Function Test (KFT)", purpose: "Evaluates kidney filtration rate for diagnosing possible kidney issues." },
                                    { name: "Fasting Sugar", purpose: "Helps in the diagnosis of diabetic and prediabetic states and the regulation of glycemia." },
                                    { name: "Total Thyroid Profile (TFT)", purpose: "Identifies thyroid issues that could affect the user’s current weight, energy levels, and metabolism." },
                                    { name: "Complete Blood Count (CBC)", purpose: "Examines immunity, anemia, and infections due to blood cells." },
                                    { name: "Urine Analysis", purpose: "It provides relief for urinary infections, complications of diabetes, and problems of the kidneys." },
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
                        <h3 className="font-bold text-lg text-primary mb-2">Comprehensive Overview</h3>
                        <p className="text-slate-700">
                            All these tests work together to provide a routine yet powerful health overview that ensures your vital organs are functioning smoothly.
                        </p>
                    </div>
                </section>

                {/* Importance & Who Should Consider */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Why Important */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Why Is a Routine Health Panel Important?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Helps detect medical issues at an early, more treatable stage",
                                "Provides insight into overall fitness, metabolism, and blood health",
                                "Helpful in diagnosing the underlying cause of complaints such as weakness, stress, and tiredness",
                                "Promotes healthier lifestyle choices and optimal treatment outcomes",
                                "Recommended for continuous monitoring of major body functions"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    <span className="text-emerald-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-emerald-200/50 text-emerald-800 italic text-sm">
                            It is a preventive method of staying ahead of such chronic disorders as diabetes, thyroid problems, high cholesterol, and liver and kidney ailments.
                        </div>
                    </div>

                    {/* Who Should Consider */}
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <User className="w-6 h-6 text-blue-600" /> Who Should Choose This Panel?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Adults above 25 years for yearly routine screening",
                                "People with a busy lifestyle, irregular diet, or a sedentary job",
                                "Individuals having a family history of diabetes or heart disease",
                                "Anyone facing tiredness, weight fluctuations, or hair and skin issues",
                                "People recovering from illnesses or on regular medications"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span className="text-blue-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-blue-200/50 text-blue-800 italic text-sm">
                            This test is not only for those with symptoms — even healthy individuals should monitor their internal health regularly.
                        </div>
                    </div>
                </div>

                {/* Preparation & Precautions */}
                <section>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="flex items-center gap-2 font-bold text-2xl text-slate-900 mb-6">
                            <Clock className="w-6 h-6 text-orange-500" /> Preparation Before Testing
                        </h2>
                        <ul className="space-y-3 mb-6">
                            {[
                                "Fast for at least 8–10 hours (water is allowed)",
                                "Avoid alcohol and smoking for 24 hours before sample collection",
                                "Inform the staff if pregnant, on medication, or having a chronic condition",
                                "Carry previous reports if available for better comparison"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 text-lg">
                                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="text-slate-500 italic">
                            These simple steps ensure accurate results.
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

export default RoutineHealthPanelPage;
