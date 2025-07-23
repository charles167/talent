const stats = [
  { number: "20+", label: "Companies Served" },
  { number: "100+", label: "Vetted Talents" },
  { number: "48hrs", label: "Average Match Time" },
  { number: "95%", label: "Success Rate" },
];

export const Stats = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};