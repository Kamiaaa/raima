import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Feature card data
const features = [
  {
    title: "Bangladesh",
    description:
      "Comprehensive academic programs designed for excellence and innovation in education.",
    image: "https://images.unsplash.com/photo-1720180434910-50c97e34e20c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Thailand",
    description:
      "Experienced and dedicated faculty committed to student success and mentorship.",
    image: "https://images.unsplash.com/photo-1663475377409-0640fca306ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "India",
    description:
      "State-of-the-art library with vast resources and quiet study spaces.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Malaysia",
    description:
      "State-of-the-art library with vast resources and quiet study spaces.",
    image: "https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Singapore",
    description:
      "State-of-the-art library with vast resources and quiet study spaces.",
    image: "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Nepal",
    description:
      "State-of-the-art library with vast resources and quiet study spaces.",
    image: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-green-500 to-emerald-500",
  },
];

// Type definitions
interface Feature {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

interface TopFeaturesProps {
  title?: string;
  description?: string;
}

// Feature Card Component
function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div
      className="group relative h-full bg-slate-800 rounded-2xl overflow-hidden shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        {/* Title + Explore (Justified between) */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          {/* Feature Title */}
          <h3 className="text-xl font-semibold text-white drop-shadow-md">
            {feature.title}
          </h3>

          {/* Explore Button */}
          {/* <button className="group/btn inline-flex items-center gap-1.5 text-white font-medium hover:transition-all">
            Reach Us
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button> */}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-slate-700 rounded-2xl transition-all duration-500 pointer-events-none" />

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none`}
      />
    </div>
  );
}

// Main Component
export default function TopCountries({
  title = "Desired Vacation Country",
}: TopFeaturesProps) {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl tracking-tight font-source text-white sm:text-3xl md:text-5xl mb-4">
            {title}
          </h2>

          <div className="relative inline-block">
            <div className="relative inline-block">
              <div className="w-24 h-1 bg-orange-400 rounded-full mb-1 mx-auto"></div>
              <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}