import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import { useSanitySEO } from '../hooks/useSanitySEO';

const ContactPage = () => {
    const { seo } = useSanitySEO('page', 'contact');

    return (
        <div className="bg-slate-50 min-h-screen pt-20 font-sans">
            <SEO
                title={seo?.title || "Contact Us | Book Appointment"}
                description={seo?.description || "Contact National Imaging & Path Labs in Dwarka. Call 97111 27333 for appointments or home collection. Visit us at Sector 12, Dwarka."}
                keywords={seo?.keywords?.join(', ') || "contact diagnostic lab, lab appointment, home collection number, dwarka lab address, national imaging contact"}
                image={seo?.image}
            />
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 Mix-blend-overlay"></div>
                <div className="container mx-auto px-4 z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
                    >
                        We Are Always Here to Help
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-border"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
                            <p className="text-muted-foreground mb-10 text-lg">
                                For appointments, queries, or online report support, connect with us anytime.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2">Location</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Opposite Pillar No. 799, Plot No.1,<br />
                                            Near Dwarka More, Sainik Nagar,<br />
                                            Vipin Garden, Kakrola, New Delhi – 110059
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2">Call / WhatsApp</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:+919711127333" className="text-muted-foreground hover:text-primary transition-colors">
                                                +91 97111 27333
                                            </a>
                                            <a href="tel:+919217244110" className="text-muted-foreground hover:text-primary transition-colors">
                                                +91 92172 44110
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2">Timings</h3>
                                        <p className="text-muted-foreground">
                                            8:00 AM – 9:00 PM (All 7 Days)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                                        <a href="mailto:nipathlabs@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            nipathlabs@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-secondary rounded-xl text-center">
                                <p className="text-lg font-medium text-secondary-foreground">
                                    Visit us for Fast • Accurate • Affordable diagnostic services.
                                </p>
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-[600px] rounded-2xl overflow-hidden shadow-lg border border-border"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.347832638116!2d77.0277181!3d28.6193355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05253923be1d%3A0x4bbf9dacb73e87c9!2sNational%20Imaging%20and%20Path%20Labs!5e0!3m2!1sen!2sin!4v1767690608312!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
