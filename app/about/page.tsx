import Image from 'next/image';
import Link from 'next/link';

// Hero Section Component exactly matching the shared Umrah component layout design
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

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-slate-900 text-white transition-colors duration-300 overflow-x-hidden font-sans">
      
      {/* Standardized Global Hero Section matching the exact Umrah size constraints */}
      <HeroSection
        title="Who We Are"
        description="Discover our journey, our values, and why travelers trust Raima International to curate their global experiences."
      />

      {/* Main Content Layout */}
      <section className="py-24 px-4 md:px-8 lg:px-16 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full space-y-16 md:space-y-0">
          
          {/* Top Row: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative w-full aspect-[16/10] overflow-hidden rounded-sm shadow-md">
              <Image
                src="/img/premium.avif"
                alt="Beautiful travel destination curated by Raima International"
                fill
                sizes="(max-w-768px) 100vw, 58vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="md:col-span-5 md:pl-8 flex flex-col justify-center">
              <span className="text-orange-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                Crafting journeys that stay with you forever.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                Founded in 2025, Raima International Travel was established with a vision to make global travel more accessible, inspiring, and unforgettable. Driven by a passion for exploration and excellence, we are committed to connecting travelers with the world's most remarkable destinations through personalized and professionally curated travel solutions.
              </p>
            </div>
          </div>

          {/* Bottom Row: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-12 md:pt-0 md:mt-20">
            <div className="order-2 md:order-1 md:col-span-5 md:pr-8 flex flex-col justify-center md:items-end md:text-right">
              <span className="text-orange-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Why Choose Raima International
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                Premium comfort, end-to-end expertise.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-md md:ml-auto">
                We handle the complex details—from premium accommodations and flight booking to tailored excursions and 24/7 on-trip assistance. All you need to do is pack your bags and live the moment.
              </p>
            </div>

            <div className="order-1 md:order-2 md:col-span-7 relative w-full aspect-[16/10] overflow-hidden rounded-sm shadow-md">
              <Image
                src="/img/tour.jpg"
                alt="Premium travel experience with Raima International Travel"
                fill
                sizes="(max-w-768px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Footer CTA Area */}
          <div className="text-center pt-20 flex flex-col items-center gap-4">
            <div className="mt-8">
              <Link href="/contact">
                <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 group text-base sm:text-lg tracking-wide uppercase cursor-pointer">
                  <span className="relative z-10">Plan Your Dream Holiday</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
            <p className="text-slate-400 text-[10px] font-semibold tracking-[0.15em] uppercase mt-2">
              Let's start your story — consult our travel specialists today
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}