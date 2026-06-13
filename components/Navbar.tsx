"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLockup, BrandMark } from "./Brand";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-x">
        <div
          className={`mt-3 flex items-center justify-between rounded-2xl px-3.5 py-2.5 transition-all duration-500 sm:px-4 ${
            scrolled
              ? "border border-black/[0.06] bg-white/80 shadow-[0_6px_30px_rgba(14,10,7,0.08)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center" aria-label="NXRSkyaa Labs home">
            <BrandLockup />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              Sign In
            </a>
            <a href="#" className="btn-primary px-4 py-2.5">
              Get Started
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white/70 text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 -z-10 bg-ink/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="container-x md:hidden"
            >
              <div className="mt-2 overflow-hidden rounded-2xl border border-black/[0.06] bg-white/95 p-2 shadow-[0_18px_50px_rgba(14,10,7,0.16)] backdrop-blur-xl">
                <div className="flex items-center gap-2.5 px-3 py-3">
                  <BrandMark size={32} />
                  <span className="text-sm font-semibold tracking-[-0.02em]">
                    NXRSkyaa Labs
                  </span>
                </div>
                <div className="h-px bg-black/[0.06]" />
                <nav className="flex flex-col py-1">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink/90 transition-colors hover:bg-black/[0.04]"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
                <div className="h-px bg-black/[0.06]" />
                <div className="flex flex-col gap-2 p-2">
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="btn-ghost w-full"
                  >
                    Sign In
                  </a>
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
