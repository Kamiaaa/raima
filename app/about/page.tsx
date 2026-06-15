'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  FaGlobe,
  FaUsers,
  FaMapMarkedAlt,
  FaCompass,
  FaHeart,
  FaQuoteLeft,
  FaBolt,
  FaCalendarAlt,
  FaShieldAlt,
  FaHandsHelping,
  FaRegLightbulb,
  FaPlane
} from 'react-icons/fa';
import { MdTour } from 'react-icons/md';

// Standardized Global Hero Section Component
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-[260px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Deep Overlay containing brand theme matching original blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium mb-4 border border-white/10">
          <FaBolt className="w-3.5 h-3.5" />
          Your Journey, Our Passion
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg text-orange-50/90 max-w-2xl mx-auto font-light">
          {description}
        </p>

        {/* Dynamic Context indicators */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-100/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <FaPlane className="w-3.5 h-3.5" />
            <span>Global Experts</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-100/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <MdTour className="w-3.5 h-3.5 text-orange-200" />
            <span>50K+ Travelers</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-100/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <FaMapMarkedAlt className="w-3.5 h-3.5 text-orange-200" />
            <span>15+ Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutPage = () => {
  // Animation variants with standard typing
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: FaCompass,
      title: 'Expert Guidance',
      description: 'Local experts and travel specialists who know every hidden gem.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FaShieldAlt,
      title: 'Safe Travels',
      description: '24/7 support and carefully vetted partners for your peace of mind.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FaRegLightbulb,
      title: 'Unique Experiences',
      description: 'Curated itineraries that go beyond typical tourist spots.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FaHeart,
      title: 'Passionate Service',
      description: 'Travel-loving team dedicated to creating unforgettable journeys.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Happy Travelers', icon: FaUsers },
    { value: '75+', label: 'Destinations', icon: FaGlobe },
    { value: '15+', label: 'Years of Excellence', icon: FaCalendarAlt },
    { value: '24/7', label: 'Travel Support', icon: FaHandsHelping },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Reusable Standardized Layout Hero Component */}
      <HeroSection 
        title="About Raima International Travel"
        description="Connecting explorers with the world's most remarkable destinations through highly certified, secure, and uniquely structured personalized travel solutions from Dhaka."
      />

      {/* Main Framework Layout Container */}
      <motion.div 
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6" />
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Founded in 2025, <span className="font-semibold text-orange-600 dark:text-orange-400">Raima International Travel</span> was established with a vision to make global travel more accessible, inspiring, and unforgettable. Driven by a passion for exploration and excellence, we are committed to connecting travelers with the world's most remarkable destinations through personalized and professionally curated travel solutions.
              </p>
              <p>
                From vibrant cultural capitals and iconic landmarks to pristine beaches and hidden gems, we design journeys that go beyond sightseeing. Every itinerary is thoughtfully crafted to deliver authentic experiences, meaningful connections, and lifelong memories.
              </p>
              <p>
                Over the years, Raima International Travels has earned the trust of travelers by providing reliable, seamless, and customer-focused services. Whether it's leisure travel, business trips, group tours, visa assistance, or customized holiday packages, our experienced team ensures that every detail is handled with care and precision.
              </p>
              <p>
                At Raima International Travels, we believe that travel is more than a journey—it is an opportunity to discover new cultures, broaden perspectives, and create stories worth sharing. Our success is not measured by the number of destinations we offer, but by the satisfaction, happiness, and unforgettable experiences of the people we serve.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInRight}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 h-[350px] sm:h-[450px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=869&auto=format&fit=crop"
              alt="Raima Travel team helping happy travelers"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center text-center p-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-4 shadow-md">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Mission & Vision
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-slate-600 dark:text-slate-400">
              Guiding every journey we craft — from first inquiry to homecoming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700/50 p-6 sm:p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-sm">
                <FaCompass className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                To create transformative travel experiences that connect people with cultures,
                nature, and themselves. We believe travel is a powerful force for good — fostering
                understanding, supporting local communities, and preserving our planet's wonders.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700/50 p-6 sm:p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-sm">
                <FaGlobe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                To become the world's most loved travel company — inspiring a global community
                of explorers who travel responsibly, embrace diversity, and create lasting
                positive impact wherever they go.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-slate-600 dark:text-slate-400">
              The principles that guide every journey we craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg border border-slate-100 dark:border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <FaQuoteLeft className="h-10 w-10 text-white/25 mx-auto" />
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              "Raima Travel International turned our dream vacation into reality. Their attention to detail,
              local expertise, and genuine care made our family trip to Southeast Asia absolutely perfect.
              We're already planning our next adventure with them!"
            </p>
            <div className="pt-2">
              <p className="font-semibold text-base sm:text-lg">Sarah & Michael Chen</p>
              <p className="text-orange-200 text-xs sm:text-sm">Traveled to Thailand & Vietnam</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 py-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-light">
            Join thousands of happy travelers who discovered the world with Raima Travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-semibold shadow-md text-sm sm:text-base hover:opacity-95 transition"
            >
              Explore Destinations
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(249, 115, 22, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-orange-600 text-orange-600 dark:text-orange-400 rounded-xl font-semibold text-sm sm:text-base transition"
            >
              Plan Your Trip
            </motion.button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default AboutPage;