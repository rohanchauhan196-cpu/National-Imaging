import { motion } from 'motion/react';
import { CheckCircle2, FlaskConical, Clock, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PreventiveHealthPanelComprehensivePlusPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        { question: "How is this different from the standard comprehensive panel?", answer: "This includes additional profiles like Iron studies for a deeper check." },
        { question: "Is fasting required?", answer: "Yes, 10-12 hours of fasting is required." }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">
            <div className="relative bg-primary py-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white max-w-2xl">
                        <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/20">Advanced Care</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Preventive Health Panel <br /><span className="text-blue-200">Comprehensive +</span></h1>
                        <p className="text-blue-100 text-lg">Detailed health analysis including Iron profile for complete peace of mind.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl max-w-sm w-full">
                        <div className="text-slate-500 text-sm font-medium uppercase">Package Price</div>
                        <div className="text-4xl font-bold text-primary mb-2">₹ 2,200</div>
                        <Link to="/contact" className="block w-full py-3 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-xl mb-3">Book Now</Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Included Tests</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Lipid Profile", desc: "Cholesterol & Triglycerides" },
                            { name: "HbA1c", desc: "3-month sugar average" },
                            { name: "Liver Function Test", desc: "Liver enzymes & proteins" },
                            { name: "Kidney Function Test", desc: "Urea, Creatinine" },
                            { name: "Fasting Sugar", desc: "Blood glucose" },
                            { name: "Thyroid Profile (TFT)", desc: "T3, T4, TSH" },
                            { name: "CBC", desc: "Complete Blood Count" },
                            { name: "Urine Analysis", desc: "Routine check" },
                            { name: "Iron Profile", desc: "Iron, TIBC, Transferrin" },
                        ].map((test, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <FlaskConical className="w-8 h-8 text-primary mb-3" />
                                <h3 className="text-lg font-bold mb-2">{test.name}</h3>
                                <p className="text-sm text-slate-600">{test.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PreventiveHealthPanelComprehensivePlusPage;
