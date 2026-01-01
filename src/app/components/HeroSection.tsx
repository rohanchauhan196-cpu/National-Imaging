import { motion } from 'framer-motion';
import { Calendar, Clock, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: ["Your Health,", "Our Priority"],
    subtitle: "Advanced diagnostic imaging and pathology services with cutting-edge technology and expert care in the heart of Dwarka, Delhi.",
    badge: "📍 Now in Dwarka, Delhi",
  },
  {
    title: ["Accurate Diagnostics,", "Faster Results"],
    subtitle: "State-of-the-art MRI, CT Scan, Ultrasound, and Pathology labs delivering precise reports on the same day.",
    badge: "🚀 Quick Reports Available",
  },
  {
    title: ["Trusted by Thousands,", "Caring for You"],
    subtitle: "Over 50,000 happy patients and NABL certified excellence in healthcare diagnostics.",
    badge: "🏆 NABL Certified Lab",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const current = slides[currentSlide];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="https://www.pexels.com/download/video/6235189/"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/videos/7088469/pexels-photo-7088469.jpeg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 text-white/80 hover:text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 text-white/80 hover:text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white w-8 md:w-10' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl text-left mt-50">
          {/* Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 md:mb-8"
          >
            <span className="bg-white/20 backdrop-blur-md text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium shadow-xl">
              {current.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              {current.title[0]}
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl" style={{ color: '#ed3237' }}>
              {current.title[1]}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl drop-shadow-lg"
          >
            {current.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 md:gap-6 mb-12 md:mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl hover:bg-secondary/90 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-md text-white border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/30 transition-all duration-300"
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 md:gap-8 max-w-xl"
          >
            <StatItem icon={<Award className="w-8 h-8 md:w-10 md:h-10" />} value="NABL" label="Certified" />
            <StatItem icon={<Users className="w-8 h-8 md:w-10 md:h-10" />} value="50k+" label="Patients Served" />
            <StatItem icon={<Clock className="w-8 h-8 md:w-10 md:h-10" />} value="24/7" label="Support" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.05 }}
    className="text-center text-white"
  >
    <div className="mb-2 md:mb-3 flex justify-center text-secondary-300 drop-shadow-lg">{icon}</div>
    <p className="text-2xl md:text-3xl font-bold drop-shadow-lg">{value}</p>
    <p className="text-sm md:text-base opacity-90">{label}</p>
  </motion.div>
);

export default HeroSection;