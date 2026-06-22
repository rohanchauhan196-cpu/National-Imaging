import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TopPackages from '../components/TopPackages';
import TestimonialsSection from '../components/TestimonialsSection';
import Empanelments from '../components/Empanelments';
import LatestBlogs from '../components/LatestBlogs';
import MobileAppSection from '../components/MobileAppSection';

import SEO from '../components/SEO';
import { useSanitySEO } from '../hooks/useSanitySEO';

const HomePage = () => {
    const { seo } = useSanitySEO('page', 'home');

    return (
        <div className="font-sans text-slate-900">
            <SEO
                title={seo?.title || "Advanced Diagnostic Centre in Delhi NCR | MRI, CT Scan, PET CT & Pathology"}
                description={seo?.description || "Book MRI, CT Scan, PET CT, Ultrasound, Pathology, ECG, Echo, TMT and advanced diagnostic tests with expert doctors and accurate reports at our diagnostic centre in Delhi NCR."}
                keywords={seo?.keywords?.join(', ') || "diagnostic centre, MRI scan, CT scan, PET CT scan, pathology lab, ultrasound, ECG test, Echo test, TMT test, health checkup, diagnostic centre in Delhi NCR"}
                image={seo?.image}
                ogTitle={seo?.title ? undefined : "Advanced Diagnostic Centre in Delhi NCR | Accurate Diagnostics & Healthcare"}
                ogDescription={seo?.description ? undefined : "Advanced diagnostic services including MRI, CT Scan, PET CT, Pathology, Cardiology and health checkups with accurate reports and expert care."}
                disableTitleTemplate={!seo?.title}
            />
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <TopPackages />
            <TestimonialsSection />
            <Empanelments />
            <LatestBlogs />
            <MobileAppSection />
        </div>
    );
};

export default HomePage;
