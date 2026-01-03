import { motion } from 'motion/react';
import { CheckCircle2, FlaskConical, Clock, ShieldCheck, AlertCircle, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PreventiveHealthPanelComprehensivePage = () => {
    const faqs = [
        {
            question: "How often should I get this health panel done?",
            answer: "Once every 6–12 months, depending on your health condition and doctor’s advice."
        },
        {
            question: "Is fasting compulsory for this package?",
            answer: "Yes, fasting is required for accurate blood sugar and lipid profile results."
        },
        {
            question: "How much time does sample collection take?",
            answer: "Only 10–15 minutes."
        },
        {
            question: "When will I receive my reports?",
            answer: "Most reports are available within the same day."
        },
        {
            question: "Will this panel help detect diabetes?",
            answer: "Yes, HbA1c and fasting sugar provide an accurate assessment of diabetes risk."
        },
        {
            question: "Can this test detect reasons for weakness and tiredness?",
            answer: "CBC, thyroid, and organ function tests help identify the exact cause."
        },
        {
            question: "Do I need a doctor’s prescription for this test?",
            answer: "No, it can be done directly for preventive screening."
        },
        {
            question: "Will it help identify heart disease risk?",
            answer: "Yes, the lipid profile evaluates cholesterol and heart health."
        },
        {
            question: "Can this package help prevent serious diseases?",
            answer: "Yes, early detection supports timely intervention, reducing future risks."
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
                            Preventive Care
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Preventive Health Panel <br />
                            <span className="text-blue-200">Comprehensive</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            An advanced full-body preventive health checkup designed to keep track of essential health parameters and detect early signs of lifestyle-related diseases.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 1,800</div>
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
                        This is an advanced full-body preventive health checkup package provided by National Imaging & Path Labs. The package is specially designed to keep track of one's essential health parameters, making a note of early stages of lifestyle-related diseases before they get serious. The contemporary busy way of life, much stress, long working hours, no exercise, fast foods, disrupted sleep, and pollution silently affect the major organs such as the heart, liver, kidneys, and thyroid.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        In most cases, people do not notice the symptoms, yet gradual changes within the body increase internal health risk, leading to chronic ailments. It is a comprehensive panel that gives a perfect picture of one's inner bodily mechanism: heart, blood sugar, liver, kidneys, hormones, blood cells, and urinary system.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Early diagnosis provides doctors with an opportunity to guide the patient with timely medical advice, lifestyle changes, and preventive treatment so that they can plan long-term good health. Annual screening through this package has been the most wonderful initiation towards a healthy life and meeting future complications with confidence.
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
                                    { name: "Lipid Profile", purpose: "Assesses cholesterol and triglycerides to evaluate heart disease and stroke risk." },
                                    { name: "HbA1c", purpose: "Shows the average blood sugar control over the last 3 months." },
                                    { name: "Liver Function Test (LFT)", purpose: "Checks liver enzymes and proteins to detect liver stress, fatty liver, and liver diseases." },
                                    { name: "Kidney Function Test (KFT)", purpose: "Measures kidney filtration and waste removal effectiveness" },
                                    { name: "Fasting Blood Sugar", purpose: "Detects diabetes and observes sugar levels during fasting." },
                                    { name: "Free Thyroid Profile (T3, T4 & TSH)", purpose: "Indicates thyroid hormone imbalance affecting weight, mood, and energy levels." },
                                    { name: "Complete Blood Count (CBC)", purpose: "Evaluates immunity, anemia, infections, and overall blood health." },
                                    { name: "Urine Analysis", purpose: "Helps detect urinary infections, diabetes complications, and kidney problems." },
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
                        <h3 className="font-bold text-lg text-primary mb-2">Why is this relevant?</h3>
                        <p className="text-slate-700">
                            A major advantage of this software is that it will enable you to know your health completely. How is this relevant to your health? Well, this is quite sensible on your part, especially because you always remain so busy with your hectic schedule, and you always aim to remain strong and actively healthy.
                        </p>
                    </div>
                </section>

                {/* Importance & Who Should Consider */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Why Important */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Why Is This Important?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Assisted in detecting life conditions: Diabetes, BP, Thyroid, and Cholesterol",
                                "Supports regular monitoring of vital organ functions, including the heart, liver, and kidneys",
                                "Helps in understanding nutritional and metabolic issues causing weakness or tiredness",
                                "Helps plan timely medical treatment and revision to a healthy life.",
                                "Reduces overall healthcare costs by preventing major illnesses early",
                                "Encourages people to be more responsible about their own health"
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
                            <User className="w-6 h-6 text-blue-600" /> Who Should Consider This?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Adults above 25 years for annual health screening",
                                "People experiencing fatigue, stress, mood swings, or low energy",
                                "Those suffering from changes in weight, hair loss, or skin problems",
                                "Anyone who has a family medical history of diabetes, cholesterol, thyroid, and/ or heart-related problems",
                                "Office workers with long sitting habits or limited physical activity",
                                "People on long-term medication or recovering from illness",
                                "Those who want proactive healthcare to prevent future health risks"
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Preparation & Precautions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="flex items-center gap-2 font-bold text-lg text-slate-800 mb-4 pb-4 border-b">
                                <Clock className="w-5 h-5 text-orange-500" /> Preparation Before Testing
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "8–10 hours of overnight fasting required (only water is allowed)",
                                    "Avoid alcohol and smoking 24 hours before sample collection",
                                    "Take regular medications only after consulting your doctor",
                                    "Wear comfortable clothes if visiting the center",
                                    "Inform the team if you are pregnant or have any allergies",
                                    "Bring previous medical reports if available for comparison"
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
                                    "Do not skip or stop prescribed medicines without medical advice",
                                    "Avoid heavy exercise before sample collection",
                                    "Stay hydrated but avoid sugary beverages",
                                    "Inform technicians if you have diabetes, hypertension, or any ongoing treatment"
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

                <div className="text-center text-slate-500 text-sm italic">
                    This package by National Imaging & Path Labs is a practical choice to ensure you stay healthy and protected from silent diseases.
                </div>

            </div>
        </div>
    );
};

export default PreventiveHealthPanelComprehensivePage;
