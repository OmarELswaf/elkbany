import { motion } from 'framer-motion';

const usages = [
  'عزل الخزانات والحمامات',
  'عزل الخزانات الأرضية والعلوية',
  'عزل البدرومات',
  'عزل الأساسات والبسطح الخرسانية',
  'يتم التنفيذ طبقاً للمواصفات الفنية وبما يتناسب مع طبيعة كل مشروع لضمان أعلى كفاءة وأطول عمر افتراضي للعزل',
];

const features = [
  'عزل حراري ممتاز: يقلل فقدان الحرارة وفقدار الحرارة من اثناء التبريد والتدفئة',
  'مقاومة عالية وموائمة للمواصفات الفنية للحرارة والرطوبة المستمرة',
  'يتم التنفيذ بطرق عزل مائي وحراري بما يتناسب مع طبيعة المشروع',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ChemicalInsulation = () => {
  return (
    <section id="chemical-insulation" className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Large background number */}
      <span className="bg-number">10</span>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-cairo font-bold text-primary-red mb-4 section-title inline-block">
            العزل الكيميائي
          </h2>
          <p className="text-lg text-dark/80 font-cairo mt-6">
            CMB سيكا
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-lg font-cairo text-dark mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          تنفيذ أعمال العزل المائي باستخدام مواد العزل الاسمنتي المعدّل عالية الجودة والتي توفر حماية فعالة ضد تسربات المياه والرطوبة وتمتاز بقوة الالتصاق بالأسطح الخرسانية ومقاومتها للضغط والمياه المستمرة
        </motion.p>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-lg shadow-2xl mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
            alt="Chemical insulation CMB"
            className="w-full h-[350px] md:h-[450px] object-cover image-hover"
          />
          {/* Blue decorative strip */}
          <div className="absolute top-0 right-0 w-20 h-full bg-royal-blue/70" />
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Usages */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-royal-blue mb-6 font-cairo">مجالات الاستخدام</h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
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
          </motion.div>

          {/* Right column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-royal-blue mb-6 font-cairo">الخصائص</h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((item, index) => (
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
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
            alt="Chemical insulation application"
            className="w-full h-[300px] object-cover image-hover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-royal-blue/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ChemicalInsulation;
