'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Carousel.module.css';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImageCycle, setCurrentImageCycle] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isImageCycling, setIsImageCycling] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [imageTransitionState, setImageTransitionState] = useState<'idle' | 'switching'>('idle');
    const [nextImages, setNextImages] = useState<any>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const imageCycleCountRef = useRef(0);
    const slideRotationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Check for mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Travel destination slides for Raima Travel
    const slides = [
        {
            id: 1,
            title: "Discover Paradise",
            subtitle: "Sundarbans Mangrove Forest",
            buttonText: "Book This Tour",
            buttonLink: "/packages",
            gradient: "from-emerald-600/20 to-teal-600/20",
            pattern: "dots",
            items: [
                {
                    id: 'slide1-item1',
                    name: 'Royal Bengal Tiger Safari',
                    image: "https://images.unsplash.com/photo-1720180434910-50c97e34e20c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    color: 'border-emerald-500',
                    category: 'Wildlife Safari'
                },
                {
                    id: 'slide1-item2',
                    name: 'Mangrove River Cruise',
                    image: "https://images.unsplash.com/photo-1663475377409-0640fca306ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    color: 'border-teal-500',
                    category: 'Boat Tour'
                },
                {
                    id: 'slide1-item3',
                    name: 'Local Village Experience',
                    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    color: 'border-green-500',
                    category: 'Cultural Tour'
                }
            ]
        },
        {
            id: 2,
            title: "Bangladesh's Most",
            subtitle: "Breathtaking Hill Tracts",
            buttonText: "Explore Packages",
            buttonLink: "/packages",
            gradient: "from-orange-600/20 to-amber-600/20",
            pattern: "waves",
            items: [
                {
                    id: 'slide2-item1',
                    name: 'Sajek Valley Trek',
                    image: "https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    color: 'border-orange-500',
                    category: 'Adventure Trek'
                },
                {
                    id: 'slide2-item2',
                    name: 'Boga Lake Camping',
                    image: "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    color: 'border-yellow-500',
                    category: 'Camping'
                },
                {
                    id: 'slide2-item3',
                    name: 'Indigenous Culture Tour',
                    image: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    color: 'border-amber-500',
                    category: 'Cultural Experience'
                }
            ]
        },
        {
            id: 3,
            title: "Unforgettable",
            subtitle: "Cox's Bazar Sea Beach",
            buttonText: "View Packages",
            buttonLink: "/packages",
            gradient: "from-blue-600/20 to-cyan-600/20",
            pattern: "circuits",
            items: [
                {
                    id: 'slide3-item1',
                    name: 'Sunset Beach Walk',
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=870&auto=format&fit=crop",
                    color: 'border-blue-500',
                    category: 'Beach Tour'
                },
                {
                    id: 'slide3-item2',
                    name: 'Himchari Waterfall',
                    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=870&auto=format&fit=crop",
                    color: 'border-cyan-500',
                    category: 'Nature Hike'
                },
                {
                    id: 'slide3-item3',
                    name: 'Marine Drive Cycling',
                    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=870&auto=format&fit=crop",
                    color: 'border-sky-500',
                    category: 'Cycling Tour'
                }
            ]
        },
        {
            id: 4,
            title: "Explore Ancient",
            subtitle: "Mahasthangarh Ruins",
            buttonText: "Book Heritage Tour",
            buttonLink: "/contact",
            gradient: "from-rose-600/20 to-pink-600/20",
            pattern: "particles",
            items: [
                {
                    id: 'slide4-item1',
                    name: 'Ancient City Tour',
                    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=870&auto=format&fit=crop",
                    color: 'border-rose-500',
                    category: 'Historical Tour'
                },
                {
                    id: 'slide4-item2',
                    name: 'Archaeological Museum Visit',
                    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop",
                    color: 'border-pink-500',
                    category: 'Museum Tour'
                },
                {
                    id: 'slide4-item3',
                    name: 'Local Handicraft Bazaar',
                    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=870&auto=format&fit=crop",
                    color: 'border-red-500',
                    category: 'Shopping Tour'
                }
            ]
        }
    ];

    // Define clockwise rotation sequences for each position
    const getRotatedImages = (cycleIndex: number) => {
        const items = slides[currentSlide].items;
        // Clockwise rotation: Main → Small → Side → Main
        const clockwiseRotations = [
            { main: items[0], small: items[2], side: items[1] },
            { main: items[2], small: items[1], side: items[0] },
            { main: items[1], small: items[0], side: items[2] },
            { main: items[0], small: items[2], side: items[1] },
        ];
        return clockwiseRotations[cycleIndex % clockwiseRotations.length];
    };

    const rotatedImages = getRotatedImages(currentImageCycle);

    // Get next images for flying effect preview
    const getNextImages = () => {
        const nextCycle = (currentImageCycle + 1) % 4;
        return getRotatedImages(nextCycle);
    };

    // Enhanced switching effect with scale and rotation
    const switchToNextImage = () => {
        if (imageTransitionState === 'switching') return;

        setNextImages(getNextImages());
        setImageTransitionState('switching');

        // Wait for switching animation to complete, then update image
        setTimeout(() => {
            setCurrentImageCycle((prev) => {
                const nextCycle = prev + 1;
                const completedCycle = (nextCycle % 4) === 0;

                // If we've completed a full cycle (4 images), trigger slide change
                if (completedCycle && isImageCycling && !isPaused) {
                    if (slideRotationTimeoutRef.current) {
                        clearTimeout(slideRotationTimeoutRef.current);
                    }

                    slideRotationTimeoutRef.current = setTimeout(() => {
                        nextSlide();
                    }, 500);
                }

                return nextCycle % 4;
            });
            setImageTransitionState('idle');
            setNextImages(null);
        }, 700);
    };

    const nextSlide = () => {
        setCurrentImageCycle(0);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        imageCycleCountRef.current = 0;
    };

    const prevSlide = () => {
        if (slideRotationTimeoutRef.current) {
            clearTimeout(slideRotationTimeoutRef.current);
        }

        setCurrentImageCycle(0);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        imageCycleCountRef.current = 0;
    };

    const goToSlide = (index: number) => {
        if (slideRotationTimeoutRef.current) {
            clearTimeout(slideRotationTimeoutRef.current);
        }

        setCurrentImageCycle(0);
        setCurrentSlide(index);
        imageCycleCountRef.current = 0;
    };

    // Effect for clockwise image rotation within a slide
    useEffect(() => {
        if (!isImageCycling || isPaused) return;

        const imageRotationInterval = setInterval(() => {
            switchToNextImage();
        }, 3000);

        return () => clearInterval(imageRotationInterval);
    }, [isImageCycling, isPaused, imageTransitionState, currentSlide]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (slideRotationTimeoutRef.current) {
                clearTimeout(slideRotationTimeoutRef.current);
            }
        };
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isMobile) return;
        setIsPaused(true);

        if (slideRotationTimeoutRef.current) {
            clearTimeout(slideRotationTimeoutRef.current);
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!isMobile) return;
        setTimeout(() => setIsPaused(false), 1000);
    };

    const slide = slides[currentSlide];

    // Enhanced animation classes with multiple effects
    const getImageSwitchClass = (position: 'main' | 'small' | 'side', isNextImage: boolean = false) => {
        if (!isNextImage && imageTransitionState === 'switching') {
            if (position === 'main') return styles['animate-switch-out-main'];
            if (position === 'small') return styles['animate-switch-out-small'];
            return styles['animate-switch-out-side'];
        }
        if (isNextImage && imageTransitionState === 'switching') {
            if (position === 'main') return styles['animate-switch-in-main'];
            if (position === 'small') return styles['animate-switch-in-small'];
            return styles['animate-switch-in-side'];
        }
        return '';
    };

    return (
        <section
            ref={carouselRef}
            className={`px-4 py-8 bg-neutral-100 dark:bg-gray-900 lg:py-10 relative overflow-hidden min-h-1/2 flex flex-col justify-center ${styles['background-container']}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Animated Gradient Orbs */}
            <div className={`${styles['gradient-orb']} ${styles['orb-1']}`} />
            <div className={`${styles['gradient-orb']} ${styles['orb-2']}`} />
            <div className={`${styles['gradient-orb']} ${styles['orb-3']}`} />
            
            {/* Animated Pattern Overlay */}
            <div className={`${styles['pattern-overlay']} ${styles[slide.pattern]}`} />
            
            {/* Floating Particles */}
            <div className={styles['particles-container']}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={`${styles['particle']} ${styles[`particle-${i % 3}`]}`} />
                ))}
            </div>
            
            {/* Signal Waves Animation - Adapted for Travel */}
            <div className={styles['signal-waves']}>
                <div className={styles['wave']} />
                <div className={styles['wave']} />
                <div className={styles['wave']} />
            </div>
            
            {/* Rotating Tech Rings - Adapted as Compass Rings for Travel */}
            <div className={styles['tech-rings']}>
                <div className={styles['ring']} />
                <div className={styles['ring']} />
                <div className={styles['ring']} />
            </div>

            {/* Gradient Mesh Background */}
            <div className={`${styles['gradient-mesh']} bg-gradient-to-br ${slide.gradient}`} />

            {/* Content Container */}
            <div className="relative h-full w-full max-w-7xl mx-auto pt-20 md:pt-12 z-10">
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-8 lg:gap-12 h-full">
                    {/* Text Content with enhanced animations */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center lg:text-left px-4 lg:px-0">
                        <p className={`text-3xl sm:text-4xl md:text-5xl font-source font-bold lg:text-7xl text-orange-500 mb-2 ${styles['text-slide-in']}`}>
                            {slide.title}
                        </p>
                        <p className={`text-xl sm:text-2xl md:text-3xl font-source font-bold lg:text-5xl text-black dark:text-white mb-4 ${styles['text-slide-in-delay']}`}>
                            {slide.subtitle}
                        </p>

                        {/* Enhanced Button Link with proper routing */}
                        <Link 
                            href={slide.buttonLink}
                            className={`relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white font-source font-semibold py-2 sm:py-2 px-3 sm:px-4 mt-4 sm:mt-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group text-base sm:text-lg lg:text-lg inline-block ${styles['button-pop-in']}`}
                        >
                            <span className="relative z-10">{slide.buttonText}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </Link>
                    </div>

                    {/* Image Layout with Enhanced Animations */}
                    <div className="order-1 lg:order-2 w-full max-w-4xl">
                        <div className="flex flex-col lg:h-[70vh] justify-center items-center">
                            <div className="relative w-full max-w-md lg:max-w-none px-4 lg:px-0">
                                {/* Mobile & Tablet Layout */}
                                <div className="lg:hidden flex flex-col items-center space-y-4 sm:space-y-6">
                                    {/* Main Image */}
                                    <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 overflow-hidden group rounded-xl shadow-2xl">
                                        <div className={`relative w-full h-full transition-all duration-700 ${getImageSwitchClass('main')}`}>
                                            <Image
                                                src={rotatedImages.main.image}
                                                alt={`${rotatedImages.main.name} - Raima Travel Experience`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 384px"
                                                priority={currentSlide === 0}
                                                quality={isMobile ? 75 : 85}
                                            />
                                        </div>
                                        {nextImages && imageTransitionState === 'switching' && (
                                            <div className={`absolute inset-0 transition-all duration-700 ${getImageSwitchClass('main', true)}`}>
                                                <Image
                                                    src={nextImages.main.image}
                                                    alt="Next destination image switching in"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 384px"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl"></div>
                                    </div>

                                    {/* Small & Side Images Grid */}
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                                        <div className="relative w-full h-36 xs:h-40 sm:h-44 md:h-48 overflow-hidden group rounded-xl shadow-lg">
                                            <div className={`relative w-full h-full transition-all duration-700 ${getImageSwitchClass('small')}`}>
                                                <Image
                                                    src={rotatedImages.small.image}
                                                    alt={`${rotatedImages.small.name} - Tour detail`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, 192px"
                                                    quality={isMobile ? 75 : 85}
                                                />
                                            </div>
                                            {nextImages && imageTransitionState === 'switching' && (
                                                <div className={`absolute inset-0 transition-all duration-700 ${getImageSwitchClass('small', true)}`}>
                                                    <Image
                                                        src={nextImages.small.image}
                                                        alt="Next destination image switching in"
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, 192px"
                                                    />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl"></div>
                                        </div>

                                        <div className="relative w-full h-36 xs:h-40 sm:h-44 md:h-48 overflow-hidden group rounded-xl shadow-lg">
                                            <div className={`relative w-full h-full transition-all duration-700 ${getImageSwitchClass('side')}`}>
                                                <Image
                                                    src={rotatedImages.side.image}
                                                    alt={`${rotatedImages.side.name} - Additional view`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, 268px"
                                                    quality={isMobile ? 75 : 85}
                                                />
                                            </div>
                                            {nextImages && imageTransitionState === 'switching' && (
                                                <div className={`absolute inset-0 transition-all duration-700 ${getImageSwitchClass('side', true)}`}>
                                                    <Image
                                                        src={nextImages.side.image}
                                                        alt="Next destination image switching in"
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, 268px"
                                                    />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden lg:block relative w-full h-[500px]">
                                    {/* Main Image - Enhanced with 3D effect */}
                                    <div className="absolute left-0 top-0 w-[307px] h-[360px] overflow-hidden group z-10 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                                        <div className={`relative w-full h-full transition-all duration-700 ${getImageSwitchClass('main')}`}>
                                            <Image
                                                src={rotatedImages.main.image}
                                                alt={`${rotatedImages.main.name} - Raima Travel Main Destination`}
                                                fill
                                                className="object-cover"
                                                sizes="307px"
                                                priority={currentSlide === 0}
                                            />
                                        </div>
                                        {nextImages && imageTransitionState === 'switching' && (
                                            <div className={`absolute inset-0 transition-all duration-700 ${getImageSwitchClass('main', true)}`}>
                                                <Image
                                                    src={nextImages.main.image}
                                                    alt="Next destination image switching in"
                                                    fill
                                                    className="object-cover"
                                                    sizes="307px"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                                    </div>

                                    {/* Side Image */}
                                    <div className="absolute left-[320px] top-[150px] w-[269px] h-[210px] overflow-hidden group z-20 rounded-xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                        <div className={`relative w-full h-full transition-all duration-700 ${getImageSwitchClass('side')}`}>
                                            <Image
                                                src={rotatedImages.side.image}
                                                alt={`${rotatedImages.side.name} - Destination side view`}
                                                fill
                                                className="object-cover"
                                                sizes="269px"
                                            />
                                        </div>
                                        {nextImages && imageTransitionState === 'switching' && (
                                            <div className={`absolute inset-0 transition-all duration-700 ${getImageSwitchClass('side', true)}`}>
                                                <Image
                                                    src={nextImages.side.image}
                                                    alt="Next destination image switching in"
                                                    fill
                                                    className="object-cover"
                                                    sizes="269px"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
                                    </div>

                                    {/* Small Image */}
                                    <div className="absolute left-[200px] top-[310px] w-[192px] h-[150px] overflow-hidden group z-30 rounded-lg shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                                        <div className={`relative w-full h-full transition-all duration-700 ${getImageSwitchClass('small')}`}>
                                            <Image
                                                src={rotatedImages.small.image}
                                                alt={`${rotatedImages.small.name} - Destination detail view`}
                                                fill
                                                className="object-cover transition-all duration-500 group-hover:scale-110"
                                                sizes="192px"
                                            />
                                        </div>
                                        {nextImages && imageTransitionState === 'switching' && (
                                            <div className={`absolute inset-0 transition-all duration-700 ${getImageSwitchClass('small', true)}`}>
                                                <Image
                                                    src={nextImages.small.image}
                                                    alt="Next destination image switching in"
                                                    fill
                                                    className="object-cover transition-all duration-500 group-hover:scale-110"
                                                    sizes="192px"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="focus:outline-none transition-all duration-300 group"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div className="relative">
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                ? 'bg-orange-500 dark:bg-orange-600 scale-150 shadow-lg shadow-orange-500/50'
                                : 'bg-orange-300 dark:bg-orange-700 hover:bg-orange-400 dark:hover:bg-orange-600'
                                }`} />

                            {currentSlide === index && (
                                <>
                                    <div className="absolute inset-0 -m-1 border-2 border-orange-500 dark:border-orange-600 rounded-full animate-ping opacity-60" />
                                    <div className="absolute inset-0 -m-1.5 border border-orange-400 rounded-full animate-pulse opacity-40" />
                                </>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}