import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typewriter } from "react-simple-typewriter";

const slides = [
  {
    image: "/1.jpg",
    title: "Hire Elite Tech Talent, Pre-vetted & Ready",
    description:
      "Connect with top 1% of tech professionals, rigorously vetted for excellence. Scale your team with confidence.",
  },
  {
    image: "/2.jpg",
    title: "Vetted Excellence",
    description: "Work with the top 1% of global tech talent.",
  },
  {
    image: "/3.jpg",
    title: "Seamless Integration",
    description: "Quick onboarding and hassle-free collaboration.",
  },
];

export const Hero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 5000; // 5 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, delay);

    return () => resetTimeout();
  }, [current]);

  return (
    <div className="relative min-h-screen pt-16">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: "transform 0.8s ease-in-out",
            display: "flex",
          }}
        >
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="min-w-full">
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
                      <Typewriter
                        words={[slide.title]}
                        typeSpeed={50}
                        deleteSpeed={0}
                        delaySpeed={1000}
                        cursor
                        cursorStyle="_"
                      />
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

        <CarouselPrevious
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="left-4"
        />
        <CarouselNext
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="right-4"
        />
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
