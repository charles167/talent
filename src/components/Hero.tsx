import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000",
    title: "Hire Elite Tech Talent, Pre-vetted & Ready",
    description: "Connect with top 1% of tech professionals, rigorously vetted for excellence. Scale your team with confidence.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000",
    title: "Vetted Excellence",
    description: "Work with the top 1% of global tech talent",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000",
    title: "Seamless Integration",
    description: "Quick onboarding and hassle-free collaboration",
  },
];

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-16">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white px-4 animate-fade-up">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                        onClick={() => navigate("/hire-talent")}
                      >
                        Hire Talent
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                        onClick={() => navigate("/join-talent")}
                      >
                        Join as Talent
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};