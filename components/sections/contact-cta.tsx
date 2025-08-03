'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              جاهز لتصميم مساحتك المثالية؟
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" dir="rtl">
              اتصل بنا اليوم للحصول على تجربة تصميم أثاث فاخر ومخصص لا مثيل لها
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">الهاتف</h3>
              <p className="text-gray-300 mb-4" dir="rtl">اتصل بنا مباشرة</p>
              <a 
                href="tel:0561009194" 
                className="text-luxury-gold font-semibold text-lg hover:text-luxury-goldLight transition-colors"
              >
                0561 00 91 94
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">البريد الإلكتروني</h3>
              <p className="text-gray-300 mb-4" dir="rtl">أرسل لنا رسالة</p>
              <a 
                href="mailto:walidmessaoudi178@gmail.com" 
                className="text-luxury-gold font-semibold text-lg hover:text-luxury-goldLight transition-colors"
              >
                walidmessaoudi178@gmail.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">العنوان</h3>
              <p className="text-gray-300 mb-4" dir="rtl">زر معرضنا</p>
              <p className="text-luxury-gold font-semibold text-lg">
                الجزائر
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              variant="luxury" 
              size="xl" 
              className="group"
            >
              احجز استشارة مجانية
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              className="group"
            >
              اطلب عرض سعر
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-4 bg-luxury-gold/20 backdrop-blur-sm rounded-full px-8 py-4 border border-luxury-gold/30"
          >
            <Clock className="w-5 h-5 text-luxury-gold" />
            <span className="text-white font-medium" dir="rtl">
              مفتوح من الاثنين إلى الجمعة : 9:00 - 19:00
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA 