import { motion } from 'framer-motion';

const advantages = [
  'عزل مائي كامل بدون فواصل',
  'سرعة جفاف فائقة',
  'مرونة عالية وقدرة على مقاومة التشققات',
  'مقاومة ممتازة للمواد الكيميائية والاحتكاك',
  'تتحمل درجات الحرارة العالية والمنخفضة',
];

const usages = [
  'أسطح المصانع والهناجر',
  'الخزانات وحمامات السباحة',
  'البدرومات والأساسات',
  'الهياكل الخرسانية والمعدنية',
  'يتم التنفيذ باستخدام معدات رش متخصصة وطبقاً للمواصفات الفنية لضمان أعلى كفاءة عزل وأطول عمر افتراضي',
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

const Polyurea = () => {
  return (
    <section id="polyurea" className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Large background number */}
      <span className="bg-number">04</span>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-cairo font-bold text-primary-red mb-4 section-title inline-block">
            البولي يوريا
          </h2>
          <p className="text-lg text-royal-blue font-cairo font-semibold mt-6">
            العزل المائي باستخدام البولي يوريا
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Polyurea application"
                className="w-full h-[350px] md:h-[450px] object-cover image-hover"
              />
              {/* Blue block decoration */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-royal-blue/80" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-dark font-cairo text-lg leading-relaxed mb-8 text-justify">
              تنفيذ أعمال العزل المائي باستخدام (Polyurea) البولي يوريا وأقوى أنظمة العزل 
              المائي، وتتميز بسرعة الجفاف ومقاومة عالية للمياه والمواد الكيميائية والعوامل 
              الجوية، مما يجعلها الحل الأمثل للمشروعات الصناعية ذات المتطلبات العالية
            </p>

            {/* Advantages */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-royal-blue mb-4 font-cairo">مميزات البولي يوريا</h3>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {advantages.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-dark font-cairo"
                  >
                    <span className="text-primary-red font-bold">-</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Usages */}
            <div>
              <h3 className="text-2xl font-bold text-royal-blue mb-4 font-cairo">مجالات الاستخدام</h3>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {usages.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-dark font-cairo text-sm leading-relaxed"
                  >
                    <span className="text-primary-red font-bold">-</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 relative overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Polyurea finished surface"
            className="w-full h-[300px] object-cover image-hover"
          />
          <div className="absolute top-0 right-0 w-24 h-full bg-royal-blue/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Polyurea;
