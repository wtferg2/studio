import Image from 'next/image';
import { PawPrint } from 'lucide-react';
import type { Metadata } from 'next';
import AboutMe from '../../images/AboutMe.jpg';


export const metadata: Metadata = {
  title: "About Us | Suds n' Wiggles",
  description: "Learn about the story and passion behind Suds n' Wiggles dog grooming.",
};


export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="animate-fade-in-left">
            <Image
              src={AboutMe}
              alt="Owner with a dog"
              data-ai-hint="dog grooming salon"
              width={800}
              height={1000}
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[600px]"
            />
          </div>
          <div className="space-y-6 animate-fade-in-right">
            <div className="inline-block rounded-full bg-accent/10 p-3">
              <PawPrint className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Story</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hello! We’re the owners of Suds N’ Wiggles — I’m Samantha and this is my husband, Nik!
              </p>
              <p>
                I’ve been grooming for over a decade, and I can truly say I love what I do. There’s something so special about being able to work one-on-one with each pet, learning their personalities, what makes them feel comfortable, and helping them look and feel their best. Grooming is more than just a job for me — it’s my passion, my craft, and honestly one of my favorite things to do.
              </p>
              <p>
                Nik works behind the scenes and in the shop, keeping everything running smoothly. He’s the one making sure we’re organized, clean, punctual, and that your pets have a safe, calm, and happy environment while they’re here. He’s also the biggest animal lover I know — every dog that walks in gets treated like family.
              </p>
              <p>
                Together, we created Suds N’ Wiggles to be a place where your pet feels cared for, owners feel heard, and everyone leaves a little happier than when they came in. We can’t wait to meet you and your fur babies!
              </p>
              <p>
                And as always thank you so much for supporting small businesses. We appreciate you. Please feel free to leave us a review on Google and Yelp! And don’t forget to follow us on instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
