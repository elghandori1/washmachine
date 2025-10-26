// components/Testimonials.tsx
const testimonials = [
  {
    name: 'أحمد محمد',
    city: 'الرياض',
    text: 'أفضل غسالة استخدمتها في حياتي! هادئة وتنظف بشكل ممتاز.',
    rating: 5,
  },
  {
    name: 'فاطمة علي',
    city: 'جدة',
    text: 'وفرت لي وقتًا كبيرًا، والتطبيق سهل الاستخدام جدًا.',
    rating: 5,
  },
  {
    name: 'خالد سعيد',
    city: 'الدار البيضاء',
    text: 'جودة عالية وخدمة عملاء ممتازة. أنصح بها بشدة!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            ثقة عملائنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            آراء من جربوا <span className="text-blue-800">WashMachine</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-5 italic">
                {t.text}
              </p>
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div className="mr-3">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}