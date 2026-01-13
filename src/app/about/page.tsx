
import Image from 'next/image';
import { PawPrint } from 'lucide-react';
import type { Metadata } from 'next';
import AboutMe from '../../images/AboutMe.jpg';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "About Us | Suds N' Wiggles",
  description: "Learn about the story and passion behind Suds N' Wiggles dog grooming.",
};


export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="animate-fade-in-left">
            <Image
              src={AboutMe}
              alt="Owners, Samantha and Nik, holding their dogs"
              data-ai-hint="dog grooming salon owners"
              width={800}
              height={1000}
              className="rounded-lg shadow-lg object-contain w-full h-full"
            />
          </div>
          <div className="space-y-6 animate-fade-in-right">
            <div className="inline-block rounded-full bg-primary/10 p-3">
              <PawPrint className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline">About <strong>Suds N’ Wiggles Dog Grooming</strong> in Bellflower, CA</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to <strong>Suds N’ Wiggles</strong>, a locally owned and operated <strong>dog grooming salon in Bellflower, CA</strong>, proudly serving dogs and their owners in Bellflower and surrounding communities. We’re husband-and-wife owners <strong>Samantha and Nik</strong>, and our shop is named after Samantha’s beloved senior pup — Wiggles, the 11-year-old pittie. Nik is holding Lucy, his 14-year-old weenie mix. Our pets inspire the care and compassion behind everything we do.
              </p>
              <p>
                If you’re searching for a <strong>trusted dog groomer near you</strong>, we’re honored to be part of your local community.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-headline pt-4">Professional Dog Grooming with 19 Years of Experience</h2>
              <p>
                Samantha is a <strong>professional dog groomer with 19 years of hands-on experience.</strong> Grooming is more than just a service — it’s her passion and lifelong craft. She specializes in <strong>one-on-one dog grooming</strong>, focusing on each dog’s comfort, personality, and individual needs.
              </p>
              <p>
                Our approach helps create a calm, positive grooming experience while ensuring every dog looks and feels their best. We welcome dogs of all ages, including puppies and senior dogs, and tailor each grooming to support their well-being.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-headline pt-4">A Safe, Calm, and Stress-Free Dog Grooming Environment</h2>
              <p>
                Nik works both behind the scenes and in the grooming salon to keep <strong>Suds N’ Wiggles</strong> running smoothly. From maintaining a clean, organized shop to assisting with bathing and prep, he helps ensure every pet enjoys a <strong>safe, low-stress, and happy grooming environment</strong>.
              </p>
              <p>
                As dedicated animal lovers, we treat every dog who walks through our doors like family — because that’s how we’d want our own pets treated.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-headline pt-4">High-Quality, Full-Service Dog Grooming in Bellflower</h2>
              <p>
                Together, we created <strong>Suds N’ Wiggles Dog Grooming</strong> to be a place where:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Pets receive genuine care and attention</li>
                <li>Pet parents feel heard and respected</li>
                <li>Every appointment includes <strong>high-quality, full-service dog grooming</strong></li>
              </ul>
              <p>
                Our grooming team is <strong>carefully selected and professionally trained</strong>, drawing from nearly two decades of industry experience to provide consistent, reliable results you can trust.
              </p>
              <p>
                If you’re looking for a dog grooming salon near Bellflower, CA, we would love to welcome you and your fur babies.
              </p>
              <p>
                Thank you for supporting small businesses — we truly appreciate you! If you’ve enjoyed your experience, please consider leaving us a <a href="https://www.google.com/search?sca_esv=252c2caf83ecdfc6&sxsrf=ANbL-n5XMsW3aeLc7mI-kYEbG3XJAVLdZQ:1768275838888&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVieBVV_3J66fvC9VbFZDHSBVDECsmoDQFbc9xGUjHXnsH2tdIpOLTngEIFKSxQ2wk7H89CdqIL0GqAZvOkDehB1qoerxmrxt8M1Da3bksMIOAa2nw%3D%3D&q=Suds+N+Wiggles+Pet+Grooming+Reviews&sa=X&ved=2ahUKEwjrsffpzIeSAxUiBrwBHcFjBAYQ0bkNegQIUhAD&biw=2007&bih=1331&dpr=1&aic=0#" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google</a> or <a href="https://www.yelp.com/writeareview/biz/0K4YBCY-wqkufS4RT3gRnQ?return_url=%2Fbiz%2F0K4YBCY-wqkufS4RT3gRnQ&review_origin=biz-details-war-button" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Yelp</a> review, and follow us on <Link href="https://www.instagram.com/sudsnwigglespetgrooming/" className="text-primary hover:underline">Instagram</Link> to stay connected and see our latest happy pups 🐾
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
