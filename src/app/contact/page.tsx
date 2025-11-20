

import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Suds n' Wiggles",
  description: "Get in touch with Suds n' Wiggles. Find our address, phone number, and social media links to book an appointment.",
};

const contactDetails = [
  {
    icon: MapPin,
    title: 'Our Salon',
    value: '10052 Rosecrans Ave Bellflower, CA 90706',
    isLink: false,
    colorClass: 'text-accent'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '(562) 306-0735',
    href: 'tel:+1-562-306-0735',
    isLink: true,
    colorClass: 'text-accent'
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'Sudsnwiggles@gmail.com',
    href: 'mailto:Sudsnwiggles@gmail.com',
    isLink: true,
    colorClass: 'text-accent'
  }
];

const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      handle: '@sudsnwigglespetgrooming',
      href: 'https://www.instagram.com/sudsnwigglespetgrooming/',
    },
];

export default function ContactPage() {
  return (
    <div className="bg-secondary">
    <div className="container py-12 md:py-24 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">We'd love to hear from you! Reach out to book an appointment or ask any questions.</p>
        </div>

        <Card>
            <CardContent className="p-8 grid md:grid-cols-3 gap-8">
                {contactDetails.map((item) => (
                    <div key={item.title} className="flex flex-col items-center text-center">
                        <div className={`mb-4 rounded-full ${item.colorClass === 'text-primary' ? 'bg-primary/10' : 'bg-accent/10'} p-4`}>
                            <item.icon className={`h-8 w-8 ${item.colorClass}`} />
                        </div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        {item.isLink ? (
                            <Link href={item.href || '#'} className="text-muted-foreground hover:text-primary transition-colors">
                                {item.value}
                            </Link>
                        ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                        )}
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold font-headline">Follow Us</h2>
            <p className="mt-2 text-muted-foreground">See our latest transformations and happy clients on social media!</p>
            <div className="mt-6 flex justify-center gap-8">
                {socialLinks.map(social => (
                     <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                         <social.icon className="h-7 w-7" />
                         <span className="text-sm font-medium">{social.handle}</span>
                     </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}
