import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Large background number */}
      <span className="bg-number">01</span>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565008576549-57569a49329e?w=800&q=80"
                alt="Company flags"
                className="w-full h-[400px] md:h-[500px] object-cover image-hover"
              />
              <div className="absolute top-0 left-0 w-32 h-32 bg-royal-blue -translate-x-16 -translate-y-16 rotate-45" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Section number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-6xl md:text-7xl font-bold text-royal-blue font-cairo">01</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-cairo font-bold text-primary-red mb-8 section-title"
            >
              من نحن
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-dark leading-relaxed font-cairo text-justify"
            >
              شركة القباني هي شركة رائدة في أنظمة العزل المائي والحراري، الشركة تقوم بتنفيذ 
              أعمال العزل المائي والحراري للاسطح الصاج والخرسانة والدهانات الايبوكسية والعزل 
              الكيميائي الخاص بالبدرومات والخزانات ومحطات المياه بكفائة عالية حيث ان 
              الشركة بها فنيين متخصصين في هذا المجال وخبرة اكثر من ١٥ سنة.
            </motion.p>

            {/* Partner companies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 bg-royal-blue text-white p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">الشركة حاصلة على توكيل من شركات</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">1- سيكا مصر</div>
                <div className="text-center">2- شركة كيماويات البناء الحديث</div>
                <div className="text-center">3- شركة كيما فوم</div>
                <div className="text-center">4- شركة ايجبت فوم</div>
                <div className="text-center">5- شركة انسوتك</div>
                <div className="text-center">6- شركة كيو ام سي</div>
                <div className="text-center">7- شركة بيتونيل</div>
                <div className="text-center">8- شركة انسوتك</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
