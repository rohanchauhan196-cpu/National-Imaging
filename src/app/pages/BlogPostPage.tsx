import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Twitter, Facebook, Linkedin, ChevronRight, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../sanityClient';
import { PortableText } from '@portabletext/react';
import SEO from '../components/SEO';

const BlogPostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<any>(null);
    const [recentPosts, setRecentPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const query = `*[_type == "post" && slug.current == $slug][0]{
            title,
            mainImage,
            publishedAt,
            body,
            excerpt,
            "author": author->{name, image, bio},
            "categories": categories[]->title,
            seo
        }`;

        const recentQuery = `*[_type == "post" && slug.current != $slug][0..4]{
             title,
             slug,
             mainImage,
             publishedAt
        }`;

        Promise.all([
            sanityClient.fetch(query, { slug: id }),
            sanityClient.fetch(recentQuery, { slug: id })
        ]).then(([postData, recentData]) => {
            if (!postData) {
                // navigate('/blog');
            } else {
                setPost(postData);
                setRecentPosts(recentData);
            }
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });

    }, [id, navigate]);

    if (loading) return <div className="min-h-screen pt-32 text-center">Loading...</div>;

    if (!post) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Link to="/blog" className="text-primary hover:underline">Back to Blogs</Link>
            </div>
        )
    }

    const seoKeywords = post.seo?.keywords ? post.seo.keywords.join(', ') : post.categories?.join(', ');

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">
            <SEO
                title={post.seo?.title || post.title}
                description={post.seo?.description || post.excerpt || "Read this article at National Imaging and Path Labs."}
                keywords={seoKeywords}
                image={post.mainImage ? urlFor(post.mainImage).width(1200).url() : undefined}
            />

            {/* Immersive Hero Section */}
            <div className="relative h-[60vh] max-h-[600px] w-full overflow-hidden bg-slate-900">
                {post.mainImage && (
                    <img
                        src={urlFor(post.mainImage).width(1600).url()}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16 -mt-16 md:-mt-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">

                    {/* Main Content Column */}
                    <div className="lg:w-2/3 flex-shrink-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
                        >
                            {/* Breadcrumb / Back Link */}
                            <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors text-sm font-medium">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Articles
                            </Link>

                            {/* Header Content */}
                            {post.categories && (
                                <div className="text-primary font-bold tracking-wider uppercase mb-4 text-xs">
                                    {post.categories[0]}
                                </div>
                            )}

                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm md:text-base border-b border-slate-100 pb-8 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block font-semibold text-slate-900 leading-none mb-1">{post.author?.name || 'Medical Team'}</span>
                                        <span className="text-xs text-slate-500">Author</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Main Body */}
                            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-primary prose-img:rounded-2xl">
                                {post.body ? <PortableText value={post.body} /> : <p>{post.excerpt}</p>}
                            </div>

                            {/* Share & Tags */}
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex flex-wrap gap-2">
                                        {post.categories?.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider border border-slate-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-slate-500 text-sm font-medium">Share:</span>
                                        <div className="flex gap-2">
                                            <button className="p-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm"><Twitter className="w-4 h-4" /></button>
                                            <button className="p-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-700 hover:text-white transition-all shadow-sm"><Facebook className="w-4 h-4" /></button>
                                            <button className="p-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Linkedin className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sticky Sidebar Column */}
                    <div className="lg:w-1/3 flex-shrink-0">
                        <div className="sticky top-24 space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">

                            {/* Author Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
                            >
                                <h3 className="text-lg font-bold mb-4 text-slate-900 border-b pb-2">About The Author</h3>
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                        <User className="w-full h-full p-3 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{post.author?.name || 'Medical Expert'}</h4>
                                        <p className="text-xs text-primary font-medium uppercase tracking-wide mb-2">Senior Specialist</p>
                                        <p className="text-sm text-slate-500">Dedicated to providing accurate medical information and health insights.</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Recent Posts Widget */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
                            >
                                <h3 className="text-lg font-bold mb-6 text-slate-900 flex items-center justify-between">
                                    Recent Articles
                                    <div className="h-1 flex-1 mx-4 bg-slate-100 rounded-full"></div>
                                </h3>
                                <div className="space-y-6">
                                    {recentPosts.map((recent) => (
                                        <Link
                                            key={recent.slug.current}
                                            to={`/blog/${recent.slug.current}`}
                                            className="group flex gap-4 items-center"
                                        >
                                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                                                {recent.mainImage && (
                                                    <img
                                                        src={urlFor(recent.mainImage).width(200).url()}
                                                        alt={recent.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-slate-700 leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                                    {recent.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(recent.publishedAt).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                    <Link to="/blog" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-slate-600 font-medium hover:bg-primary hover:text-white transition-all text-sm group">
                                        View All Articles
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Newsletter/Promo */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                                <h3 className="text-xl font-bold mb-3 relative z-10">Stay Healthy!</h3>
                                <p className="text-blue-100 text-sm mb-6 relative z-10">
                                    Sign up for our newsletter to get the latest health tips delivered to your inbox.
                                </p>
                                <div className="relative z-10">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:bg-white/20 mb-3"
                                    />
                                    <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;