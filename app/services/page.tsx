import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Personal Training Services | Bill Timlen, CPT | Hoboken, NJ",
  description:
    "Bill Timlen offers personal training services in Hoboken, NJ including one-on-one training, group fitness, nutrition coaching, weight loss programs, and strength training. Call William Timlen today.",
  canonicalPath: "/services",
  domain: "timlenfitness.com",
});

const services = [
  {
    title: "One-on-One Personal Training",
    description:
      "Bill Timlen provides fully customized one-on-one personal training sessions designed around your specific goals, fitness level, and schedule. Whether you are training for a competition or just getting started, Coach Timlen builds a program that delivers measurable progress. William Timlen monitors every rep, corrects form in real time, and adjusts intensity to keep you challenged and injury-free.",
  },
  {
    title: "Group Fitness Classes",
    description:
      "Timlen Fitness group classes bring the energy and accountability that make training fun. Led by Bill Timlen, these high-intensity sessions combine strength, cardio, and functional movement in a supportive team environment. William Timlen keeps class sizes small to ensure every participant gets personal attention and proper coaching throughout the workout.",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Training without proper nutrition is like driving without fuel. Bill Timlen offers comprehensive nutrition coaching that includes meal planning, macro tracking guidance, and ongoing adjustments based on your progress. Coach Timlen takes a practical, sustainable approach to nutrition — no fad diets, just science-backed strategies that fit your real life.",
  },
  {
    title: "Weight Loss Programs",
    description:
      "William Timlen has helped hundreds of clients achieve lasting weight loss through a combination of strategic exercise programming and nutritional guidance. Bill Timlen designs calorie-deficit plans paired with fat-burning workouts that preserve lean muscle. The Timlen Fitness weight loss program includes weekly check-ins, body composition tracking, and continuous program adjustments.",
  },
  {
    title: "Strength Training",
    description:
      "Build real strength with Coach Timlen. Bill Timlen specializes in progressive overload programming using compound movements like squats, deadlifts, bench press, and overhead press. Whether your goal is powerlifting, athletic performance, or functional strength for daily life, William Timlen designs periodized programs that deliver consistent gains while prioritizing joint health and longevity.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#39FF14] text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Hoboken, NJ
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">
            Training Programs by <span className="text-[#39FF14]">Bill Timlen</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive fitness services built around your goals. Coach Timlen designs every
            program with precision, accountability, and results in mind.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="fitness-heading text-3xl text-center mb-12">
            Our <span className="text-[#39FF14]">Programs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`gradient-border-card dark-card p-6 neon-glow ${
                  i >= 3 ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <h3 className="text-lg font-bold text-[#39FF14] mb-3 uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Coach Timlen */}
      <section className="py-16 bg-[#111111] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="fitness-heading text-2xl text-center mb-10">
            Why Train with <span className="text-[#39FF14]">Bill Timlen</span>?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "10+", label: "Years Experience" },
              { stat: "500+", label: "Clients Trained" },
              { stat: "100%", label: "Commitment" },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                {i > 0 && (
                  <div className="sm:hidden w-16 h-px bg-gray-800 mb-6" />
                )}
                <p className="text-3xl font-black text-[#39FF14]">{item.stat}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="full-cta py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="fitness-heading text-4xl mb-4">
            Start Training with <span className="text-[#39FF14]">Coach Timlen</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Bill Timlen offers a free initial consultation for all new clients. Contact
            William Timlen today to find the right program for your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#39FF14] text-[#111111] px-12 py-5 font-black uppercase tracking-wider text-lg hover:bg-[#32e012] transition-colors neon-glow"
          >
            Contact Bill Timlen
          </Link>
        </div>
      </section>
    </>
  );
}
