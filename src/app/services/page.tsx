
'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services, servicePrices, dogSizes, type DogSize, additionalServices } from '@/lib/services';
import { CheckCircle, Clock, PawPrint } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

export default function ServicesPage() {
  const [selectedSize, setSelectedSize] = useState<DogSize>('small');

  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
              Our Grooming Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Pamper your pup with our range of professional grooming packages. Prices vary by dog size.
            </p>
          </div>

          <div className="mb-8 max-w-xs mx-auto">
            <h3 className="text-lg font-medium text-center mb-2">Select Your Dog's Size</h3>
            <Select onValueChange={(value) => setSelectedSize(value as DogSize)} defaultValue={selectedSize}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select dog size" />
              </SelectTrigger>
              <SelectContent>
                {dogSizes.map((size) => (
                  <SelectItem key={size.id} value={size.id}>
                    {size.label} ({size.weight})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const price = servicePrices[selectedSize][service.id] ?? 'N/A';
              
              return (
              <Card key={service.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-xl font-bold">
                    {`Starting at $${price}`}
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
              </Card>
            )})}
          </div>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            * Please note that prices are estimates and may vary based on coat condition, temperament, and specific needs.
          </p>


          <Separator className="my-12 md:my-16" />

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">A La Carte Services</h2>
            <p className="mt-3 text-lg text-muted-foreground">
                Enhance your pet's spa day with our add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((category) => (
              <Card key={category.id} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="inline-block rounded-full bg-accent/10 p-3">
                    <PawPrint className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-accent leading-tight">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, index) => (
                      <li key={index} className="flex justify-between items-center border-b pb-3 last:border-b-0 last:pb-0">
                        <span className="text-muted-foreground">{service.name}</span>
                        <span className="font-semibold">${service.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>


          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
          </div>

          <Alert className="mt-12">
            <Clock className="h-4 w-4" />
            <AlertTitle>Grooming Duration</AlertTitle>
            <AlertDescription>
              Please allow 4 hours for completion of grooming services; we will reach out if completed sooner.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
