'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook,
  FaInstagram,
  FaClock,
  FaCompass,
  FaCalendarAlt,
  FaUserFriends,
  FaUmbrellaBeach,
  FaMountain,
  FaHotel,
  FaMapMarkedAlt
} from 'react-icons/fa';

// Hero Section Component matching shared application layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

const Tours = () => {
  // Form State
  const [destination, setDestination] = useState('');
  const [travelMonth, setTravelMonth] = useState('');
  const [groupSize, setGroupSize] = useState('Family Group');
  const [tourType, setTourType] = useState('International');

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'info@raimatravel.com.bd',
      description: 'Send us an email anytime',
      color: 'from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '+8801730068845, +880255045262',
      description: 'Sun-Thurs from 10am to 6pm',
      color: 'from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: 'Police Plaza Concord (7th Floor), Tower-2 Plot-2, Road-144, Gulshan-1, Dhaka-1212',
      description: 'Bangladesh',
      color: 'from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: 'Sunday - Thursday',
      description: '10:00 AM - 6:00 PM BST',
      color: 'from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', color: 'hover:text-slate-600 dark:hover:text-slate-400' },
    { icon: FaTwitter, href: '#', color: 'hover:text-slate-500 dark:hover:text-slate-300' },
    { icon: FaFacebook, href: '#', color: 'hover:text-slate-500 dark:hover:text-slate-300' },
    { icon: FaInstagram, href: '#', color: 'hover:text-slate-600 dark:hover:text-slate-400' }
  ];

  // Featured destinations curated for Bangladeshi travelers
  const featuredDestinations = [
    { name: 'Maldives Getaways', details: '4 Days, 3 Nights', pricing: 'Starting from 55,000 BDT', theme: 'Tropical beaches & luxury overwater villas.' },
    { name: 'Kashmir Valley Tour', details: '6 Days, 5 Nights', pricing: 'Starting from 42,000 BDT', theme: 'Srinagar, Gulmarg, and serene shikara rides.' },
    { name: 'Thailand Tri-City', details: '7 Days, 6 Nights', pricing: 'Starting from 48,000 BDT', theme: 'Explore Bangkok, Pattaya, and scenic Phuket.' },
    { name: 'Cox\'s Bazar Premium', details: '3 Days, 2 Nights', pricing: 'Starting from 15,000 BDT', theme: 'Luxury beachside stays at the longest beach.' },
  ];

  const tourFeatures = [
    { icon: FaUmbrellaBeach, title: 'All-Inclusive Stays', desc: 'Handpicked premium hotels, daily breakfasts, and seamless airport transfers integrated.' },
    { icon: FaMountain, title: 'Guided Sightseeing', desc: 'Expert local guides fluent in English to show you the best historical and hidden hotspots.' },
    { icon: FaHotel, title: 'Visa Assistance Included', desc: 'Complete visa documentation support right from our core Gulshan travel desk.' },
    { icon: FaMapMarkedAlt, title: 'Tailor-Made Plans', desc: 'Completely customized itineraries shaped specifically to match your family budget.' }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, travelMonth, groupSize, tourType });
    alert('Your holiday customization request has been registered. Our dedicated tour planners will build an itinerary and contact you shortly.');
  };

  return (
    <motion.div 
      className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Standardized Global Hero Section */}
      <HeroSection 
        title="Exclusive Holiday Packages"
        description="Crafting unforgettable journeys across the globe. From relaxing beach escapes to breathtaking mountain treks, explore custom tour designs managed by Raima International Travel."
      />

      {/* Main Content Layout */}
      <motion.div 
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* INTERACTIVE TOUR SEARCH & PLANNER WIDGET */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700/50">
            {/* Widget Header tabs */}
            <div className="bg-slate-900 px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex space-x-2">
                <button 
                  onClick={() => setTourType('International')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tourType === 'International' ? 'bg-white text-slate-900' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  International Tours
                </button>
                <button 
                  onClick={() => setTourType('Domestic')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tourType === 'Domestic' ? 'bg-white text-slate-900' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  Domestic Packages
                </button>
              </div>
              <div className="flex gap-4 text-xs sm:text-sm text-slate-300">
                <select 
                  value={groupSize} 
                  onChange={(e) => setGroupSize(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded px-2 py-1 focus:outline-none"
                >
                  <option>Solo Traveler</option>
                  <option>Couple Tour</option>
                  <option>Family Group</option>
                  <option>Corporate Retreat</option>
                </select>
              </div>
            </div>

            {/* Tour Planner Form Fields */}
            <form onSubmit={handleSearchSubmit} className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Where to?</label>
                <div className="relative">
                  <FaCompass className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="e.g., Maldives, Kashmir, Cox's Bazar" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Target Month of Travel</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    type="month" 
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Approximate Budget Per Person</label>
                <div className="relative">
                  <FaUserFriends className="absolute left-3 top-3.5 text-slate-400" />
                  <select 
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                    defaultValue="Standard"
                  >
                    <option value="Budget">Budget Friendly</option>
                    <option value="Standard">Standard Comfort</option>
                    <option value="Premium">Premium Luxury</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-3 mt-2 flex justify-end">
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl shadow-lg hover:bg-slate-800 dark:hover:bg-white transition-all duration-200"
                >
                  Plan My Tailored Itinerary
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* CURATED GRID OF TRENDING HOLLIDAY PACKAGES */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trending Holiday Packages</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Most requested seasonal routes backed by reliable airline deals and resort contracts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((pkg, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">{pkg.details}</span>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{pkg.theme}</p>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700/60 pt-4 mt-2">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 block">{pkg.pricing}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SERVICE HIGHLIGHT FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourFeatures.map((feat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 text-slate-800 dark:text-slate-200">
                <feat.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TWO-COLUMN CONTACT & MAP INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 h-full border border-slate-100 dark:border-transparent transition-colors duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Consult With a Tour Specialist
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Ready to book or need custom visa tracking? Speak directly with our dedicated holiday planners. We take care of tickets, vouchers, insurance, and embassy protocols.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-slate-700 dark:text-slate-200 font-medium break-all">{item.details}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Follow Raima International</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 ${social.color} transition-all duration-300 shadow-sm`}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Map Card */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 border border-slate-100 dark:border-transparent transition-colors duration-300 h-full"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Find Us in Dhaka</h2>
                <p className="text-slate-600 dark:text-slate-300">Stop by our holiday section to finalize hotel dynamic selections and route bookings.</p>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-transparent">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.156381983053!2d90.4173873!3d23.7774438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77dec26a455%3A0x6b77ecb4729007f3!2sPolice%20Plaza%20Concord%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Raima International Travel Office Location Map"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Additional Details */}
              <div className="mt-6 p-4 bg-slate-100/70 dark:bg-slate-900/50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Directions</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Police Plaza Concord, Tower-2 (7th Floor), Plot-2, Road-144, Gulshan-1, Dhaka-1212.
                    </p>
                    <a 
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300 text-sm font-medium transition-colors"
                    >
                      Get Directions
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Tours;