import { motion } from 'framer-motion';

const supplyItems = [
  'مواد عزل المنشآت والاسطح والبدرومات وحمامات السباحة وخزانات المياه بمختلف أنواعها',
  'المواد الايبوكسية',
  'رولات الممبرين والفوم الابيض والازرق بمختلف المقاسات والكثافات لعزل الاسطح الصاج والخرسانة',
  'مواد دهانات الحديد من الصدأ',
  'مواد الترميمات الاسمنتية، والايبوكسية',
  'مواد معالجة الخرسانة وعزل البدرومــات',
  'أنظمة العزل الحديث مثل البولي يورثان فوم و البولي يوريا',
  'الاسقف الصاج المعرج والساندوتش بانال وبديل الصاج Upvc',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Supplies = () => {
  return (
    <section id="supplies" className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Large background number */}
      <span className="bg-number">02</span>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="Shipping containers"
                className="w-full h-[400px] md:h-[500px] object-cover image-hover"
              />
              {/* Blue decorative block */}
              <div className="absolute top-0 right-0 w-24 h-full bg-royal-blue/80" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-6xl md:text-7xl font-bold text-royal-blue font-cairo">02</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-cairo font-bold text-primary-red mb-4 section-title"
            >
              التوريدات
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl font-bold text-primary-red mb-8"
            >
              نقوم بتوريــــد
            </motion.h3>

            {/* List */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {supplyItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-dark font-cairo text-lg"
                >
                  <span className="text-primary-red font-bold mt-1">-</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Supplies;
