// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Lucide Icons matching layout structure
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  HelpCircle,
  Hotel,
  Plane,
  Palmtree,
  Compass,
  Camera,
  HeartHandshake,
} from 'lucide-react';

// Custom clean simple SVGs for socials
const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const pathname = usePathname();

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tour Packages', href: '/packages' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Honeymoon Special', href: '/honeymoon' },
    { name: 'Group Tours', href: '/group-tours' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const travelFeatures = [
    { name: 'Best Hotels', icon: <Hotel className="w-4 h-4" /> },
    { name: 'Flight Booking', icon: <Plane className="w-4 h-4" /> },
    { name: 'Beach Tours', icon: <Palmtree className="w-4 h-4" /> },
    { name: 'Adventure Trips', icon: <Compass className="w-4 h-4" /> },
    { name: 'Photo Tours', icon: <Camera className="w-4 h-4" /> },
    { name: '24/7 Support', icon: <HeartHandshake className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+880 1730068845', link: 'tel:+8801730068845' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'info@raimatravel.com.bd', link: 'mailto:info@raimatravel.com.bd' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: "Police Plaza Concord, Tower-02, (7th Floor) Plot # 02 Road # 144, Gulshan-1 Dhaka 1212, Bangladesh.", link: null },
    { icon: <Clock className="w-5 h-5" />, label: 'Business Hours', value: 'Sun - Thu: 10:00 AM - 6:00 PM', link: null },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon />, href: 'https://facebook.com', color: 'hover:bg-[#1877f2]' },
    { name: 'Twitter', icon: <TwitterIcon />, href: 'https://twitter.com', color: 'hover:bg-[#1da1f2]' },
    { name: 'Instagram', icon: <InstagramIcon />, href: 'https://instagram.com', color: 'hover:bg-[#e1306c]' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://linkedin.com', color: 'hover:bg-[#0a66c2]' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-800 font-poppins">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Corporate Profile Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative w-40 h-20">
                <Image
                  src="/img/logo.png"
                  alt="Raima Travel Logo"
                  fill
                  loading="eager"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Raima Travel is your trusted partner for unforgettable journeys across Bangladesh and beyond. We craft personalized travel experiences that create lasting memories.
            </p>
          </div>

          {/* Quick Corporate Profile Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-all duration-200 group text-sm
                      ${pathname === link.href ? 'text-orange-500 font-medium' : ''}
                    `}
                  >
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Why Travel With Us?
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {travelFeatures.map((feature) => (
                <li key={feature.name} className="flex items-center gap-2 text-gray-400 group text-sm select-none">
                  <span className="text-slate-500 group-hover:text-orange-500 transition-colors">
                    {feature.icon}
                  </span>
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Communications & Support Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="text-orange-500 mt-0.5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm block leading-normal">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Breakline */}
        <div className="border-t border-slate-800 my-8 lg:my-10"></div>

        {/* Bottom Metadata Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright Assertions */}
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Raima International Travel. All rights reserved.
          </div>

          {/* External Social Profiles Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2.5 rounded-full bg-slate-800/60 text-gray-400 transition-all duration-200
                  ${social.color} hover:text-white hover:scale-110
                `}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Core Trust Metrics */}
          <div className="flex items-center gap-3 text-gray-500 text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500/60" />
              100% Verified Bookings
            </span>
            <span className="w-px h-3 bg-slate-800"></span>
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-orange-500/60" />
              24/7 Travel Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;