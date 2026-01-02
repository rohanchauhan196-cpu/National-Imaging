import { Search, LogIn, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const Topbar = ({ isVisible }: { isVisible: boolean }) => {
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
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <div className="relative group">
              <motion.input
                whileFocus={{ width: '320px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                initial={{ width: '240px' }}
                transition={{ duration: 0.3 }}
                type="text"
                placeholder="Search for tests, packages..."
                className="w-60 pl-10 pr-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary/50 text-gray-600 placeholder:text-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
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
