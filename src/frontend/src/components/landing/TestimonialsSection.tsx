import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Corporate Client',
    content: 'We ordered 50 custom hampers for our Diwali corporate gifting. The quality and presentation exceeded our expectations. Our clients were truly impressed!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Wedding Gift',
    content: 'The Heritage Collection was perfect for our wedding favors. Each piece was beautifully crafted and our guests loved the authentic Indian touch.',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Personal Gift',
    content: 'I customized a hamper for my mother\'s 60th birthday. The team understood exactly what I wanted and delivered a truly memorable gift. Highly recommended!',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Loved by Gift Givers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join hundreds of satisfied customers who have shared joy through our handcrafted hampers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

