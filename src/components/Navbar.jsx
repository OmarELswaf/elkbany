import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'about', label: 'من نحن' },
  { id: 'supplies', label: 'التوريدات' },
  { id: 'waterproofing', label: 'العزل المائي' },
  { id: 'polyurea', label: 'البولي يوريا' },
  { id: 'bitumen', label: 'البيتومين' },
  { id: 'thermal-insulation', label: 'العزل الحراري' },
  { id: 'foam-insulation', label: 'الفوم العازل' },
  { id: 'lightweight-concrete', label: 'الخرسانة اللدغة' },
  { id: 'polyurethane', label: 'البولي يوريثان' },
  { id: 'chemical-insulation', label: 'العزل الكيميائي' },
  { id: 'epoxy', label: 'الإيبوكسي' },
  { id: 'projects', label: 'أعمالنا' },
  { id: 'clients', label: 'عملاؤنا' },
  { id: 'contact', label: 'تواصل معنا' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-4' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-1.5 cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <span className={`text-3xl md:text-4xl font-cairo font-extrabold transition-all duration-300 ${
              isScrolled ? 'text-primary-red' : 'text-primary-red'
            }`}>
              القباني
            </span>
            <motion.span 
              className="text-royal-blue text-xl font-bold"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ●
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className={`relative px-3.5 py-2.5 font-cairo font-semibold text-sm transition-all duration-300 rounded-lg group ${
                  isScrolled 
                    ? 'text-dark/80 hover:text-primary-red hover:bg-primary-red/5' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                } ${activeSection === item.id ? (isScrolled ? 'text-primary-red bg-primary-red/8' : 'text-white bg-white/15') : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-1 right-0 h-1 rounded-full bg-primary-red"
                    initial={{ width: 0 }}
                    animate={{ width: 'calc(100% - 28px)' }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 400, damping: 10 }}
                  />
                )}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-primary-red/0 group-hover:bg-primary-red/5 -z-10"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-dark hover:bg-primary-red/10 text-dark' 
                : 'text-white hover:bg-white/15'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pb-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, type: 'spring', stiffness: 400, damping: 10 }}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-right py-3.5 px-4 text-lg font-cairo font-semibold rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-white bg-primary-red shadow-lg shadow-primary-red/30' 
                      : 'text-dark hover:text-primary-red hover:bg-primary-red/8'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
