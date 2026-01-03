import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, Clock, X, Upload, FileText } from 'lucide-react';
import { sanityClient } from '../../sanityClient';

interface JobPosting {
    title: string;
    department: string;
    location: string;
    type: string; // Full-time, Part-time, Contract
    description: string;
    requirements: string[];
    postedDate: string;
}

const CareersPage = () => {
    const [jobs, setJobs] = useState<JobPosting[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null as File | null,
        coverLetter: ''
    });

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "jobPosting"] | order(postedDate desc){
                title,
                department,
                location,
                type,
                description,
                requirements,
                postedDate
            }`
        )
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching job postings:", error);
                setLoading(false);
            });
    }, []);

    const handleApply = (job: JobPosting) => {
        setSelectedJob(job);
        setShowApplicationForm(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Application submitted:', { ...formData, job: selectedJob?.title });
        alert('Application submitted successfully!');
        setShowApplicationForm(false);
        setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="text-slate-500 text-lg">Loading opportunities...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 py-20 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Join Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg max-w-2xl mx-auto"
                    >
                        Be part of a team dedicated to providing exceptional healthcare services.
                    </motion.p>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {jobs.length === 0 ? (
                        <div className="text-center p-12 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 text-slate-500">
                            <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p className="text-lg">No open positions at the moment.</p>
                            <p className="text-sm mt-2">Check back soon for new opportunities!</p>
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto space-y-6">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h2>
                                            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                                                <span className="flex items-center gap-1.5">
                                                    <Briefcase className="w-4 h-4 text-primary" />
                                                    {job.department}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4 text-primary" />
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleApply(job)}
                                            className="px-6 py-2.5 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                                        >
                                            Apply Now
                                        </motion.button>
                                    </div>

                                    <p className="text-slate-700 mb-4 leading-relaxed">{job.description}</p>

                                    {job.requirements && job.requirements.length > 0 && (
                                        <div>
                                            <h3 className="font-semibold text-slate-800 mb-2">Requirements:</h3>
                                            <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                                                {job.requirements.map((req, idx) => (
                                                    <li key={idx}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Application Form Modal */}
            <AnimatePresence>
                {showApplicationForm && selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowApplicationForm(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setShowApplicationForm(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-red-500 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                                <h2 className="text-2xl font-bold mb-2">Apply for {selectedJob.title}</h2>
                                <p className="text-blue-100 text-sm">{selectedJob.department} • {selectedJob.location}</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Resume *</label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            required
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="resume-upload"
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
                                        >
                                            {formData.resume ? (
                                                <>
                                                    <FileText className="w-5 h-5 text-primary" />
                                                    <span className="text-sm text-slate-700">{formData.resume.name}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Upload className="w-5 h-5 text-slate-400" />
                                                    <span className="text-sm text-slate-500">Click to upload (PDF, DOC, DOCX)</span>
                                                </>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Cover Letter (Optional)</label>
                                    <textarea
                                        value={formData.coverLetter}
                                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                        placeholder="Tell us why you're a great fit for this role..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    Submit Application
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CareersPage;
