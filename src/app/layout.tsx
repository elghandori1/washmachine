import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';
import './globals.css';

// إعداد خط Almarai
const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'غسالة WashMachine - اطلب الآن',
  description: 'عرض خاص على غسالة WashMachine الذكية. خصم 20% وتوصيل مجاني.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={almarai.className}>
      <body>{children}</body>
    </html>
  );
}