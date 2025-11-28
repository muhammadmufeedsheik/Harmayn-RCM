import React from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign, Activity, ShieldCheck, Users, BarChart3 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Medical Billing',
    description: 'Comprehensive billing solutions ensuring accurate claim submission and faster reimbursement cycles.',
    icon: FileText,
  },
  {
    title: 'Coding & Auditing',
    description: 'Certified coders maximizing compliance and revenue with precise ICD-10 and CPT coding.',
    icon: ShieldCheck,
  },
  {
    title: 'AR Follow-Up',
    description: 'Aggressive follow-up on unpaid claims to reduce days in AR and improve cash flow significantly.',
    icon: DollarSign,
  },
  {
    title: 'Denial Management',
    description: 'Systematic analysis and correction of denied claims to recover revenue that belongs to you.',
    icon: Activity,
  },
  {
    title: 'Credentialing',
    description: 'Streamlined provider enrollment services to get you in-network with payers faster.',
    icon: Users,
  },
  {
    title: 'Reporting & Analytics',
    description: 'Transparent, real-time financial reports to help you make informed practice decisions.',
    icon: BarChart3,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Complete Revenue Cycle Solutions
          </p>
          <p className="mt-4 text-xl text-slate-600">
            We handle the paperwork so you can handle the patients. Tailored solutions for practices of all sizes.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
