"use client";

import { motion } from "framer-motion";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { LogoCloud } from "@/components/ui/logo-cloud";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Websites",
    description: "Design & development that speaks for itself.",
  },
  {
    number: "02",
    title: "Marketing",
    description: "Strategy that finds the right people.",
  },
  {
    number: "03",
    title: "CRMs",
    description: "Systems that keep every relationship alive.",
  },
  {
    number: "04",
    title: "Voice Agents",
    description: "AI that talks so you don\u2019t have to.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <Logo />
        <Link
          href="/contact"
          className="text-sm tracking-widest uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-8 pt-24">
        <HandWrittenTitle
          title={
            <>
              C<span className="text-[0.55em] align-baseline relative -top-[0.05em]">n</span>E
            </>
          }
          subtitle="We build websites, automate marketing, set up CRMs, and deploy voice agents."
        />
      </section>

      {/* Services */}
      <section className="px-8 py-32 max-w-4xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/40 mb-16">
          Services
        </h2>
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="flex items-baseline justify-between py-8 border-t border-black/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex items-baseline gap-8">
                <span className="text-xs text-black/30 tracking-widest">
                  {service.number}
                </span>
                <h3 className="text-2xl md:text-4xl tracking-tight group-hover:opacity-60 transition-opacity">
                  {service.title}
                </h3>
              </div>
              <p className="hidden md:block text-sm text-black/50 max-w-xs text-right">
                {service.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </section>

      {/* Clients */}
      <section className="px-8 py-32 max-w-4xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4 text-center">
          Already used by
        </h2>
        <p className="text-2xl md:text-3xl font-black tracking-tight text-center mb-10">
          Best in the Game
        </p>
        <LogoCloud logos={clientLogos} />
      </section>

      {/* Contact CTA */}
      <section className="px-8 py-32 max-w-4xl mx-auto text-center">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/40 mb-8">
          Contact
        </h2>
        <p className="text-3xl md:text-5xl tracking-tight leading-tight">
          Let&rsquo;s work together.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-10 px-8 py-4 bg-black text-white text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          Start here
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-black/10 flex items-center justify-between text-xs tracking-widest uppercase text-black/30">
        <Logo small />
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

const clientLogos = [
  { src: "/clients/compass.png", alt: "Compass Real Estate" },
  { src: "/clients/glo-geeks.png", alt: "Glo Geeks" },
  { src: "/clients/pacific-nw-lighting.png", alt: "Pacific NW Lighting" },
  { src: "/clients/salon-agent.png", alt: "SalonAgent.ai", invert: true },
  { src: "/clients/b-logo.png", alt: "B", invert: true },
];

function Logo({ small }: { small?: boolean }) {
  const size = small ? "text-lg" : "text-2xl";
  return (
    <span className={`${size} tracking-tight`}>
      C<span className="text-[0.55em] align-baseline relative -top-[0.05em]">n</span>E
    </span>
  );
}
