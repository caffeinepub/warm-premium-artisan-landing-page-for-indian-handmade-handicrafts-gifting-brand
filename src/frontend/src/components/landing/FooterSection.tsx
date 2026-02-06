import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, Phone } from 'lucide-react';
import { SiCaffeine } from 'react-icons/si';

export function FooterSection() {
  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="artisan-heading text-2xl font-bold mb-4">Heritage Hampers</h3>
            <p className="text-muted-foreground mb-4">
              Celebrating India's artisan heritage through thoughtfully curated and customized gift hampers.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Every hamper is handcrafted with love and care.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:hello@heritagehampers.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@heritagehampers.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <div className="space-y-3">
              <Dialog>
                <DialogTrigger className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Shipping & Returns
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="artisan-heading text-2xl">Shipping & Returns Policy</DialogTitle>
                    <DialogDescription className="text-base">
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Shipping</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>We ship across India using premium courier services</li>
                            <li>Standard delivery: 5-7 business days</li>
                            <li>Express delivery: 2-3 business days (additional charges apply)</li>
                            <li>Free shipping on orders above ₹10,000</li>
                            <li>International shipping available on request</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Returns & Exchanges</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Report damaged items within 48 hours of delivery with photos</li>
                            <li>We'll arrange replacement or full refund for damaged items</li>
                            <li>Custom orders are non-returnable except for defects</li>
                            <li>Refunds processed within 7-10 business days</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Packaging</h4>
                          <p className="text-muted-foreground">
                            All hampers are carefully packaged with premium materials to ensure safe delivery. 
                            We use eco-friendly packaging wherever possible.
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026. Built with love using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors"><SiCaffeine className="w-4 h-4" />caffeine.ai</a></p>
          <p>Empowering artisans, preserving heritage</p>
        </div>
      </div>
    </footer>
  );
}

