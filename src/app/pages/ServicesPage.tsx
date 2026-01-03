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
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.slug.current}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full"
                                >
                                    <Link to={`/service/${service.slug.current}`} className="block relative h-56 overflow-hidden bg-slate-200">
                                        {service.mainImage ? (
                                            <img
                                                src={urlFor(service.mainImage).width(800).url()}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                <Activity className="w-12 h-12" />
                                            </div>
                                        )}
                                    </Link>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <Link to={`/service/${service.slug.current}`} className="block mb-3">
                                            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h2>
                                        </Link>

                                        <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                                            {service.shortDescription}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-slate-100">
                                            <Link
                                                to={`/service/${service.slug.current}`}
                                                className="text-primary font-semibold flex items-center gap-2 group/link hover:underline"
                                            >
                                                View Tests & Details
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
