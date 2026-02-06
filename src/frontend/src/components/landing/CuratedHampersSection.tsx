import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollToSection';
import { logHamperCTAClick } from '@/utils/analytics';

const hampers = [
  {
    id: 1,
    name: 'Heritage Collection',
    description: 'A timeless selection of handwoven textiles, brass artifacts, and artisan pottery. Perfect for celebrating tradition.',
    image: '/assets/generated/hamper-set-1.dim_900x600.png',
  },
  {
    id: 2,
    name: 'Festive Celebration',
    description: 'Vibrant hand-painted diyas, premium dry fruits, and decorative pieces. Ideal for festivals and special occasions.',
    image: '/assets/generated/hamper-set-2.dim_900x600.png',
  },
  {
    id: 3,
    name: 'Corporate Elegance',
    description: 'Sophisticated leather journals, handcrafted pens, and artisan tea sets. Thoughtful gifts for professional relationships.',
    image: '/assets/generated/hamper-set-3.dim_900x600.png',
  },
];

export function CuratedHampersSection() {
  const handleRequestHamper = (hamperName: string) => {
    logHamperCTAClick(hamperName);
    scrollToSection('customize');
  };

  return (
    <section id="curated" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Curated Gift Hampers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Thoughtfully assembled collections showcasing the finest Indian handicrafts. 
            Each hamper is a celebration of artisan craftsmanship and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hampers.map((hamper) => (
            <Card key={hamper.id} className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm overflow-hidden group hover:shadow-lg transition-all">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={hamper.image}
                  alt={hamper.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={900}
                  height={600}
                />
              </div>
              <CardHeader>
                <CardTitle className="artisan-heading text-2xl">{hamper.name}</CardTitle>
                <CardDescription className="text-base">{hamper.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleRequestHamper(hamper.name)}
                >
                  Request This Hamper
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

