'use client'
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Packages data with links
const packages = [
  {
    title: "Cox's Bazar",
    description:
      "3 Nights-8000/- per person",
    image: "/img/coxs-bazar.jpg",
    gradient: "from-red-500 to-orange-500",
    link: "/contact",
  },
  {
    title: "Sajek",
    description:
      "2 Nights-7000/- per person",
    image: "/img/sajek.jpg",
    gradient: "from-blue-500 to-cyan-500",
    link: "/contact",
  },
  {
    title: "Sundarban",
    description:
      "2 Nights-8000/- per person",
    image: "/img/sundarban.jpg",
    gradient: "from-purple-500 to-pink-500",
    link: "/contact",
  },
  {
    title: "Thailand",
    description:
      "5 Nights-60000/- per person",
    image: "/img/thailand.jpg",
    gradient: "from-green-500 to-emerald-500",
    link: "/contact",
  },
  {
    title: "India",
    description:
      "7 Nights-30000/- per person",
    image: "/img/india.jpg",
    gradient: "from-yellow-500 to-amber-500",
    link: "/contact",
  },
  {
    title: "Singapore",
    description:
      "7 Nights-150000/- per person",
    image: "/img/singapore.jpg",
    gradient: "from-indigo-500 to-purple-500",
    link: "/contact",
  },
];

// Type definitions
interface Package {
  title: string;
  description: string;
  image: string;
  gradient: string;
  link: string;
}

interface PackageCardProps {
  item: Package;
  index: number;
}

interface PackagesProps {
  title?: string;
  description?: string;
  heroImage?: string;
}

// Package Card Component
function PackageCard({ item, index }: PackageCardProps) {
  return (
    <div
      className="group relative h-full bg-slate-900 dark:bg-gray-800 overflow-hidden shadow-lg flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-t ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Title and Button Row */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-red-500">
            {item.title}
          </h3>
          
          {/* Explore Button with Link */}
          <Link href={item.link}>
            <button className="group/btn inline-flex items-center gap-1.5 text-green-500 font-medium hover:transition-all">
              Reach Us
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-all duration-500 pointer-events-none" />

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none`}
      />
    </div>
  );
}

// Hero Section Component
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bail text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-up">
          {description}
        </p>
      </div>
    </div>
  );
}

// Main Component
export default function Packages({
  title = "Exclusive Tour Packages",
  description = "Discover curated travel itineraries, breathtaking destinations, and seamless holiday packages designed for your next adventure",
}: PackagesProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title={title} description={description} />

      {/* Packages Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((item, index) => (
              <PackageCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}