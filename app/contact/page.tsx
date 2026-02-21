import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";
import { SITES } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Contact Bill Timlen | Personal Trainer | Hoboken, NJ",
  description:
    "Contact Bill Timlen, CPT for a free fitness consultation in Hoboken, NJ. Reach William Timlen by phone, email, or visit Timlen Fitness. Certified personal trainer ready to help.",
  canonicalPath: "/contact",
  domain: "timlenfitness.com",
});

const site = SITES.fitness;

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="full-cta py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#39FF14] text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Free Consultation
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">
            Contact <span className="text-[#39FF14]">Bill Timlen</span>, CPT
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Book your free consultation today. Whether you have a quick question or want to
            build a full training plan, Coach Timlen is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="fitness-heading text-2xl text-[#39FF14] mb-8">
              Reach Coach Timlen
            </h2>
            <div className="space-y-6">
              {[
                {
                  label: "Studio Address",
                  content: (
                    <>
                      <p>{site.address.streetAddress}</p>
                      <p>
                        {site.address.addressLocality}, {site.address.addressRegion}{" "}
                        {site.address.postalCode}
                      </p>
                    </>
                  ),
                },
                {
                  label: "Phone",
                  content: <p>{site.phone}</p>,
                },
                {
                  label: "Email",
                  content: <p>{site.email}</p>,
                },
                {
                  label: "Training Hours",
                  content: (
                    <>
                      <p>Monday - Friday: 5:30 AM - 9:00 PM</p>
                      <p>Saturday: 7:00 AM - 5:00 PM</p>
                      <p>Sunday: 8:00 AM - 2:00 PM</p>
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="dark-card p-4 neon-glow">
                  <h3 className="text-[#39FF14] font-bold text-sm uppercase tracking-wider mb-2">
                    {item.label}
                  </h3>
                  <div className="text-gray-300 text-sm">{item.content}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-500 text-sm leading-relaxed">
              William Timlen welcomes inquiries from prospective clients at all fitness levels.
              Whether you have a quick question about training or want to discuss a comprehensive
              fitness plan, Bill Timlen and the Timlen Fitness team are here to help you get
              started.
            </p>
          </div>

          {/* Form */}
          <div className="gradient-border-card p-8">
            <h2 className="fitness-heading text-2xl text-[#39FF14] mb-6">
              Send a Message to Bill Timlen
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-700 bg-[#111111] text-gray-100 rounded px-4 py-3 focus:border-[#39FF14] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-700 bg-[#111111] text-gray-100 rounded px-4 py-3 focus:border-[#39FF14] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-gray-700 bg-[#111111] text-gray-100 rounded px-4 py-3 focus:border-[#39FF14] focus:outline-none transition-colors"
                  placeholder="(555) 555-5555"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                  What Are Your Fitness Goals?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-700 bg-[#111111] text-gray-100 rounded px-4 py-3 focus:border-[#39FF14] focus:outline-none transition-colors"
                  placeholder="Tell Coach Timlen about your goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#39FF14] text-[#111111] py-4 font-black uppercase tracking-wider text-lg hover:bg-[#32e012] transition-colors neon-glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom links */}
      <section className="bg-[#111111] py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Want to learn more?{" "}
            <Link href="/about" className="text-[#39FF14] font-bold hover:underline neon-text-glow">
              Learn about Bill Timlen
            </Link>{" "}
            or{" "}
            <Link href="/services" className="text-[#39FF14] font-bold hover:underline neon-text-glow">
              view our training programs
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
