import { motion } from 'framer-motion';
import  Water  from '../imgs/Waterproof.png';
import  Waterpr  from '../imgs/Waterproofing.png';


const features = [
  'مقاومة تامة لتسربات المياه والرطوبة',
  'تحمل درجات الحرارة العالية وأشعة الشمس',
  'المباشرة مقاوم للتشققات والتمدد والانكماش',
  'عمر افتراضي طويل مع أقل احتياج للصيانة',
  'مناسب للأسطح الخرسانية وأسقف الصاج المضلع',
];

const usages = [
  'أسقف المصانع والهناجر الصاج',
  'الأسطح الخرسانية المكشوفة',
  'الحمامـــــات والمطابـــــخ',
  'الخزانات الأرضيـــة والعلويـــة',
  'البدرومـــات والأســـاسات',
];

const membraneTypes = [
  'ممبرين محبب (Mineral Finish)',
  'ممبرين عادي (Smooth Finish)',
  'سمكات مختلفة حسب طبيعة المشروع',
  'نلتزم بتقديم حلول عزل متكاملة تضمن حماية المنشآت من المياه والرطوبة وتطبيل العمر الافتراضي',
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

const Waterproofing = () => {
  return (
    <section id="waterproofing" className="paper-texture py-20 md:py-32 relative overflow-hidden">
      {/* Large background number */}
      <span className="bg-number">03</span>

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
            العزل المائي
          </h2>
          <p className="text-lg text-dark/80 font-cairo mt-8 max-w-3xl mx-auto">
            العزل المائي برولات الممبرين (Bituminous Membrane)<br />
            نقدم خدمات العزل المائي باستخدام رولات الممبرين البيتومينيــة المسلحة عالية الجودة، 
            والمصممة خصيصاً لتحمل أقسى الظروف المناخيــة
          </p>
        </motion.div>

        {/* Main content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg font-cairo font-semibold text-dark mb-16 max-w-4xl mx-auto"
        >
          يتم تنفيذ العزل طبقاً للمواصفات الفنية القياسية وباستخدام اللحام الحراري (الباشبوري) 
          لضمان أعلى درجات الالتصاق والكفاءة
        </motion.p>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Image and Usages */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl mb-8">
              <img
                src={Water}
                alt="Waterproofing work"
                className="w-full h-[300px] image-hover"
              />
            </div>

            <h3 className="text-2xl font-bold text-royal-blue mb-4 font-cairo">مجالات الاستخدام</h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {usages.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-2 text-dark font-cairo"
                >
                  <span className="text-primary-red font-bold">-</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right side - Features and Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-royal-blue mb-4 font-cairo">مميزات نظام الممبرين</h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mb-8"
            >
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-2 text-dark font-cairo text-sm leading-relaxed"
                >
                  <span className="text-primary-red font-bold">-</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={Waterpr}
                alt="Waterproofing application"
                className="w-full h-[250px] object-cover image-hover"
              />
            </div>
          </motion.div>
        </div>

        {/* Membrane Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-royal-blue mb-6 font-cairo text-center">أنواع الممبرين المستخدمة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {membraneTypes.slice(0, 2).map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  
                  <span className="font-bold text-dark font-cairo">- {item}</span>
                </motion.div>
              ))}

              
            </motion.div>
 
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {membraneTypes.slice(2).map((item, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-dark font-cairo text-sm leading-relaxed"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
    
  );
};

export default Waterproofing;
