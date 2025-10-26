// components/HeroSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DemandForm } from './DemandForm';

export default function HeroSection() {
  const [mainImage, setMainImage] = useState('/images/machianeAlavie.jpg');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const thumbnails = [
    { src: '/images/1.jpg', alt: 'غسالة أمامية' },
    { src: '/images/2.jpg', alt: 'غسالة مع شاشة' },
    { src: '/images/3.jpg', alt: 'غسالة من الخلف' },
    { src: '/images/4.jpg', alt: 'غسالة داخلية' },
  ];

  return (
    <section className="bg-white shadow-xl overflow-hidden">
      {/* Top Banner - Keep your gradient */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white w-full p-3 text-center text-sm sm:text-base font-medium">
        🎁 عرض خاص | خصم 20% + <strong>توصيل مجاني</strong> لفترة محدودة!
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#003366] via-[#004080] to-[#003366]" dir='ltr'>
        <div className="text-white text-lg font-bold tracking-wide">WashMachine</div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
        >
          📞 للطلب اضغط هنا
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200">
              <Image
                src={mainImage}
                alt="غسالة WashMachine"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-contain"
                priority
              />
            </div>
            <div className="flex justify-center gap-3 overflow-x-auto pb-2">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(thumb.src)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    mainImage === thumb.src
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Enhanced */}
          <div className="flex-1 space-y-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">
              غسالة أتوماتيكية متطورة من WashMachine
            </h1>

            {/* Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-gray-600 text-sm">(4.8 من أصل 5 — 240 تقييم)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-700">1,299 درهم</span>
              <span className="text-lg text-gray-500 line-through">1,599 درهم</span>
            </div>

            {/* Free Delivery Badge */}
            <div className="flex items-center gap-2 bg-green-100 text-green-800 py-2 px-4 rounded-lg w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">توصيل مجاني لجميع المدن</span>
            </div>

            {/* Key Features (Bullet Points) */}
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>ضمان 5 سنوات شامل</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>توفير في الكهرباء والماء حتى 40%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>شاشة ذكية + تحكم عبر التطبيق</span>
              </li>
            </ul>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium">
                🔒 دفع عند الاستلام
              </div>
              <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-xs font-medium">
                📦 استرجاع خلال 14 يوم
              </div>
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3.5 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              🛒 اطلب الآن — التوصيل غدًا!
            </button>

            {/* Urgency Note */}
            <p className="text-center text-red-600 font-medium text-sm mt-2">
              ⏳ العرض ينتهي خلال: <strong>23:59:59</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <DemandForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}