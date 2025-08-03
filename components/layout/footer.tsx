'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'À Propos', href: '/about' },
      { name: 'Notre Histoire', href: '/about#history' },
      { name: 'Équipe', href: '/about#team' },
      { name: 'Carrières', href: '/careers' },
    ],
    services: [
      { name: 'Véhicules', href: '/vehicles' },
      { name: 'Services', href: '/services' },
      { name: 'Financement', href: '/financing' },
      { name: 'Maintenance', href: '/maintenance' },
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' },
      { name: 'Garantie', href: '/warranty' },
    ],
    legal: [
      { name: 'Mentions Légales', href: '/legal' },
      { name: 'Politique de Confidentialité', href: '/privacy' },
      { name: 'CGV', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ]

  return (
    <footer className="bg-luxury-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-luxury-black font-bold text-xl">IA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ikhlas Automobiles</h3>
                <p className="text-sm text-gray-400">Luxury & Sports Vehicles</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Spécialisé dans la vente des véhicules neuf : luxe & sport multimarque. 
              Votre partenaire de confiance pour des véhicules d'exception.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span className="text-gray-300">+33 1 42 86 95 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span className="text-gray-300">contact@ikhlas-automobiles.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-luxury-gold" />
                <span className="text-gray-300">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Ikhlas Automobiles. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-6 mb-2 md:mb-0">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div>
              <p>Certifié ISO 9001 - Partenaire Officiel</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 