'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { furniture } from '@/data/furniture'
import { formatPrice } from '@/lib/utils'

const FeaturedFurniture = () => {
  const featuredFurniture = furniture.slice(0, 3)

  return (
    <section id="featured-furniture" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            تشكيلة الأثاث المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
            اكتشف تشكيلتنا المميزة من الأثاث العصري، التي تجمع بين الأناقة والراحة والجودة العالية
          </p>
        </motion.div>

        {/* Furniture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredFurniture.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover-lift overflow-hidden">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Available' 
                        ? 'bg-green-500 text-white' 
                        : item.status === 'Custom Order'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}>
                      {item.status === 'Available' ? 'متوفر' : 
                       item.status === 'Custom Order' ? 'طلب مخصص' : 'غير متوفر'}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-lg">
                      <span className="text-lg font-bold">{formatPrice(item.price)}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-luxury-black" dir="rtl">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-luxury-gold fill-current" />
                      <span className="text-sm text-gray-600">مميز</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{item.style}</span>
                    <span>{item.material}</span>
                    <span>{item.color}</span>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2" dir="rtl">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        dir="rtl"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="luxury" 
                    className="w-full group"
                    asChild
                  >
                    <Link href={`/furniture/${item.id}`}>
                      عرض التفاصيل
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="luxuryOutline" 
            size="lg"
            asChild
          >
            <Link href="/furniture">
              تصفح جميع الأثاث
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedFurniture 