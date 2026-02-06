import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { HandHeart, Leaf, Award, Users } from 'lucide-react';

const values = [
  {
    icon: HandHeart,
    title: 'Handcrafted Excellence',
    description: 'Every item is meticulously crafted by skilled artisans who have inherited their craft through generations.',
  },
  {
    icon: Leaf,
    title: 'Ethical Sourcing',
    description: 'We partner directly with artisan communities, ensuring fair wages and sustainable practices.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Each piece undergoes rigorous quality checks to meet our exacting standards of craftsmanship.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Your purchase supports rural artisan families and helps preserve traditional Indian crafts.',
  },
];

export function ArtisanValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Artisan Promise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            We believe in preserving India's rich heritage of handicrafts while empowering the artisans who keep these traditions alive.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="artisan-heading text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              "When you choose our hampers, you're not just giving a gift—you're sharing a piece of India's soul, 
              crafted with love by hands that have perfected their art over lifetimes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

