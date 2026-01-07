import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, Clock, X, Upload, FileText, ChevronDown, Send, Mail } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { sanityClient } from '../../sanityClient';
import SEO from '../components/SEO';
import { useSanitySEO } from '../hooks/useSanitySEO';

interface JobPosting {
    title: string;
    department: string;
    location: string;
    type: string;
    description: any; // Changed from string to any to support Portable Text
    requirements: string[]; // Keep as string[] if user didn't change this in Sanity schema, or verify if this also needs change. Assuming only description changed for now.
    postedDate: string;
}



const CareersPage = () => {
    const { seo } = useSanitySEO('page', 'careers');
    const [jobs, setJobs] = useState<JobPosting[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);

    // Application form state
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

    const toggleJob = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleApply = (e: React.MouseEvent, job: JobPosting) => {
        e.stopPropagation(); // Prevent toggling accordion
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
        console.log('Application submitted:', { ...formData, job: selectedJob?.title });
        alert('Application submitted successfully!');
        setShowApplicationForm(false);
        setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <div className="text-slate-500 font-medium">Loading opportunities...</div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">
            <SEO
                title={seo?.title || "Careers | National Imaging and Path Labs"}
                description={seo?.description || "Join our team of medical experts. View current job openings at National Imaging and Path Labs."}
                keywords={seo?.keywords?.join(', ') || "careers, jobs, medical jobs, lab technician jobs, dwarka"}
                image={seo?.image}
            />

            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Build Your Career With Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Join a team that values excellence, compassion, and innovation in healthcare.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-5xl">

                {/* General Application Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-16 text-center"
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4">
                        <Send className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Don't see a suitable role?</h2>
                    <p className="text-slate-600 mb-6">
                        We are always looking for talented individuals. Send your resume directly to us.
                    </p>
                    <a
                        href="mailto:nipathlabs@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <Mail className="w-4 h-4" />
                        nipathlabs@gmail.com
                    </a>
                </motion.div>

                {/* Job Listings Accordion */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 pl-2 border-l-4 border-primary">Current Openings</h3>

                    {jobs.length === 0 ? (
                        <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-dashed border-slate-200">
                            No specific openings listed right now. Please email us your resume!
                        </div>
                    ) : (
                        jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${expandedIndex === index
                                    ? 'border-primary/50 shadow-md ring-1 ring-primary/10'
                                    : 'border-slate-200 shadow-sm hover:border-primary/30'
                                    }`}
                            >
                                {/* Header / Trigger */}
                                <div
                                    onClick={() => toggleJob(index)}
                                    className="p-6 cursor-pointer flex items-center justify-between gap-4 group"
                                >
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center gap-2">
                                            {job.title}
                                            {expandedIndex === index && (
                                                <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-normal">
                                                    Open
                                                </span>
                                            )}
                                        </h4>
                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                                            <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                                                <Briefcase className="w-3.5 h-3.5" />
                                                {job.department}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                                                <Clock className="w-3.5 h-3.5" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${expandedIndex === index ? 'rotate-180 bg-primary/10 text-primary' : 'text-slate-400'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-slate-100 bg-slate-50/50"
                                        >
                                            <div className="p-6 pt-4">
                                                <div className="grid md:grid-cols-3 gap-8">
                                                    <div className="md:col-span-2 space-y-6">
                                                        <div>
                                                            <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                                                About the Role
                                                            </h5>
                                                            <div className="text-slate-600 leading-relaxed text-sm prose prose-sm prose-slate max-w-none">
                                                                {Array.isArray(job.description) ? (
                                                                    <PortableText value={job.description} />
                                                                ) : (
                                                                    <p>{String(job.description)}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {job.requirements && job.requirements.length > 0 && (
                                                            <div>
                                                                <h5 className="font-semibold text-slate-900 mb-2">Requirements</h5>
                                                                <ul className="space-y-2">
                                                                    {job.requirements.map((req, idx) => (
                                                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                                            {req}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Sidebar action */}
                                                    <div className="flex flex-col justify-end md:items-end border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                                                        <p className="text-sm text-slate-500 mb-4 text-center md:text-right">
                                                            Interested in this position? <br />
                                                            Click below to start your application.
                                                        </p>
                                                        <button
                                                            onClick={(e) => handleApply(e, job)}
                                                            className="w-full md:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                                        >
                                                            Apply Selection
                                                            <Send className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* Application Modal (Same Logic, Updated Style) */}
            <AnimatePresence>
                {showApplicationForm && selectedJob && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowApplicationForm(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">Apply for Position</h3>
                                    <p className="text-sm text-primary font-medium">{selectedJob.title}</p>
                                </div>
                                <button
                                    onClick={() => setShowApplicationForm(false)}
                                    className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-500" />
                                </button>
                            </div>

                            <div className="overflow-y-auto p-6">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 90000 00000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Resume (PDF/Doc)</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 transition-colors relative cursor-pointer">
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="opacity-0 absolute inset-0 cursor-pointer"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                required
                                            />
                                            <div className="space-y-1 text-center pointer-events-none">
                                                <Upload className="mx-auto h-8 w-8 text-slate-400" />
                                                <div className="flex text-sm text-slate-600 justify-center">
                                                    <span className="font-medium text-primary">Upload a file</span>
                                                </div>
                                                <p className="text-xs text-slate-500">
                                                    {formData.resume ? formData.resume.name : "PDF, DOC up to 5MB"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full py-3 px-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CareersPage;
