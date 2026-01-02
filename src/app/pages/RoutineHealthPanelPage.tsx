import { motion } from 'motion/react';
import { FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoutineHealthPanelPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">
            <div className="relative bg-primary py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-4xl font-bold mb-4">Routine Health Panel</h1>
                        <p className="text-blue-100 text-lg">Essential regular checkups for maintaining good health.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl max-w-sm w-full">
                        <div className="text-4xl font-bold text-primary mb-2">₹ 1,400</div>
                        <Link to="/contact" className="block w-full py-3 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-xl">Book Now</Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Included Tests</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Lipid Profile", desc: "Heart health markers" },
                        { name: "Liver Function Test", desc: "Liver health indicators" },
                        { name: "Kidney Function Test", desc: "Renal function check" },
                        { name: "Fasting Sugar", desc: "Diabetes screening" },
                        { name: "Thyroid Profile (TFT)", desc: "Thyroid hormones" },
                        { name: "CBC", desc: "Blood cell analysis" },
                        { name: "Urine Analysis", desc: "Renal & metabolic screen" },
                    ].map((test, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <FlaskConical className="w-8 h-8 text-primary mb-3" />
                            <h3 className="text-lg font-bold mb-2">{test.name}</h3>
                            <p className="text-sm text-slate-600">{test.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoutineHealthPanelPage;
