// app/about/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
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

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants with proper typing
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
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
        delayChildren: 0.2
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      {/* Hero Section - Travel Themed */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Adventure travel background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 mix-blend-multiply" />
        </div>

        <div className="relative z-10 py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <FaBolt className="w-4 h-4" />
                Your Journey, Our Passion
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-source text-white max-w-6xl z-10">
                About <span className="text-orange-200">Raima Travel</span>
              </h1>

              {/* Feature indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm text-orange-100">
                  <FaPlane className="w-4 h-4" />
                  <span>Global Experts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-100">
                  <MdTour className="w-4 h-4 text-orange-300" />
                  <span>50K+ Travelers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-100">
                  <FaMapMarkedAlt className="w-4 h-4 text-orange-300" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section - Travel Edition */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Story
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                Founded in 2008, <span className="font-semibold text-orange-600 dark:text-orange-400">Raima Travel International</span> began with a simple dream:
                to connect people with the world's most breathtaking destinations through authentic,
                carefully crafted travel experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                What started as two passionate travelers sharing insider tips has grown into a
                trusted travel company serving thousands of adventurers across the globe. From
                the bustling markets of Marrakech to the serene beaches of Bali, we've curated
                journeys that inspire and transform.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                But our success isn't measured in numbers — it's in the smiles, the memories,
                and the stories our travelers bring home. We're not just booking trips; we're
                crafting life-changing adventures.
              </p>
            </motion.div>
            
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 mb-6 lg:mb-0"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-64 sm:h-80 md:h-96 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Raima Travel team helping happy travelers"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="text-center p-4"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-3 sm:mb-4 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </motion.div>
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission & Vision
            </motion.h2>
            <motion.div
              className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-4 sm:mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Guiding every journey we craft — from first inquiry to homecoming.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaCompass className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                To create transformative travel experiences that connect people with cultures,
                nature, and themselves. We believe travel is a powerful force for good — fostering
                understanding, supporting local communities, and preserving our planet's wonders.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaGlobe className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                To become the world's most loved travel company — inspiring a global community
                of explorers who travel responsibly, embrace diversity, and create lasting
                positive impact wherever they go.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Core Values
            </motion.h2>
            <motion.div
              className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-4 sm:mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The principles that guide every journey we craft.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 text-center shadow-lg cursor-pointer"
              >
                <motion.div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaQuoteLeft className="h-10 w-10 sm:h-12 sm:w-12 text-white/30 mx-auto mb-4 sm:mb-6" />
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white font-light leading-relaxed mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "Raima Travel International turned our dream vacation into reality. Their attention to detail,
            local expertise, and genuine care made our family trip to Southeast Asia absolutely perfect.
            We're already planning our next adventure with them!"
          </motion.p>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <p className="text-white font-semibold text-base sm:text-lg">Sarah & Michael Chen</p>
              <p className="text-orange-200 text-sm sm:text-base">Traveled to Thailand & Vietnam</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready for Your Next Adventure?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of happy travelers who discovered the world with Raima Travel.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600 to-orange-600 text-white rounded-lg font-semibold shadow-lg text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Destinations
            </motion.button>
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-orange-600 text-orange-600 dark:text-orange-400 rounded-lg font-semibold text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(249, 115, 22, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Trip
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;