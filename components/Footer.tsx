import React from 'react';
import { Activity, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                   <Activity className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Harmayn<span className="text-blue-500">RCM</span>
                </span>
             </div>
             <p className="text-sm leading-relaxed mb-6">
               Providing top-tier revenue cycle management solutions to healthcare providers worldwide.
             </p>

             {/* UPDATED SOCIAL LINKS */}
             <div className="flex gap-4">
               <a 
                 href="https://www.linkedin.com/company/harmayn-rcm/?viewAsMember=true" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-blue-500 transition-colors"
               >
                 <Linkedin className="h-5 w-5" />
               </a>

               <a href="#" className="hover:text-blue-500 transition-colors">
                 <Twitter className="h-5 w-5" />
               </a>

               <a href="#" className="hover:text-blue-500 transition-colors">
                 <Facebook className="h-5 w-5" />
               </a>
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Medical Billing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coding Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AR Recovery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credentialing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get the latest healthcare billing news.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-l-lg outline-none focus:border-blue-600 w-full" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Harmayn RCM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
