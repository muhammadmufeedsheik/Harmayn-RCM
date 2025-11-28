import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Lock } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase mb-2">Why Choose Harmayn RCM?</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Results Driven.<br />Integrity Focused.</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don't just process claims; we analyze your entire revenue cycle to find hidden leaks and opportunities. Our dedicated team acts as an extension of your practice.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-600/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Increase Revenue by 20%</h4>
                    <p className="text-slate-400">Our rigorous denial management and coding accuracy typically yields a significant boost in net collections within the first 90 days.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-teal-600/20 rounded-lg">
                      <Clock className="h-6 w-6 text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Faster Turnaround</h4>
                    <p className="text-slate-400">We submit clean claims within 24 hours of receipt, drastically reducing the time it takes for money to hit your bank account.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-purple-600/20 rounded-lg">
                      <Lock className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Data Security First</h4>
                    <p className="text-slate-400">Your patient data is sacred. We utilize state-of-the-art encryption and are fully HIPAA compliant.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl opacity-30 blur-2xl"></div>
             <img
                src="https://picsum.photos/600/800"
                alt="Team working"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px] border border-slate-700"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
