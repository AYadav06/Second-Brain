// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-4 py-16 text-center bg-dark-bg border-t border-gray-800">
      <div className="grid max-w-4xl gap-8 mx-auto mb-12 text-left sm:grid-cols-3">
        <div className="footer-column">
          <h4 className="mb-4 text-lg font-semibold text-white">Product</h4>
          <a href="#features" className="block mb-2 text-gray-400 transition-colors hover:text-primary">Features</a>
          <a href="#pricing" className="block mb-2 text-gray-400 transition-colors hover:text-primary">Pricing</a>
         
        </div>
        <div className="footer-column">
          <h4 className="mb-4 text-lg font-semibold text-white">Company</h4>
          <a href="#about" className="block mb-2 text-gray-400 transition-colors hover:text-primary">About Us</a>
          <a href="#blog" className="block mb-2 text-gray-400 transition-colors hover:text-primary">Blog</a>
          {/* <a href="#careers" className="block mb-2 text-gray-400 transition-colors hover:text-primary">Careers</a> */}
        </div>
        <div className="footer-column">
          <h4 className="mb-4 text-lg font-semibold text-white">Support</h4>
          {/* <a href="#help" className="block mb-2 text-gray-400 transition-colors hover:text-primary">Help Center</a> */}
          <a href="#contact" className="block mb-2 text-gray-400 transition-colors hover:text-primary">Contact Us</a>
          <a href="#privacy" className="block mb-2 text-gray-400 transition-colors hover:text-primary">Privacy Policy</a>
        </div>
      </div>
      <p className="text-gray-500">&copy; {new Date().getFullYear()} Mind-OS. All rights reserved.</p>
    </footer>
  );
};

