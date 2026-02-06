import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Heart, Truck } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollToSection';
import { logPrimaryCTAClick, logSecondaryCTAClick } from '@/utils/analytics';

export function HeroSection() {
  const handlePrimaryCTA = () => {
    logPrimaryCTAClick();
    scrollToSection('customize');
  };

  const handleSecondaryCTA = () => {
    logSecondaryCTAClick();
    scrollToSection('curated');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-handicrafts-gifting.dim_1600x900.png"
          alt="Handcrafted Indian gift hampers"
          className="w-full h-full object-cover"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Gift className="w-4 h-4 mr-2" />
              100% Handmade
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Ethically Sourced
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Truck className="w-4 h-4 mr-2" />
              Pan-India Delivery
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="artisan-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Gifts Crafted with
            <span className="block text-primary mt-2">Heart & Heritage</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated and customized gift hampers featuring authentic Indian handicrafts. 
            Each piece tells a story of artisan excellence and timeless tradition.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={handlePrimaryCTA}
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Build My Gift Hamper
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleSecondaryCTA}
              className="text-lg px-8 py-6 rounded-full border-2"
            >
              Explore Curated Hampers
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}

