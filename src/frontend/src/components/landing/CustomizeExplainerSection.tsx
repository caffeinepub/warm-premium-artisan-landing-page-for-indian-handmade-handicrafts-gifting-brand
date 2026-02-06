import { Card, CardContent } from '@/components/ui/card';
import { Palette, MessageSquare, Package, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Palette,
    title: 'Share Your Vision',
    description: 'Tell us about the occasion, recipient, and your preferences. We listen to every detail.',
  },
  {
    icon: MessageSquare,
    title: 'Expert Consultation',
    description: 'Our curators work with you to select the perfect combination of handcrafted items.',
  },
  {
    icon: Sparkles,
    title: 'Artisan Creation',
    description: 'Skilled craftspeople prepare each item with care, ensuring exceptional quality.',
  },
  {
    icon: Package,
    title: 'Premium Packaging',
    description: 'Your hamper is beautifully packaged and delivered with love to your doorstep.',
  },
];

export function CustomizeExplainerSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How Customization Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Creating your perfect gift hamper is a collaborative journey. 
            We guide you through every step to ensure a truly memorable gift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm text-center relative">
              <CardContent className="pt-12 pb-8 px-6">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="artisan-heading text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

