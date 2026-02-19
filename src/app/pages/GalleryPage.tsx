import { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { useSanitySEO } from '../hooks/useSanitySEO';

// Import local assets so Vite bundles them properly
import img1 from '../../assets/about1.jpeg';
import img2 from '../../assets/2.jpeg';
import img3 from '../../assets/3.jpeg';
import img4 from '../../assets/4.jpeg';
import img5 from '../../assets/5.jpeg';
import img6 from '../../assets/6.jpeg';
import img7 from '../../assets/7.jpeg';
import img8 from '../../assets/8.jpeg';
import img9 from '../../assets/about2.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GalleryPage = () => {
  const { seo } = useSanitySEO('page', 'gallery');
  const [selected, setSelected] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const open = (idx: number) => {
    setSelected(idx);
    setZoom(1);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setSelected(null);
    setZoom(1);
    document.body.style.overflow = '';
  };

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
    setZoom(1);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
    setZoom(1);
  };

  return (
    <div className="bg-white font-sans text-slate-900">
      <SEO
        title={seo?.title || 'Gallery | National Imaging and Path Labs'}
        description={seo?.description || 'Explore our gallery of facilities and equipment.'}
        image={seo?.image}
      />

      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center bg-primary overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 Mix-blend-overlay"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            A peek into our facilities, team and technology.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-lg overflow-hidden cursor-pointer shadow-sm bg-white">
                <img onClick={() => open(i)} src={src} alt={`Gallery ${i + 1}`} className="w-full h-44 md:h-52 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="max-w-[95%] max-h-[90%] w-full relative">
            <button onClick={close} className="absolute top-4 right-4 text-white bg-white/10 px-3 py-2 rounded-md">Close</button>

            <div className="flex items-center justify-center gap-4">
              <button onClick={prev} className="text-white bg-white/5 px-3 py-2 rounded-md">Prev</button>

              <div className="relative bg-black rounded-md overflow-hidden shadow-2xl">
                <img
                  src={images[selected]}
                  alt={`Selected ${selected + 1}`}
                  style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
                  className="max-w-[90vw] max-h-[80vh] object-contain block"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <button onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.2).toFixed(2)))} className="bg-white/10 text-white px-3 py-2 rounded-md">-</button>
                  <span className="text-white">{Math.round(zoom * 100)}%</span>
                  <button onClick={() => setZoom((z) => Math.min(3, +(z + 0.2).toFixed(2)))} className="bg-white/10 text-white px-3 py-2 rounded-md">+</button>
                </div>
              </div>

              <button onClick={next} className="text-white bg-white/5 px-3 py-2 rounded-md">Next</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;
