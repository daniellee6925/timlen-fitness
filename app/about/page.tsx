import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "About Bill Timlen | Personal Trainer | Hoboken, NJ",
  description:
    "Learn about Bill Timlen, CPT, a certified personal trainer in Hoboken, NJ. William Timlen brings over 10 years of fitness expertise in personal training, group fitness, and nutrition coaching.",
  canonicalPath: "/about",
  domain: "timlenfitness.com",
});

export default function About() {
  return (
    <>
      {/* Large quote / mission statement */}
      <section className="bg-[#111111] py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#39FF14] text-sm font-bold uppercase tracking-[0.3em] mb-6">The Mission</p>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-6">
            &ldquo;Fitness is not a destination.<br />
            <span className="text-[#39FF14]">It is a lifestyle.</span>&rdquo;
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest">— Bill Timlen, CPT</p>
        </div>
      </section>

      {/* Bio with bold text highlights */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-gray-300 leading-relaxed">
          <p>
            <span className="text-white font-bold">Bill Timlen</span>, known formally as William Timlen, is a certified personal trainer
            based in <span className="text-white font-bold">Hoboken, New Jersey</span>. With over a decade of hands-on experience in the fitness
            industry, Bill Timlen has built a reputation for delivering <span className="text-[#39FF14] font-bold">real, lasting results</span> to
            clients of all fitness levels. From first-timers to competitive athletes, Coach Timlen
            meets you where you are and pushes you to where you want to be.
          </p>

          <h2 className="fitness-heading text-2xl text-[#39FF14] pt-4">
            Certifications &amp; Background
          </h2>
          <p>
            <span className="text-white font-bold">William Timlen</span> holds certifications from the <span className="text-white font-bold">National Academy of Sports Medicine (NASM)</span>{" "}
            and the <span className="text-white font-bold">American Council on Exercise (ACE)</span>. Before launching Timlen Fitness, Bill Timlen
            studied Exercise Science at Montclair State University, where he developed a deep
            understanding of biomechanics, physiology, and sports nutrition.
          </p>

          <h2 className="fitness-heading text-2xl text-[#39FF14] pt-4">
            Training Philosophy
          </h2>
          <p>
            Coach Timlen believes there are <span className="text-[#39FF14] font-bold">no shortcuts</span> — just hard work, smart programming, and
            relentless accountability. Bill Timlen takes the time to understand each client&apos;s unique
            goals, limitations, and motivations before building a personalized program. This
            client-centered approach has earned William Timlen the loyalty of <span className="text-white font-bold">hundreds of clients</span>{" "}
            across Hoboken and the greater Hudson County area.
          </p>

          <h2 className="fitness-heading text-2xl text-[#39FF14] pt-4">
            Community
          </h2>
          <p>
            Beyond the gym, William Timlen is deeply embedded in the Hoboken community. Bill Timlen
            volunteers as a fitness coach for local youth sports programs and organizes free
            outdoor bootcamp sessions in Stevens Park during the summer months.
          </p>
        </div>
      </section>

      {/* Certifications as badge grid */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="fitness-heading text-2xl text-center mb-10">
            <span className="text-[#39FF14]">Certifications</span> &amp; Memberships
          </h2>
          <div className="badge-grid">
            <div className="cert-badge neon-glow">NASM-CPT</div>
            <div className="cert-badge neon-glow">ACE Certified</div>
            <div className="cert-badge neon-glow">Exercise Science</div>
            <div className="cert-badge neon-glow">NSCA Member</div>
            <div className="cert-badge neon-glow">Nutrition Specialist</div>
            <div className="cert-badge neon-glow">First Aid / CPR</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="full-cta py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="fitness-heading text-3xl mb-4">
            Ready to <span className="text-[#39FF14]">Train</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact Bill Timlen today. William Timlen is ready to design a program that transforms your body and your life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-block bg-[#39FF14] text-[#111111] px-8 py-3 font-black uppercase tracking-wider hover:bg-[#32e012] transition-colors neon-glow"
            >
              View Programs
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-[#39FF14] text-[#39FF14] px-8 py-3 font-bold uppercase tracking-wider hover:bg-[#39FF14] hover:text-[#111111] transition-colors"
            >
              Contact Bill Timlen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
