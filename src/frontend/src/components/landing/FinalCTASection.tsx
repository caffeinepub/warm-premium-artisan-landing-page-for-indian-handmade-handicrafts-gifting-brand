import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollToSection';
import { logFinalCTAClick } from '@/utils/analytics';

export function FinalCTASection() {
  const handleCTA = () => {
    logFinalCTAClick();
    scrollToSection('customize');
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm p-12 md:p-16 rounded-2xl">
          <h2 className="artisan-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's craft a gift hamper that tells your unique story. Share your vision with us and we'll bring it to life with authentic Indian craftsmanship.
          </p>
          <Button size="lg" onClick={handleCTA} className="text-lg px-10 py-6 rounded-full shadow-lg">
            Start Your Custom Hamper
          </Button>
        </div>
      </div>
    </section>
  );
}

