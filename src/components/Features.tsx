import { CheckCircle, Clock, Shield, Trophy } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Pre-vetted Excellence",
    description:
      "Every talent undergoes rigorous technical and soft skills assessment",
  },
  {
    icon: Clock,
    title: "Quick Matching",
    description: "Get matched with the right talent within 48 hours",
  },
  {
    icon: Trophy,
    title: "Top 1% Talent",
    description: "Access to elite developers, designers, and tech leaders",
  },
  {
    icon: CheckCircle,
    title: "Risk-Free Trial",
    description: "2-week trial period to ensure the perfect fit",
  },
];

export const Features = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Rekrutly?
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            We've revolutionized tech hiring by combining rigorous vetting with
            intelligent matching
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};