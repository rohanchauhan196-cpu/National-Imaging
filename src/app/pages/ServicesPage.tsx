import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sanityClient, urlFor } from '../../sanityClient';

// Type for Sanity Data
interface Service {
    title: string;
    slug: { current: string };
    mainImage: any;
    shortDescription: string;
}

const ServicesPage = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch services from Sanity
        // Note: This query assumes a 'service' document type exists in Sanity
        sanityClient.fetch(
            `*[_type == "service"]{
                title,
                slug,
                mainImage,
                shortDescription
            }`
        )
            .then((data) => {
                setServices(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center py-20 text-slate-500">Loading services...</div>;

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Hero Section */}
            <section className="bg-primary py-20 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive diagnostic and health services tailored to your needs.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {services.length === 0 ? (
                        <div className="text-center text-slate-500">No services found.</div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {services.map((service, index) => (
                                <Link
                                    key={service.slug.current}
                                    to={`/service/${service.slug.current}`}
                                    className="group"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        className="bg-white rounded-xl shadow-sm border border-slate-200/50 overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                                    >
                                        {/* Compact Image */}
                                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                            {service.mainImage ? (
                                                <img
                                                    src={urlFor(service.mainImage).width(600).url()}
                                                    alt={service.title}
                                                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Activity className="w-10 h-10 text-slate-400" />
                                                </div>
                                            )}
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Compact Content */}
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {service.title}
                                            </h3>

                                            <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">
                                                {service.shortDescription}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center justify-between pt-3 border-t border-slate-100/50">
                                                <span className="text-primary font-semibold text-sm group-hover:underline">
                                                    View Tests
                                                </span>
                                                <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                                                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
