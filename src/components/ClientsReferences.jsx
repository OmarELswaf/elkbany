import { motion } from 'framer-motion';

const clients = [
  {
    name: 'جمعية التمريض',
    category: 'صحية',
  },
  {
    name: 'الدائرة الناخبة',
    category: 'حكومية',
  },
  {
    name: 'محطة الكهرباء',
    category: 'طاقة',
  },
  {
    name: 'المستشفى المركزي',
    category: 'طبية',
  },
  {
    name: 'تيبا روز',
    category: 'فنادق',
  },
  {
    name: 'مدارس حول العالم',
    category: 'تعليمية',
  },
  {
    name: 'IL BOSCO CITY',
    category: 'عقارات',
  },
  {
    name: 'SODK',
    category: 'صناعية',
  },
  {
    name: 'CITY EDGE',
    category: 'تطوير عقاري',
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const ClientsReferences = () => {
  return (
    <section id="clients" className="paper-texture py-20 md:py-32 relative overflow-hidden bg-light-gray">
      {/* Large background number */}
      <span className="bg-number">13</span>

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
            عملاؤنا
          </h2>
          <p className="text-lg text-dark/80 font-cairo mt-6">
            بعض الأعمال التي تشرفنا بها
          </p>
        </motion.div>

        {/* Projects description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-lg font-cairo text-dark mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          <p>
            براء ماسيرو شركة حسن علام - خزانات الصرف الصحي بشركة مياه السويس - موقع الوقاف التجاري بمدينة نصر - الاسكان الاجتماعي بحي الشباب مدينة العبور - هيئة الأبنية التعليمية بمحافظات القليوبية - البدروم الخاص بمبنى بنك مصر فرع العجوزة - تنفيذ أعمال العزل بالمنطقة الصناعية بالإسماعيلية تحت إشراف وزارة الصناعة - أعمال عزل الأسطح والهياكل بالمنطقة الصناعية - تنفيذ أعمال العزل والبناء والتمويل لمحطات ميه بحر القس - تنفيذ أعمال العزل بالسطح الصاج والحراري بالمساكن الاجتماعي في مدينة العبور الجديدة عدد 75 عمارة - تنفيذ أعمال الإيبوكسي بالبطاقة المغطاة بالعاصمة الإدارية الجديدة - تنفيذ 7 مصانع أثاث بمحافظات دمياط بدهانات عزل مائي وحراري للسطح الصاج والتجهيزات - تنفيذ عزل لعدد 95 مصنع بالمناطق الصناعية في جمعة وسويسد ودمياط الجديدة - العاشر من رمضان والعبور وبرج العرب وواحة الطرزون
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center border-b-4 border-primary-red"
            >
              <h3 className="text-lg font-bold text-royal-blue font-cairo mb-2">
                {client.name}
              </h3>
              <p className="text-dark/60 font-cairo text-sm">
                {client.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-primary-red font-cairo mb-10">
            شركاؤنا المعتمدون
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'بنك مصر',
              'الشركة الفلاحية',
              'SIKA',
              'ICI Paints',
              'Hassan Allam',
              'City Developments',
              'Ghouls Schools',
              'Arab African Bank',
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center min-h-[150px] hover:shadow-lg transition-shadow"
              >
                <p className="text-dark font-cairo text-center font-semibold">
                  {partner}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-royal-blue text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold font-cairo mb-4">هل تريد أن تكون جزءاً من قائمة عملائنا الموثوقين؟</h3>
          <p className="text-lg font-cairo mb-6">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-red hover:bg-primary-red/90 text-white font-bold py-3 px-8 rounded-lg transition-colors font-cairo"
          >
            تواصل معنا الآن
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsReferences;
