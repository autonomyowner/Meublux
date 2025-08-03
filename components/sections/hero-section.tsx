
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Play, ArrowRight, Pause, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const slides = [
    {
      title: 'Meublux',
      subtitle: 'Design your Dream Space',
      description: 'استمتع بأجواء من الأناقة والحداثة مع تشكيلة أثاثنا العصري المصممة لتناسب أذواقكم الرفيعة',
      accent: 'أثاث عصري'
    },
    {
      title: 'أناقة وحداثة',
      subtitle: 'تصميمات مبتكرة لمساحات فريدة',
      description: 'تجمع قطعنا بين البساطة والتفرد، حيث يتم اختيار المواد العالية الجودة والتصميمات المبتكرة',
      accent: 'تصميم داخلي'
    },
    {
      title: 'راحة وعملية',
      subtitle: 'بيئة فريدة تنبض بالحياة والأناقة',
      description: 'سواء كنت تبحث عن قطع مميزة لغرفة المعيشة أو أثاث يضفي رونقاً خاصاً على مكتبك',
      accent: 'مطبخ عصري'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleScrollDown = () => {
    const nextSection = document.getElementById('featured-vehicles')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/1427832238427342.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay with Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        </div>

        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const left = (i * 5.5) % 100
            const top = (i * 7.3) % 100
            const duration = 8 + (i % 4)
            const delay = (i % 3) * 0.5
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-luxury-gold rounded-full opacity-60"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                }}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
              />
            )
          })}
        </div>

        {/* Floating Luxury Elements */}
        <motion.div
          className="absolute top-20 right-20 text-luxury-gold opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 border border-luxury-gold rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-10 text-luxury-gold opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-24 h-24 border border-luxury-gold rounded-full" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="mb-8"
              >
                {/* Accent Text */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-luxury-gold text-lg md:text-xl font-medium mb-4"
                >
                  {slides[currentSlide].accent}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-shadow leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl mb-6 text-luxury-goldLight font-medium"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
                  dir="rtl"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Button 
                variant="luxury" 
                size="xl" 
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">تصفح تشكيلتنا</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-luxury-goldDark to-luxury-gold"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                className="group backdrop-blur-md"
                onClick={handleVideoToggle}
              >
                {isVideoPlaying ? (
                  <Pause className="mr-2 w-5 h-5" />
                ) : (
                  <Play className="mr-2 w-5 h-5" />
                )}
                {isVideoPlaying ? 'إيقاف' : 'تشغيل'}
              </Button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap justify-center items-center gap-8 text-sm"
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
                <span>+10 سنوات خبرة</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
                <span>+500 مشروع منجز</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
                <span>تصميم مخصص</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute top-8 right-8 z-20 flex space-x-4">
        <Button
          variant="glass"
          size="sm"
          onClick={handleVideoToggle}
          className="backdrop-blur-md"
        >
          {isVideoPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>
        
        <Button
          variant="glass"
          size="sm"
          onClick={handleMuteToggle}
          className="backdrop-blur-md"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-luxury-gold'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-luxury-gold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 right-8 text-white hover:text-luxury-gold transition-colors group"
        whileHover={{ y: 5, scale: 1.1 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <ChevronDown className="w-8 h-8 group-hover:animate-bounce" />
          <motion.div
            className="absolute inset-0 w-8 h-8 border border-luxury-gold rounded-full opacity-0 group-hover:opacity-100"
            animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.button>

      {/* Luxury Brand Elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-20">
        <motion.div
          className="text-luxury-gold text-6xl font-display font-bold"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          M
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-20">
        <motion.div
          className="text-luxury-gold text-4xl font-display font-bold"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          FURNITURE
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 