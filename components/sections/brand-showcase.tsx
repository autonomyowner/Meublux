'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BrandShowcase = () => {
  const categories = [
    { name: 'غرف المعيشة', logo: 'LR', description: 'أثاث أنيق ومريح' },
    { name: 'المطابخ', logo: 'KT', description: 'تصاميم عصرية' },
    { name: 'غرف النوم', logo: 'BR', description: 'راحة واسترخاء' },
    { name: 'المكاتب', logo: 'OF', description: 'عملية وأناقة' },
    { name: 'غرف الطعام', logo: 'DR', description: 'تجمعات عائلية' },
    { name: 'الحمامات', logo: 'BT', description: 'فخامة ورفاهية' },
    { name: 'التصميم الداخلي', logo: 'ID', description: 'إبداع وتفرد' },
    { name: 'الإضاءة', logo: 'LT', description: 'إضاءة احترافية' },
  ]

  return (
    <section className="py-20 bg-luxury-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            فئات الأثاث والتصميم
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" dir="rtl">
            نقدم تشكيلة شاملة من الأثاث والتصميم الداخلي لجميع أجزاء منزلك، 
            مع ضمان الجودة والأناقة في كل تفصيل
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift border border-white/20">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-luxury-black font-bold text-sm">
                    {category.logo}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2" dir="rtl">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-sm" dir="rtl">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-luxury-gold/20 backdrop-blur-sm rounded-full px-8 py-4 border border-luxury-gold/30">
            <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
            <span className="text-white font-medium" dir="rtl">
              جودة معتمدة وضمان شامل
            </span>
            <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandShowcase 