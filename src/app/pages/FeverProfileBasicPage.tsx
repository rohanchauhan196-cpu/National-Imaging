import { motion } from 'motion/react';
import { FlaskConical, Clock, ShieldCheck, AlertCircle, Thermometer, User, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FeverProfileBasicPage = () => {
    const faqs = [
        {
            question: "When should I get the Fever Profile – Basic done?",
            answer: "If the fever continues beyond 48–72 hours or returns frequently."
        },
        {
            question: "Do any of these tests require fasting?",
            answer: "No, fasting is not required for this profile."
        },
        {
            question: "Can this test detect malaria and typhoid?",
            answer: "Yes, specific markers for both conditions are included."
        },
        {
            question: "How long do results take?",
            answer: "Most reports are provided within the same day."
        },
        {
            question: "Is this test useful for children?",
            answer: "Yes, especially for kids with sudden fever, fatigue, or mosquito exposure."
        },
        {
            question: "Will I need further tests after this?",
            answer: "Only if the doctor suspects additional complications or wants a detailed organ check."
        },
        {
            question: "Can I take fever medicine before the test?",
            answer: "Yes, but inform the lab and doctor about any recent medication."
        },
        {
            question: "How accurate are these tests?",
            answer: "They provide reliable results for early infection screening and medical guidance."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">
            <SEO
                title="Fever Profile Basic"
                description="Get tested for Malaria, Typhoid, and other infections with Fever Profile Basic. Fast reports available at National Imaging and Path Labs."
                keywords="fever test, malaria test, typhoid test, fever profile price, infection screening"
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
                            Infection Screening
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Fever Profile <br />
                            <span className="text-blue-200">Basic</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed">
                            Fast and accurate screening for common fever causes like Malaria, Typhoid, and infections.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm w-full relative z-20"
                    >
                        <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Special Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 800</div>
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
                        Fever may become one of the most frequently observed symptoms, which may occur due to several reasons such as infections, weather changes, consumption of tainted food or water, bites from mosquitoes, or health conditions. Fever may sometimes get cleared by taking sufficient rest along with over-the-counter medications, but it may very well be a sign related to infections like Typhoid, Malaria, Urinary Tract Infections, or Blood-related infections.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        If the fever does not clear after 2-3 days or may come again and again, it becomes necessary to carry out a proper diagnostic test to identify the reason linked to the fever.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Fever Profile – Basic is specifically designed to identify the common infections causing fever, weakness, chill, and fatigue. This is because the test is designed to examine your blood and immune systems and signs in the body. With the use of the test, the doctor will then know if the Fever is due to or associated with Malaria, Typhoid, Urinary Infections, or any other form of Bacterial Infections.
                    </p>
                </section>

                {/* Included Tests Table */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Detailed Breakdown</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What Tests Are Included and Why?</h2>
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
                                    { name: "Complete Blood Count (CBC)", purpose: "Measures blood cells to detect infection, anemia, weak immunity, and inflammation" },
                                    { name: "Peripheral Smear Examination", purpose: "Helps detect abnormalities in blood cells and confirms malaria parasites if present" },
                                    { name: "ESR (Erythrocyte Sedimentation Rate)", purpose: "Indicates inflammation or infection levels in the body" },
                                    { name: "Widal Slide Method", purpose: "Detects Typhoid infection caused by Salmonella bacteria" },
                                    { name: "Malaria Antigen Vivax & Falciparum", purpose: "Quickly identifies malaria parasites responsible for fever with chills" },
                                    { name: "Urine Analysis", purpose: "Detects urinary tract infections that may cause persistent fever, pain, and weakness" },
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
                        <h3 className="font-bold text-lg text-primary mb-2">Diagnostic Clarity</h3>
                        <p className="text-slate-700">
                            These tests help the person understand the complete information regarding the cause of the fever, as well as the level of infection it might be carrying.
                        </p>
                    </div>
                </section>

                {/* Importance & Signs */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Why Choose */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Why Choose Fever Profile – Basic?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Helps identify the exact cause of fever and guides quick treatment",
                                "Detects serious infections like malaria and typhoid at an early stage",
                                "Prevents unnecessary medicines or delayed diagnosis",
                                "Useful when fever is recurring, high-grade, or accompanied by body pain and weakness",
                                "Helps doctors track infection severity and monitor recovery"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    <span className="text-emerald-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-emerald-200/50 text-emerald-800 italic text-sm">
                            Fever may seem like a simple symptom, but it can turn serious if not diagnosed correctly on time. This profile ensures nothing is missed during evaluation.
                        </div>
                    </div>

                    {/* Common Signs */}
                    <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
                        <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-2">
                            <Thermometer className="w-6 h-6 text-orange-600" /> Common Signs When You Should Get This Test
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Fever lasting more than 2–3 days",
                                "High fever with chills or sweating",
                                "Headache, nausea, vomiting, and body pain",
                                "Sudden weakness or loss of appetite",
                                "Fever after eating outside food or drinking unsafe water",
                                "Fever after traveling to mosquito-prone or polluted areas",
                                "Burning sensation while urinating or lower abdominal pain"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span className="text-orange-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-orange-200/50 text-orange-800 italic text-sm">
                            If any of these symptoms are present, do not wait — get tested to avoid complications.
                        </div>
                    </div>
                </div>

                {/* Preparation & Precautions */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="flex items-center gap-2 font-bold text-lg text-slate-800 mb-4 pb-4 border-b">
                                <Clock className="w-5 h-5 text-blue-500" /> Preparation Before Testing
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "No fasting required for these tests",
                                    "Inform the team if you are already taking antibiotics or fever medication",
                                    "Bring previous health records if available",
                                    "Drink enough water for easier blood and urine sample collection"
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
                                <AlertCircle className="w-5 h-5 text-red-500" /> Precautions and Health Tips
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Do not ignore continuous or repetitive fever",
                                    "Keep yourself hydrated to avoid dehydration",
                                    "Avoid self-medication, especially antibiotics",
                                    "Complete the full course of treatment if infection is detected",
                                    "Take adequate rest and avoid outside or street food"
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

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <h3 className="font-bold text-xl text-primary mb-4">How This Profile Helps You</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Fever might also be due to different types of microorganisms that require different treatments. Antibiotics are of no use and cause side effects when the fever is due to viruses; similarly, when the fever is due to malaria or typhoid, there is a need for special treatment for the fever. This profile removes all confusion by giving a correct diagnosis through reliable infection markers. It also aids in understanding whether hospitalization or further testing is required or not.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        The fever panel forms an indispensable basis for the young adults, children, and older adults who might have their immunity weakened and, thus, are more prone to infection-related complications.
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

export default FeverProfileBasicPage;
