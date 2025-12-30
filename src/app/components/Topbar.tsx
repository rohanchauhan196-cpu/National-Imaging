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
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-1 hover:text-primary text-xs md:text-sm">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 9953301012, +91 9217244110</span>
              <span className="sm:hidden">Call Us</span>
            </a>
            <a href="mailto:info@nationalimaging.com" className="hidden md:flex items-center gap-1 hover:text-primary">
              <Mail className="w-3.5 h-3.5" />
              <span>info@molecularit.com</span>
            </a>
          </div>

          {/* Center - Search Bar */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <div className="relative">
              {/* Desktop Input */}
              <input
                type="text"
                placeholder="Search tests..."
                className="hidden md:block w-64 px-3 py-1 pr-8 bg-white border rounded-md text-sm focus:ring-2 focus:ring-primary/20"
              />
              <Search className="w-4 h-4 text-muted-foreground md:absolute md:right-2.5 md:top-1/2 md:-translate-y-1/2 cursor-pointer" />
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
