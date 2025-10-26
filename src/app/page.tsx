
// app/page.tsx
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SpecsSection from "./components/SpecsSection";
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import CallForm from './components/CallForm';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-r from-[#002244] via-[#003366] to-[#002244] min-h-screen py-2 px-4">
      <div className="w-full lg:w-[60%] max-w-7xl mx-auto bg-white">
        <HeroSection />
        <FeaturesSection />
        <SpecsSection />
        <CallForm />
        <Testimonials />
        <CTASection />
      </div>
    </main>
  );
}