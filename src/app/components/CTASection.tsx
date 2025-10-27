'use client';
import { useState } from 'react';
import { DemandForm } from './DemandForm';
import data from '../data/data.json';

const ctaData = data.ctaSection;

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 text-white relative overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
          {ctaData.badge.text}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          {ctaData.title}
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          {ctaData.description.text} <strong>{ctaData.description.highlighted}</strong>{ctaData.description.additional}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-yellow-500/30">
          {ctaData.button.text}
        </button>
        <p className="mt-6 text-sm opacity-80">
          {ctaData.urgency.text} <span className="font-mono">{ctaData.urgency.time}</span>
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && <DemandForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}