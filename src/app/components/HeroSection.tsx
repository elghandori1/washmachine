'use client';
import { useState } from 'react';
import Image from 'next/image';
import { DemandForm } from './DemandForm';
import data from '../data/data.json';

const heroData = data.heroSection;
const initialImages = data.carouselImages.src.map((src, index) => ({
  src,
  alt: data.carouselImages.alt[index] || `صورة ${index + 1}`,
}));

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState(initialImages[0].src);
  const [thumbnails, setThumbnails] = useState(initialImages.slice(1));
  
  const handleThumbnailClick = (clickedIndex: number) => {
    const clickedImage = thumbnails[clickedIndex];
    setMainImage(clickedImage.src);
    const newThumbnails = [...thumbnails];
    newThumbnails[clickedIndex] = { 
      src: mainImage, 
      alt: heroData.gallery.thumbnailAlt 
    };
    setThumbnails(newThumbnails);
  };

  return (
    <section className="shadow-xl overflow-hidden rounded-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white w-full p-3 text-center text-sm sm:text-base font-medium">
        {heroData.specialOffer.text} <strong>{heroData.specialOffer.highlighted}</strong> {heroData.specialOffer.duration}
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366]" dir='ltr'>
        <div className="text-white text-lg font-bold tracking-wide">
          {heroData.header.productName}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white py-2 px-5 rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-transform duration-300 animate-attention"
        >
          {heroData.header.orderButton}
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery */}
          <div className="flex-1">
            {/* Main Image */}
            <div className="bg-gray-50 rounded-xl p-2 mb-6 border border-gray-200 shadow-sm">
              <Image
                src={mainImage}
                alt="غسالة WashMachine"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-contain"
                priority
              />
            </div>

            {/* Instruction Text */}
            <div className="text-center text-gray-600 text-sm mb-3 font-medium">
              {heroData.gallery.instruction}
            </div>

            {/* Thumbnails Container */}
            <div className="flex justify-center gap-3 overflow-x-auto pb-2 px-2">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 flex items-center justify-center ${
                    mainImage === thumb.src
                      ? 'border-blue-500 bg-green-50 ring-2 ring-green-200'
                      : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-green-50'
                  }`}
                  aria-label={`${heroData.gallery.ariaLabel} ${index + 1}`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Enhanced */}
          <div className="flex-1 space-y-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">
              {heroData.productInfo.title}
            </h1>

            {/* Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(heroData.productInfo.rating.stars)}
              </div>
              <span className="text-gray-600 text-sm">
                ({heroData.productInfo.rating.score} {heroData.productInfo.rating.text} {heroData.productInfo.rating.maxScore} — {heroData.productInfo.rating.reviews} تقييم)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-700">
                {heroData.productInfo.price.current} {heroData.productInfo.price.currency}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {heroData.productInfo.price.original} {heroData.productInfo.price.currency}
              </span>
            </div>

            {/* Free Delivery Badge */}
            <div className="flex items-center gap-2 bg-green-100 text-green-800 py-2 px-4 rounded-lg w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{heroData.productInfo.delivery.text}</span>
            </div>

            {/* Key Features (Bullet Points) */}
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              {heroData.productInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {heroData.productInfo.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium">
                  {badge.icon} {badge.text}
                </div>
              ))}
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3.5 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {heroData.productInfo.ctaButton}
            </button>

            {/* Urgency Note */}
            <p className="text-center text-red-600 font-medium text-sm mt-2">
              {heroData.productInfo.urgencyNote.text} <strong>{heroData.productInfo.urgencyNote.time}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <DemandForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}