import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    rating: 5,
    text: 'Excellent service! The staff was professional and the reports were delivered on time. Very impressed with the facility in Dwarka.',
    avatar: '👨',
  },
  {
    name: 'Priya Sharma',
    role: 'Teacher',
    rating: 5,
    text: 'Home collection service was very convenient. The phlebotomist was gentle and professional. Highly recommend!',
    avatar: '👩',
  },
  {
    name: 'Amit Verma',
    role: 'Engineer',
    rating: 5,
    text: 'State-of-the-art equipment and accurate results. The doctors explained everything clearly. Great experience overall.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sneha Gupta',
    role: 'Doctor',
    rating: 5,
    text: 'As a medical professional myself, I appreciate the quality of diagnostic services here. Highly accurate and reliable.',
    avatar: '👩‍⚕️',
  },
  {
    name: 'Vikram Singh',
    role: 'Retired',
    rating: 5,
    text: 'The staff is very caring and understanding. They made the entire process smooth and stress-free for me.',
    avatar: '👴',
  },
];

const ReviewsSlider = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-white relative">
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
            Patient Reviews
          </motion.span>
          <h2 className="text-4xl md:text-5xl mb-4">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experience.
          </p>
        </motion.div>

        <div className="relative px-12">
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted rounded-xl p-8 h-full relative"
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
                    <Quote className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed min-h-[100px]">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: #4267B2;
        }
        .slick-dots li.slick-active button:before {
          color: #4267B2;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSlider;
