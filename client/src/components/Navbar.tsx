
import React from 'react';

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H4C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.1533 20 8.49757 19.4121 7.15871 18.4323" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 12L15 15M12 12V6" stroke="currentColor" className="text-gray-100" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" className="fill-primary"/>
  </svg>
);

 export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 px-6 bg-dark-bg/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="text-2xl font-bold">Mind-OS</span>
      </div>
      <div className="hidden gap-8 font-medium md:flex">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 font-semibold text-white transition-colors border rounded-lg border-primary hover:bg-primary">
          Login
        </button>
        <button className="hidden px-4 py-2 font-semibold text-white transition-colors rounded-lg sm:block bg-primary hover:bg-primary-dark">
          Sign Up Free
        </button>
      </div>
    </nav>
  );
};
