'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaQuoteLeft, 
  FaEnvelope, 
  FaLinkedin, 
  FaAward, 
  FaHandshake, 
  FaChartLine, 
  FaSignature 
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bail text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg text-orange-50/90 max-w-2xl mx-auto font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

const CEOFounder = () => {
  // Animation variants setup
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

  const coreValues = [
    {
      icon: FaHandshake,
      title: 'Our Commitment',
      desc: 'Transparent dealings, accurate reservation processing, and strict alignment with global IATA guidelines.'
    },
    {
      icon: FaChartLine,
      title: 'Future Vision',
      desc: 'Transforming legacy booking procedures into cloud-integrated, agile corporate travel workflows.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      
      {/* Standardized Layout Hero Component */}
      <HeroSection 
        title="Message From CEO & Founder"
        description="A leadership overview highlighting our foundational commitments, client satisfaction parameters, and corporate vision."
      />

      {/* Main Structural Content Layout */}
      <motion.div 
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* Main Section - Executive Focus Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Image & Meta Data (sticky side section on desktop) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 p-3 border border-slate-100 dark:border-slate-700/50">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                {/* Fallback pattern uses an official-looking corporate style if asset isn't ready */}
                <Image
                  src="img/ceo.jpg"
                  alt="Managing Director Profile Pic"
                  fill
                  className="object-cover object-top"
                  sizes="(max-w-1024px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Title & Organization Meta info */}
            <div className="px-2 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Md. Kamrul Islam Khan</h3>
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">CEO & Founder</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">Raima International Travel</p>
              </div>

              {/* Minimalist Contact / Professional Links */}
              <div className="flex gap-3 border-t border-slate-100 dark:border-slate-700/50 pt-4">
                <a href="mailto:md@raimatravel.com.bd" className="p-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-500 hover:text-orange-500 shadow-sm border border-slate-100 dark:border-slate-700/50 transition">
                  <FaEnvelope className="h-4 w-4" />
                </a>
                <a href="#" className="p-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-500 hover:text-orange-500 shadow-sm border border-slate-100 dark:border-slate-700/50 transition">
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: The Core Message Body */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
            
            {/* Elegant Quotation Intro */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-700/50">
              <FaQuoteLeft className="absolute right-6 top-6 h-12 w-12 text-slate-100 dark:text-slate-700/40 pointer-events-none" />
              <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-white italic leading-relaxed">
                "Our metric for performance isn't purely built on tracking volume. Instead, we measure execution through the reliability, trust, and absolute peace of mind our clients experience during transition cycles."
              </p>
            </div>

            {/* Formal Text Framework */}
            <div className="space-y-6 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Dear Valued Travelers and Corporate Partners,</h2>
              
              <p>
                Welcome to <span className="font-semibold text-slate-900 dark:text-white">Raima International Travel</span>. Since our foundation in 2025, our objective has centered entirely around designing an infrastructure that addresses modern travel complexities with professional transparency and precision.
              </p>
              <p>
                The global travel landscape demands far more than basic point-to-point flight configurations. Today's leisure and corporate portfolios require active scheduling risk management, immediate visa data tracking, and dynamic logistical re-routing options. We have systematically structured our corporate hub in Dhaka to execute on these critical operational demands.
              </p>
              <p>
                Whether managing detailed group itineraries, arranging specialized outbound vacation routes, or optimizing ticketing workflows over 450+ IATA airlines, our agents operate with strict alignment to quality. We continuously prioritize long-term client support mechanisms over quick transactions.
              </p>
              <p>
                As we deploy automated booking models and build robust strategic linkages across global hospitality hubs, our core mission remains fundamentally unchanged: to deliver comfort, security, and an inspiring journey every single time you choose us.
              </p>

              <p className="pt-4 font-normal text-slate-800 dark:text-slate-200">
                Thank you for anchoring your trust with Raima International Travel. We look forward to engineering your next global exploration sequence.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="text-sm text-slate-400 dark:text-slate-500">Warm Regards,</p>
                <div className="text-slate-800 dark:text-slate-200 my-2 h-12 flex items-center">
                  {/* Decorative placeholder signature element */}
                  <span className="font-serif text-3xl opacity-60 dark:opacity-40 italic select-none">Md. Kamrul Islam Khan</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Md. Kamrul Islam Khan</h4>
                <p className="text-xs text-slate-500">CEO & Founder, Raima International Travel</p>
              </div>

              {/* Trust Badge Indicator */}
              <div className="flex gap-4 p-4 rounded-xl bg-orange-50/50 dark:bg-slate-800/40 border border-orange-100/30 dark:border-slate-700 max-w-sm">
                <div className="p-2.5 rounded-lg bg-orange-500 text-white flex-shrink-0 self-start">
                  <FaAward className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Verified Certification Standard</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Compliant with IATA routing rules and premium hospitality directives from Dhaka.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Supporting Strategic Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100 dark:border-slate-700/50">
          {coreValues.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700/50 flex gap-4"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-slate-900 text-orange-400 border border-slate-700">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default CEOFounder;