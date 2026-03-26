"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { Gallery6 } from "@/components/ui/gallery6";
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <Logo />
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#our-work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            Our Work
          </a>
          <Link
            href="/contact"
            className="text-xs md:text-sm tracking-widest uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] md:min-h-screen px-4 md:px-8 pt-20 md:pt-24">
        <HandWrittenTitle
          title={
            <>
              C<span className="text-[0.55em] align-baseline relative -top-[0.05em]">n</span>E
            </>
          }
          subtitle="Our team builds websites, automates marketing, sets up CRMs, and deploys voice agents."
        />
        <motion.button
          onClick={() => {
            document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-8 flex flex-col items-center gap-2 cursor-pointer hover:opacity-60 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-black/40">
            Our Work
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-5 text-black/40" />
          </motion.div>
        </motion.button>
      </section>

      {/* Services */}
      <section className="px-4 md:px-8 py-24 md:py-32 max-w-4xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/40 mb-8 md:mb-12">
          Services
        </h2>
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="flex items-baseline justify-between py-6 md:py-8 border-t border-black/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-xs text-black/30 tracking-widest">
                  {service.number}
                </span>
                <h3 className="text-xl md:text-4xl tracking-tight group-hover:opacity-60 transition-opacity">
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

      {/* Portfolio */}
      <div id="our-work">
        <Gallery6
          heading="Our Work"
          items={portfolioItems}
        />
      </div>

      {/* Clients */}
      <section className="px-4 md:px-8 py-24 md:py-32 max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4 text-center">
          Already used by
        </h2>
        <p className="text-xl md:text-3xl font-black tracking-tight text-center mb-8 md:mb-10">
          Best in the Game
        </p>
        <LogoCloud logos={clientLogos} />
      </section>

      {/* Contact CTA */}
      <section className="px-4 md:px-8 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6">
          Contact
        </h2>
        <p className="text-2xl md:text-5xl tracking-tight leading-tight">
          Let&rsquo;s work together.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-black text-white text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          Start here
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-6 md:py-10 border-t border-black/10 flex items-center justify-between text-xs tracking-widest uppercase text-black/30">
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

const portfolioItems = [
  {
    id: "liberty-outdoor",
    title: "Liberty Outdoor Lighting",
    summary:
      "Professional outdoor lighting services for residential and commercial properties in Southern California.",
    url: "https://liberty-outdoor-lighting.vercel.app/",
    image: "/portfolio/liberty-outdoor.png",
  },
  {
    id: "pictur-ai",
    title: "Pictur AI",
    summary:
      "AI image editing platform with 100+ tools for background removal, colorization, and more.",
    url: "https://app.pictur.ai/",
    image: "/portfolio/pictur-ai.png",
    images: ["/portfolio/pictur-ai.png", "/portfolio/pictur-ai-dashboard.png"],
  },
  {
    id: "pacific-nw-lights",
    title: "Pacific Northwest Lighting",
    summary:
      "Professional permanent LED lighting installation for residential, commercial, and holiday displays in Washington.",
    url: "https://pacific-northwest-lights.vercel.app/",
    image: "/portfolio/pacific-nw-lights.png",
  },
  {
    id: "blitz-beambell",
    title: "Blitz by BeamBell",
    summary:
      "Mass texting and email platform enabling organizations to reach their members instantly.",
    url: "https://blitz.beambell.com/",
    image: "/portfolio/blitz.png",
  },
  {
    id: "beambell",
    title: "BeamBell",
    summary:
      "Industry-specific AI receptionists that handle phone calls, book appointments, and manage customers 24/7.",
    url: "https://www.beambell.com/",
    image: "/portfolio/beambell.png",
  },
  {
    id: "salon-agent",
    title: "Salon Agent AI",
    summary:
      "AI-powered virtual receptionist that answers calls, texts, and chats for salons around the clock.",
    url: "https://salonagent.ai/",
    image: "/portfolio/salon-agent.png",
  },
];

function Logo({ small }: { small?: boolean }) {
  const size = small ? "text-lg" : "text-2xl";
  return (
    <span className={`${size} tracking-tight`}>
      C<span className="text-[0.55em] align-baseline relative -top-[0.05em]">n</span>E
    </span>
  );
}
