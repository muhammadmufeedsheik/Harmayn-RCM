import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Medical Office Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-6">
              #1 Medical Billing Partner
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Optimizing Revenue, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Maximizing Care.
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Harmayn RCM simplifies the complex world of medical billing. We reduce denials, accelerate cash flow, and let you focus on what matters most—your patients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
              >
                Get Free Audit <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-bold hover:bg-white/20 transition-all border border-white/10"
              >
                Our Services
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-400" />
                <span>98% Clean Claim Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-400" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual/Illustration */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Using a placeholder for a sleek dashboard mockup or medical graphic */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-xl p-2">
              <img
                src="https://picsum.photos/800/600"
                alt="Analytics Dashboard"
                className="rounded-xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />

              {/* Floating Stats Card Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-blue-600 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-green-600 rotate-45" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Revenue Growth</p>
                    <p className="text-xl font-bold text-slate-900">+22.4%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
