import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <img src={logo} alt="National Imaging and Path Labs" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner for comprehensive diagnostic services in Dwarka, Delhi.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: '#' },
                { icon: <Twitter className="w-5 h-5" />, href: '#' },
                { icon: <Instagram className="w-5 h-5" />, href: '#' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/#services' },
                { name: 'Health Packages', path: '#' },
                { name: 'Blogs', path: '#' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={link.path} className="text-gray-400 hover:text-secondary transition-colors duration-200">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl mb-4">Our Services</h3>
            <ul className="space-y-3">
              {['Pathology', 'Radiology', 'Cardiology', 'Biochemistry', 'Clinical Tests', 'Home Collection'].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={service === 'Radiology' ? '/services/radiology' : service === 'Pathology' ? '/services/pathology' : service === 'Cardiology' ? '/services/cardiology' : '/#services'} className="text-gray-400 hover:text-secondary transition-colors duration-200">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Dwarka Mod<br />
                  New Delhi - 110075
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919711127333" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                  +91 97111 27333
                </a>
                <a href="tel:+919711128333" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                  +91 97111 28333
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:nipathlabs@gmail.com" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                  nipathlabs@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} National Imaging and Path Labs - Dwarka. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-secondary transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-secondary transition-colors duration-200"
              >
                Terms & Conditions
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-secondary transition-colors duration-200"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
