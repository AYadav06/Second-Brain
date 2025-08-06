// src/components/Hero.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate=useNavigate()
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-7xl">
        Your Second Brain, Reimagined.
      </h1>
      <p className="max-w-2xl my-6 text-lg text-gray-400">
        Mind-OS is your personal knowledge engine. Effortlessly capture your thoughts, 
        connect disparate ideas, and build a digital extension of your mind. Turn chaos into clarity.
      </p>
      <button onClick={()=>navigate("/signup")}className="px-6 py-3 text-lg font-semibold text-white transition-colors rounded-lg bg-primary-dark hover:bg-primary">
        → Get Started For Free
      </button>
    </section>
  );
};

