import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // تعريف اللون الأساسي الذي طلبته
        primary: {
          DEFAULT: '#2596be', // اللون الأساسي
          dark: '#1a6a8a', // درجة أغمق للاستخدام عند التحويم (hover)
        },
      },
      fontFamily: {
        // إضافة خط عربي افتراضي (يفضل استيراده في globals.css)
        sans: ['Cairo', 'sans-serif'],
      },
      // إضافة أنيميشن مخصص للمودال
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        slideUp: 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;