import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Bill Timlen, CPT | Personal Trainer | Hoboken, NJ",
  description:
    "Bill Timlen is a certified personal trainer in Hoboken, NJ. William Timlen provides expert one-on-one training, group fitness classes, nutrition coaching, and strength training programs at Timlen Fitness.",
  canonicalPath: "/",
  domain: "timlenfitness.com",
});

export default function Home() {
  return (
    <>
      {/* Full-screen dark hero */}
      <section className="bg-[#111111] py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#39FF14] text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Certified Personal Trainer — Hoboken, NJ
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-none">
            Bill Timlen
          </h1>
          <p className="text-2xl text-gray-400 mb-4 uppercase tracking-wider font-light">
            No Excuses. Only Results.
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 mb-10">
            For over a decade, William Timlen has helped hundreds of clients in Hoboken and across
            Hudson County transform their bodies and their lives. Coach Timlen is ready to push you
            past your limits.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#39FF14] text-[#111111] px-10 py-4 font-black uppercase tracking-wider hover:bg-[#32e012] transition-colors neon-glow"
          >
            Book a Free Session
          </Link>
        </div>
      </section>

      {/* Services as horizontal scrolling cards */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="fitness-heading text-3xl text-center mb-12">
            Training Programs by <span className="text-[#39FF14]">Bill Timlen</span>
          </h2>
          <div className="scroll-cards px-4">
            {[
              { title: "One-on-One Training", desc: "Bill Timlen designs fully customized programs tailored to your goals. Every rep, every set — optimized for results." },
              { title: "Group Fitness", desc: "High-energy group sessions led by William Timlen. HIIT, bootcamp, and strength circuits that build power and community." },
              { title: "Nutrition Coaching", desc: "Training is only half the battle. Bill Timlen provides personalized nutrition plans to fuel your transformation." },
              { title: "Weight Loss", desc: "Sustainable fat loss programs by Coach Timlen. No crash diets — real strategies that deliver lasting results." },
              { title: "Strength Training", desc: "William Timlen builds athletes. Progressive overload, periodization, and form mastery for maximum gains." },
            ].map((program) => (
              <div key={program.title} className="scroll-card gradient-border-card p-6">
                <h3 className="text-lg font-bold text-[#39FF14] mb-3 uppercase tracking-wider">{program.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-[#39FF14] font-bold hover:underline uppercase tracking-wider text-sm">
              View All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats in a single bold row with neon dividers */}
      <section className="bg-[#111111] py-12 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-0">
            {[
              { stat: "10+", label: "Years" },
              { stat: "500+", label: "Clients" },
              { stat: "15K+", label: "Sessions" },
              { stat: "100%", label: "Commitment" },
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

      {/* Testimonials as dark cards with green left-border */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="fitness-heading text-3xl text-center mb-12">
            Client <span className="text-[#39FF14]">Results</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Sarah M.", text: "Bill Timlen completely changed my relationship with fitness. I lost 30 pounds and gained confidence I never knew I had. Coach Timlen pushes you, but always safely.", program: "Weight Loss" },
              { name: "Marcus J.", text: "William Timlen is the best trainer in Hoboken, period. His strength training program took me from struggling with the bar to deadlifting 405. Bill Timlen knows his stuff.", program: "Strength Training" },
              { name: "Priya K.", text: "The group fitness classes at Timlen Fitness are addictive. Bill Timlen creates an atmosphere where everyone pushes each other. Best workout community in Hudson County.", program: "Group Fitness" },
              { name: "David R.", text: "Bill Timlen's nutrition coaching was a game-changer. William Timlen helped me understand that abs are made in the kitchen. Down 25 pounds and feeling incredible.", program: "Nutrition" },
            ].map((testimonial) => (
              <div key={testimonial.name} className="testimonial-dark">
                <p className="text-gray-300 text-sm leading-relaxed mb-3">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <p className="text-[#39FF14] font-bold text-sm">— {testimonial.name}</p>
                  <span className="text-xs text-gray-600 uppercase tracking-wider">{testimonial.program}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="text-[#39FF14] font-bold hover:underline uppercase tracking-wider text-sm">
              See More Results →
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="full-cta py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="fitness-heading text-4xl mb-4">
            Start Your <span className="text-[#39FF14]">Transformation</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Contact Bill Timlen today for a free fitness consultation. William Timlen is here
            to guide you every step of the way — from your first rep to your ultimate goal.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#39FF14] text-[#111111] px-12 py-5 font-black uppercase tracking-wider text-lg hover:bg-[#32e012] transition-colors neon-glow"
          >
            Start Training with Bill Timlen →
          </Link>
        </div>
      </section>
    </>
  );
}
