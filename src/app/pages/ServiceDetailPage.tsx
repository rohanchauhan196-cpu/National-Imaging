import { useEffect, useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, Sparkles, Search } from 'lucide-react';
import { sanityClient } from '../../sanityClient';
import SEO from '../components/SEO';

interface TestItem {
    name: string;
    price: number;
    description?: string;
}

interface ServiceDetail {
    title: string;
    tests: TestItem[];
    seo?: {
        title: string;
        description: string;
        keywords: string[];
        image: any;
    };
}

const ServiceDetailPage = () => {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const [service, setService] = useState<ServiceDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedTest, setSelectedTest] = useState<TestItem | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (!slug) return;

        sanityClient.fetch(
            `*[_type == "service" && slug.current == $slug][0]{
                title,
                tests,
                seo
            }`,
            { slug }
        )
            .then((data) => {
                setService(data);
                setLoading(false);

                // key logic: Check for query param after data is loaded
                const testNameParam = searchParams.get('test');
                if (testNameParam && data?.tests) {
                    const foundTest = data.tests.find((t: TestItem) => t.name === testNameParam);
                    if (foundTest) {
                        setSelectedTest(foundTest);
                    }
                }
            })
            .catch((error) => {
                console.error("Error fetching service details:", error);
                setLoading(false);
            });
    }, [slug, searchParams]);

    if (loading) return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><div className="text-slate-500 text-lg">Loading...</div></div>;
    if (!service) return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><div className="text-slate-500 text-lg">Service not found.</div></div>;

    const seoKeywords = service.seo?.keywords ? service.seo.keywords.join(', ') : `${service.title}, diagnostic tests, dwarka lab`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-20">
            <SEO
                title={service.seo?.title || service.title}
                description={service.seo?.description || `Comprehensive ${service.title} services at National Imaging and Path Labs.`}
                keywords={seoKeywords}
            />
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

            {/* Search and Tests Section */}
            <div className="container mx-auto px-4 py-8">
                {(!service.tests || service.tests.length === 0) ? (
                    <div className="text-center p-12 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 text-slate-500">
                        No tests available for this service.
                    </div>
                ) : (
                    <>
                        {/* Search Box */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search tests by name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                            <p className="text-sm text-slate-500 mt-2 text-center">
                                {service.tests.filter(test =>
                                    test.name.toLowerCase().includes(searchQuery.toLowerCase())
                                ).length} test{service.tests.filter(test =>
                                    test.name.toLowerCase().includes(searchQuery.toLowerCase())
                                ).length !== 1 ? 's' : ''} found
                            </p>
                        </div>

                        {/* Tests Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {service.tests
                                .filter(test => test.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                .map((test, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => setSelectedTest(test)}
                                        className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 text-left overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10 space-y-4">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-primary transition-colors">
                                                    {test.name}
                                                </h3>
                                                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                                    <ArrowLeft className="w-4 h-4 text-primary group-hover:text-white rotate-180" />
                                                </div>
                                            </div>

                                            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                                                {test.description || "Comprehensive diagnostic test. Click for more details."}
                                            </p>

                                            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                                            <div className="flex items-end justify-between">
                                                <div>
                                                    <span className="text-xs text-slate-500 block mb-1">Starting at</span>
                                                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                                                        ₹{test.price}
                                                    </span>
                                                </div>
                                                <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg text-xs font-semibold text-primary group-hover:from-primary group-hover:to-blue-600 group-hover:text-white transition-all">
                                                    Learn More
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.button>
                                ))}
                        </div>

                        {/* No results message */}
                        {service.tests.filter(test =>
                            test.name.toLowerCase().includes(searchQuery.toLowerCase())
                        ).length === 0 && (
                                <div className="text-center py-12 text-slate-500">
                                    <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
                                    <p>No tests match your search.</p>
                                </div>
                            )}
                    </>
                )}
            </div>

            {/* 3D Perspective Modal with Flip Animation */}
            <AnimatePresence>
                {selectedTest && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTest(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        style={{ perspective: '1000px' }}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                rotateX: -90,
                                scale: 0.5,
                                z: -500
                            }}
                            animate={{
                                opacity: 1,
                                rotateX: 0,
                                scale: 1,
                                z: 0
                            }}
                            exit={{
                                opacity: 0,
                                rotateX: 90,
                                scale: 0.5,
                                z: -500
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Close button with fancy animation */}
                            <motion.button
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTest(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-red-500 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-colors z-20 shadow-lg backdrop-blur-sm"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>

                            {/* Animated Gradient Header */}
                            <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 p-8 pb-12 relative overflow-hidden">
                                {/* Animated background patterns */}
                                <motion.div
                                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%']
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                {/* Floating orbs */}
                                <motion.div
                                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity
                                    }}
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.4, 0.2]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: 1
                                    }}
                                />

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-2xl font-bold text-white relative z-10 pr-12"
                                >
                                    {selectedTest.name}
                                </motion.h2>
                            </div>

                            {/* Content with staggered animations */}
                            <div className="p-8 -mt-6 relative">
                                {/* Floating Price Badge */}
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="inline-flex items-center bg-white shadow-2xl rounded-full px-6 py-3 mb-6 border-2 border-primary/20 relative overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"
                                        animate={{
                                            x: ['-100%', '100%']
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 1
                                        }}
                                    />
                                    <span className="text-sm text-slate-600 mr-2 relative z-10">Price:</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent relative z-10">₹{selectedTest.price}</span>
                                </motion.div>

                                {/* Description with fade-in */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-6"
                                >
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                                        <div className="w-1 h-4 bg-gradient-to-b from-primary to-blue-600 rounded-full" />
                                        Test Details
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        {selectedTest.description || "This test provides comprehensive diagnostic information. Contact us for more details about the testing procedure and prerequisites."}
                                    </p>
                                </motion.div>

                                {/* CTA Button with pulse effect */}
                                <motion.a
                                    href="tel:+919711127333"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="block w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group text-center"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ x: '-100%', skewX: -15 }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <span className="relative z-10">Book This Test Now</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiceDetailPage;
