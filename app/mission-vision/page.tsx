'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaCompass, 
  FaEye, 
  FaFlag, 
  FaLightbulb, 
  FaShieldAlt, 
  FaHandHoldingHeart, 
  FaSeedling 
} from 'react-icons/fa';

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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg text-orange-50/90 max-w-2xl mx-auto font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

const MissionVisionPage = () => {
  // Animation variants setup
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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

  const corePillars = [
    {
      icon: FaLightbulb,
      title: 'Customer-Centric Innovation',
      desc: 'Constantly engineering customizable dynamic route mapping and individual scheduling adjustments to optimize comfort and budget parameters flawlessly.'
    },
    {
      icon: FaShieldAlt,
      title: 'Uncompromised Integrity',
      desc: 'Building clear structural pricing frameworks with global aviation hubs to preserve reliable trust profiles alongside our ticketing procedures.'
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Authentic Engagement',
      desc: 'Fostering deep intercultural respect and connections by introducing our global traveler community directly to indigenous local guides and preservationists.'
    },
    {
      icon: FaSeedling,
      title: 'Sustainable Journeys',
      desc: 'Actively prioritizing green-certified corporate travel networks, optimized itineraries, and lower-impact infrastructure structures across target hubs.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 transition-colors duration-300 overflow-x-hidden">
      
      {/* Reusable Core Hero Component */}
      <HeroSection 
        title="Our Mission & Vision"
        description="The philosophical framework driving Raima International Travel toward purposeful, progressive global exploration architectures."
      />

      {/* Main Structural Content Layout */}
      <motion.div 
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* Split Mission & Vision Focus Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Segment */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700/50 p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-lg">
                <FaFlag className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">The Purpose</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                To engineer seamless, transformative, and safe global journeys that comfortably connect individuals with diverse cultures and pristine natural spaces. By removing operational travel complexities, we aim to deliver exceptional flight ticketing architectures, specialized documentation care, and bespoke itinerary management that leaves travelers free to acquire authentic lifetime memories.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-700/50 pt-4 text-xs text-slate-500 font-medium">
              Target Framework: Accessible Global Connectivity
            </div>
          </motion.div>

          {/* Vision Segment */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700/50 p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-lg border border-slate-700">
                <FaEye className="h-6 w-6 text-orange-400" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">The Blueprint</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                To become South Asia's premier choice for highly trusted, modern travel services. We visualize a future where modern automated booking mechanics and highly individualized hospitality seamlessly integrate. Our long-term trajectory focuses on cultivating a world-class travel model that sparks active global citizenship while driving direct economic benefit to localized ecosystems worldwide.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-700/50 pt-4 text-xs text-slate-500 font-medium">
              Target Framework: Progressive International Travel Standards
            </div>
          </motion.div>

        </div>

        {/* Visual Callout - Environmental and Operational Philosophy Banner */}
        <motion.div 
          variants={itemVariants}
          className="relative rounded-2xl overflow-hidden h-[260px] sm:h-[320px] shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1035"
            alt="Global exploration blueprint background"
            fill
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto space-y-4">
            <FaCompass className="h-8 w-8 text-orange-500 animate-spin-slow" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              "Travel is more than a journey—it is an opportunity to expand horizons."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light tracking-wide max-w-lg">
              Every route finalized, group package organized, and ticketing assignment handled inside our Dhaka corporate hub directly anchors back to this philosophical baseline.
            </p>
          </div>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The Guiding Strategic Pillars
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {corePillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-md border border-slate-700/50 flex gap-4 sm:gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-orange-400 border border-slate-700">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default MissionVisionPage;