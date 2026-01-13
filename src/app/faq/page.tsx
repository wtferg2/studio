
import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PawPrint } from 'lucide-react';

export const metadata: Metadata = {
  title: "FAQ | Suds N' Wiggles",
  description: "Frequently asked questions about Suds N' Wiggles dog grooming services in Bellflower, CA.",
};

const faqs = [
    {
        question: "Are you a local dog groomer in Bellflower, CA?",
        answer: "Yes! Suds N’ Wiggles is a locally-owned dog grooming salon based in Bellflower, CA. We proudly serve dogs and pet parents in Bellflower and nearby communities."
    },
    {
        question: "Do you offer full-service dog grooming?",
        answer: "Yes, all our appointments include high-quality, full-service dog grooming. Services are customized to each dog’s coat type, age, and comfort level. Whether it’s a Haircut, Bath & Tidy, or Bath & Brush, our grooms all include ear cleaning, anal glands expression, nail trim/buff, and puppy cuddles!"
    },
    {
        question: "Do you provide one-on-one dog grooming?",
        answer: "We specialize in one-on-one dog grooming whenever possible, allowing us to focus on your dog’s individual needs and provide a calm, low-stress experience."
    },
    {
        question: "Is your grooming salon good for anxious or senior dogs?",
        answer: "Absolutely. With 19 years of professional grooming experience, we take extra care with anxious dogs, senior pets, and dogs who need a gentle approach."
    },
    {
        question: "How do I find a trusted dog groomer near me?",
        answer: "If you’re searching for a trusted dog groomer near you in Bellflower, CA, Suds N’ Wiggles offers experienced, compassionate grooming in a clean and safe environment."
    },
    {
        question: "Do you groom puppies?",
        answer: "Yes! We welcome puppies and focus on positive, gentle first grooming experiences to help them feel comfortable and confident."
    },
    {
        question: "Do you cage my dog when they’re not being serviced?",
        answer: "No! Our grooming salon is cage-free, we will never lock your dog up in a cage and abandon them while we work on other dogs."
    },
];


export default function FAQPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 p-3 mb-4">
                    <PawPrint className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Frequently Asked Questions</h1>
            </div>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pt-2">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </div>
  );
}
