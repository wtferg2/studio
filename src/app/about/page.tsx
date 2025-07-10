import Image from 'next/image';
import { PawPrint } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Suds n' Wiggles',
  description: 'Learn about the story and passion behind Suds n' Wiggles dog grooming.',
};


export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="animate-fade-in-left">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Owner with a dog"
              data-ai-hint="dog grooming salon"
              width={800}
              height={1000}
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[600px]"
            />
          </div>
          <div className="space-y-6 animate-fade-in-right">
            <div className="inline-block rounded-full bg-primary/10 p-3">
              <PawPrint className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Story</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to Suds n' Wiggles, where our love for dogs is at the heart of everything we do. Founded in 2023, our journey began with a simple mission: to provide a safe, comfortable, and positive grooming experience for every dog that walks through our doors. We saw a need for a salon that prioritized pets' well-being over everything else, treating each one with the patience, love, and respect they deserve.
              </p>
              <p>
                Our founder, Jane Doe, a certified master groomer with over 15 years of experience, built this business from the ground up. Her philosophy is that grooming is more than just a haircut—it's an essential part of a dog's health and happiness. We use only high-quality, natural products and state-of-the-art equipment to ensure your furry friend not only looks fantastic but feels great too.
              </p>
              <p>
                At Suds n' Wiggles, we're not just a team; we're a family of passionate animal lovers. We can't wait to welcome you and your beloved pet into our family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
