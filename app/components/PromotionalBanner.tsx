'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlinePhoneForwarded, MdOutlineFlight, MdOutlineHotel, MdOutlineDirectionsCar } from "react-icons/md";

const PromotionalBanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleViewPackagesClick = () => {
        window.location.href = '/packages';
    };

    const handleContactClick = () => {
        window.location.href = '/contact';
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-125 overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat mt-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0')" }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6">
                {/* Logo / Brand Name */}
                <div className="z-10 mb-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-source text-white tracking-wide">
                        Raima Travel
                    </h1>
                    <p className="text-white/80 text-lg sm:text-xl mt-2">Your Journey, Our Passion</p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-source text-white max-w-6xl z-10">
                    Explore the World with Raima Travel — Unforgettable Journeys Await!
                </h2>
                
                {/* Two Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 z-10">
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
                        <span className="relative z-10">+880 1234 567890</span>
                        <span className="absolute inset-0 bg-orange-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>
                </div>

                {/* Features Row */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 z-10">
                    <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                        <MdOutlineFlight className="text-orange-400" />
                        <span className="text-sm">Flight Booking</span>
                    </div>
                    <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                        <MdOutlineHotel className="text-orange-400" />
                        <span className="text-sm">Hotel Reservation</span>
                    </div>
                    <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                        <MdOutlineDirectionsCar className="text-orange-400" />
                        <span className="text-sm">Car Rental</span>
                    </div>
                </div>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />
        </section>
    );
};

export default PromotionalBanner;