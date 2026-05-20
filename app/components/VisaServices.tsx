// app/components/VisaServices.tsx
import React from 'react';

interface VisaCardProps {
  country: string;
  description: string;
  price: string;
  bgImage?: string;
}

const VisaCard: React.FC<VisaCardProps> = ({ 
  country, 
  description, 
  price,
  bgImage = "https://images.unsplash.com/photo-1533488765983-d5c5a15f7a5f?w=600&h=400&fit=crop" 
}) => {
  return (
    <div 
      className="relative rounded-2xl overflow-hidden shadow-lg group"
      style={{ height: "420px" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Dynamic Overlay - Changes based on theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 dark:from-black/90 dark:via-black/60 dark:to-black/40" />
      
      {/* Content - Bottom aligned with transparent bar effect */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Transparent/Glassmorphism Bar for Price and Text - Light/Dark mode compatible */}
        <div className="backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-2xl p-5 border border-white/20 dark:border-white/10 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">
            {country}
          </h3>
          
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="pt-3 border-t border-white/20 dark:border-white/10">
            <p className="text-3xl font-bold text-white">
              {price}
            </p>
            <p className="text-white/60 text-xs uppercase tracking-wide mt-1 font-medium">
              SERVICE CHARGE INCL/PERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VisaServices: React.FC = () => {
  const title = "Visa Services";
  
  const visaData = [
    {
      country: "Thailand",
      description: "Thailand Visa For Bangladesh - Application & Requirements",
      price: "৳8,000",
      bgImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=500&fit=crop"
    },
    {
      country: "Australia",
      description: "Australia Tourist Visa Requirements For Bangladesh",
      price: "৳30,000",
      bgImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=500&fit=crop"
    },
    {
      country: "Malaysia",
      description: "Malaysia Visa Application & Requirements For Bangladesh",
      price: "৳6,000",
      bgImage: "https://images.unsplash.com/photo-1519631128182-433895475ffe?w=600&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl tracking-tight font-source text-gray-900 dark:text-white sm:text-3xl md:text-5xl mb-4">
            {title}
          </h2>

          <div className="relative inline-block">
            <div className="relative inline-block">
              <div className="w-24 h-1 bg-orange-500 dark:bg-orange-400 rounded-full mb-1 mx-auto"></div>
              <div className="w-16 h-1 bg-orange-500 dark:bg-orange-400 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaData.map((visa, index) => (
            <VisaCard
              key={index}
              country={visa.country}
              description={visa.description}
              price={visa.price}
              bgImage={visa.bgImage}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>* Service charges include all processing fees. Embassy fees may apply separately.</p>
        </div>
      </div>
    </div>
  );
};

export default VisaServices;