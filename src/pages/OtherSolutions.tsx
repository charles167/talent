import React from "react";

const tracks = [
	{
		icon: "🖌️",
		title: "Product Design",
		description:
			"Learn UI/UX fundamentals, wireframing, design systems, and tools like Figma. Build a portfolio-worthy app design by the end of the program.",
	},
	{
		icon: "📊",
		title: "Data Analysis (Python & SQL)",
		description:
			"Learn how to clean, analyze, and visualize data using Python and SQL. Ideal for anyone who is analytical minded, aspiring data analysts and problem solvers.",
	},
	{
		icon: "🌐",
		title: "Website Development",
		description:
			"Go from zero to building functional websites using HTML, CSS, and JavaScript. Learn the basics of how the web works — by building on it.",
	},
];

const timeline = [
	{ date: "July 7", event: "Applications Open" },
	{ date: "July 26", event: "Info Session (Live Q&A)" },
	{ date: "August 3", event: "Financial Aid Deadline" },
	{ date: "August 4", event: "Admission Emails Sent" },
	{ date: "August 23", event: "First Class Begins" },
	{ date: "November 8", event: "Graduation & Capstone Demo" },
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
	return (
		<div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex flex-col">
			{/* Hero Section */}
			<section className="relative py-20 px-4 text-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-purple-500/40 to-pink-400/30 blur-2xl opacity-40 -z-10" />
				<h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 drop-shadow-lg animate-fade-in-up">
					Affordable, Intensive Tech Training for Young Nigerians
				</h1>
				<p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
					A 12-week virtual bootcamp built for young and hungry Nigerians. Learn real-world tech skills and walk away with more
					than just theory!
				</p>
				<div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up delay-200">
					<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">
						Live weekly classes
					</span>
					<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">
						Real-life projects to build your own portfolio
					</span>
					<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">
						Financial Aid Available
					</span>
					<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">
				        Internship Opportunities
					</span>
				</div>
				<div className="flex flex-col md:flex-row justify-center gap-4 mb-2 animate-fade-in-up delay-300">
					<a
						href="#apply"
						className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200"
					>
						Apply Now
					</a>
					<a
						href="#aid"
						className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-bold shadow hover:bg-blue-50 transition"
					>
						Financial Aid Available. Learn More!
					</a>
				</div>
			</section>

			{/* What You'll Learn */}
			<section className="py-16 px-4 max-w-5xl mx-auto">
				<h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700">
					What You’ll Learn
				</h2>
				<div className="grid md:grid-cols-3 gap-8 mb-10">
					{tracks.map((track) => (
						<div
							key={track.title}
							className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-200 animate-fade-in-up"
						>
							<div className="text-5xl mb-3 drop-shadow">{track.icon}</div>
							<h3 className="text-xl font-bold mb-2 text-gray-900">
								{track.title}
							</h3>
							<p className="text-gray-600 text-base">{track.description}</p>
						</div>
					))}
				</div>
				<div className="flex flex-wrap justify-center gap-4 text-gray-700 text-base mb-6">
					<span className="bg-gray-200 px-4 py-2 rounded-full font-medium shadow">
						Duration: 12 weeks
					</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full font-medium shadow">
						Start Date: Saturday, August 23, 2025
					</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full font-medium shadow">
						Where: Virtual
					</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full font-medium shadow">
						Fee: ₦50,000 only (financial aid available)
					</span>
				</div>
				<div className="text-center text-purple-700 font-bold mb-4 text-lg animate-fade-in-up">
					Top students stand the chance to land internship placements with innovative Nigerian startups
				</div>
				<div className="text-center">
					<a
						href="#apply"
						className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200"
					>
						Apply Now!
					</a>
				</div>
			</section>

			{/* What Makes This Bootcamp Different */}
			<section className="py-16 px-4 bg-white border-t border-b border-blue-100">
				<h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">
					What Makes This Bootcamp Different
				</h2>
				<ul className="max-w-2xl mx-auto text-gray-700 space-y-4 mb-8 text-lg animate-fade-in-up">
					<li>
						{" "}
						<b>It’s Not Just Another Online Course:</b> We’re not selling recorded
						videos or “learn at your own pace” fluff. This is real training for
						real skills.
					</li>
					<li>
						 <b>Intensive & Structured:</b> Weekly assignments, group projects,
						and a capstone project
					</li>
					<li>
						 <b>Built for Beginners:</b> No experience required; we teach you
						from scratch
					</li>
					<li>
						 <b>Affordable:</b> Just ₦50,000, with need-based financial
						assistance available
					</li>
					<li>
						 <b>Career-Ready:</b> Top students in each course win internship
						placements
					</li>
					<li>
						{" "}
						<b>Backed by Tech Communities & Partner Startups:</b> You’re not
						learning in isolation
					</li>
                    
			
				<h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">
					
                    Who is this for?
                </h2>
				</ul>
				<div className="text-center text-blue-700 font-bold mb-2 text-lg animate-fade-in-up">
					 Internship Opportunities
				</div>
				<p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto animate-fade-in-up">
					Top 2 students in each course (based on attendance, project delivery,
					and participation) will be selected to intern at one of our partner tech
					startups. Internships can be physical or virtual.
					<br />
					<span className="font-semibold">
						You don’t need to “apply” for this. You only need to show up, do the work, and
						stand out.
					</span>
				</p>
				<div className="text-center">
					<a
						href="#apply"
						className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200"
					>
						Apply Now and Compete for a Spot
					</a>
				</div>
			</section>

			{/* Financial Aid */}
			<section id="aid" className="py-16 px-4 max-w-3xl mx-auto animate-fade-in-up">
				<h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
					Financial Aid
				</h2>
				<p className="text-gray-700 mb-4 text-center text-lg">
					We don’t want cost to stop anyone from learning.
					<br />
					If you are unemployed, a student, or a serving youth corps member who cannot afford the fee, you can apply for financial aid. Limited slots are available for financial aid, so please apply early if you need assistance.
				</p>
				<ul className="text-gray-700 mb-4 space-y-2 text-base">
				</ul>
				<div className="text-center text-base text-gray-600 mb-4">
					Application Deadline for Aid: <b>August 3, 2025</b>
				</div>
				<div className="flex flex-col md:flex-row justify-center gap-4">
					<a
						href="#apply"
						className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200"
					>
						Apply for Financial Aid
					</a>
				</div>
			</section>

			{/* Partners & Sponsors */}
			<section className="py-16 px-4 bg-white border-t border-b border-blue-100 max-w-5xl mx-auto animate-fade-in-up">
				<h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">
					Our Partners & Sponsors
				</h2>
				<p className="text-gray-700 mb-8 text-center text-lg">
					This bootcamp is supported by passionate tutors, tech professionals, and
					startup founders who want to give back and grow the next generation of
					Nigerian tech talent.
				</p>
				<div className="flex flex-wrap justify-center gap-10 mb-4">
					{/* Replace with real logos and URLs if available */}
					<a href="#" className="block">
						<div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl w-36 h-20 flex items-center justify-center text-gray-500 font-bold text-lg shadow">
							Startup A
						</div>
					</a>
					<a href="#" className="block">
						<div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl w-36 h-20 flex items-center justify-center text-gray-500 font-bold text-lg shadow">
							Community B
						</div>
					</a>
					<a href="#" className="block">
						<div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl w-36 h-20 flex items-center justify-center text-gray-500 font-bold text-lg shadow">
							Sponsor C
						</div>
					</a>
				</div>
			</section>

			{/* FAQs */}
			<section className="py-16 px-4 max-w-3xl mx-auto animate-fade-in-up">
				<h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">
					FAQs
				</h2>
				<div className="space-y-6">
					{faqs.map((faq, i) => (
						<div
							key={i}
							className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-200"
						>
							<div className="font-bold mb-2 text-lg text-blue-700">
								{faq.q}
							</div>
							<div className="text-gray-700 text-base">{faq.a}</div>
						</div>
					))}
				</div>
			</section>

			{/* Final CTA */}
			<section
				id="apply"
				className="py-16 px-4 text-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-t animate-fade-in-up"
			>
				<h2 className="text-3xl font-extrabold mb-4 text-gray-900">
					Ready to Apply?
				</h2>
				<p className="mb-6 text-gray-700 text-lg">
					Start your journey into tech the right way. Spots are limited. Don’t miss
					out.
				</p>
				<div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
					<a
						href="#"
						className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200"
					>
						Apply Now
					</a>
					<a
						href="#aid"
						className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-bold shadow hover:bg-blue-50 transition"
					>
						Apply for Financial Aid
					</a>
					<a
						href="mailto:info@techbootcampnigeria.com"
						className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:bg-green-700 transition-transform duration-200"
					>
						Contact Us
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-10 px-4 text-center text-gray-600 bg-white border-t mt-8 animate-fade-in-up">
				<div className="font-extrabold text-2xl mb-2 text-blue-700">
					Rekrutly Tech Bootcamp 
				</div>
				<div className="mb-2 text-lg">
					Empowering young Nigerians with real-world tech skills
				</div>
				<div className="mb-2">© 2025. All Rights Reserved.</div>
				<div className="flex justify-center gap-6 mt-4">
					<a
						href="#"
						className="hover:text-blue-600 text-lg"
					>
						Instagram
					</a>
					<a
						href="#"
						className="hover:text-blue-600 text-lg"
					>
						Join us on Slack
					</a>
					<a
						href="mailto:info@techbootcampnigeria.com"
						className="hover:text-blue-600 text-lg"
					>
						Email Us
					</a>
				</div>
			</footer>
			{/* Simple fade-in animation keyframes */}
			<style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) forwards;
        }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
		</div>
	);
};

export default OtherSolutions;
