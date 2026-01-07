import { motion } from 'motion/react';
import { FlaskConical, Clock, ShieldCheck, AlertCircle, Droplet, User, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ExtendedIronProfilePage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the purpose of an Extended Iron Profile test?",
            answer: "It is used to assess iron deficiency, iron overload conditions, and iron status in the body, particularly in cases of anemia or weakness of unknown cause."
        },
        {
            question: "What are the differences between this test and a regular iron test?",
            answer: "A simple iron panel will assess only the serum iron levels; the Extended Iron Profile will assess the levels of ferritin, TIBC, UIBC, and transferrin saturation."
        },
        {
            question: "Is fasting necessary before the test?",
            answer: "Fasting is usually recommended to ensure accurate results, especially when other blood tests are performed simultaneously."
        },
        {
            question: "Can ferritin be low even if hemoglobin is normal?",
            answer: "Yes, ferritin can be low in early iron deficiency even when hemoglobin levels are still normal."
        },
        {
            question: "What does high ferritin indicate?",
            answer: "Elevated ferritin levels may indicate iron overload, infection, inflammation, and liver disease. It is a parameter to be evaluated by a physician."
        },
        {
            question: "When will I receive my test reports?",
            answer: "Test results are mostly available on the same day, after sample collection, based on the different tests included in the test package."
        },
        {
            question: "Is the Extended Iron Profile test safe?",
            answer: "Yes, it is a simple blood test, and it is harmless if conducted under proper lab settings."
        },
        {
            question: "How often should this test be repeated?",
            answer: "Repeat testing depends on the patient’s condition and treatment plan. Doctors usually advise follow-up tests to monitor improvement."
        },
        {
            question: "Can this test help decide on iron supplementation?",
            answer: "Yes, the results help doctors decide whether iron supplements are needed, should be continued, or must be stopped."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">
            <SEO
                title="Extended Iron Profile"
                description="Advanced Iron studies including Ferritin and Transferrin Saturation. Get accurate results for Anemia and Iron deficiency."
                keywords="extended iron profile, ferritin test, iron saturation, anemia advanced test, blood test delhi"
            />
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
                            Advanced Anemia Care
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Extended Iron <br />
                            <span className="text-blue-200">Profile</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            Definitive results for iron levels, stores, and usage in the body.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 1,850</div>
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
                        Iron has an extremely essential function in ensuring the body remains healthy and in proper working condition. Iron assists the body in producing hemoglobin, which enables oxygen to be carried from the lungs to the body. The Extended Iron Profile Blood Test provides the definitive results of the levels of iron, stores of iron, and use of iron present inside the body.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Uniquely different from the basic iron test, the Extended Iron Profile is not based on a single result. Rather, it integrates several iron-related indicators to enable doctors to precisely determine whether the cause of the concern is iron deficiency, inefficient iron uptake, a chronic condition, or iron overload.
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
                                    <th className="p-4 font-bold text-sm uppercase tracking-wide">Health Evaluation Area</th>
                                    <th className="p-4 font-bold text-sm uppercase tracking-wide">Diagnostic Tests Included</th>
                                    <th className="p-4 font-bold text-sm uppercase tracking-wide">Purpose of Testing</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { area: "Circulating Iron Level", test: "Serum Iron", purpose: "Measures the iron available in the bloodstream" },
                                    { area: "Iron Transport Ability", test: "Total Iron Binding Capacity (TIBC)", purpose: "Evaluates how well iron is carried in blood" },
                                    { area: "Available Binding Capacity", test: "Unsaturated Iron Binding Capacity (UIBC)", purpose: "Identifies unused iron-binding capacity" },
                                    { area: "Iron Utilization Status", test: "Transferrin Unsaturation Index", purpose: "Detects iron deficiency or overload" },
                                    { area: "Iron Storage Assessment", test: "Ferritin", purpose: "Measures stored iron in the body" },
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 font-semibold text-slate-800">{row.area}</td>
                                        <td className="p-4 text-primary font-medium">{row.test}</td>
                                        <td className="p-4 text-slate-600">{row.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Importance & Who Should Consider */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Why Recommended */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Why Doctors Recommend It
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Helps confirm the exact cause of anemia",
                                "Distinguishes iron deficiency anemia from other blood disorders",
                                "Detects iron deficiency even before the condition worsens",
                                "Indicates iron overload conditions that can affect organs",
                                "Points out the effectiveness of iron supplements",
                                "Useful for chronic, liver, and inflammatory conditions"
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
                            <User className="w-6 h-6 text-blue-600" /> Who Should Consider This Test?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Having a feeling of fatigue, weakness, and light-headedness",
                                "Women with chronic menstrual discharge",
                                "Pregnant women and growing adolescents",
                                "Patients with low hemoglobin or abnormal CBC results",
                                "Persons with chronic kidney and liver diseases",
                                "Individuals on prolonged iron supplements"
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
                                <Clock className="w-5 h-5 text-blue-500" /> Test Preparation Guidelines
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "The fasting period may extend between 8 to 10 hours",
                                    "Iron supplements should never be ingested before testing (consult doctor)",
                                    "Provide knowledge about current medications to lab personnel",
                                    "Continue with the procedure for appointment booking"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                            <h4 className="flex items-center gap-2 font-bold text-lg text-orange-900 mb-4 pb-4 border-b border-orange-200">
                                <CheckCircle2 className="w-5 h-5 text-orange-600" /> Test Highlights
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-white rounded-lg text-orange-600 shadow-sm">
                                        <Droplet className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-orange-900">Comprehensive Analysis</div>
                                        <div className="text-orange-800/80 text-sm">Integrates multiple indicators for precise diagnosis.</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-white rounded-lg text-orange-600 shadow-sm">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-orange-900">Fast Reporting</div>
                                        <div className="text-orange-800/80 text-sm">Most results available on the same day.</div>
                                    </div>
                                </div>
                            </div>
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

export default ExtendedIronProfilePage;
