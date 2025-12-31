import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PathologyServicesPage from './pages/PathologyServicesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services/pathology" element={<PathologyServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
