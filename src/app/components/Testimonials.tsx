import data from '../data/data.json';

const testimonialsData = data.testimonials;

export default function Testimonials() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            {testimonialsData.badge.text}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {testimonialsData.title.text} <span className="text-blue-800">{testimonialsData.title.highlighted}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-5 italic">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="mr-3">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}