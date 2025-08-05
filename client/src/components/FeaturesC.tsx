// src/components/Features.tsx
import React from 'react';

 export const FeaturesC: React.FC = () => {
  const featureData = [
    { icon: '🧠', title: 'Intelligent Capture', description: 'Save anything in an instant. Notes, articles, bookmarks, and fleeting thoughts are stored in one seamless inbox.' },
    { icon: '🔗', title: 'Automatic Connections', description: 'Mind-OS automatically discovers relationships between your notes, creating a dynamic knowledge graph you can explore visually.' },
    { icon: '🔍', title: 'Universal Search', description: 'Find anything, instantly. Our powerful search scans titles, content, and even the text within images and PDFs.' },
  ];
  return (
    <section id="features" className="max-w-6xl px-4 py-20 mx-auto text-center">
      <h2 className="mb-12 text-4xl font-bold md:text-5xl">A System Built for Flow</h2>
      <div className="grid gap-8 text-left md:grid-cols-2 lg:grid-cols-3 hover:animate-pulse">
        {featureData.map((feature, index) => (
          <div className="p-6 border border-gray-800 rounded-xl bg-black" key={index}>
            <div className="text-3xl text-primary">{feature.icon}</div>
            <h3 className="my-3 text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

 