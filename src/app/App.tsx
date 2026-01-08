import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PathologyServicesPage from './pages/PathologyServicesPage';
import RadiologyServicesPage from './pages/RadiologyServicesPage';
import CardiologyServicesPage from './pages/CardiologyServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';

import HealthPanelWholeBodyPage from './pages/HealthPanelWholeBodyPage';
import AllPackagesPage from './pages/AllPackagesPage';
import PreventiveHealthPanelComprehensivePage from './pages/PreventiveHealthPanelComprehensivePage';
import PreventiveHealthPanelComprehensivePlusPage from './pages/PreventiveHealthPanelComprehensivePlusPage';
import RoutineHealthPanelPage from './pages/RoutineHealthPanelPage';
import FeverProfileBasicPage from './pages/FeverProfileBasicPage';
import FeverProfileAdvancePage from './pages/FeverProfileAdvancePage';
import FeverPanelIPage from './pages/FeverPanelIPage';
import ExtendedIronProfilePage from './pages/ExtendedIronProfilePage';
import BasicIronProfilePage from './pages/BasicIronProfilePage';
import DiabeticProfilePage from './pages/DiabeticProfilePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services/pathology" element={<PathologyServicesPage />} />
          <Route path="services/radiology" element={<RadiologyServicesPage />} />
          <Route path="services/cardiology" element={<CardiologyServicesPage />} />
          <Route path="packages/health-panel-whole-body" element={<HealthPanelWholeBodyPage />} />
          <Route path="packages/preventive-comprehensive" element={<PreventiveHealthPanelComprehensivePage />} />
          <Route path="packages/preventive-comprehensive-plus" element={<PreventiveHealthPanelComprehensivePlusPage />} />
          <Route path="packages/routine-health" element={<RoutineHealthPanelPage />} />
          <Route path="packages/fever-basic" element={<FeverProfileBasicPage />} />
          <Route path="packages/fever-advance" element={<FeverProfileAdvancePage />} />
          <Route path="packages/fever-panel-i" element={<FeverPanelIPage />} />
          <Route path="packages/extended-iron-profile" element={<ExtendedIronProfilePage />} />
          <Route path="packages/basic-iron-profile" element={<BasicIronProfilePage />} />
          <Route path="packages/diabetic-profile" element={<DiabeticProfilePage />} />
          <Route path="all-packages" element={<AllPackagesPage />} />
          <Route path="all-services" element={<ServicesPage />} />
          <Route path="service/:slug" element={<ServiceDetailPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
