import React from "react";
import { useNavigate } from "react-router-dom";

const tracks = [
  {
    icon: "",
    title: "Product Design",
    description:
      "Learn UI/UX fundamentals, wireframing, design systems, and tools like Figma. Build a portfolio-worthy app design by the end of the program.",
  },
  {
    icon: "",
    title: "Data Analysis (Python & SQL)",
    description:
      "Learn how to clean, analyze, and visualize data using Python and SQL. Ideal for analytical minds, aspiring data analysts, and problem solvers.",
  },
  {
    icon: "",
    title: "Website Development",
    description:
      "Go from zero to building functional websites using HTML, CSS, and JavaScript. Learn the basics of how the web works — by building on it.",
  },
];

const faqs = [
  {
    q: "Do I need any prior experience?",
    a: "No. All three courses are beginner-friendly and built to take you from zero to confident.",
  },
  {
    q: "Will the classes be recorded?",
    a: "Yes! All sessions will be recorded and shared privately with students.",
  },
  {
    q: "What happens if I miss a class?",
    a: "You can catch up via recordings, but consistent attendance is required to qualify for internships.",
  },
  {
    q: "Is there a certificate?",
    a: "Yes, all students who complete the program and deliver their capstone project will receive a digital certificate.",
  },
];

const OtherSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 min-h-screen overflow-x-hidden relative">
      {/* Floating Back Button at Top */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 bg-white/90 text-blue-700 px-4 py-2 rounded-full shadow-lg border border-blue-200 hover:bg-white hover:scale-105 transition-transform duration-200 z-50 animate-fade-in-up delay-100"
      >
        ← Back to Home
      </button>

      {/* Hero Section */}
      <section className="text-center py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-500/30 to-pink-400/30 blur-2xl opacity-30 -z-10" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
          Affordable, Intensive Tech Training for Young Nigerians
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
          A 12-week virtual bootcamp built for young and hungry Nigerians. Learn
          real-world tech skills and walk away with more than just theory!
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up delay-200">
          {[
            "Live weekly classes",
            "Real-life projects",
            "Financial Aid Available",
            "Internship Opportunities",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-white/70 backdrop-blur-md text-green-700 px-4 py-1 rounded-full text-sm font-medium shadow-md"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="https://selar.com/2003572711"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform"
          >
            Apply Now
          </a>
          <a
            href="https://selar.com/2003572711"
            className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-bold shadow hover:bg-blue-50 transition"
          >
            Financial Aid Available
          </a>
        </div>
      </section>

      {/* What You’ll Learn */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-700 animate-fade-in-up">
          What You’ll Learn
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {tracks.map((track, idx) => (
            <div
              key={track.title}
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow animate-fade-in-up delay-100"
            >
              <div className="text-5xl mb-4">{track.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {track.title}
              </h3>
              <p className="text-gray-600 text-sm">{track.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-10 text-gray-600 text-sm font-medium">
          <span className="bg-gray-100 px-4 py-2 rounded-full shadow">
            Duration: 12 weeks
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full shadow">
            Start Date: August 23, 2025
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full shadow">
            Location: Virtual
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full shadow">
            Fee: ₦50,000 (Financial Aid Available)
          </span>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-white border-t border-b border-gray-200">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-700 animate-fade-in-up">
          FAQs
        </h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md border border-blue-100 rounded-xl shadow p-6 hover:shadow-lg transition-shadow animate-fade-in-up delay-100"
            >
              <h4 className="font-semibold text-blue-700 mb-2">{faq.q}</h4>
              <p className="text-gray-700 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-center border-t">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 animate-fade-in-up">
          Ready to Apply?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto animate-fade-in-up delay-100">
          Start your journey into tech the right way. Spots are limited. Don’t miss out.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-up delay-200">
          <a
            href="https://selar.com/2003572711"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Apply Now
          </a>
          {/* <a
            href="https://selar.com/2003572711"
            className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-bold shadow hover:bg-blue-50 transition"
          >
            Apply for Financial Aid
          </a> */}
          <a
            href="mailto:rekrutly@gmail.com"
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white text-center border-t text-sm text-gray-600 animate-fade-in-up">
        <div className="text-blue-700 font-bold text-lg mb-2">
          Rekrutly Tech Bootcamp
        </div>
        <div className="mb-1">Empowering young Nigerians with real-world tech skills</div>
        <div className="mb-2">© 2025. All Rights Reserved.</div>
        <div className="flex justify-center gap-6 mt-4">
          <a href=" https://www.instagram.com/rekrutly_tech_bootcamp?" className="hover:text-blue-600">Instagram</a>
          <a href=" https://www.facebook.com/share/19ZXueTqAz/?mibextid=wwXIfr" className="hover:text-blue-600">Facebook</a>
          <a href="https://www.linkedin.com/company/rekrutly/ " className="hover:text-blue-600"> ⁠LinkedIn</a>
          <a href="mailto:rekrutly@gmail.com" className="hover:text-blue-600">Email Us</a>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in-up.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OtherSolutions;
