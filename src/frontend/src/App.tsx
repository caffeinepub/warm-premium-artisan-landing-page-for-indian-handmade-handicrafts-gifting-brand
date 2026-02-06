import { HeroSection } from './components/landing/HeroSection';
import { CuratedHampersSection } from './components/landing/CuratedHampersSection';
import { CustomizeExplainerSection } from './components/landing/CustomizeExplainerSection';
import { CustomizeFormSection } from './components/landing/CustomizeFormSection';
import { ArtisanValuesSection } from './components/landing/ArtisanValuesSection';
import { TestimonialsSection } from './components/landing/TestimonialsSection';
import { FAQSection } from './components/landing/FAQSection';
import { FinalCTASection } from './components/landing/FinalCTASection';
import { FooterSection } from './components/landing/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CuratedHampersSection />
      <CustomizeExplainerSection />
      <CustomizeFormSection />
      <ArtisanValuesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
}

