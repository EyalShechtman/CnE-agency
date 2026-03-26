"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-black/5">
        <Link href="/" className="text-2xl tracking-tight">
          C
          <span className="text-[0.55em] align-baseline relative -top-[0.05em]">
            n
          </span>
          E
        </Link>
      </nav>

      {/* Form */}
      <main className="flex-1 flex items-center justify-center px-8 py-24">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <div className="text-center">
              <p className="text-3xl tracking-tight mb-4">Thank you.</p>
              <p className="text-black/50">We&rsquo;ll be in touch soon.</p>
              <Link
                href="/"
                className="inline-block mt-8 text-sm tracking-widest uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
              >
                Back home
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl tracking-tight mb-2">
                Let&rsquo;s work together.
              </h1>
              <p className="text-black/40 mb-12">
                Tell us about yourself and what you need.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSending(true);
                  setError("");
                  const form = e.currentTarget;
                  const data = {
                    name: (form.elements.namedItem("name") as HTMLInputElement).value,
                    email: (form.elements.namedItem("email") as HTMLInputElement).value,
                    need: (form.elements.namedItem("need") as HTMLTextAreaElement).value,
                  };
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  setSending(false);
                  if (res.ok) {
                    setSubmitted(true);
                  } else {
                    setError("Something went wrong. Please try again.");
                  }
                }}
                className="space-y-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-3"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-b border-black/20 pb-2 bg-transparent outline-none focus:border-black transition-colors text-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-black/20 pb-2 bg-transparent outline-none focus:border-black transition-colors text-lg"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="need"
                    className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-3"
                  >
                    What do you need?
                  </label>
                  <textarea
                    id="need"
                    name="need"
                    required
                    rows={1}
                    className="w-full border-b border-black/20 pb-2 bg-transparent outline-none focus:border-black transition-colors text-lg resize-none overflow-hidden"
                    placeholder="Website, marketing, CRM, voice agents..."
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = target.scrollHeight + "px";
                    }}
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-black text-white text-sm tracking-widest uppercase hover:opacity-80 transition-opacity disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send"}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </main>
    </div>
  );
}
