import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Microvest",
    website: "https://microvest.ng",
    logo: "https://microvest.ng/assets/images/logo.svg",
  },
  {
    name: "Seamfix",
    website: "https://seamfix.com",
    logo: "https://seamfix.com/wp-content/uploads/2022/11/Group-113110.png",
  },
  {
    name: "Gattimo Apparel",
    website: "https://ruffntumblekids.com",
    logo: "https://www.ruffntumblekids.com/cdn/shop/files/The_logo_1-1_170x@2x.png?v=1716990040",
  },
  {
    name: "Enzo Krypton",
    website: "https://enzokrypton.com",
    logo: "https://enzokrypton.com/wp-content/uploads/2016/10/EnzoKrypton_logo_1b.png",
  },
];

// ✅ RENAMED COMPONENT
export const Testimonials = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Successful Partnerships
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          We’ve proudly partnered with these innovative companies to build the future.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {testimonials.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[160px] p-4 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="mx-auto max-h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
