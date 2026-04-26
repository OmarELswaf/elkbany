import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction background"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(135deg, rgba(46,74,158,0.85) 0%, rgba(46,74,158,0.6) 50%, rgba(215,25,32,0.3) 100%)' 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl font-extrabold text-primary-red drop-shadow-lg">
            القباني
           <br />
           <br />
           
          </h1>
          <div className="flex justify-center gap-2 mt-2">
            <span className="w-4 h-4 rounded-full bg-royal-blue"></span>
            <span className="w-4 h-4 rounded-full bg-royal-blue"></span>
            <span className="w-4 h-4 rounded-full bg-royal-blue"></span>
          </div>
        </motion.div>

        {/* Title */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-white/20"
        >
          <h2 className="text-3xl md:text-5xl font-cairo font-bold text-white mb-4">
            الملف التعريفي للشركة
          </h2>
          <span className="text-5xl md:text-7xl font-extrabold text-white/90">
            2026
          </span>
        </motion.div> */}

        {/* Scroll indicator */}
        <motion.div
      
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
