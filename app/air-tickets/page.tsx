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
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUserFriends,
  FaPlane,
  FaPassport,
  FaSuitcase,
  FaHeadset
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bail text-white mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

const AirTicketing = () => {
  // New Customer Information State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  // Flight Form State
  const [tripType, setTripType] = useState<'round-trip' | 'one-way'>('round-trip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1 Passenger');
  const [cabinClass, setCabinClass] = useState('Economy');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

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

  const services = [
    { icon: FaPlane, title: 'Global Air Ticketing', desc: 'Instant ticketing solutions for over 450+ IATA and low-cost airlines worldwide.' },
    { icon: FaPassport, title: 'Visa Processing', desc: 'Complete documentation support and processing guidance for hassle-free approvals.' },
    { icon: FaSuitcase, title: 'Holiday Packages', desc: 'Tailor-made inbound and outbound leisure itineraries designed around your preferences.' },
    { icon: FaHeadset, title: '24/7 Premium Support', desc: 'Dedicated corporate desk for emergency changes, re-issues, and cancellation assistance.' }
  ];

  const diagnosticFares = [
    { sector: 'Dhaka (DAC) ➔ London (LHR)', airline: 'Biman / Saudia / Gulf Air', benchmarkPrice: 'Approx BDT 94,500+', terms: 'Includes 40KG standard luggage check.' },
    { sector: 'Dhaka (DAC) ➔ New York (JFK)', airline: 'Qatar Airways / Emirates', benchmarkPrice: 'Approx BDT 145,000+', terms: '2-Piece dynamic carrier baggage allow.' },
    { sector: 'Dhaka (DAC) ➔ Bangkok (BKK)', airline: 'Thai Airways / US-Bangla', benchmarkPrice: 'Approx BDT 34,500+', terms: 'Instant booking validation windows.' },
    { sector: 'Dhaka (DAC) ➔ Toronto (YYZ)', airline: 'Air Canada / Turkish Air', benchmarkPrice: 'Approx BDT 185,000+', terms: 'Multi-sector multi-transit routes.' }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. WhatsApp Message Formatting
    const targetWhatsAppNumber = '8801730068845'; // Raima International Desk Number
    const message = `✈️ *New Flight Query - Raima International* ✈️\n\n` +
                    `👤 *Customer Name:* ${customerName}\n` +
                    `📞 *Phone Number:* ${customerPhone}\n` +
                    `✉️ *Email:* ${customerEmail}\n\n` +
                    `🌐 *Trip Details:*\n` +
                    `▪️ *Type:* ${tripType === 'round-trip' ? 'Round Trip 🔄' : 'One Way ➡️'}\n` +
                    `▪️ *From:* ${from}\n` +
                    `▪️ *To:* ${to}\n` +
                    `▪️ *Departure Date:* ${departureDate}\n` +
                    `${tripType === 'round-trip' ? `▪️ *Return Date:* ${returnDate}\n` : ''}` +
                    `▪️ *Passengers:* ${passengers}\n` +
                    `▪️ *Class:* ${cabinClass}\n\n` +
                    `Please review and dispatch the flight options matrix.`;

    // 2. Encode URI for URL Compatibility
    const encodedMessage = encodeURIComponent(message);
    const whatsAppUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    // 3. Open WhatsApp Window
    window.open(whatsAppUrl, '_blank');
    setSubmissionSuccess(true);
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
        title="Air Ticketing & Global Travel"
        description="Explore seamless global travel structures with Raima International Travel. Book worldwide flights, secure premium routes, and receive expert ticketing support from Dhaka."
      />

      {/* Main Content Layout */}
      <motion.div 
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* INTERACTIVE BOOKING WIDGET */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700/50">
            {/* Widget Header tabs */}
            <div className="bg-slate-900 px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex space-x-2">
                <button 
                  onClick={() => setTripType('round-trip')}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tripType === 'round-trip' ? 'bg-white text-slate-900' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  Round Trip
                </button>
                <button 
                  onClick={() => setTripType('one-way')}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tripType === 'one-way' ? 'bg-white text-slate-900' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  One Way
                </button>
              </div>
              <div className="flex gap-4 text-xs sm:text-sm text-slate-300">
                <div className="relative inline-flex items-center">
                  <FaUserFriends className="absolute left-2.5 text-slate-400 text-xs pointer-events-none" />
                  <select 
                    value={passengers} 
                    onChange={(e) => setPassengers(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-slate-500 appearance-none cursor-pointer text-xs font-medium"
                  >
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4+ Passengers</option>
                  </select>
                </div>
                
                <div className="relative inline-flex items-center">
                  <FaSuitcase className="absolute left-2.5 text-slate-400 text-xs pointer-events-none" />
                  <select 
                    value={cabinClass} 
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-slate-500 appearance-none cursor-pointer text-xs font-medium"
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Booking Form Fields */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* SECTION: CUSTOMER INFORMATION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-slate-100 dark:border-slate-700/60 pb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Your Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter full name" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">WhatsApp / Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g., +88017XXXXXXXX" 
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@example.com" 
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                  />
                </div>
              </div>

              {/* SECTION: FLIGHT SECTORS AND DATES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">From</label>
                  <div className="relative">
                    <FaPlaneDeparture className="absolute left-3 top-3.5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Departure City / Airport" 
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">To</label>
                  <div className="relative">
                    <FaPlaneArrival className="absolute left-3 top-3.5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Destination City / Airport" 
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Departure Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3.5 text-slate-400" />
                    <input 
                      type="date" 
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Return Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3.5 text-slate-400" />
                    <input 
                      type="date" 
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      disabled={tripType === 'one-way'}
                      required={tripType === 'round-trip'}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 outline-none transition disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl shadow-lg hover:bg-slate-800 dark:hover:bg-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Submit via WhatsApp</span>
                </motion.button>
              </div>
            </form>

            {/* SYSTEM ALERT POPUP DRAWER */}
            {submissionSuccess && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="border-t border-slate-100 dark:border-slate-700 p-6 bg-emerald-50/50 dark:bg-emerald-950/20"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-emerald-800 dark:text-emerald-400 text-base flex items-center gap-2">
                      <span>✓</span> Routing Query Dispatched to WhatsApp
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Thank you, <span className="font-bold text-slate-800 dark:text-slate-200">{customerName}</span>. Your data has been structured into our processing lines. If the secure chat interface did not prompt automatically, please ensure pop-up access is allowed or manually contact our desk.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmissionSuccess(false)}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm transition"
                  >
                    Acknowledge
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* TRENDING SECTORS DIRECTORY */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trending International Sectors</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Estimated seasonal market benchmarks based on direct IATA clearance indicators from our desk.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticFares.map((fare, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{fare.airline}</span>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{fare.sector}</h3>
                  <p className="text-lg font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                    {fare.benchmarkPrice}
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700/60 pt-3 mt-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">{fare.terms}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* REASONS & TRAVEL SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50 rounded-2xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 text-slate-800 dark:text-slate-200">
                <svc.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{svc.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{svc.desc}</p>
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
                Let's Plan Your Journey
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Skip long queues and online automated errors. Reach out to our specialized travel consultants directly via hotline, email, or by coming to our Gulshan office.
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
                <p className="text-slate-600 dark:text-slate-300">Visit our corporate desk for physical seat verifications and document drops.</p>
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

export default AirTicketing;