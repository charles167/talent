import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JoinTalent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/30 to-secondary-light/30">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up">
          <h1 className="text-3xl font-bold text-charcoal mb-6">Join Our Talent Network</h1>
          <p className="text-gray-600 mb-8">
            Connect with top companies and showcase your expertise. Join our exclusive network of pre-vetted tech professionals.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expertise">Primary Expertise</Label>
              <Input id="expertise" placeholder="e.g., Full Stack Developer, DevOps Engineer" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input id="experience" type="number" placeholder="Enter years of experience" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary-dark text-white">
                Submit Application
              </Button>
              <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary-light">
                <Github className="mr-2 h-4 w-4" />
                Connect GitHub
              </Button>
              <Button variant="outline" className="flex-1 border-blue-500 text-blue-500 hover:bg-blue-50">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect LinkedIn
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinTalent;