import { Hero } from './Hero';
import { FeaturedPrograms } from './FeaturedPrograms';
import { Testimonials } from './Testimonials';
import { NewsSection } from './NewsSection';
import { Footer } from './Footer';

interface HomePageProps {
  onOpenApplication: () => void;
}

export function HomePage({ onOpenApplication }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Hero onOpenApplication={onOpenApplication} />
      <FeaturedPrograms />
      <Testimonials />
      <NewsSection />
      <Footer />
    </div>
  );
}
