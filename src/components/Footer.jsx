import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Adventure Triangle</h3>
            <p className="text-gray-400 mb-6">
              Building the world's most trusted adventure marketplace. 
              Launching globally on January 26, 2026.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C9.01 2.013 9.365 2 11.695 2h.62zm-.08 1.802h-.585c-2.103 0-2.351.009-3.377.054-.922.04-1.422.187-1.756.34-.444.199-.792.497-1.004.881-.188.343-.32.877-.358 1.78-.043 1.015-.054 1.261-.054 3.357s.01 2.342.054 3.357c.038.903.17 1.437.358 1.78.212.384.56.682 1.004.881.334.153.834.3 1.756.34 1.026.045 1.274.054 3.377.054s2.351-.009 3.377-.054c.922-.04 1.422-.187 1.756-.34.444-.199.792-.497 1.004-.881.188-.343.32-.877.358-1.78.043-1.015.054-1.261.054-3.357s-.011-2.342-.054-3.357c-.038-.903-.17-1.437-.358-1.78a2.09 2.09 0 00-1.004-.881c-.334-.153-.834-.3-1.756-.34-1.026-.045-1.274-.054-3.377-.054zm0 4.507a4.492 4.492 0 100 8.983 4.492 4.492 0 000-8.983zm0 7.417a2.925 2.925 0 110-5.85 2.925 2.925 0 010 5.85zm5.457-7.586a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Beta Waitlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Partner Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Launch Event</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Safety Standards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">hello@adventuretriangle.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">+1 (437) 955-5710</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">Toronto, Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">Nepal | India | Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Adventure Triangle. All rights reserved. Launching January 26, 2026.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-400">Certified</span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                Adventure Safety Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;