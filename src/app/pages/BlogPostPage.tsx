import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Facebook, Linkedin, ChevronRight, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../sanityClient';
import { PortableText } from '@portabletext/react';

const BlogPostPage = () => {
    const { id } = useParams(); // 'id' corresponds to 'slug' in our route
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
            "categories": categories[]->title
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

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-sans">
            {/* Reading Progress Bar Removed */}

            {/* Immersive Hero Section */}
            {/* Immersive Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                {post.mainImage && (
                    <img
                        src={urlFor(post.mainImage).width(1200).url()}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="container mx-auto max-w-7xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Articles
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {post.categories && (
                                <div className="text-blue-300 font-semibold tracking-wider uppercase mb-3 text-sm">
                                    {post.categories[0]}
                                </div>
                            )}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight shimmer">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm md:text-base">
                                <div className="flex items-center gap-2">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-white">{post.author?.name || 'Medical Team'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content Column */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
                        >
                            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-primary">
                                {post.body ? <PortableText value={post.body} /> : <p>{post.excerpt}</p>}
                            </div>

                            {/* Share & Tags */}
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex gap-2">
                                        {post.categories?.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-slate-500 text-sm font-medium">Share:</span>
                                        <div className="flex gap-2">
                                            {/* Share Buttons */}
                                            <button className="p-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm"><Twitter className="w-4 h-4" /></button>
                                            <button className="p-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-700 hover:text-white transition-all shadow-sm"><Facebook className="w-4 h-4" /></button>
                                            <button className="p-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Linkedin className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-28 space-y-8">

                            {/* Author Card */}
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold mb-4 text-slate-900 border-b pb-2">About The Author</h3>
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                        {/* Placeholder or Author Image */}
                                        <User className="w-full h-full p-3 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{post.author?.name || 'Medical Expert'}</h4>
                                        <p className="text-xs text-primary font-medium uppercase tracking-wide mb-2">Senior Specialist</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
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
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
                            </div>

                            {/* Newsletter/Promo */}
                            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden">
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
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
