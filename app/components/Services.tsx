// app/components/ServicesSection.tsx
import React from 'react';

// Define the structure for a single service
interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

// List of services with relevant SVG icons
const services: Service[] = [
  {
    name: 'Air Ticketing',
    description: 'Find the best flight deals with our extensive network of airlines. We offer competitive prices and 24/7 support for all your domestic and international travel needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3 3m0 0l-3 3m3-3H3" />
      </svg>
    ),
  },
  {
    name: 'Hotel Reservations',
    description: 'Discover comfortable stays from budget-friendly to luxury accommodations. Get exclusive rates and seamless booking at thousands of hotels worldwide.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    name: 'Visa Assistance',
    description: 'Navigate the complex visa process with ease. Our experts provide document checking, form filling, and interview guidance for various destinations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 2.91.879 4.08 0l.879-.659M18 8.5A2.5 2.5 0 0120.5 6h-13A2.5 2.5 0 0110 8.5m8 0v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 15.5v-7A2.5 2.5 0 014.5 6h13A2.5 2.5 0 0118 8.5z" />
      </svg>
    ),
  },
  {
    name: 'Car Rental Services',
    description: 'Enjoy the freedom to explore at your own pace. Choose from a wide range of vehicles with flexible pick-up and drop-off options worldwide.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.22-1.113-.615-1.53a15.041 15.041 0 00-2.084-1.575 2.195 2.195 0 00-2.471 0L6.75 5.114c-.44.27-.802.645-1.063 1.078A1.5 1.5 0 005.25 7.812v.958m0 0l-1.5 4.5m16.5-4.5l-1.5 4.5m-15 0h15m-15 0H3.375m15 0h1.125" />
      </svg>
    ),
  },
  {
    name: 'Tour Packages',
    description: 'Experience curated journeys to the world\'s most amazing destinations. All-inclusive packages with expert guides and unique activities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    name: 'Umrah Services',
    description: 'Spiritual journeys made easy and comfortable. We provide complete Umrah packages including visas, accommodations, and transportation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 2.91.879 4.08 0l.879-.659M18 8.5A2.5 2.5 0 0120.5 6h-13A2.5 2.5 0 0110 8.5m8 0v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 15.5v-7A2.5 2.5 0 014.5 6h13A2.5 2.5 0 0118 8.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L12 15.75L15 12.75" />
      </svg>
    ),
  },
  {
    name: 'International Destinations',
    description: 'Explore breathtaking locations across the globe. From European charm to Asian wonders, start your international adventure with us.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: 'Domestic Destinations',
    description: 'Uncover the beauty of your own country. Weekend getaways, hill stations, and cultural hotspots await your discovery.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500 dark:text-orange-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 3.75H6.75a3 3 0 00-3 3v2.25" />
      </svg>
    ),
  },
];

const ServicesSection: React.FC = () => {
  const title = "Comprehensive Travel Solutions";

  return (
    <div className="bg-gray-200 dark:bg-gray-900 px-2 py-16 md:py-20 transition-colors duration-300">
      <div id="features" className="mx-auto max-w-6xl">
        {/* Section Header with requested design */}
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

        {/* Services Grid - Responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <ul className="mt-12 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="rounded-xl bg-white dark:bg-gray-800 px-6 py-8 shadow-sm dark:shadow-gray-900/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {service.href ? (
                <a href={service.href} className="group block">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="my-3 font-display text-xl font-semibold text-slate-800 dark:text-white transition-colors group-hover:text-orange-500 dark:group-hover:text-orange-400">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </a>
              ) : (
                <>
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="my-3 font-display text-xl font-semibold text-slate-800 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;