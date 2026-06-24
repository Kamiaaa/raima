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

interface HeroSectionProps {
  title: string;
  description: string;
}

function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <div className="relative h-[45vh] min-h-[280px] w-full overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png"
          alt="Premium flight mapping background"
          fill
          className="object-cover"
          priority
        />
        {/* Deep Overlay Layer targeting theme integration */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bail text-white tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

const AirTicketing = () => {
  // Customer Credentials State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  // Routing Framework State
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
      description: 'Corporate and group bookings query line',
      color: 'from-slate-700 to-slate-800'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '+8801730068845, +880255045262',
      description: 'Direct response travel concierge',
      color: 'from-slate-700 to-slate-800'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: 'Police Plaza Concord (7th Floor), Tower-2 Plot-2, Road-144, Gulshan-1, Dhaka-1212',
      description: 'Bangladesh Flagship Office',
      color: 'from-slate-700 to-slate-800'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: 'Sunday - Thursday',
      description: '10:00 AM - 6:00 PM BST',
      color: 'from-slate-700 to-slate-800'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', color: 'hover:text-slate-400' },
    { icon: FaTwitter, href: '#', color: 'hover:text-slate-400' },
    { icon: FaFacebook, href: '#', color: 'hover:text-slate-400' },
    { icon: FaInstagram, href: '#', color: 'hover:text-slate-400' }
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const targetWhatsAppNumber = '8801730068845';
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

    const encodedMessage = encodeURIComponent(message);
    const whatsAppUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsAppUrl, '_blank');
    setSubmissionSuccess(true);

    // Form tracking clean resets
    setFrom('');
    setTo('');
    setDepartureDate('');
    setReturnDate('');
  };

  return (
    <motion.div 
      className="min-h-screen bg-slate-900 text-slate-100 selection:bg-slate-700 selection:text-white antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection 
        title="Air Ticketing & Global Travel"
        description="Explore seamless global travel structures with Raima International Travel. Book worldwide flights, secure premium routes, and receive expert ticketing support from Dhaka."
      />

      <motion.div 
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* INTERACTIVE BOOKING WIDGET */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/60">
            <div className="bg-slate-950 px-6 py-4 flex flex-wrap gap-4 justify-between items-center border-b border-slate-800">
              <div className="flex space-x-2">
                <button 
                  onClick={() => setTripType('round-trip')}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tripType === 'round-trip' ? 'bg-slate-100 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  Round Trip
                </button>
                <button 
                  onClick={() => setTripType('one-way')}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tripType === 'one-way' ? 'bg-slate-100 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'}`}
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
                    aria-label="Number of passengers"
                    className="bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-slate-500 appearance-none cursor-pointer text-xs font-medium text-slate-200"
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
                    aria-label="Cabin class portfolio"
                    className="bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-slate-500 appearance-none cursor-pointer text-xs font-medium text-slate-200"
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* CUSTOMER PROFILE FIELDSET */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-slate-700/60 pb-6">
                <div>
                  <label htmlFor="customerName" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Full Name</label>
                  <input 
                    id="customerName"
                    type="text" 
                    placeholder="Enter full name" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-slate-600 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="customerPhone" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">WhatsApp / Mobile Number</label>
                  <input 
                    id="customerPhone"
                    type="tel" 
                    placeholder="e.g., +88017XXXXXXXX" 
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-slate-600 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="customerEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                  <input 
                    id="customerEmail"
                    type="email" 
                    placeholder="name@example.com" 
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-slate-600 outline-none transition"
                  />
                </div>
              </div>

              {/* SECTORS MATRIX FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label htmlFor="fromSector" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">From</label>
                  <div className="relative">
                    <FaPlaneDeparture className="absolute left-3 top-3.5 text-slate-500" />
                    <input 
                      id="fromSector"
                      type="text" 
                      placeholder="Departure City / Airport" 
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-slate-600 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="toSector" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">To</label>
                  <div className="relative">
                    <FaPlaneArrival className="absolute left-3 top-3.5 text-slate-500" />
                    <input 
                      id="toSector"
                      type="text" 
                      placeholder="Destination City / Airport" 
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-slate-600 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="departureDate" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Departure Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3.5 text-slate-500" />
                    <input 
                      id="departureDate"
                      type="date" 
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-slate-600 outline-none transition [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="returnDate" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Return Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3.5 text-slate-500" />
                    <input 
                      id="returnDate"
                      type="date" 
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      disabled={tripType === 'one-way'}
                      required={tripType === 'round-trip'}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-slate-600 outline-none transition disabled:opacity-30 [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 text-slate-950 font-bold rounded-xl shadow-lg hover:bg-white transition-all duration-150 flex items-center justify-center gap-2"
                >
                  <span>Submit via WhatsApp</span>
                </motion.button>
              </div>
            </form>

            {submissionSuccess && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="border-t border-slate-700 p-6 bg-emerald-950/30"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-emerald-400 text-base flex items-center gap-2">
                      <span>✓</span> Routing Query Dispatched to WhatsApp
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Thank you, <span className="font-bold text-slate-200">{customerName}</span>. Your data has been structured into our processing lines. If the secure chat interface did not prompt automatically, please ensure pop-up access is allowed or manually contact our desk.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmissionSuccess(false)}
                    className="text-xs font-bold text-slate-300 hover:text-white border border-slate-700 bg-slate-900 px-3 py-1.5 rounded-lg shadow-sm transition"
                  >
                    Acknowledge
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* TRENDING SECTORS STORAGE */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Trending International Sectors</h2>
            <p className="text-sm text-slate-400 mt-1">Estimated seasonal market benchmarks based on direct IATA clearance indicators from our desk.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticFares.map((fare, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{fare.airline}</span>
                  <h3 className="font-bold text-base text-white mb-2">{fare.sector}</h3>
                  <p className="text-lg font-extrabold text-slate-200 tracking-tight">
                    {fare.benchmarkPrice}
                  </p>
                </div>
                <div className="border-t border-slate-700/60 pt-3 mt-4">
                  <p className="text-xs text-slate-400 italic leading-relaxed">{fare.terms}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CORPORATE DISPATCH ADVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-6 bg-slate-800/50 border border-slate-700/40 rounded-2xl shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-slate-700/60 rounded-xl flex items-center justify-center mb-4 text-slate-200">
                <svc.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-white mb-2">{svc.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TWO-COLUMN CONTACT GRID & EMBED MAPS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-slate-800 rounded-2xl shadow-2xl p-8 h-full border border-slate-700/40"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h2 className="text-2xl font-bold text-white mb-3">
                Let's Plan Your Journey
              </h2>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Skip long queues and online automated errors. Reach out to our specialized travel consultants directly via hotline, email, or by coming to our Gulshan office.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    whileHover={{ x: 3 }}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md border border-slate-600/40`}>
                      <item.icon className="h-4 w-4 text-slate-200" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-white font-semibold text-sm sm:text-base mt-0.5 break-all">{item.details}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-slate-700/60 pt-6">
                <h3 className="font-semibold text-slate-300 text-sm uppercase tracking-wider mb-4">Follow Raima International</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 ${social.color} border border-slate-700 transition-all shadow-inner`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700/40 h-full"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-1">Find Us in Dhaka</h2>
                <p className="text-sm text-slate-400">Visit our corporate desk for physical seat verifications and document drops.</p>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1376313885175!2d90.4143431!3d23.7781198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7772fa8c19b%3A0xc07a3c3c1eb3df4c!2sPolice%20Plaza%20Concord%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full grayscale invert opacity-85 contrast-125"
                  title="Raima International Travel Office Location Map"
                />
              </div>

              <div className="mt-6 p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm mb-0.5">Directions</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Police Plaza Concord, Tower-2 (7th Floor), Plot-2, Road-144, Gulshan-1, Dhaka-1212.
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Police+Plaza+Concord+Gulshan+Dhaka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-slate-300 hover:text-white text-xs font-bold transition-colors gap-1"
                    >
                      <span>Get Directions</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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