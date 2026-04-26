import { motion } from 'framer-motion';

const contentItems = [
  { id: 1, title: 'من نحن' },
  { id: 2, title: 'التوريدات' },
  { id: 3, title: 'العزل المائي' },
  { id: 4, title: 'البولي يوريا' },
  { id: 5, title: 'البيتومين' },
  { id: 6, title: 'العزل الحراري' },
  { id: 7, title: 'الفوم الازرق' },
  { id: 8, title: 'الخرسانة الرغوية' },
  { id: 9, title: 'البولي يورثان فوم' },
  { id: 10, title: 'العزل الكيميائي' },
  { id: 11, title: 'الايبوكسي' },
  { id: 12, title: 'أعمال الأسقف والحوائط المعدنية' },
  { id: 13, title: 'بعض أعمالنا' },
  { id: 14, title: 'تواصل معنا' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const ContentList = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Blue vertical block on right side */}
      <div className="absolute top-0 right-0 w-1/3 h-full blue-block opacity-90" />
      
      {/* Building image on blue block */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          alt="Building"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h2 className="text-5xl md:text-6xl font-cairo font-bold text-primary-red section-title inline-block">
              المحتوى
            </h2>
            <div className="h-1 w-20 bg-primary-red rounded-full mt-3"></div>
          </motion.div>

          {/* List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contentItems.map((item) => (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={() => {
                  const sectionIds = [
                    'about', 'supplies', 'waterproofing', 'polyurea', 'bitumen',
                    'thermal-insulation', 'foam-insulation', 'lightweight-concrete',
                    'polyurethane', 'chemical-insulation', 'epoxy', 'projects',
                    'clients', 'contact'
                  ];
                  if (sectionIds[item.id - 1]) {
                    scrollToSection(sectionIds[item.id - 1]);
                  }
                }}
                className="w-full text-right flex items-center justify-between py-4 px-5 border-b-2 border-royal-blue/20 hover:border-primary-red transition-all duration-300 group cursor-pointer rounded-lg hover:bg-primary-red/5"
              >
                <span className="text-lg md:text-xl font-cairo font-semibold text-white group-hover:text-primary-red transition-colors duration-300">
                  {item.title}
                </span>
                <motion.span 
                  className="text-2xl md:text-3xl font-bold text-royal-blue font-cairo font-mono bg-royal-blue/10 px-3.5 py-1.5 rounded-lg group-hover:bg-primary-red group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {String(item.id).padStart(2, '0')}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentList;
