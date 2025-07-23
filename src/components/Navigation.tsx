import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar, Info, Menu, X } from "lucide-react";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Hire Talent", path: "/hire-talent" },
    { label: "Schedule a Demo", path: "#", icon: <Calendar className="h-4 w-4" /> },
    { label: "About Us", path: "/about-us", icon: <Info className="h-4 w-4" /> },
    { label: "Join as Talent", path: "/join-talent" },
    { label: "Other Solutions", path: "/other-solutions" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <div className="flex items-center">
  <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
  Rekrutly
</span>

</div>

          <div className="flex items-center">
            {/* <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/32x32?text=Logo";
              }}
            /> */}  
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {navItems.map(({ label, path, icon }) => (
              <Button
                key={label}
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 inline-flex items-center gap-1 transition-all duration-200"
                onClick={() => path !== "#" && navigate(path)}
              >
                {icon}
                {label}
              </Button>
            ))}
          </div>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-4 pb-4 transition-all duration-300 animate-slide-down">
          <div className="space-y-3 mt-2">
            {navItems.map(({ label, path, icon }) => (
              <Button
                key={label}
                variant="ghost"
                className="w-full text-left text-gray-700 hover:text-blue-600 inline-flex items-center gap-2"
                onClick={() => {
                  setIsOpen(false);
                  if (path !== "#") navigate(path);
                }}
              >
                {icon}
                {label}
              </Button>
            ))}

            <Button
              variant="default"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};
