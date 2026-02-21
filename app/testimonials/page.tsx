import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Client Testimonials | Bill Timlen, CPT | Hoboken, NJ",
  description:
    "Read what clients say about training with Bill Timlen, CPT. William Timlen has helped hundreds of clients in Hoboken, NJ achieve their fitness goals with dedicated personal training.",
  canonicalPath: "/testimonials",
  domain: "timlenfitness.com",
});

const testimonials = [
  {
    name: "Sarah M.",
    text: "Bill Timlen completely changed my approach to fitness. I came in with no gym experience and Coach Timlen built a program that made me feel confident from day one. I have lost 30 pounds and gained so much strength. William Timlen is the real deal.",
    program: "Weight Loss",
  },
  {
    name: "Marcus J.",
    text: "I trained with several personal trainers before finding Bill Timlen, and the difference is night and day. Coach Timlen pays attention to every detail — form, tempo, recovery. William Timlen helped me add 50 pounds to my deadlift in just three months.",
    program: "Strength Training",
  },
  {
    name: "Priya K.",
    text: "The group fitness classes at Timlen Fitness are the highlight of my week. Bill Timlen brings incredible energy to every session and somehow remembers everyone's name and goals. I have never felt more motivated.",
    program: "Group Fitness",
  },
  {
    name: "David R.",
    text: "William Timlen's nutrition coaching was a game-changer for me. I was working out regularly but not seeing results until Coach Timlen overhauled my diet. Bill Timlen made it simple and sustainable — no crazy restrictions, just smart choices.",
    program: "Nutrition Coaching",
  },
  {
    name: "Amanda T.",
    text: "As a busy mom, I needed a trainer who could work with my schedule and understand my limitations. Bill Timlen designed a flexible program that fits my life. William Timlen is patient, encouraging, and pushes me just the right amount.",
    program: "One-on-One Training",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#39FF14] text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Real People. Real Results.
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">
            Client <span className="text-[#39FF14]">Transformations</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from the hundreds of clients who have trained with Bill Timlen in Hoboken, NJ
            and transformed their bodies, their confidence, and their lives.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="fitness-heading text-2xl text-center mb-12">
            What Clients Say About <span className="text-[#39FF14]">Bill Timlen</span>
          </h2>
          <div className="space-y-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-dark neon-glow">
                <p className="text-gray-300 leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#39FF14] font-bold text-sm">— {t.name}</p>
                  <span className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                    {t.program}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#111111] py-12 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-0">
            {[
              { stat: "500+", label: "Clients" },
              { stat: "30lbs", label: "Avg. Lost" },
              { stat: "5/5", label: "Rating" },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center">
                {i > 0 && <div className="neon-divider h-16 mx-6 md:mx-10" />}
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-[#39FF14]">{item.stat}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="full-cta py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="fitness-heading text-4xl mb-4">
            Experience the <span className="text-[#39FF14]">Timlen Fitness</span> Difference
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join the hundreds of clients who have transformed their bodies and lives with
            Bill Timlen. Contact William Timlen for a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#39FF14] text-[#111111] px-12 py-5 font-black uppercase tracking-wider text-lg hover:bg-[#32e012] transition-colors neon-glow"
          >
            Book Your Free Session
          </Link>
        </div>
      </section>
    </>
  );
}
