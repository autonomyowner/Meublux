'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BrandShowcase = () => {
  const brands = [
    { name: 'Mercedes-Benz', logo: 'MB' },
    { name: 'BMW', logo: 'BMW' },
    { name: 'Audi', logo: 'AUDI' },
    { name: 'Porsche', logo: 'PORSCHE' },
    { name: 'Bentley', logo: 'BENTLEY' },
    { name: 'Range Rover', logo: 'RANGE ROVER' },
    { name: 'Ferrari', logo: 'FERRARI' },
    { name: 'Lamborghini', logo: 'LAMBORGHINI' },
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
            Nos Marques Partenaires
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous représentons les plus prestigieuses marques automobiles du monde, 
            garantissant une qualité et une excellence reconnues internationalement.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift border border-white/20">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-luxury-black font-bold text-sm">
                    {brand.logo}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {brand.name}
                </h3>
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
            <span className="text-white font-medium">
              Partenaires officiels certifiés
            </span>
            <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandShowcase 