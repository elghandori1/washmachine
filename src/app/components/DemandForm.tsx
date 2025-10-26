// components/DemandForm.tsx
'use client';

import { useState } from 'react';

export const DemandForm = ({ onClose }: { onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('تم إرسال طلبك بنجاح! سنتصل بك قريباً.');
      setIsSubmitting(false);
      onClose();
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal Container - Clicking inside won't close */}
      <div 
        className="relative w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">طلب المنتج</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="إغلاق"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            املأ النموذج وسنتواصل معك خلال 24 ساعة
          </p>
        </div>

        {/* Form */}
        <div className="px-6 pb-6">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                الاسم الكامل
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
                placeholder="أدخل اسمك الكامل"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
                العنوان
              </label>
              <input
                type="text"
                id="address"
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
                placeholder="المدينة، الحي، رقم المنزل..."
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
                placeholder="06XXXXXXXX"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                الكمية
              </label>
              <input
                type="number"
                id="quantity"
                defaultValue={1}
                min={1}
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white hover:shadow-xl hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
            </button>
          </form>
        </div>

        {/* Trust Note */}
        <div className="px-6 pb-4 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            معلوماتك آمنة معنا ولن تُشارك مع أي طرف ثالث
          </p>
        </div>
      </div>
    </div>
  );
};