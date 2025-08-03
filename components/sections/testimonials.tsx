'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مدير شركة',
      company: 'شركة التطوير العقاري',
      content: 'Meublux حولت تجربتي في تصميم المنزل. خبرتهم والخدمة المخصصة استثنائية حقاً',
      rating: 5,
      project: 'تصميم غرفة المعيشة'
    },
    {
      name: 'فاطمة الزهراء',
      role: 'مصممة داخلية',
      company: 'استوديو التصميم',
      content: 'خدمة احترافية من المستوى العالمي. وجدوا لي التصميم المثالي لمنزلي في أسبوعين فقط',
      rating: 5,
      project: 'مطبخ عصري مفتوح'
    },
    {
      name: 'علي حسن',
      role: 'مستثمر',
      company: 'الاستثمارات الخاصة',
      content: 'جودة أثاثهم وشفافيتهم في المعاملات أقنعتني. أوصي بشدة بخدماتهم',
      rating: 5,
      project: 'تصميم مكتب فاخر'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-black mb-4">
            آراء العملاء
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
            اكتشف ما يقوله عملاؤنا عن تجربتهم مع Meublux
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-luxury-gold" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed" dir="rtl">
                  "{testimonial.content}"
                </p>

                {/* Project */}
                <div className="mb-6">
                  <span className="text-sm text-luxury-gold font-medium" dir="rtl">
                    المشروع : {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <span className="text-luxury-black font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-black" dir="rtl">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600" dir="rtl">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">98%</div>
              <div className="text-sm text-gray-600" dir="rtl">رضا العملاء</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">500+</div>
              <div className="text-sm text-gray-600" dir="rtl">مشروع منجز</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">10+</div>
              <div className="text-sm text-gray-600" dir="rtl">سنوات خبرة</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 