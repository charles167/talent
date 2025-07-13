import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    // name: "Sarah Johnson",
    // role: "CTO at TechFlow",
    content:
      "We found an exceptional senior developer through Rekrutly within days. The quality of talent and service is outstanding.",
    // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    // name: "Michael Chen",
    // role: "Engineering Lead at DataScale",
    content:
      "The pre-vetting process saved us countless hours. Our new team members integrated seamlessly and delivered value from day one.",
    // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    // name: "Emily Rodriguez",
    // role: "Product Manager at CloudNine",
    content:
      "Rekrutly's talent pool is unmatched. We've built an entire development team through their platform.",
    // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their teams with our
            talent
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="animate-fade-up hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    // src={testimonial.image}
                    // alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {/* {testimonial.name} */}
                    </h4>
                    {/* <p className="text-sm text-gray-600">{testimonial.role}</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};