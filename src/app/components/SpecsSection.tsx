import data from '../data/data.json';

const specsData = data.specsSection;

export default function SpecsSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          {specsData.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
          {specsData.specifications.map((column, columnIndex) => (
            <div key={columnIndex}>
              <ul className="space-y-3 text-gray-700">
                {column.map((spec, specIndex) => (
                  <li key={specIndex} className="flex justify-between border-b pb-2">
                    <span>{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}