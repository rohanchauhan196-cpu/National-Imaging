import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TopPackages from '../components/TopPackages';
import TestimonialsSection from '../components/TestimonialsSection';
import Empanelments from '../components/Empanelments';
import LatestBlogs from '../components/LatestBlogs';
import MobileAppSection from '../components/MobileAppSection';
import GoogleReviews from '../components/GoogleReviews';

import SEO from '../components/SEO';
import { useSanitySEO } from '../hooks/useSanitySEO';

const HomePage = () => {
    const { seo } = useSanitySEO('page', 'home');

    return (
        <div className="font-sans text-slate-900">
            <SEO
                title={seo?.title || "National Imaging & Path Labs | Best Diagnostic Centre in Dwarka"}
                description={seo?.description || "National Imaging & Path Labs offers MRI, CT Scan, Ultrasound, and Blood Tests in Dwarka. Accurate reports, home collection, and affordable prices."}
                keywords={seo?.keywords?.join(', ') || "pathology lab dwarka, mri scan dwarka, ct scan dwarka, blood test home collection, diagnostic centre near me"}
                image={seo?.image}
            />
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <TopPackages />
            <TestimonialsSection />
            <Empanelments />
            <GoogleReviews />
            <LatestBlogs />
            <MobileAppSection />
        </div>
    );
};

export default HomePage;
