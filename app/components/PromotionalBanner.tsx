// components/PromotionalBanner.tsx
'use client';

import { useRef } from 'react';
import { MdOutlinePhoneForwarded, MdOutlineFlight, MdOutlineHotel, MdOutlineDirectionsCar } from "react-icons/md";

const PromotionalBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleViewPackagesClick = () => {
    window.location.href = '/packages';
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-180 overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0')" }}
    >
      {/* Dark overlay base */}
      <div className="absolute inset-0 bg-slate-950/60 z-0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6 z-10">
        {/* Logo / Brand Name */}
        <div className="mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-source text-white tracking-wide">
            Raima Travel
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl mt-2">Your Journey, Our Passion</p>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-source text-white max-w-6xl">
          Explore the World with Raima Travel — Unforgettable Journeys Await!
        </h2>
        
        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* View Packages Button */}
          <button
            onClick={handleViewPackagesClick}
            className="relative overflow-hidden bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
            aria-label="View Travel Packages"
          >
            <MdOutlineFlight className="text-xl relative z-10" />
            <span className="relative z-10">Explore Packages</span>
            <span className="absolute inset-0 bg-orange-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
          </button>
          
          {/* Contact Number Button */}
          <button
            onClick={handleContactClick}
            className="relative overflow-hidden bg-transparent border-2 border-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
          >
            <MdOutlinePhoneForwarded className="text-xl relative z-10" />
            <span className="relative z-10">+880 173 0068845</span>
            <span className="absolute inset-0 bg-orange-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
          </button>
        </div>

        {/* Features Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-white bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/30">
            <MdOutlineFlight className="text-orange-400" />
            <span className="text-sm font-medium">Flight Booking</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/30">
            <MdOutlineHotel className="text-orange-400" />
            <span className="text-sm font-medium">Hotel Reservation</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/30">
            <MdOutlineDirectionsCar className="text-orange-400" />
            <span className="text-sm font-medium">Car Rental</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;