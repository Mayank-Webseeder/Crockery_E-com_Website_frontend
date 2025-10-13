import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What are the shipping options?",
    answer: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free standard shipping is available on orders over $50. International shipping is also available with delivery times varying by location."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of delivery for a full refund. Items must be unused, in their original packaging, and in the same condition as received. Please contact our customer service team to initiate a return."
  },
  {
    question: "How do I care?",
    answer: "Most of our crockery is dishwasher and microwave safe. However, we recommend hand washing delicate pieces and fine china to preserve their beauty. Avoid sudden temperature changes and abrasive cleaners. Detailed care instructions are included with each product."
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes, all our products come with a 1-year warranty against manufacturing defects. This covers any issues with materials or workmanship. Normal wear and tear, accidental damage, or misuse are not covered under warranty."
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this number to track your package in real-time. You can also check your order status by logging into your account on our website."
  }
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Title */}
          <div>
            <h2 className="leading-tight" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '50px' }}>
              Frequently<br />Asked<br /><span className="italic">Questions</span>
            </h2>
          </div>
          
          {/* Right side - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
