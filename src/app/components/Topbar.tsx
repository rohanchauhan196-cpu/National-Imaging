import { Search, LogIn, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { packages } from '../pages/AllPackagesPage';
import { sanityClient } from '../../sanityClient';

const Topbar = ({ isVisible }: { isVisible: boolean }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [allItems, setAllItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch services and their tests
        const servicesData = await sanityClient.fetch(`*[_type == "service"]{
          title,
          "slug": slug.current,
          tests[]{
            name,
            price
          }
        }`);

        const formattedServices = servicesData
          .filter((service: any) => service.title && service.slug)
          .map((service: any) => ({
            name: service.title,
            link: `/service/${service.slug}`,
            type: 'Service'
          }));

        const formattedTests = servicesData.flatMap((service: any) =>
          (service.tests || [])
            .filter((test: any) => test && test.name)
            .map((test: any) => ({
              name: test.name,
              link: `/service/${service.slug}?test=${encodeURIComponent(test.name)}`,
              type: 'Test'
            }))
        );

        const formattedPackages = packages
          .filter(pkg => pkg && pkg.name)
          .map(pkg => ({ ...pkg, type: 'Package' }));

        setAllItems([...formattedServices, ...formattedTests, ...formattedPackages]);
      } catch (error) {
        console.error("Error fetching search data:", error);
        // Fallback to minimal data if fetch fails
        const formattedPackages = packages.map(pkg => ({ ...pkg, type: 'Package' }));
        setAllItems([...formattedPackages]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = allItems.filter(item =>
        item && item.name && typeof item.name === 'string' && item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (link: string) => {
    navigate(link);
    setShowSuggestions(false);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0].link);
    }
  };
  return (
    <motion.div
      animate={{ y: isVisible ? 0 : -40 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-muted border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">

          {/* Left - Contact Info (Visible on Mobile now) */}
          <div className="flex items-center gap-4 md:gap-6 text-muted-foreground mr-auto bg-slate-50">
            <a href="tel:+919711127333" className="flex items-center gap-1 hover:text-secondary text-xs md:text-sm">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 9711127333</span>
              <span className="sm:hidden">Call Us</span>
            </a>
            <a href="tel:+9192172 44110" className="flex items-center gap-1 hover:text-secondary text-xs md:text-sm">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 9217244110</span>
            </a>
            <a href="mailto:nipathlabs@gmail.com" className="hidden md:flex items-center gap-1 hover:text-secondary">
              <Mail className="w-3.5 h-3.5" />
              <span>nipathlabs@gmail.com</span>
            </a>
          </div>

          {/* Center - Search Bar */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block" ref={searchRef}>
            <div className="relative group">
              <motion.input
                whileFocus={{ width: '320px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                initial={{ width: '240px' }}
                transition={{ duration: 0.3 }}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => { if (query) setShowSuggestions(true); }}
                onKeyDown={handleKeyDown}
                placeholder="Search for tests, packages..."
                className="w-60 pl-10 pr-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary/50 text-gray-600 placeholder:text-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />

              {/* Search Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 w-[320px]"
                  >
                    <ul>
                      {suggestions.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleSuggestionClick(item.link)}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 flex items-center justify-between group"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.type}</p>
                          </div>
                          <Search className="w-3 h-3 text-gray-300 group-hover:text-primary" />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right - Login */}
          <div className="flex items-center ml-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </motion.button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
