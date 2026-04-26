import { motion } from 'framer-motion';

const importance = [
  'ترشيد استهلاك الكهرباء أثناء التدفئة والتبريد والتدفئة بنسبة تصل إلى 40%',
  'تقليل سعة أجهزة التكييف والتسخين وبالتالي تقليل تكاليف شرائها',
  'حماية العناصر الإنشائية للمبنى والثابتات من تغيير درجات الحرارة',
  'رفع مستوي الراحة لمستخدمي المبني',
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

const ThermalInsulationXbS = () => {
  return (
    <section id="thermal-insulation" className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Large background number */}
      <span className="bg-number">06</span>

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
            العزل الحراري
          </h2>
          <p className="text-lg text-dark/80 font-cairo mt-6">
            الفوم الحراري XbS
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
          الفوم الحراري (بوليسترين) XbS هو مواد لها خواص تساعد في الحد من تسرب الحرارة من خارجة الى داخلة من داخلها الى خارجة شتاء وصيفا ومستخدم في الحماية الخارجية والداخلية للاسطح الخاصة والجماليونات
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
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80"
            alt="Thermal insulation XbS"
            className="w-full h-[350px] md:h-[450px] object-cover image-hover"
          />
          {/* Blue decorative strip */}
          <div className="absolute top-0 right-0 w-20 h-full bg-royal-blue/70" />
        </motion.div>

        {/* Importance section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-primary-red mb-8 font-cairo text-center">أهمية العزل الحراري</h3>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {importance.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 text-dark font-cairo text-lg"
              >
                <span className="text-primary-red font-bold text-2xl leading-none">-</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Bottom image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1504328345881-18bdc64ae4e3?w=1200&q=80"
            alt="Thermal insulation installation"
            className="w-full h-[300px] object-cover image-hover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-royal-blue/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ThermalInsulationXbS;
