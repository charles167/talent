import { ArrowRight, Search, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Submit Requirements",
    description: "Tell us about your project needs and team requirements",
  },
  {
    icon: Users,
    title: "Meet Candidates",
    description: "Review pre-vetted profiles and interview your top choices",
  },
  {
    icon: CheckCircle,
    title: "Start Working",
    description: "Begin your 2-week trial with your selected talent",
  },
];

export const Process = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, streamlined process to help you find the perfect talent
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-8 w-8 h-8 text-blue-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};