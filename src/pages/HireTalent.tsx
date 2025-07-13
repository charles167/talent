import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Clock, Shield, Trophy, Star, Briefcase, Code } from "lucide-react";

const HireTalent = () => {
  const navigate = useNavigate();

  const offerings = [
    {
      title: "Elite Talent Pool",
      description: "Access to top 1% of tech professionals, pre-vetted and ready to contribute.",
      icon: Trophy,
    },
    {
      title: "Quick Matching",
      description: "Get matched with ideal candidates within 48 hours, saving valuable time.",
      icon: Clock,
    },
    {
      title: "Risk-Free Trial",
      description: "2-week trial period to ensure the perfect fit for your team.",
      icon: Shield,
    },
    {
      title: "Diverse Expertise",
      description: "From frontend developers to AI specialists, find the exact skills you need.",
      icon: Users,
    },
  ];

  const benefits = [
    "Thoroughly vetted candidates",
    "Flexible hiring options",
    "Dedicated account support",
    "Seamless onboarding process",
    "Competitive pricing",
    "Global talent network",
  ];

  const successStories = [
    {
      company: "TechCorp Inc.",
      role: "Senior Frontend Developer",
      timeToHire: "72 hours",
      outcome: "Increased development velocity by 40%",
    },
    {
      company: "DataFlow Systems",
      role: "AI Engineer",
      timeToHire: "1 week",
      outcome: "Successfully launched ML platform",
    },
    {
      company: "CloudScale",
      role: "DevOps Engineer",
      timeToHire: "48 hours",
      outcome: "Reduced deployment time by 60%",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            ← Back
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Team with{" "}
                <span className="text-primary">Elite Tech Talent</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Access pre-vetted, top-tier technology professionals ready to drive your innovation forward.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                  onClick={() => navigate("/login")}
                >
                  Get Started Now
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {offerings.map((offering, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <offering.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Section */}
          <div className="mb-24 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">World-Class Talent at Your Fingertips</h2>
              <p className="text-gray-600 mb-6">
                Our rigorous vetting process ensures you only work with the best. Every candidate goes through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Code className="text-primary" />
                  Technical skills assessment
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-primary" />
                  Communication evaluation
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase className="text-primary" />
                  Experience verification
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <Card className="mb-24">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose Our Platform?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Success Stories */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{story.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary font-semibold mb-2">{story.role}</p>
                    <p className="text-gray-600 mb-2">Time to hire: {story.timeToHire}</p>
                    <p className="text-gray-600">{story.outcome}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of companies that have found their perfect tech match
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={() => navigate("/login")}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireTalent;