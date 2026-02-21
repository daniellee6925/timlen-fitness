import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { generatePersonSchema, generateBusinessSchema } from "@/lib/schema-generators";
import { SITES } from "@/lib/constants";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const site = SITES.fitness;

export const metadata: Metadata = {
  title: {
    default: "Bill Timlen, CPT | Personal Trainer | Hoboken, NJ",
    template: "%s | Bill Timlen, CPT",
  },
  description:
    "Bill Timlen, CPT is a certified personal trainer in Hoboken, NJ. William Timlen offers one-on-one training, group fitness, nutrition coaching, and strength training at Timlen Fitness.",
  robots: { index: true, follow: true },
};

const personSchema = generatePersonSchema({
  name: site.name,
  alternateName: site.alternateName,
  jobTitle: site.jobTitle,
  address: site.address,
  phone: site.phone,
  email: site.email,
  domain: site.domain,
});

const businessSchema = generateBusinessSchema({
  businessType: site.businessType,
  businessName: site.businessName,
  description:
    "Personal training studio led by Bill Timlen, CPT in Hoboken, NJ. Specializing in one-on-one training, group fitness, nutrition coaching, and strength training programs.",
  address: site.address,
  phone: site.phone,
  email: site.email,
  domain: site.domain,
  founderName: "William Timlen",
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Programs" },
  { href: "/testimonials", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-montserrat)] bg-[#111111] text-gray-100 min-h-screen flex flex-col">
        {/* Minimal top bar */}
        <header className="bg-[#0a0a0a] border-b border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
            <Link href="/" className="text-xl font-black text-[#39FF14] tracking-widest uppercase neon-text-glow">
              Timlen Fitness
            </Link>
            <ul className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#39FF14] transition-colors py-1 border-b-2 border-transparent hover:border-[#39FF14]">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="bg-[#39FF14] text-[#111111] px-4 py-2 font-black text-xs uppercase tracking-wider neon-glow"
                >
                  Join Now
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        {/* Dark energetic footer */}
        <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10 text-sm">
            <div>
              <h3 className="text-[#39FF14] text-lg font-black mb-3 uppercase tracking-widest">
                Timlen Fitness
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Bill Timlen, CPT — Certified Personal Trainer serving Hoboken, NJ and the greater Hudson County area.
                Transform your body. Transform your life.
              </p>
            </div>
            <div>
              <h3 className="text-[#39FF14] font-bold mb-3 uppercase tracking-wider text-xs">Programs</h3>
              <ul className="space-y-2 text-gray-500">
                <li>One-on-One Training</li>
                <li>Group Fitness</li>
                <li>Nutrition Coaching</li>
                <li>Weight Loss</li>
                <li>Strength Training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#39FF14] font-bold mb-3 uppercase tracking-wider text-xs">Contact</h3>
              <ul className="space-y-2 text-gray-500">
                <li>{site.address.streetAddress}</li>
                <li>{site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}</li>
                <li>{site.phone}</li>
                <li>{site.email}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between text-xs text-gray-600">
              <p>&copy; {new Date().getFullYear()} Timlen Fitness. All rights reserved.</p>
              <p className="uppercase tracking-wider">William (Bill) Timlen | CPT | Hoboken, NJ</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
