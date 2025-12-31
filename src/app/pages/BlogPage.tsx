import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sanityClient, urlFor } from '../../sanityClient';

// Type for Sanity Data
interface BlogPost {
    title: string;
    slug: { current: string };
    mainImage: any;
    publishedAt: string;
    excerpt: string;
    author: string;
    categories: string[];
}

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt,
        "author": author->name,
        "categories": categories[]->title
      }`
        )
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    if (loading) return <div className="text-center py-20">Loading...</div>;

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
                        Health Insights & News
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg max-w-2xl mx-auto"
                    >
                        Stay informed with the latest updates from our medical experts.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.slug.current}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full"
                            >
                                {/* Image */}
                                <Link to={`/blog/${post.slug.current}`} className="block relative h-48 overflow-hidden">
                                    {post.mainImage && (
                                        <img
                                            src={urlFor(post.mainImage).width(800).url()}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}
                                    {post.categories && post.categories[0] && (
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm">
                                            {post.categories[0]}
                                        </div>
                                    )}
                                </Link>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(post.publishedAt).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <Link to={`/blog/${post.slug.current}`} className="block mb-3">
                                        <h2 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                            <User className="w-4 h-4 text-slate-400" />
                                            {post.author || 'Medical Team'}
                                        </div>
                                        <Link
                                            to={`/blog/${post.slug.current}`}
                                            className="text-primary text-sm font-semibold flex items-center gap-1 group/link"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
