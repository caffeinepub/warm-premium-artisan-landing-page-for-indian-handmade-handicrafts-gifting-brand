import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does the customization process work?',
    answer: 'After you submit your requirements through our form, our team will contact you within 24 hours to discuss your preferences in detail. We\'ll share design options, suggest items based on your budget and occasion, and work with you to create the perfect hamper.',
  },
  {
    question: 'What is the typical lead time for custom hampers?',
    answer: 'Custom hampers typically require 7-14 business days for creation and packaging, depending on the complexity and quantity. For urgent orders, we offer expedited services with a 3-5 day turnaround (additional charges apply). We recommend placing orders at least 3 weeks in advance for large quantities.',
  },
  {
    question: 'Do you ship across India?',
    answer: 'Yes, we offer pan-India delivery to all major cities and towns. Shipping costs vary based on location and hamper size. We use premium courier services to ensure your hampers arrive safely and on time. International shipping is also available for select destinations.',
  },
  {
    question: 'Can I see samples before placing a bulk order?',
    answer: 'Absolutely! For corporate or bulk orders (10+ hampers), we can create a sample hamper for your approval before proceeding with the full order. This ensures you\'re completely satisfied with the selection and presentation.',
  },
  {
    question: 'What is your return and exchange policy?',
    answer: 'We take great care in quality control, but if you receive a damaged item, please contact us within 48 hours with photos. We\'ll arrange for a replacement or refund. For custom orders, returns are accepted only in case of manufacturing defects or damage during shipping.',
  },
  {
    question: 'Do you offer corporate gifting solutions?',
    answer: 'Yes! We specialize in corporate gifting and can handle orders of any size. We offer volume discounts, custom branding options, and dedicated account management for corporate clients. Contact us to discuss your specific requirements.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="artisan-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about our custom hampers and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 backdrop-blur-sm border-border/50 shadow-sm px-6 border">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="artisan-heading text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

