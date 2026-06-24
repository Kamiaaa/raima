'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';

// Umrah Packages Interface & Data Configuration Structure
interface PackageProps {
  title: string;
  hotelRating: string;
  distance: string;
  features: string[];
  isFeatured?: boolean;
}

const packagesData: PackageProps[] = [
  {
    title: 'STANDARD PACKAGE',
    hotelRating: '2/3-Star',
    distance: '300–800 meters',
    features: [
      'Umrah Visa',
      'Direct/Short-Transit Return Air Ticket (Saudi Airlines, Biman Bangladesh, Emirates Airlines)',
      'Nusuk Approved 2/3-Star Makkah Hotel Booking (300-800m)',
      'Nusuk Approved 2/3-Star Madinah Hotel Booking (300-800m)',
      'Jeddah Airport to Makkah Hotel (Private Vehicle)',
      'Makkah to Madinah Transfer (Private Vehicle)',
      'Madinah Hotel to Airport (Private Vehicle)',
      'Makkah Ziyarah & Madinah Ziyarah',
      'Rawdah Permit (Nusuk App)',
    ],
  },
  {
    title: 'PREMIUM PACKAGE',
    hotelRating: '4-Star',
    distance: '300–800 meters',
    isFeatured: true,
    features: [
      'Umrah Visa',
      'Direct/Short-Transit Return Air Ticket (Saudi Airlines, Biman Bangladesh, Emirates Airlines)',
      'Nusuk Approved 4-Star Makkah Hotel Booking (300-800m)',
      'Nusuk Approved 4-Star Madinah Hotel Booking (300-800m)',
      'Jeddah Airport to Makkah Hotel (Private Vehicle)',
      'Makkah to Madinah Transfer (Private Vehicle)',
      'Madinah Hotel to Airport (Private Vehicle)',
      'Makkah Ziyarah & Madinah Ziyarah',
      'Rawdah Permit (Nusuk App)',
      'Optional Breakfast with Hotels',
    ],
  },
  {
    title: 'VIP PACKAGE',
    hotelRating: '5-Star',
    distance: '100–300 meters',
    features: [
      'Umrah Visa',
      'Direct Return Air Ticket (Saudi Airlines, Biman Bangladesh, Emirates Airlines)',
      'Nusuk Approved 5-Star Makkah Hotel Booking (100-300m)',
      'Nusuk Approved 5-Star Madinah Hotel Booking (100-300m)',
      'Jeddah Airport to Makkah Hotel (Private Vehicle)',
      'Makkah to Madinah Transfer (Private Vehicle)',
      'Madinah Hotel to Airport (Private Vehicle)',
      'Makkah Ziyarah & Madinah Ziyarah',
      'Rawdah Permit (Nusuk App)',
      'Breakfast with Hotels Included',
      'Optional Bullet Train Tickets',
    ],
  },
];

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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bail text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

const Umrah = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-900 text-slate-100 transition-colors duration-300 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Standardized Global Hero Section */}
      <HeroSection
        title="Exclusive Umrah Packages"
        description="Select premium, verified pilgrim structures tailored to custom hotel proximities, airline structures, and group parameters."
      />

      {/* Main Content Layout */}
      <motion.div
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* UMRAH PACKAGES SECTION */}
        <motion.div variants={itemVariants} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {packagesData.map((pkg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700/80 flex flex-col justify-between text-white ${
                  pkg.isFeatured ? 'ring-4 ring-orange-500 scale-100 lg:scale-105 z-10' : ''
                }`}
              >
                {pkg.isFeatured && (
                  <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-orange-500 text-slate-950 font-extrabold px-4 py-1 rounded-full text-xs uppercase tracking-wide shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold tracking-wider text-orange-400 mb-4">
                    {pkg.title}
                  </h3>

                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-slate-700 text-white text-xs px-2.5 py-1 rounded-md font-semibold border border-slate-600/30">
                      🏢 {pkg.hotelRating}
                    </span>
                    <span className="bg-slate-700 text-white text-xs px-2.5 py-1 rounded-md font-semibold border border-slate-600/30">
                      📍 Haram: {pkg.distance}
                    </span>
                  </div>

                  <hr className="border-slate-700 mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 text-sm text-slate-300">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <FaCheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-3 px-4 rounded-xl font-bold tracking-wide transition-all shadow-md ${
                      pkg.isFeatured
                        ? 'bg-orange-500 text-slate-950 hover:bg-orange-400'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}
                  >
                    Enquire Package Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM CALL TO ACTION BLOCK */}
        <motion.div 
          id="contact-cta"
          variants={itemVariants} 
          className="bg-slate-800 text-white rounded-2xl p-8 md:p-12 shadow-2xl text-center border border-slate-700 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Ready to Begin Your Sacred Journey?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Speak directly with our travel specialists to customize itineraries, match flight availability, or adjust hotel proximities according to your personal requirements.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-slate-700 pt-8">
            <a href="tel:+8801730068845" className="flex items-center gap-4 group p-3 rounded-lg hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-700">
              <div className="p-3 bg-orange-400/10 text-orange-400 rounded-xl group-hover:scale-110 transition-transform">
                <FaPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Call Agents</p>
                <p className="text-sm font-bold tracking-wide text-white">+880 1730 068845</p>
              </div>
            </a>

            <a href="mailto:info@raimatravel.com.bd" className="flex items-center gap-4 group p-3 rounded-lg hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-700">
              <div className="p-3 bg-orange-400/10 text-orange-400 rounded-xl group-hover:scale-110 transition-transform">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email Inquiry</p>
                <p className="text-sm font-bold tracking-wide text-white break-all">info@raimatravel.com.bd</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-3 rounded-lg">
              <div className="p-3 bg-orange-400/10 text-orange-400 rounded-xl">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Our Corporate Desk</p>
                <p className="text-xs font-semibold text-slate-300 leading-tight">Police Plaza Concord, Gulshan-1, Dhaka</p>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Umrah;