import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/lib/services';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Our Services | Suds n' Wiggles",
  description:
    'Explore our professional dog grooming services, from basic baths to full-service grooms.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
              Our Grooming Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Pamper your pup with our range of professional grooming packages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-xl font-bold">
                    Starting at ${service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent>
                   <Button asChild className="w-full">
                        <Link href="/contact">Book Now</Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
