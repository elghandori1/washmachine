// components/SpecsSection.tsx
export default function SpecsSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          المواصفات الفنية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
          <div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between border-b pb-2">
                <span>السعة</span>
                <span className="font-medium">10 كغ</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>عدد الدورات</span>
                <span className="font-medium">15 دورة</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>التحكم</span>
                <span className="font-medium">شاشة لمس ذكية</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between border-b pb-2">
                <span>الضمان</span>
                <span className="font-medium">5 سنوات</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>الاستهلاك الكهربائي</span>
                <span className="font-medium">A+++</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>الاتصال</span>
                <span className="font-medium">واي فاي + تطبيق جوال</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}