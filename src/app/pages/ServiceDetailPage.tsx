import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, Sparkles } from 'lucide-react';
import { sanityClient } from '../../sanityClient';

interface TestItem {
    name: string;
    price: number;
    description?: string;
}

interface ServiceDetail {
    title: string;
    tests: TestItem[];
}

const ServiceDetailPage = () => {
    const { slug } = useParams();
    const [service, setService] = useState<ServiceDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedTest, setSelectedTest] = useState<TestItem | null>(null);

    useEffect(() => {
        if (!slug) return;

        sanityClient.fetch(
            `*[_type == "service" && slug.current == $slug][0]{
                title,
                tests
            }`,
            { slug }
        )
            .then((data) => {
                setService(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching service details:", error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><div className="text-slate-500 text-lg">Loading...</div></div>;
    if (!service) return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><div className="text-slate-500 text-lg">Service not found.</div></div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-20">
            {/* Minimal Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-20 z-10">
                <div className="container mx-auto px-4 py-6">
                    <Link to="/all-services" className="inline-flex items-center text-slate-500 hover:text-primary mb-4 transition-colors text-sm">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
                        {service.title}
                        <Sparkles className="w-6 h-6 text-primary" />
                    </h1>
                </div>
            </div>

            {/* Tests Grid */}
            <div className="container mx-auto px-4 py-12">
                {(!service.tests || service.tests.length === 0) ? (
                    <div className="text-center p-12 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 text-slate-500">
                        No tests available for this service.
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.tests.map((test, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedTest(test)}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <h3 className="font-semibold text-slate-800 mb-3 text-lg leading-tight group-hover:text-primary transition-colors">
                                        {test.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-primary">
                                            ₹{test.price}
                                        </span>
                                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                        ))}
                    </div>
                )}
            </div>

            {/* Aesthetic Modal */}
            <AnimatePresence>
                {selectedTest && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTest(null)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedTest(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors z-10"
                            >
                                <X className="w-5 h-5 text-slate-600" />
                            </button>

                            {/* Gradient Header */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 pb-12 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                                <h2 className="text-2xl font-bold text-white relative z-10 pr-12">
                                    {selectedTest.name}
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="p-8 -mt-6 relative">
                                {/* Price Badge */}
                                <div className="inline-flex items-center bg-white shadow-lg rounded-full px-6 py-3 mb-6 border border-slate-200">
                                    <span className="text-sm text-slate-600 mr-2">Price:</span>
                                    <span className="text-2xl font-bold text-primary">₹{selectedTest.price}</span>
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Test Details</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        {selectedTest.description || "This test provides comprehensive diagnostic information. Contact us for more details about the testing procedure and prerequisites."}
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    Book This Test
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiceDetailPage;
