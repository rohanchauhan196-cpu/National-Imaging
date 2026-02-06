import { ElfsightWidget } from 'react-elfsight-widget';

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading removed as per request to show only widget for whole section */}

        {/* Bas yeh widget — kuch extra styling mat daalna */}
        <div className="w-full max-w-6xl mx-auto">
          <ElfsightWidget
            widgetId="62542977-1cb9-473e-9c14-abbdb4b36442"
            lazy={true}           // optional - better performance
          // modern={true}      // agar naya dashboard use kar rahe ho to uncomment kar dena
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;