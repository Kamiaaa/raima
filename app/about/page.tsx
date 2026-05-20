// components/AboutPage.tsx
'use client';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaGlobe, 
  FaUsers, 
  FaCompass, 
  FaHeart, 
  FaAward, 
  FaTree,
  FaUmbrellaBeach,
  FaCamera,
  FaClock,
  FaQuoteLeft,
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaStar,
  FaShieldAlt,
  FaHandHoldingHeart
} from 'react-icons/fa';

const AboutPage = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Company stats
  const stats = [
    { 
      icon: FaGlobe, 
      value: '15+', 
      label: 'Countries', 
      description: 'Destinations worldwide',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      icon: FaUsers, 
      value: '10k+', 
      label: 'Happy Travelers', 
      description: 'And counting',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      icon: FaCompass, 
      value: '50+', 
      label: 'Expert Guides', 
      description: 'Local specialists',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      icon: FaAward, 
      value: '8+', 
      label: 'Years', 
      description: 'Of excellence',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: FaHandHoldingHeart,
      title: 'Authentic Experiences',
      description: 'We connect you with local cultures and traditions for genuine, unforgettable journeys.',
      color: 'bg-orange-100 dark:bg-orange-950/50 text-orange-600'
    },
    {
      icon: FaShieldAlt,
      title: 'Safety First',
      description: 'Your safety is our priority with 24/7 support and carefully vetted partners.',
      color: 'bg-orange-100 dark:bg-orange-950/50 text-orange-600'
    },
    {
      icon: FaTree,
      title: 'Sustainable Travel',
      description: 'Committed to eco-friendly practices and supporting local communities.',
      color: 'bg-orange-100 dark:bg-orange-950/50 text-orange-600'
    },
    {
      icon: FaHeart,
      title: 'Passionate Service',
      description: 'We love what we do and it shows in every trip we craft for you.',
      color: 'bg-orange-100 dark:bg-orange-950/50 text-orange-600'
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
      bio: 'Adventure seeker with 15+ years in travel industry',
      socials: ['linkedin', 'twitter']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      bio: 'Logistics expert ensuring smooth journeys',
      socials: ['linkedin']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Lead Travel Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
      bio: 'Creative mind behind unique itineraries',
      socials: ['linkedin', 'instagram']
    },
    {
      name: 'David Kim',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      bio: 'Dedicated to making your experience perfect',
      socials: ['linkedin', 'twitter']
    }
  ];

  // Milestones
  const milestones = [
    { year: '2016', title: 'Company Founded', description: 'Started with a dream to transform travel' },
    { year: '2018', title: 'First International Office', description: 'Expanded operations to 5 countries' },
    { year: '2020', title: 'Sustainable Initiative', description: 'Launched eco-friendly travel program' },
    { year: '2023', title: '10,000 Travelers', description: 'Celebrated our 10,000th happy customer' }
  ];

  // Animation variants - Fixed version
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
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

  const heroVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Fixed stat variants - using proper animation properties
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200 }
    }
  };

  // Individual stat item with custom delay using transition property
  const getStatItemVariants = (delay: number): Variants => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200, delay }
    }
  });

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] min-h-[500px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2070&q=80"
            alt="Mountain adventure travel"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6"
            >
              <FaCompass className="text-orange-400" />
              <span className="text-white text-sm font-medium">Discover Our Story</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Your Journey Begins
              <span className="text-orange-400 block text-4xl sm:text-5xl lg:text-6xl mt-2">With Us</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We don't just plan trips, we craft experiences that stay with you forever. 
              Join us in exploring the world's most extraordinary destinations.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
                    alt="Travel experience"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
                    alt="Cultural experience"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-2xl p-4 shadow-xl">
                    <FaGlobe className="text-white text-3xl" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-3">
                  Our Story
                </h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Creating Memories That Last a Lifetime
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Founded in 2016, WanderLuxe Travel was born from a simple belief: travel should be transformative, 
                  not just transactional. What started as a small team of passionate adventurers has grown into a 
                  community of explorers dedicated to showing you the world's hidden gems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We've helped over 10,000 travelers discover the magic of authentic travel experiences. 
                  From the bustling streets of Tokyo to the serene beaches of Bali, we're here to make your 
                  travel dreams a reality.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Tours
                  </motion.button>
                  <motion.button 
                    className="border-2 border-orange-500 text-orange-600 dark:text-orange-400 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Our Story
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-orange-500 to-orange-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={getStatItemVariants(index * 0.1 + 0.3)}
                initial="hidden"
                animate={isStatsInView ? "visible" : "hidden"}
                className="text-center text-white"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-4 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="h-10 w-10" />
                </motion.div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-orange-100 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Our Values Section */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-3">
              What Drives Us
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do at WanderLuxe Travel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -10 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl">
                  <div className={`w-16 h-16 rounded-xl ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Our Services Section */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-3">
              What We Offer
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Travel Solutions
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need for an unforgettable journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaPlane, title: 'Flight Booking', description: 'Best deals on international and domestic flights', color: 'text-orange-500' },
              { icon: FaHotel, title: 'Accommodation', description: 'Curated hotels and unique stays worldwide', color: 'text-orange-500' },
              { icon: FaMapMarkedAlt, title: 'Custom Itineraries', description: 'Personalized travel plans crafted just for you', color: 'text-orange-500' },
              { icon: FaUsers, title: 'Group Tours', description: 'Join like-minded travelers on group adventures', color: 'text-orange-500' },
              { icon: FaUmbrellaBeach, title: 'Activity Planning', description: 'Exciting activities and local experiences', color: 'text-orange-500' },
              { icon: FaShieldAlt, title: 'Travel Insurance', description: 'Comprehensive coverage for peace of mind', color: 'text-orange-500' }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Our Milestones */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-3">
              Our Journey
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Company Milestones
            </h3>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200 dark:bg-orange-900 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-900" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <FaQuoteLeft className="h-12 w-12 text-white/30 mx-auto mb-6" />
            <p className="text-2xl sm:text-3xl text-white font-light leading-relaxed mb-8">
              "WanderLuxe transformed our dream vacation into reality. Every detail was perfect, 
              and we discovered places we never would have found on our own. Truly an unforgettable experience!"
            </p>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 h-5 w-5" />
              ))}
            </div>
            <p className="text-white font-semibold text-lg">- Emily Thompson</p>
            <p className="text-orange-100">Traveled to Thailand & Vietnam</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-3">
              Meet The Team
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate Experts Behind Your Journey
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our team brings together diverse travel experiences and local expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -10 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                    <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.socials.includes('linkedin') && (
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {member.socials.includes('twitter') && (
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                      )}
                      {member.socials.includes('instagram') && (
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Ready to Start Your Adventure?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Let us help you plan the trip of a lifetime. Get in touch with our travel experts today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Trip
            </motion.button>
            <motion.button 
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;