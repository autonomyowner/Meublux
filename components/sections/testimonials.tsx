'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jean-Pierre Dubois',
      role: 'CEO, TechCorp',
      company: 'TechCorp Industries',
      content: 'Ikhlas Automobiles a transformé mon expérience d\'achat de véhicule de luxe. Leur expertise et leur service personnalisé sont exceptionnels.',
      rating: 5,
      vehicle: 'Mercedes-Benz S-Class'
    },
    {
      name: 'Marie-Claire Laurent',
      role: 'Directrice Marketing',
      company: 'Luxury Brands',
      content: 'Un service de conciergerie de niveau international. Ils ont trouvé exactement le véhicule que je recherchais en seulement 2 semaines.',
      rating: 5,
      vehicle: 'BMW M8 Competition'
    },
    {
      name: 'Antoine Moreau',
      role: 'Investisseur',
      company: 'Private Equity',
      content: 'La qualité de leurs véhicules et leur transparence dans les transactions m\'ont convaincu. Je recommande vivement leurs services.',
      rating: 5,
      vehicle: 'Porsche 911 GT3 RS'
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
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec Ikhlas Automobiles.
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Vehicle */}
                <div className="mb-6">
                  <span className="text-sm text-luxury-gold font-medium">
                    Véhicule : {testimonial.vehicle}
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
                    <h4 className="font-semibold text-luxury-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
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
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">500+</div>
              <div className="text-sm text-gray-600">Véhicules Vendus</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">15+</div>
              <div className="text-sm text-gray-600">Années d'Expérience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 