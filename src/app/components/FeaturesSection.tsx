import data from '../data/data.json';

export default function FeaturesSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          {data.featuresSection.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.featuresSection.features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-blue-200 hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}