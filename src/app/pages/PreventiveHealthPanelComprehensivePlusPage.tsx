import { motion } from 'motion/react';
import { FlaskConical, Clock, ShieldCheck, AlertCircle, Calendar, User, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PreventiveHealthPanelComprehensivePlusPage = () => {
    const faqs = [
        {
            question: "When should I get this test done?",
            answer: "Once every 6–12 months to stay updated about your health."
        },
        {
            question: "Is fasting compulsory?",
            answer: "Yes, fasting is important for accurate sugar and cholesterol results."
        },
        {
            question: "How much time does the test take?",
            answer: "Only 10–15 minutes for sample collection."
        },
        {
            question: "When will I get the reports?",
            answer: "Usually within the same day."
        },
        {
            question: "Will this panel identify vitamin deficiencies?",
            answer: "Yes, both Vitamin B12 and Vitamin D levels are tested."
        },
        {
            question: "Can this detect reasons for weakness and hair fall?",
            answer: "CBC, thyroid, and vitamin tests help find the exact cause."
        },
        {
            question: "Do I need a doctor’s prescription?",
            answer: "No, you can simply book and get the test done."
        },
        {
            question: "Will it help in preventing major diseases?",
            answer: "Yes, early detection and lifestyle correction reduce disease risk."
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
                            Advanced Full-Body Scan
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Preventive Health Panel <br />
                            <span className="text-blue-200">Comprehensive +</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            A comprehensive full-body health scan that helps to determine the functionality of your key body parts and intervene in time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 2,200</div>
                        <div className="text-xs text-slate-400 mb-6">*Inclusive of all taxes</div>

                        <Link to="tel:+919711127333" className="block w-full py-3.5 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/30 mb-3">
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
                        Preventive Health Panel – Comprehensive + is a comprehensive full-body health scan that helps to determine the functionality of your key body parts and intervene in time to rectify the situation if anything goes wrong. Nowadays, in our busy lives, we tend to forget the fact that stress, lack of exercise, improper food habits, imbalanced sleep patterns, and exposure to environmental pollutants can creep into us unnoticed and affect our bodies adversely without any symptoms in the early stage.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        It is not known to most people that Diabetes, thyroid, Vitamins, and Cholesterol levels develop unnoticed by the body, much earlier than the symptoms. This Preventive Health Panel assists you in understanding your personal needs with respect to your heart health, blood sugar, liver function, renal function, blood cells, thyroid hormone, immunity power, and nutritional levels, which also include Vitamin D3 and Vitamin B12.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        The annual health check-ups like this are very helpful in keeping your body alert regarding your needs and also keeping you away from illness by making correct judgments regarding your personal life.
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
                                    { name: "Lipid Profile", purpose: "Measures both the level of cholesterol and triglycerides to check the health of the heart and possible heart disease occurring within the body." },
                                    { name: "HbA1c", purpose: "Shows the average blood sugar control over the last 3 months." },
                                    { name: "Liver Function Test (LFT)", purpose: "It is used to check liver enzymes and proteins. It helps to diagnose problems associated with the liver because of too much consumption of alcoholic drinks." },
                                    { name: "Kidney Function Test (KFT)", purpose: "Ascertains filtration in the kidneys and elimination of waste." },
                                    { name: "Fasting Sugar", purpose: "It assists with the diagnosis of diabetes as well as sugar control." },
                                    { name: "Total Thyroid Profile (TFT)", purpose: "Evaluates thyroid hormones that impact weight, metabolism, mood, and energy." },
                                    { name: "Complete Blood Count (CBC)", purpose: "Anemia, infections, and the level of immunity present." },
                                    { name: "Urine Analysis", purpose: "Indicates infection, complications of diabetes, and kidney-related problems." },
                                    { name: "Vitamin B12", purpose: "Points out the inadequacy that could result in weakness, neuralgia, loss of memory, and loss of hair." },
                                    { name: "Vitamin D", purpose: "Assesses bone strength, immunity, and calcium absorption inside the body" },
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
                        <h3 className="font-bold text-lg text-primary mb-2">Complete Shield</h3>
                        <p className="text-slate-700">
                            These tests combined provide a robust health check that informs you and shields you against diseases that may go unnoticed until they become a serious matter.
                        </p>
                    </div>
                </section>

                {/* Importance & Who Should Consider */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Why Important */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Why Should You Get This Health Checkup?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Early detection of the so-called lifestyle-related diseases can be injurious to health",
                                "Watch out for your heart, liver, kidneys, thyroid, and metabolism",
                                "Identify the root of your low energy, stress, or sickness",
                                "To keep up your nutrition and prevent vitamin deficiency",
                                "Prevent further medical complications and undue medical expenses",
                                "Motivate a healthy and disciplined way of life"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    <span className="text-emerald-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-emerald-200/50 text-emerald-800 italic text-sm">
                            The panel will be so valuable for whoever wants to be active, healthy, and conscious about their internal health.
                        </div>
                    </div>

                    {/* Who Should Consider */}
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <User className="w-6 h-6 text-blue-600" /> Who Should Go for This Package?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Routine annual screening for adults above 25 years",
                                "Commonly, people feel weak, tired, dizzy, or stressed",
                                "Those suffering from weight gain, hair fall, or skin problems",
                                "Individuals whose occupations require them to work steadily in a seated position",
                                "Those with a history of thyroid, diabetes, and heart disease within the family",
                                "People convalescing from illness or on long-term medication"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span className="text-blue-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-blue-200/50 text-blue-800 italic text-sm">
                            This, in itself, is an ideal package if one believes in prevention rather than cure.
                        </div>
                    </div>
                </div>

                {/* Preparation & Precautions */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="flex items-center gap-2 font-bold text-lg text-slate-800 mb-4 pb-4 border-b">
                                <Clock className="w-5 h-5 text-orange-500" /> Simple Preparation Guidelines
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Fasting of 8–10 hours is required (only water allowed)",
                                    "Avoid alcohol and smoking 24 hours before the test",
                                    "Wear loose and comfortable clothes",
                                    "Inform the phlebotomist if you are on regular medication or pregnant",
                                    "Carry old medical reports for comparison if available"
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
                                    "Do not take sugar-containing drinks or food during fasting",
                                    "Avoid intense exercise before sample collection",
                                    "Consult your doctor before stopping any prescribed medicines"
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

export default PreventiveHealthPanelComprehensivePlusPage;
