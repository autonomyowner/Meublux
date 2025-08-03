'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Clock, Shield, Users, Star, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Excellence Reconnue',
      description: 'Plus de 15 ans d\'expérience dans le secteur des véhicules de luxe avec une réputation d\'excellence.',
      stat: '15+ ans'
    },
    {
      icon: Users,
      title: 'Service Personnalisé',
      description: 'Chaque client bénéficie d\'un accompagnement sur mesure avec un conseiller dédié.',
      stat: '100%'
    },
    {
      icon: Shield,
      title: 'Garantie Premium',
      description: 'Protection complète de votre investissement avec nos garanties étendues et assurances.',
      stat: '100%'
    },
    {
      icon: Star,
      title: 'Véhicules d\'Exception',
      description: 'Sélection rigoureuse de véhicules rares et exclusifs répondant aux plus hauts standards.',
      stat: '500+'
    },
    {
      icon: Clock,
      title: 'Disponibilité 24/7',
      description: 'Service client disponible en permanence pour répondre à vos besoins urgents.',
      stat: '24/7'
    },
    {
      icon: Zap,
      title: 'Innovation Technologique',
      description: 'Utilisation des dernières technologies pour une expérience d\'achat moderne et efficace.',
      stat: '100%'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black">
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
            Pourquoi Choisir Ikhlas Automobiles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre engagement envers l\'excellence et notre passion pour les véhicules d\'exception 
            font de nous votre partenaire de confiance.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-luxury-black" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-luxury-gold">{reason.stat}</div>
                    <div className="text-sm text-gray-300">Garantie</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-luxury-gold/20 backdrop-blur-sm rounded-full px-8 py-4 border border-luxury-gold/30">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-luxury-gold" />
              <span className="text-white font-medium">Excellence</span>
            </div>
            <div className="w-1 h-1 bg-luxury-gold rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-luxury-gold" />
              <span className="text-white font-medium">Confiance</span>
            </div>
            <div className="w-1 h-1 bg-luxury-gold rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-luxury-gold" />
              <span className="text-white font-medium">Qualité</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 