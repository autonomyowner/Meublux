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
              Prêt à Découvrir l'Excellence ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une expérience d'achat de véhicule de luxe 
              inégalée et personnalisée.
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
              <h3 className="text-xl font-bold text-white mb-4">Téléphone</h3>
              <p className="text-gray-300 mb-4">Appelez-nous directement</p>
              <a 
                href="tel:+33142869500" 
                className="text-luxury-gold font-semibold text-lg hover:text-luxury-goldLight transition-colors"
              >
                +33 1 42 86 95 00
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300 mb-4">Envoyez-nous un message</p>
              <a 
                href="mailto:contact@ikhlas-automobiles.fr" 
                className="text-luxury-gold font-semibold text-lg hover:text-luxury-goldLight transition-colors"
              >
                contact@ikhlas-automobiles.fr
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Adresse</h3>
              <p className="text-gray-300 mb-4">Visitez notre showroom</p>
              <p className="text-luxury-gold font-semibold text-lg">
                Paris, France
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
              Prendre Rendez-vous
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              className="group"
            >
              Demander un Devis
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
            <span className="text-white font-medium">
              Ouvert du Lundi au Vendredi : 9h00 - 19h00
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA 