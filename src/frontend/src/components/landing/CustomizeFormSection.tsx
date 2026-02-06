import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitHamperLead } from '@/hooks/useSubmitHamperLead';
import { logFormSubmitSuccess } from '@/utils/analytics';
import { CheckCircle2 } from 'lucide-react';

export function CustomizeFormSection() {
  const { mutate: submitLead, isPending, isSuccess } = useSubmitHamperLead();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasionType: '',
    budgetRange: '',
    preferredItems: '',
    quantity: '1',
    deliveryLocation: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.occasionType) newErrors.occasionType = 'Please select an occasion';
    if (!formData.budgetRange) newErrors.budgetRange = 'Please select a budget range';
    if (!formData.preferredItems.trim()) newErrors.preferredItems = 'Please describe your preferences';
    if (!formData.quantity || parseInt(formData.quantity) < 1) newErrors.quantity = 'Quantity must be at least 1';
    if (!formData.deliveryLocation.trim()) newErrors.deliveryLocation = 'Delivery location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    submitLead(
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        occasionType: formData.occasionType,
        budgetRange: formData.budgetRange,
        preferredItems: formData.preferredItems,
        quantity: BigInt(parseInt(formData.quantity)),
        deliveryLocation: formData.deliveryLocation,
        notes: formData.notes || undefined,
      },
      {
        onSuccess: () => {
          logFormSubmitSuccess();
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            occasionType: '',
            budgetRange: '',
            preferredItems: '',
            quantity: '1',
            deliveryLocation: '',
            notes: '',
          });
          setErrors({});
        },
      }
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <section id="customize" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm text-center">
            <CardContent className="pt-12 pb-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="artisan-heading text-3xl font-bold mb-4">Thank You!</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We've received your request and our team will reach out to you within 24 hours to discuss your custom hamper.
              </p>
              <Button onClick={() => window.location.reload()} variant="outline">
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="customize" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Create Your Custom Hamper
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Share your requirements and we'll craft a personalized gift hamper that perfectly captures your sentiment.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="artisan-heading text-2xl">Tell Us About Your Gift</CardTitle>
            <CardDescription>All fields marked with * are required</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="occasionType">Occasion Type *</Label>
                  <Select value={formData.occasionType} onValueChange={(value) => handleChange('occasionType', value)}>
                    <SelectTrigger id="occasionType">
                      <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="festival">Festival</SelectItem>
                      <SelectItem value="corporate">Corporate Gifting</SelectItem>
                      <SelectItem value="housewarming">Housewarming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.occasionType && <p className="text-sm text-destructive">{errors.occasionType}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Budget Range *</Label>
                  <Select value={formData.budgetRange} onValueChange={(value) => handleChange('budgetRange', value)}>
                    <SelectTrigger id="budgetRange">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                      <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                      <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                      <SelectItem value="20000-50000">₹20,000 - ₹50,000</SelectItem>
                      <SelectItem value="50000+">₹50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.budgetRange && <p className="text-sm text-destructive">{errors.budgetRange}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredItems">Preferred Items & Themes *</Label>
                <Textarea
                  id="preferredItems"
                  value={formData.preferredItems}
                  onChange={(e) => handleChange('preferredItems', e.target.value)}
                  placeholder="E.g., handwoven textiles, brass artifacts, organic products, traditional pottery..."
                  rows={4}
                />
                {errors.preferredItems && <p className="text-sm text-destructive">{errors.preferredItems}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    placeholder="1"
                  />
                  {errors.quantity && <p className="text-sm text-destructive">{errors.quantity}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryLocation">Delivery City/Pincode *</Label>
                  <Input
                    id="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={(e) => handleChange('deliveryLocation', e.target.value)}
                    placeholder="E.g., Mumbai 400001"
                  />
                  {errors.deliveryLocation && <p className="text-sm text-destructive">{errors.deliveryLocation}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="Any special requests or additional information..."
                  rows={3}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                {isPending ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

