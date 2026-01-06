import { motion } from 'motion/react';

const RefundPolicyPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
                        Refund and Cancellation Policy
                    </h1>

                    <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                        <p>
                            The National Imaging and Path Labs services have a transparent and patient-centric refund and cancellation policy to avoid any misunderstanding in terms of bookings. The advance payments for any diagnostic test, imaging session, or therapy session are refundable only if they are cancelled within the specified time frame, as specified below.
                        </p>

                        <p>
                            In situations involving short-notice appointments, it is imperative to make cancellation requests on or before the day of the appointment, up to 8:00 PM, in order to deem it valid. This is because, beyond this point, any request will lack legitimacy and will therefore not qualify for refund treatment.
                        </p>

                        <p>
                            Refunds shall not be granted once the process of sample collection, testing, imaging, or any therapy procedure has commenced, as medical materials, expertise, and equipment are immediately required. Certain specialised and time-sensitive clinical tests and procedures may be considered non-refundable even within the specified timeframe, which shall be communicated during the date and/or time confirmation process.
                        </p>

                        <p>
                            If there is approval for a refund as per policy norms, the refund process will take place within 5 working days from the date of approval. The refund would be made in the form of UPI payment/NEFT only.
                        </p>

                        <p>
                            National Imaging and Path Labs reserves the right to review, modify, or update the policy at any given time according to the requirements of their operation in compliance with the standards of patient care.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RefundPolicyPage;
