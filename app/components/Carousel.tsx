'use client'
import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';

// TypeScript Interface for Carousel Slide Data
interface SlideData {
    id: number;
    title: string;
    subtitle: string;
    accentColor: string;
    accentBg: string;
    bgGradient: string;
    buttonText: string;
    link: string;
    images: {
        topRight: string;
        centerLeft: string;
        bottomRight: string;
    };
}

const carouselSlides: SlideData[] = [
    {
        id: 1,
        title: "Unforgettable",
        subtitle: "Cox's Bazar Sea Beach",
        accentColor: "text-teal-400",
        accentBg: "bg-teal-400",
        bgGradient: "from-[#0f2d37] via-[#0b2027] to-[#050f13]",
        buttonText: "Explore Beaches",
        link: "/contact",
        images: {
            topRight: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=400&q=80",
            centerLeft: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
            bottomRight: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80"
        }
    },
    {
        id: 2,
        title: "Breathtaking",
        subtitle: "Rangamati Hill Tracts",
        accentColor: "text-amber-400",
        accentBg: "bg-amber-400",
        bgGradient: "from-[#2c1d11] via-[#1f140b] to-[#100a05]",
        buttonText: "Book Adventure",
        link: "/contact",
        images: {
            topRight: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
            centerLeft: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            bottomRight: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
        }
    },
    {
        id: 3,
        title: "Incredible",
        subtitle: "Cultural Wonders of India",
        accentColor: "text-sky-400",
        accentBg: "bg-sky-400",
        bgGradient: "from-[#112240] via-[#0a1526] to-[#040a12]",
        buttonText: "Discover History",
        link: "/contact",
        images: {
            topRight: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80",
            centerLeft: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80",
            bottomRight: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80"
        }
    },
    {
        id: 4,
        title: "Amazing",
        subtitle: "Tropical Thailand Escapes",
        accentColor: "text-indigo-400",
        accentBg: "bg-indigo-400",
        bgGradient: "from-[#1e1b4b] via-[#11103c] to-[#07071e]",
        buttonText: "Explore Thailand",
        link: "/contact",
        images: {
            topRight: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
            centerLeft: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80",
            bottomRight: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80"
        }
    },
];

interface SlideImageCollageProps {
    images: {
        topRight: string;
        centerLeft: string;
        bottomRight: string;
    };
    isActive: boolean;
}

const SlideImageCollage: React.FC<SlideImageCollageProps> = ({ images, isActive }) => {
    const [orderedImages, setOrderedImages] = useState([
        images.centerLeft,
        images.topRight,
        images.bottomRight
    ]);

    useEffect(() => {
        setOrderedImages([images.centerLeft, images.topRight, images.bottomRight]);
    }, [images]);

    useEffect(() => {
        if (!isActive) return;

        const imageSwapTimer = setInterval(() => {
            setOrderedImages((prevImages) => {
                const [first, ...rest] = prevImages;
                return [...rest, first];
            });
        }, 3000);

        return () => clearInterval(imageSwapTimer);
    }, [isActive]);

    return (
        <div className="relative w-full max-w-70 sm:max-w-85 md:max-w-100 aspect-square mx-auto">
            {/* 1. Top-Right Image Circle */}
            <div className="absolute top-0 right-2 w-[55%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-10 transition-all duration-1000 ease-in-out">
                <img
                    src={orderedImages[1]}
                    alt="Scenic Destination Landscape"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 2. Center-Left Main Image Circle */}
            <div className="absolute top-[18%] left-0 w-[58%] aspect-square rounded-full border-4 md:border-[6px] border-white/10 overflow-hidden shadow-2xl z-20 transition-all duration-1000 ease-in-out">
                <img
                    src={orderedImages[0]}
                    alt="Featured Travel Experience"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 3. Bottom-Right Image Circle */}
            <div className="absolute bottom-1 right-4 w-[55%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-10 transition-all duration-1000 ease-in-out">
                <img
                    src={orderedImages[2]}
                    alt="Luxury Accommodations Space"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            handleNext();
        }, 10000);

        return () => clearInterval(timer);
    }, [isPlaying, currentIndex, handleNext]);

    const activeSlide = carouselSlides[currentIndex];
    const extractColors = (gradientStr: string) => {
        const parts = gradientStr.split(' ');
        const from = parts[0]?.replace('from-[', '').replace(']', '') || '#0f2d37';
        const via = parts[1]?.replace('via-[', '').replace(']', '') || '#0b2027';
        const to = parts[2]?.replace('to-[', '').replace(']', '') || '#050f13';
        return `${from}, ${via}, ${to}`;
    };

    return (
        <section
            className="w-full min-h-screen lg:min-h-[90vh] text-white flex items-center justify-center relative overflow-hidden py-16 md:py-0 px-4 sm:px-6 lg:px-12 select-none transition-all duration-1000 ease-in-out"
            style={{
                backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0%, transparent 50%), linear-gradient(135deg, ${extractColors(activeSlide.bgGradient)})`
            }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
        >
            <div className="absolute top-[-10%] left-[-10%] w-75 md:w-125 h-75 md:h-125 rounded-full bg-white/5 blur-[80px] md:blur-[120px] pointer-events-none transition-all duration-1000" />

            <div className="max-w-7xl w-full mx-auto relative px-2 sm:px-6 md:px-8 lg:px-4">
                
                <div className="relative w-full min-h-150 sm:min-h-137.5 md:min-h-125 lg:min-h-112.5 flex items-center">
                    {carouselSlides.map((slide, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={slide.id}
                                className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 ease-in-out ${
                                    isActive
                                        ? 'opacity-100 translate-x-0 relative pointer-events-auto z-20'
                                        : 'opacity-0 translate-x-12 absolute inset-0 pointer-events-none z-10'
                                }`}
                            >
                                <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-1">
                                    <div className="space-y-4">
                                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bail font-bold tracking-tight ${slide.accentColor} leading-tight`}>
                                            {slide.title}
                                        </h1>

                                        <p className="text-gray-200 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                            {slide.subtitle}
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 z-10 justify-center lg:justify-start pt-2">
                                        <Link href={slide.link} className="w-full sm:w-auto">
                                            <button
                                                className={`w-full sm:w-48 relative overflow-hidden ${slide.accentBg} text-[#121b36] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2 cursor-pointer`}
                                                aria-label={slide.buttonText}
                                            >
                                                <span className="relative z-10">{slide.buttonText}</span>
                                                <span className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                                            </button>
                                        </Link>

                                        <Link href={slide.link} className="w-full sm:w-auto">
                                            <button className="w-full sm:w-48 relative overflow-hidden bg-transparent border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer">
                                                <span className="relative z-10">View Details</span>
                                                <span className="absolute inset-0 bg-white/10 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full order-2 mt-4 lg:mt-0">
                                    <SlideImageCollage images={slide.images} isActive={isActive} />
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* Slide Pagination Tracker */}
                <div className="flex justify-center items-center space-x-2 md:space-x-3 mt-8 lg:mt-12">
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2.5 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                index === currentIndex
                                    ? `${carouselSlides[currentIndex].accentBg} w-6 md:w-8`
                                    : 'bg-white/30 hover:bg-white/50 w-2.5 md:w-3'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}