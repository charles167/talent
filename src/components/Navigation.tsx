import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Calendar, Info } from "lucide-react";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/32x32?text=Logo";
              }}
            />
          </div>
          
          <div className="flex-1 flex justify-center space-x-8">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => navigate("/hire-talent")}
            >
              Hire Talent
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600 inline-flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Demo
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600 inline-flex items-center gap-2"
              onClick={() => navigate("/about-us")}
            >
              <Info className="h-4 w-4" />
              About Us
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => navigate("/join-talent")}
            >
              Join as Talent
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => navigate("/other-solutions")}
            >
              Other Solutions
            </Button>
          </div>

          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};