import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { StyleSuggester } from "@/components/style-suggester";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Buddy's Human",
    text: "Pawsitive Image always does an amazing job with Buddy. He comes back looking and smelling great, and he's always happy to see the staff!",
    image: "https://placehold.co/400x400.png",
    aiHint: "golden retriever"
  },
  {
    name: "Luna's Mom",
    text: "The best groomers in town! They are so patient and caring with my anxious poodle. The AI style suggestion was surprisingly accurate and helpful!",
    image: "https://placehold.co/400x400.png",
    aiHint: "white poodle"
  },
  {
    name: "Max's Dad",
    text: "I wouldn't trust anyone else with my scruffy terrier mix. They work wonders and the price is very reasonable. Highly recommend!",
    image: "https://placehold.co/400x400.png",
    aiHint: "terrier mix"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="A happy, well-groomed dog"
          data-ai-hint="happy dog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg animate-fade-in">
            Where Every Pet is a Work of Art
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md animate-fade-in [animation-delay:0.2s]">
            Expert grooming with a gentle touch. We believe a positive experience is just as important as a perfect haircut.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in [animation-delay:0.4s]">
            <Link href="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </section>

      <section id="style-suggester" className="w-full py-12 md:py-24 bg-background">
        <div className="container">
          <StyleSuggester />
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center font-headline mb-2">Happy Pups, Happy Parents</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">See what our clients are barking about. Your pet's happiness is our greatest reward.</p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader className="flex-row items-start bg-muted/50">
                        <Quote className="w-8 h-8 text-accent mr-4" />
                        <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 flex-grow flex flex-col justify-between">
                        <p className="text-muted-foreground mb-4">{`"${testimonial.text}"`}</p>
                         <div className="aspect-square w-full overflow-hidden rounded-md">
                            <Image
                                src={testimonial.image}
                                alt={`A photo of ${testimonial.name.split("'")[0]}`}
                                data-ai-hint={testimonial.aiHint}
                                width={400}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

    </div>
  );
}
