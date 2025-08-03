'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Car, Users, Clock, Star, Zap } from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      icon: Car,
      title: 'Acquisition de Véhicules',
      description: 'Sourcing personnalisé de véhicules rares et exclusifs selon vos spécifications exactes.',
      features: ['Recherche internationale', 'Inspection pré-achat', 'Négociation exclusive']
    },
    {
      icon: Shield,
      title: 'Garantie Premium',
      description: 'Protection complète de votre investissement avec nos garanties étendues.',
      features: ['Garantie constructeur', 'Extension de garantie', 'Assurance premium']
    },
    {
      icon: Users,
      title: 'Service Conciergerie',
      description: 'Accompagnement personnalisé à chaque étape de votre expérience d\'achat.',
      features: ['Conseiller dédié', 'Accompagnement VIP', 'Service 24/7']
    },
    {
      icon: Clock,
      title: 'Maintenance & Service',
      description: 'Entretien et maintenance de vos véhicules par des techniciens certifiés.',
      features: ['Service officiel', 'Pièces d\'origine', 'Maintenance préventive']
    },
    {
      icon: Star,
      title: 'Personnalisation',
      description: 'Options de personnalisation exclusives pour créer votre véhicule unique.',
      features: ['Options sur mesure', 'Finitions spéciales', 'Personnalisation complète']
    },
    {
      icon: Zap,
      title: 'Financement Premium',
      description: 'Solutions de financement adaptées aux véhicules de luxe et sport.',
      features: ['Taux préférentiels', 'Options flexibles', 'Accompagnement financier']
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
            Nos Services Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services exclusifs pour répondre aux exigences 
            les plus élevées de nos clients.
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
                
                <h3 className="text-xl font-bold text-luxury-black mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
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