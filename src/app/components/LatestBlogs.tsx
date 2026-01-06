import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { sanityClient, urlFor } from '../../sanityClient';
import { useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any;
  categories: { title: string }[];
  body: any[];
}

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
          title,
          slug,
          publishedAt,
          mainImage,
          "categories": categories[]->{title},
          body
        }`;
        const data = await sanityClient.fetch(query);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="py-20 text-center">Loading blogs...</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md mb-4 text-sm"
          >
            Latest Blogs
          </motion.span>
          <h2 className="text-4xl md:text-5xl mb-4">
            Health <span className="text-primary">Insights & Tips</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles on health, wellness, and medical advancements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border group"
            >
              <div className="bg-muted aspect-video overflow-hidden relative">
                {blog.mainImage && (
                  <img
                    src={urlFor(blog.mainImage).width(800).url()}
                    alt={blog.title}
                    className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-md">
                    {blog.categories?.[0]?.title || 'Health'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl mb-3 font-semibold line-clamp-2">{blog.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {/* Simplified excerpt logic - normally we'd parse Portable Text */}
                  Read more to learn about {blog.title}...
                </p>
                <motion.a
                  href={`/blog/${blog.slug.current}`}
                  whileHover={{ x: 5 }}
                  className="text-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 shadow-sm"
          >
            View All Blogs
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogs;
