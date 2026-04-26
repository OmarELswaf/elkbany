import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="paper-texture relative overflow-hidden">
      {/* Top section with logo */}
      <div className="py-20 md:py-32">
        <div className="container-custom relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-7xl md:text-8xl font-extrabold text-primary-red">
              القباني
            </h2>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-5 h-5 rounded-full bg-royal-blue"></span>
              <span className="w-5 h-5 rounded-full bg-royal-blue"></span>
              <span className="w-5 h-5 rounded-full bg-royal-blue"></span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blue contact section */}
      <div className="bg-royal-blue py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-2">تواصل</h3>
            <h3 className="text-4xl md:text-5xl font-cairo font-bold text-white">معنا</h3>
          </motion.div>

          {/* QR Code placeholder and contact info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white p-4 rounded-lg">
                <div className="w-40 h-40 bg-dark/10 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="10" y="10" width="25" height="25" fill="#222" />
                    <rect x="65" y="10" width="25" height="25" fill="#222" />
                    <rect x="10" y="65" width="25" height="25" fill="#222" />
                    <rect x="40" y="10" width="5" height="5" fill="#222" />
                    <rect x="50" y="10" width="5" height="5" fill="#222" />
                    <rect x="40" y="20" width="5" height="5" fill="#222" />
                    <rect x="45" y="25" width="5" height="5" fill="#222" />
                    <rect x="55" y="20" width="5" height="5" fill="#222" />
                    <rect x="10" y="40" width="5" height="5" fill="#222" />
                    <rect x="20" y="40" width="5" height="5" fill="#222" />
                    <rect x="30" y="45" width="5" height="5" fill="#222" />
                    <rect x="40" y="40" width="20" height="20" fill="#222" />
                    <rect x="65" y="40" width="5" height="5" fill="#222" />
                    <rect x="75" y="45" width="5" height="5" fill="#222" />
                    <rect x="85" y="40" width="5" height="5" fill="#222" />
                    <rect x="40" y="65" width="5" height="5" fill="#222" />
                    <rect x="50" y="70" width="5" height="5" fill="#222" />
                    <rect x="60" y="65" width="5" height="5" fill="#222" />
                    <rect x="70" y="70" width="5" height="5" fill="#222" />
                    <rect x="80" y="75" width="5" height="5" fill="#222" />
                    <rect x="65" y="80" width="10" height="10" fill="#222" />
                    <rect x="80" y="65" width="5" height="5" fill="#222" />
                    <rect x="85" y="85" width="5" height="5" fill="#222" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/70 text-sm">البريد الإلكتروني</p>
                  <p className="text-lg font-semibold">abany3939@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/70 text-sm">العنوان</p>
                  <p className="text-lg font-semibold">العاشر المنطقة الصناعية الأولى</p>
                  <p className="text-sm text-white/80">الإمتداد الشمالي ق ١٨/٢ بلوك ١٠٧</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/70 text-sm">الهاتف</p>
                  <p className="text-lg font-semibold" dir="ltr">0100 90 35 603</p>
                  <p className="text-lg font-semibold" dir="ltr">011 50 68 95 15</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark py-6">
        <div className="container-custom">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/60 text-sm font-cairo"
          >
            جميع الحقوق محفوظة © شركة القباني 2026
          </motion.p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
