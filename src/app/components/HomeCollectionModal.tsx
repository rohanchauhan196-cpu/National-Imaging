import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, User, Mail, Calendar } from 'lucide-react';

const HomeCollectionModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        preferredDate: '',
        preferredTime: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would send the form data to your backend
        console.log('Home collection request:', formData);
        alert('Home collection request submitted! We will contact you shortly.');
        setIsOpen(false);
        setFormData({ name: '', phone: '', email: '', address: '', preferredDate: '', preferredTime: '' });
    };

    return (
        <>
            {/* Floating Button - Fixed to right edge */}
            <motion.button
                onClick={() => setIsOpen(true)}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                whileHover={{
                    x: -10,
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(237, 50, 55, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-l from-secondary via-red-600 to-secondary text-white py-6 px-4 rounded-l-2xl shadow-2xl hover:shadow-secondary/50 transition-all group overflow-hidden"
            >
                {/* Animated background gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                        x: ['-100%', '100%']
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />

                {/* Icon and Text */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                    <motion.div
                        animate={{
                            rotate: [0, -10, 10, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                        }}
                        className="text-3xl"
                    >
                        🏠
                    </motion.div>
                    <div className="font-bold text-sm whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                        HOME COLLECTION
                    </div>
                    <motion.div
                        className="w-full h-1 bg-white rounded-full mt-2"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Pulse effect */}
                <motion.div
                    className="absolute inset-0 bg-white/30 rounded-l-2xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                />
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-red-500 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                                <h2 className="text-2xl font-bold mb-2 relative z-10">🏠 Home Collection</h2>
                                <p className="text-blue-100 text-sm relative z-10">Book a sample collection at your doorstep</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-8 space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                        <User className="w-4 h-4" /> Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                        <Phone className="w-4 h-4" /> Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                        <Mail className="w-4 h-4" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Address *
                                    </label>
                                    <textarea
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        rows={2}
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                        placeholder="Full address with landmark"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                            <Calendar className="w-4 h-4" /> Date *
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={formData.preferredDate}
                                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Time *
                                        </label>
                                        <input
                                            type="time"
                                            required
                                            value={formData.preferredTime}
                                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all mt-2"
                                >
                                    Submit Request
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HomeCollectionModal;
