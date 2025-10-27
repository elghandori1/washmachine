'use client';

import { useState } from 'react';
import data from '../data/data.json';

const callFormData = data.callForm;

export default function CallForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 800);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4`}>
            {callFormData.badge.text}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {callFormData.title.text} <span className="text-blue-800">{callFormData.title.highlighted}</span>؟
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {callFormData.description}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-300">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {callFormData.success.title}
              </h3>
              <p className="text-gray-600">
                {callFormData.success.message}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {callFormData.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder={callFormData.form.fields.name.placeholder}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {callFormData.form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder={callFormData.form.fields.phone.placeholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {callFormData.form.fields.address.label}
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder={callFormData.form.fields.address.placeholder}
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {callFormData.form.fields.quantity.label}
                </label>
                <select
                  id="quantity"
                  defaultValue="1"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  {callFormData.form.fields.quantity.options.map((num) => (
                    <option key={num} value={num}>
                      {num} وحد{num > 1 ? 'ات' : 'ة'}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-lg transform ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 hover:shadow-xl hover:scale-[1.02]'
                  }`}
              >
                {isSubmitting ? callFormData.form.submit.submitting : callFormData.form.submit.default}
              </button>

              <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {callFormData.form.privacy}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}