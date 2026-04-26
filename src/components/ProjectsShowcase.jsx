import { motion } from 'framer-motion';

const projects = [
  {
    title: 'مستشفى الدكتور مصطفى محمود',
    details: '5000 متر مربع - عزل حراري ومائي',
  },
  {
    title: 'مبنى إداري بمحافظة البحر الأحمر',
    details: 'معايير جودة عالمية',
  },
  {
    title: 'مبنى البنك الأفريقي بمحافظة دمياط',
    details: 'حلول عزل متكاملة',
  },
  {
    title: 'المستشفى العسكري بمحافظة دمياط',
    details: 'تطبيق معايير فنية صارمة',
  },
  {
    title: 'مبنى الطاقة النووية بمحافظة الغربية',
    details: 'حماية دهانية متقدمة',
  },
  {
    title: 'عقود جاهزة لعقود الدولة والشركات',
    details: 'خبرة في تنفيذ مشاريع ضخمة',
  },
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

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Large background number */}
      <span className="bg-number">12</span>

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
            أعمالنا المتميزة
          </h2>
          <p className="text-lg text-dark/80 font-cairo mt-6">
            نخبة من أبرز المشاريع التي تشرفنا بتنفيذها
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-primary-red"
            >
              <h3 className="text-xl font-bold text-royal-blue font-cairo mb-3">
                {project.title}
              </h3>
              <p className="text-dark font-cairo text-sm leading-relaxed">
                {project.details}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-royal-blue text-white rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold font-cairo mb-4">الخبرة والكفاءة</h3>
          <p className="text-lg font-cairo leading-relaxed mb-6">
            تم العقاد والتنفيذ من أكثر من 150 عقد عمل وتنفيذ أعمال العزل بمساحات تجاوزت 30 ألف متر مربع لجميع المحافظات على مستوى الجمهورية
          </p>
          <div className="h-1 w-24 bg-primary-red mx-auto"></div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary-red font-cairo mb-2">150+</h4>
            <p className="text-dark font-cairo text-lg">عقد تنفيذي</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary-red font-cairo mb-2">30,000+</h4>
            <p className="text-dark font-cairo text-lg">متر مربع منفذ</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary-red font-cairo mb-2">29</h4>
            <p className="text-dark font-cairo text-lg">محافظة مصرية</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
