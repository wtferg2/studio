
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import Banner from "../images/Banner.png";
import Maddie from "../images/Maddie.jpg";
import Hannah from "../images/Hannah.jpg";
import Dana from "../images/Dana.jpg";

// Testimonials data"
const testimonials = [
  {
    name: "Maddie",
    text: "I'm so happy with how my two pups look after their groom! Sam and her team are friendly and treat my goobers like family. My babies can be a hand full (cocker spaniels) but Sam got the job done! One summer cut for my boy and a clean up for my girl. Now they smell good and feel good for these hot summer days/nights.",
    image: Maddie,
    aiHint: "cocker spaniels"
  },
  {
    name: "Hannah",
    text: "Our dog, Wheaties, LOVES Sam and the rest of the team. They are super sweet to him and are always sending me little updates so I'm never concerned. Thrilled and relieved such nice people took over the salon",
    image: Hannah,
    aiHint: "golden retriever"
  },
  {
    name: "Dana",
    text: "Samantha is truly the \"Pup Whisperer\"! Sam truly cares for my fur baby, she is so kind to all of the dogs in her care, she takes the time to build a relationship with our dog, which is important because it creates trust, not just between she and I, but for my pup as well. Stormy loves going to 'Suds N Wiggles'. Sam is a master at cutting and styling my girl! Stormy always leaves Sam with extra pep in her step! 'Suds N Wiggles' offers grooming AND daycare, I feel safe leaving Stormy in Sam's care! Thank you 'Suds N Wiggles'!",
    image: Dana,
    aiHint: "happy puppy"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[300px] md:min-h-[400px] bg-secondary">
        <Image
          src={Banner}
          alt="A happy, well-groomed dog"
          data-ai-hint="happy dog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-end pb-12 md:pb-20 h-full text-center text-white p-4">
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
