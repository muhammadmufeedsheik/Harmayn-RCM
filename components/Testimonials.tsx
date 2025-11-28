import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Harmayn RCM transformed our billing process. We went from a 12% denial rate to under 3% in just four months. Their team is responsive and knowledgeable.",
    author: "Dr. Sarah Jenkins",
    role: "Cardiologist",
    clinic: "Heart Care Specialists"
  },
  {
    content: "Outsourcing to Harmayn was the best financial decision we made this year. The transparency in reporting lets me sleep at night knowing our revenue is safe.",
    author: "Mark Thompson",
    role: "Practice Manager",
    clinic: "City View Family Practice"
  },
  {
    content: "Professional, ethical, and efficient. They handled our credentialing nightmare with ease and got us back on track with major payers quickly.",
    author: "Dr. Emily Chen",
    role: "Dermatologist",
    clinic: "Radiant Skin Clinic"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Trusted by Providers</h2>
          <p className="mt-4 text-xl text-slate-600">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <Quote className="h-10 w-10 text-blue-200 mb-6" />
              <p className="text-slate-700 italic mb-6 flex-grow text-lg">"{t.content}"</p>
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                 <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl">
                    {t.author.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900">{t.author}</h4>
                    <p className="text-sm text-slate-500">{t.role}, {t.clinic}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
