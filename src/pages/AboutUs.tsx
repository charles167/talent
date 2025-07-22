import { Navigation } from "@/components/Navigation";
import { Building, Globe, Users, Briefcase, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connecting top companies with elite tech talent worldwide
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                We're revolutionizing how companies build their tech teams by connecting them with pre-vetted, exceptional talent from around the globe. Our mission is to ensure seamless collaboration between innovative companies and world-class developers.
              </p>
              <p className="text-lg text-gray-600">
                Through our rigorous vetting process and commitment to excellence, we maintain a network of the top 3% of tech talent worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Global Excellence",
                description: "Connecting talent across borders to drive innovation worldwide"
              },
              {
                icon: <Handshake className="h-8 w-8 text-blue-600" />,
                title: "Trust & Transparency",
                description: "Building lasting relationships through honest communication"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Community First",
                description: "Fostering a supportive environment for growth and collaboration"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Companies Served" },
              { number: "10,000+", label: "Successful Projects" },
              { number: "150+", label: "Countries Reached" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-blue-600">{stat.number}</p>
                <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              },
              {
                name: "David Smith",
                role: "Head of Talent",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;