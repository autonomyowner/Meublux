'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Home, Users, Clock, Star, Zap, Palette, Truck } from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: 'تصميم الأثاث المخصص',
      description: 'تصميم أثاث مخصص يناسب مساحتك وأذواقك الشخصية مع أحدث التقنيات',
      features: ['تصميم مخصص', 'مقاسات دقيقة', 'خيارات متعددة']
    },
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'ضمان شامل على جميع منتجاتنا مع خدمة ما بعد البيع المميزة',
      features: ['ضمان 3 سنوات', 'خدمة الصيانة', 'قطع الغيار الأصلية']
    },
    {
      icon: Users,
      title: 'استشارة مجانية',
      description: 'استشارة مجانية من خبراء التصميم الداخلي لمساعدتك في اختيار الأثاث المناسب',
      features: ['استشارة مجانية', 'زيارة منزلية', 'تصميم ثلاثي الأبعاد']
    },
    {
      icon: Clock,
      title: 'تركيب وتوصيل',
      description: 'خدمة تركيب وتوصيل مجانية مع ضمان التركيب الصحيح',
      features: ['توصيل مجاني', 'تركيب احترافي', 'ضمان التركيب']
    },
    {
      icon: Star,
      title: 'التصميم الداخلي',
      description: 'خدمة التصميم الداخلي الشاملة لتجميل منزلك بأحدث التصاميم',
      features: ['تصميم كامل', 'اختيار الألوان', 'تنسيق الإضاءة']
    },
    {
      icon: Truck,
      title: 'خدمة سريعة',
      description: 'توصيل سريع وآمن لجميع أنحاء المغرب مع تتبع الشحنة',
      features: ['توصيل سريع', 'تتبع الشحنة', 'خدمة 24/7']
    }
  ]

  return (
    <section className="py-20 bg-white">
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
            خدماتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
            مجموعة شاملة من الخدمات المميزة لتلبية احتياجاتكم في مجال الأثاث والتصميم الداخلي
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100">
                <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-luxury-black" />
                </div>
                
                <h3 className="text-xl font-bold text-luxury-black mb-4" dir="rtl">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6" dir="rtl">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600" dir="rtl">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview 