import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  CircleUser,
  Building2,
  ShieldCheck,
  HeartPulse,
  TrendingUp,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import DoodleElements from "./DoodleElements";
import useEmblaCarousel from "embla-carousel-react";
import sharkTankIndiaS4Pitch from "../../assets/sharkTankIndiaS4Pitch.jpg";

const traction = [
  {
    icon: <CircleUser className="w-6 h-6" />,
    metric: "5,000+",
    description: "Waitlist Sign-ups",
    progress: 75,
    trend: "+22% this month",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    metric: "3",
    description: "Hospital Partnerships",
    progress: 60,
    trend: "AIIMS-Delhi, Fortis, Max",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    metric: "₹2.5Cr",
    description: "Seed Funding Raised",
    progress: 50,
    trend: "Led by Indian Angels",
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    metric: "94%",
    description: "User Satisfaction",
    progress: 94,
    trend: "From beta testers",
  },
];

const testimonials = [
  {
    quote:
      "MemoTag has been life-changing for our family. My father's memory has been declining, but with MemoTag's personalized reminders and cognitive exercises, he's maintaining more independence.",
    name: "Priya Sharma",
    title: "Family Caregiver",
    avatar: "PS",
    rating: 5,
  },
  {
    quote:
      "As a neurologist, I'm impressed with MemoTag's approach to cognitive health. The data insights help me provide more personalized care for patients with early-stage dementia.",
    name: "Dr. Rajiv Mehta",
    title: "Neurologist, AIIMS-Delhi",
    avatar: "RM",
    rating: 5,
  },
  {
    quote:
      "The technology is seamless and respects the dignity of the user. My mother doesn't feel like she's being monitored but rather supported in her daily activities.",
    name: "Amit Kapoor",
    title: "Son of MemoTag User",
    avatar: "AK",
    rating: 4,
  },
  {
    quote:
      "MemoTag's memory care solution has shown promising results in enhancing patient quality of life. The data it provides is transforming how we approach dementia treatment.",
    name: "Dr. Neerja Bhatla",
    title: "Head of Neurology, Max Healthcare",
    avatar: "NB",
    rating: 5,
  },
];

const partners = [
  "AIIMS Delhi",
  "Fortis Healthcare",
  "Max Healthcare",
  "IIT Delhi",
  "Indian Angel Network",
];

const TractionSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section
      id="traction"
      className="section-padding bg-memotag-background overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-60 h-60 bg-memotag-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-memotag-accent/5 rounded-full blur-3xl"></div>

      <div className="absolute top-20 left-10 opacity-10 -rotate-12">
        <DoodleElements type="spiral" width={80} height={80} color="#9b87f5" />
      </div>
      <div className="absolute bottom-40 right-10 opacity-10 rotate-12">
        <DoodleElements type="dots" width={120} height={120} color="#7E69AB" />
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium text-memotag-primary reveal-fade">
            OUR TRACTION
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 reveal-zoom">
            Making a <span className="gradient-text-blue">Real Impact</span>
          </h3>
          <p className="mt-4 text-memotag-text/80 max-w-2xl mx-auto reveal">
            MemoTag is rapidly gaining momentum as we work to transform memory
            care through our innovative approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {traction.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-custom reveal-fade gradient-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-memotag-primary/10 text-memotag-primary">
                    {item.icon}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <h4 className="text-2xl font-bold">{item.metric}</h4>
                    {index === 0 && (
                      <TrendingUp size={16} className="text-green-500" />
                    )}
                  </div>
                </div>
                <p className="text-memotag-text/80 mb-3">{item.description}</p>
                <Progress value={item.progress} className="h-2 mb-2" />
                <p className="text-xs text-memotag-text/60 flex items-center gap-1">
                  {item.trend}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16 relative">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="text-memotag-primary w-6 h-6" />
            <h4 className="text-2xl font-bold text-center reveal-fade">
              What People Are Saying
            </h4>
          </div>

          <div className="absolute top-0 right-10 transform -rotate-12 opacity-20">
            <DoodleElements
              type="wave"
              width={100}
              height={60}
              color="#9b87f5"
            />
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <Card
                      className={cn(
                        "border-none shadow-custom card-3d h-full",
                        "transform transition-all hover:-translate-y-1 hover:shadow-lg",
                        "border-2 border-dashed border-memotag-primary/20"
                      )}
                    >
                      <CardContent className="p-6 relative">
                        <div className="absolute -top-3 -left-3 bg-white rounded-full p-1 shadow-sm">
                          <DoodleElements
                            type="dots"
                            width={20}
                            height={20}
                            color="#9b87f5"
                          />
                        </div>

                        <div className="flex flex-col h-full">
                          <div className="mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < testimonial.rating
                                    ? "text-yellow-400 inline-block"
                                    : "text-gray-300 inline-block"
                                }
                                fill={
                                  i < testimonial.rating
                                    ? "currentColor"
                                    : "none"
                                }
                              />
                            ))}
                          </div>
                          <div className="mb-4 text-memotag-text/80 italic flex-grow">
                            "{testimonial.quote}"
                          </div>
                          <div className="flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-memotag-primary to-memotag-accent flex items-center justify-center text-white font-medium">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <p className="font-medium">{testimonial.name}</p>
                              <p className="text-sm text-memotag-text/60">
                                {testimonial.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="static translate-y-0 left-auto" />
                <CarouselNext className="static translate-y-0 right-auto" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="mb-16 bg-white p-8 rounded-xl shadow-md reveal border-2 border-dashed border-memotag-primary/20">
          <h4 className="text-xl font-bold mb-6 text-center">
            Recognition & Milestones
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-memotag-primary/20 rounded-lg p-4 bg-memotag-primary/5 transition-transform hover:-translate-y-1">
              <p className="text-sm text-memotag-text/70 mb-1">FEBRUARY 2024</p>
              <h5 className="font-medium mb-2">
                Winner, IIT Delhi Healthcare Innovation Challenge
              </h5>
              <p className="text-sm text-memotag-text/80">
                Selected from over 200+ healthcare startups for innovative use
                of AI in eldercare.
              </p>
            </div>
            <div className="border border-memotag-primary/20 rounded-lg p-4 bg-memotag-primary/5 transition-transform hover:-translate-y-1">
              <p className="text-sm text-memotag-text/70 mb-1">APRIL 2024</p>
              <h5 className="font-medium mb-2">
                Featured in YourStory's "30 Under 30" Startups
              </h5>
              <p className="text-sm text-memotag-text/80">
                Highlighted as one of the most promising healthtech innovations
                from India.
              </p>
            </div>
            <div className="border border-memotag-primary/20 rounded-lg p-4 bg-memotag-primary/5 transition-transform hover:-translate-y-1">
              <p className="text-sm text-memotag-text/70 mb-1">JUNE 2024</p>
              <h5 className="font-medium mb-2">
                Completed clinical trials at AIIMS Delhi
              </h5>
              <p className="text-sm text-memotag-text/80">
                Successfully tested with 150+ patients showing significant
                cognitive improvement.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-16 text-center reveal">
            <p className="text-sm font-medium text-memotag-primary mb-2">
              FEATURED IN
            </p>
            <div className="flex flex-col flex-wrap justify-center items-center gap-6 mt-4">
              <div className="text-gray-500 font-bold text-sm md:text-base">
                Shark Tank India S4
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=D5KKP-VaihY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative group w-fit">
                    <img
                      src={sharkTankIndiaS4Pitch}
                      alt="Shark Tank India Pitch"
                      className="h-[40vh] cursor-pointer"
                    />

                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Click to Watch Full Pitch on Youtube
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;
