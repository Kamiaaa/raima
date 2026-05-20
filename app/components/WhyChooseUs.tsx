// components/WhyChooseUs.tsx
'use client';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaCheckCircle, 
  FaUsers, 
  FaShieldAlt, 
  FaHeadset, 
  FaAward,
  FaStar
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  imageSrc?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  title = "Why Choose Us",
  subtitle = "We Make Travel Simple & Affordable",
  features = [
    "Best price guarantee on all bookings",
    "24/7 dedicated customer support",
    "Expert travel consultants",
    "Secure and easy booking process",
    "Flexible payment options",
    "100% customer satisfaction"
  ],
  imageSrc = "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=800&q=80"
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const floatingCardVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with new title design */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950/50 rounded-full px-4 py-2 mb-6"
          >
            <FaAward className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
              {title}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl tracking-tight font-source text-gray-900 dark:text-white sm:text-3xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.h2>

          {/* Title underline decoration - matching the services section */}
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative inline-block">
              <div className="w-24 h-1 bg-orange-500 dark:bg-orange-400 rounded-full mb-1 mx-auto"></div>
              <div className="w-16 h-1 bg-orange-500 dark:bg-orange-400 rounded-full mx-auto"></div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            Discover why thousands of travelers trust us with their journeys
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features List */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Feature List with Checkmarks */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="h-6 w-6 text-orange-500" />
                What Makes Us Different
              </h3>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaCheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image with Floating Card */}
          <motion.div variants={imageVariants} className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={imageSrc}
                alt="Travel consultation"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Testimonial Card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 max-w-[240px] hidden sm:block"
              variants={floatingCardVariants}
              initial="initial"
              animate="animate"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Trusted by 10,000+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    happy travelers
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-orange-500 rounded-full p-3 shadow-lg hidden sm:block"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring" as const, stiffness: 200 }}
            >
              <FaShieldAlt className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;