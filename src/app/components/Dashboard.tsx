'use client';
import React from 'react';
import { useState } from 'react';
import initialData from '../data/data.json';
import { ContentData, SectionKey } from '../data/types';

// Define the shape of our section navigation
interface Section {
  key: SectionKey;
  label: string;
  icon: string;
}

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeSection, setActiveSection] = useState<SectionKey>('heroSection');
  // Use our ContentData interface for strong type safety
  const [contentData, setContentData] = useState<ContentData>(initialData);

  // Updated sections to match the keys in data.json
  const sections: Section[] = [
    { key: 'heroSection', label: 'القسم الرئيسي', icon: '🏠' },
    { key: 'carouselImages', label: 'الصور', icon: '🖼️' },
    { key: 'featuresSection', label: 'المميزات', icon: '⭐' },
    { key: 'specsSection', label: 'المواصفات', icon: '📊' },
    { key: 'callForm', label: 'نموذج الطلب', icon: '📝' },
    { key: 'testimonials', label: 'آراء العملاء', icon: '💬' },
    { key: 'ctaSection', label: 'دعوة للعمل', icon: '🎯' },
  ];


  const handleInputChange = (path: (string | number)[], value: any) => {
    setContentData((prev) => {
      // Deep clone to avoid state mutation
      const newData = JSON.parse(JSON.stringify(prev));
      
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      
      return newData;
    });
  };

 
  const downloadJSON = () => {
    const dataStr = JSON.stringify(contentData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const StringField = ({ label, value, path }: { label: string; value: string; path: (string | number)[] }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(path, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
      />
    </div>
  );

  const NumberField = ({ label, value, path }: { label: string; value: number; path: (string | number)[] }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => handleInputChange(path, parseInt(e.target.value, 10))}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
      />
    </div>
  );


  const FieldGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-6 border border-gray-200 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold text-gray-800 bg-gray-50 px-5 py-3 border-b border-gray-200 rounded-t-lg">
        {title}
      </h4>
      <div className="p-5">
        {children}
      </div>
    </div>
  );

  const renderFieldsForObject = (
    obj: Record<string, any>,
    path: (string | number)[]
  ): React.ReactElement[] => { // <-- FIX 2: Using 'React.ReactElement'
    
    return Object.entries(obj).map(([key, value]) => {
      // --- Custom Handlers for Specific Structures ---
      // 1. Hide comments
      if (key.startsWith('_comment')) return null;
      
      // 2. Hide quantity options array (better handled by a dropdown, but hiding for now)
      if (key === 'options' && path.includes('quantity')) return null;

      // --- Type-Based Rendering ---
      const currentPath = [...path, key];

      if (typeof value === 'string') {
        return <StringField key={currentPath.join('.')} label={key} value={value} path={currentPath} />;
      }
      
      if (typeof value === 'number') {
        return <NumberField key={currentPath.join('.')} label={key} value={value} path={currentPath} />;
      }
      
      if (Array.isArray(value)) {
        // Handle arrays of strings (like heroSection.productInfo.features)
        if (value.every(item => typeof item === 'string')) {
          return (
            <FieldGroup key={currentPath.join('.')} title={key}>
              {value.map((item: string, index: number) => (
                <StringField
                  key={currentPath.concat(index).join('.')}
                  label={`${key} ${index + 1}`}
                  value={item}
                  path={[...currentPath, index]}
                />
              ))}
            </FieldGroup>
          );
        }
        // Handle arrays of objects (like featuresSection.features)
        return (
          <FieldGroup key={currentPath.join('.')} title={key}>
            {value.map((item: Record<string, any>, index: number) => ( 
              <div key={index} className="mb-4 p-4 border border-gray-100 rounded-lg bg-white">
                <h5 className="font-semibold text-gray-700 mb-2">عنصر {index + 1}</h5>
                {renderFieldsForObject(item, [...currentPath, index])}
              </div>
            ))}
          </FieldGroup>
        );
      }
      
      if (typeof value === 'object' && value !== null) {
        // Render nested objects as a new group
        return (
          <FieldGroup key={currentPath.join('.')} title={key}>
            {renderFieldsForObject(value, currentPath)}
          </FieldGroup>
        );
      }
      
      return null;
    }).filter(Boolean) as React.ReactElement[];
  };


  const renderImagesSection = () => {
    const { src, alt } = contentData.carouselImages;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FieldGroup title="روابط الصور (src)">
          {src.map((url, index) => (
            <StringField
              key={`src-${index}`}
              label={`رابط الصورة ${index + 1}`}
              value={url}
              path={['carouselImages', 'src', index]}
            />
          ))}
        </FieldGroup>
        <FieldGroup title="النصوص البديلة (alt)">
          {alt.map((altText, index) => (
            <StringField
              key={`alt-${index}`}
              label={`النص البديل ${index + 1}`}
              value={altText}
              path={['carouselImages', 'alt', index]}
            />
          ))}
        </FieldGroup>
      </div>
    );
  };
  

  const renderSpecsSection = () => {
    const { title, specifications } = contentData.specsSection;
    return (
      <>
        <FieldGroup title="العنوان">
          <StringField label="العنوان" value={title} path={['specsSection', 'title']} />
        </FieldGroup>
        
        <FieldGroup title="المواصفات">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((column, colIndex) => (
              <div key={colIndex} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <h5 className="font-semibold text-gray-700 mb-3 text-center">
                  {colIndex === 0 ? 'العمود الأول' : 'العمود الثاني'}
                </h5>
                {column.map((spec, specIndex) => (
                  <div key={specIndex} className="mb-3 p-3 border border-gray-100 rounded-lg bg-white shadow-sm">
                    <StringField
                      label="التسمية (Label)"
                      value={spec.label}
                      path={['specsSection', 'specifications', colIndex, specIndex, 'label']}
                    />
                    <StringField
                      label="القيمة (Value)"
                      value={spec.value}
                      path={['specsSection', 'specifications', colIndex, specIndex, 'value']}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FieldGroup>
      </>
    );
  };


  const renderActiveSection = () => {
    switch (activeSection) {
      case 'carouselImages':
        return renderImagesSection();
      case 'specsSection':
        return renderSpecsSection();
      // All other sections use the dynamic object renderer
      case 'heroSection':
      case 'featuresSection':
      case 'callForm':
      case 'testimonials':
      case 'ctaSection':
        const data = contentData[activeSection]; 
        return renderFieldsForObject(data, [activeSection]);
      default:
        return <p>الرجاء اختيار قسم من القائمة.</p>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100" dir="rtl">
      {/* --- Sidebar --- */}
      <div className="w-64 bg-white shadow-xl flex flex-col">
        <div className="p-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700">لوحة التحكم</h1>
          <p className="text-sm text-gray-500 mt-1">إدارة محتوى الموقع</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-all duration-200 ${
                activeSection === section.key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="font-medium">{section.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-2 border-t border-gray-200">
          <button
            onClick={downloadJSON}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            حفظ و تحميل التغييرات
          </button>

             <button
            onClick={onLogout}
            className="w-full mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white rounded-xl shadow-lg">
          {/* Content Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800">
              {sections.find(s => s.key === activeSection)?.label}
            </h2>
            <span className="px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              تحرير المحتوى
            </span>
          </div>

          {/* Content Body */}
          <div className="p-6">
            <div className="max-w-5xl mx-auto">
              {renderActiveSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}