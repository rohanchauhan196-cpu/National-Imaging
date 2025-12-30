import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

/* ✅ PROPS TYPE */
type HeaderProps = {
  topOffset: number;
};

const Header = ({ topOffset }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    ['Full Body Checkup', 'Cardiac Health Package', 'Diabetes Screening'],
    ['Thyroid Profile', 'Liver Function Test', 'Kidney Function Test'],
    ['Vitamin Profile', "Women's Health", "Men's Health"],
  ];

  const blogs = [
    { title: 'Latest News', path: '/news' },
    { title: 'Health Blogs', path: '/blogs' },
  ];

  return (
    <>
      <motion.header
        /* ✅ SMOOTH TOP SHIFT */
        animate={{ top: topOffset }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed left-0 right-0 z-40 border-b border-border bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="National Imaging and Path Labs"
                  className="h-14 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/#services">Services</NavLink>

              {/* Packages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('packages')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-primary cursor-pointer">
                  Packages <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'packages' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-lg shadow-xl border p-6"
                    >
                      <div className="grid grid-cols-3 gap-4">
                        {packages.map((col, i) => (
                          <div key={i} className="space-y-2">
                            {col.map((pkg, j) => (
                              <motion.a
                                key={j}
                                href="#"
                                whileHover={{ x: 5 }}
                                className="block px-3 py-2 text-sm hover:text-primary hover:bg-muted rounded-md"
                              >
                                {pkg}
                              </motion.a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blogs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('blogs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-primary cursor-pointer">
                  Blogs <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'blogs' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl border p-2"
                    >
                      {blogs.map((blog, i) => (
                        <motion.a
                          key={i}
                          href={blog.path}
                          whileHover={{ x: 5 }}
                          className="block px-3 py-2 text-sm hover:text-primary hover:bg-muted rounded-md"
                        >
                          {blog.title}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/#contact">Contact</NavLink>
            </nav>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-secondary text-primary-foreground px-6 py-2.5 rounded-md cursor-pointer"
            >
              Book Appointment
            </motion.button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-30 lg:hidden bg-white"
            style={{ top: topOffset + 80 }}
          >
            <nav className="p-6 space-y-4">
              <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </MobileNavLink>
              <MobileNavLink to="/#services" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </MobileNavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

/* ----------------- helpers ---------------- */

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to}>
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="hover:text-primary block cursor-pointer"
    >
      {children}
    </motion.span>
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-4 py-2 rounded-md hover:bg-muted"
  >
    {children}
  </Link>
);
