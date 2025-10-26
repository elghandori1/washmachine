// components/CTASection.tsx
export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light opacity-20 -z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
          عرض لفترة محدودة!
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          لا تفوت الفرصة!
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          🎁 خصم 20% + <strong>توصيل مجاني</strong> + ضمان 5 سنوات — كل هذا لفترة محدودة فقط.
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-yellow-500/30">
          🛒 اطلب الآن ووفر 600 درهم!
        </button>
        <p className="mt-6 text-sm opacity-80">
          ⏳ العرض ينتهي خلال: <span className="font-mono">23:59:59</span>
        </p>
      </div>
    </section>
  );
}