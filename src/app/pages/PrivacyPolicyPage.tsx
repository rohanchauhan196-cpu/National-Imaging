import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">Welcome to National Imaging and Path Labs</h2>
                            <p>
                                We appreciate your trust in us and are dedicated to protecting that trust with the protection of your confidential information. We consider that by using this website, you acknowledge that you have read our Privacy Policy.
                            </p>
                            <p>
                                We reserve the right to update or modify these privacy terms whenever the need arises. Any changes will be published on the website. Thus, it is important that you regularly visit the page.
                            </p>
                            <p>
                                Your privacy matters to us very much. We do not intend to give information to anyone but authorized doctors when we are required to give you services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">Information We Collect and How We Use It</h2>
                            <p>
                                As a move to ensure we provide you with the most accurate, effective, and optimal health service, we must henceforth ask for the provision of these personal and health details:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Your name, phone number, and address</li>
                                <li>Details about your medical history and ongoing health concerns</li>
                                <li>Previous test results, scans, or medical reports</li>
                                <li>Information provided by your doctor and healthcare provider</li>
                                <li>Insurance details, if applicable</li>
                            </ul>
                            <p className="mt-4">We use this information to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Provide quality healthcare and diagnostic support</li>
                                <li>Confirm and manage your appointments smoothly</li>
                                <li>Maintain proper medical records for future reference</li>
                                <li>Ensure continuity of care without interruption</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">Use of Cookies and IP Tracking</h2>
                            <p>
                                Additionally, our website uses cookies to improve your browsing experience and to assist in the administration of this website. However, if you want to disable cookies in your browser, this will limit the usability of some of the website functionalities. We also observe IP addresses to analyze how this website is working to ensure user-friendly experiences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">External Links</h2>
                            <p>
                                Other sites are accessible through links from our site. This is to inform that we do not take any responsibility regarding them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">Security Measures</h2>
                            <p>
                                We follow strict security procedures to prevent unauthorized access, loss, or misuse of the information shared with us. Your data is safeguarded with appropriate technology and protocols.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">Limitation of Liability</h2>
                            <p>
                                National Imaging and Path Labs will not be held responsible for any loss or damage that may occur from using or being unable to use our website content.
                            </p>
                        </section>

                        <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Complaints and Contact Information</h2>
                            <p className="mb-4">
                                If you have any questions, concerns, or complaints about our Privacy Policy, you can contact us at:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-secondary" />
                                    <a href="mailto:nipathlabs@gmail.com" className="hover:text-secondary transition-colors">nipathlabs@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-secondary" />
                                    <div className="flex gap-2">
                                        <a href="tel:+919711127333" className="hover:text-secondary transition-colors">97111 27333</a>
                                        <span>|</span>
                                        <a href="tel:+919217244110" className="hover:text-secondary transition-colors">92172 44110</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                    <span>Opposite Pillar No. 799, Plot No.1, Near Dwarka More, Sainik Nagar, Vipin Garden, Kakrola, New Delhi – 110059</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
