import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import FeaturedCarsSection from './components/FeaturedCarsSection';
import BenefitsSection from './components/BenefitsSection';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <HeroSection />
      <AboutSection />
      <FeaturedCarsSection />
      <BookingSection />
      
      <BenefitsSection />
      <CallToAction />
    </main>
  );
}
