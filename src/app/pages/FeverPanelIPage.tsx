import { motion } from 'motion/react';
import { FlaskConical, Clock, ShieldCheck, AlertCircle, Thermometer, User, CheckCircle2, Droplet } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeverPanelIPage = () => {
    const faqs = [
        {
            question: "Is fasting required for Fever Panel – I?",
            answer: "No, fasting is usually not required unless advised by the doctor."
        },
        {
            question: "Can this panel detect dengue early?",
            answer: "Yes, Dengue NS1 antigen helps detect infection in the early stage."
        },
        {
            question: "Is the test safe?",
            answer: "Yes, it is a routine diagnostic test with no major risks."
        },
        {
            question: "Can Fever Panel – I detect malaria?",
            answer: "Yes, it identifies both Vivax and Falciparum malaria."
        },
        {
            question: "Are antibiotics needed before the test?",
            answer: "No, testing should ideally be done before starting antibiotics."
        },
        {
            question: "Is this test suitable for children?",
            answer: "Yes, it is commonly advised for children with persistent fever."
        },
        {
            question: "Will the reports be understandable for doctors?",
            answer: "Yes, reports are provided in a clear and standard format."
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
                            Comprehensive Fever Analysis
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Fever Panel - I
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            A comprehensive diagnostic testing kit to find out the most probable cause for fever, like bacterial, viral, and parasitic infections.
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

                        <Link to="tel:+919711127333" className="block w-full py-3.5 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/30 mb-3">
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
                        Fever is one of the major symptoms that may indicate infection or disease in the body. Low fever may go on its own, but it is recommended to consult with a medical professional in the case of chronic and severe fever conditions. Fever Panel – A comprehensive diagnostic testing kit to find out the most probable cause for fever, like bacterial, viral, and parasitic infections. This panel allows doctors to understand the reason behind the fever and start the right treatment at the right time.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        A cluster of vital blood and urine tests required to be conducted simultaneously to diagnose the various conditions associated with fever. The test detects the presence of an infection, changes in the blood cells, liver-related changes, and abnormal changes in the urine.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        It helps the doctor to get a better picture of the health of the patient by running multiple tests together as a single panel, hence deciding if it is because of dengue fever, malaria, typhoid, or another infection.
                    </p>
                </section>

                {/* Included Tests Table */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Detailed Breakdown</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Tests Included in Fever Panel – I</h2>
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
                                    { name: "Complete Hemogram", purpose: "Evaluates overall blood health, identifying infection, inflammation, anemia, and platelet reduction." },
                                    { name: "Peripheral Smear Examination", purpose: "Helps detect blood parasites like malaria and assess abnormal blood cell morphology." },
                                    { name: "Typhidot IgM & IgG", purpose: "Detects typhoid fever by identifying antibodies. IgM indicates recent infection, while IgG suggests past exposure." },
                                    { name: "Dengue NS1 Card Antigen", purpose: "An important test for early detection of dengue fever, especially within the first 3–5 days." },
                                    { name: "Malaria Antigen (Vivax & Falciparum)", purpose: "Identifies malaria infection caused by Plasmodium vivax and Plasmodium falciparum." },
                                    { name: "Urine Analysis", purpose: "Checks for urinary tract infections, dehydration, kidney involvement, and fever-related complications." },
                                    { name: "Liver Function Test (LFT)", purpose: "Evaluates liver health, which may be affected during infections like dengue, typhoid, or viral hepatitis." },
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
                    {/* Advantages */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Advantages of Fever Panel – I
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "One-time testing for multiple fever causes",
                                "Accurate and reliable diagnostic results",
                                "Saves cost compared to individual tests",
                                "Reduces patient stress and repeat visits",
                                "Helpful for both adults and children",
                                "Helps identify the exact cause of fever",
                                "Enables quick detection of serious infections"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    <span className="text-emerald-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who Should Get */}
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <User className="w-6 h-6 text-blue-600" /> Who Should Get Fever Panel – I?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Persons with fever persisting more than 2-3 days",
                                "Persons having chills, shivering, or sweating",
                                "Persons with body aches and weakness",
                                "Patients with thrombocytopenia and/or other abnormalities in complete blood counts",
                                "Anyone suspected of dengue, malaria, or typhoid",
                                "Children and Adults with unexplained fever"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span className="text-blue-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-blue-200/50 text-blue-800 italic text-sm">
                            Doctors may also recommend this panel during seasonal outbreaks.
                        </div>
                    </div>
                </div>

                {/* Procedure */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="flex items-center gap-2 font-bold text-lg text-slate-800 mb-4 pb-4 border-b">
                        <Clock className="w-5 h-5 text-blue-500" /> How the Test is Performed
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "A blood sample is collected by trained professionals",
                            "Urine sample is taken for routine examination",
                            "Samples are processed using automated systems",
                            "Reports are reviewed for accuracy before release"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-4 rounded-xl text-center text-slate-700 text-sm flex flex-col items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                    {i + 1}
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-center text-slate-500 text-sm">
                        The procedure is safe, quick, and requires minimal preparation. Most reports are available on the same day.
                    </p>
                </div>

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

export default FeverPanelIPage;
