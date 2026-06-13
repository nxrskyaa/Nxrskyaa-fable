"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { BrandMark } from "./Brand";

export default function CTASection() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-gradient-to-br from-[#0E0A07] via-[#11192c] to-[#15233a] px-7 py-16 text-center text-paper shadow-card sm:px-12 sm:py-20"
        >
          {/* glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl animate-pulseGlow" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.07]" />

          <motion.div variants={fadeUp} className="relative flex justify-center">
            <BrandMark size={56} rounded="rounded-2xl" className="ring-white/15" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-6 max-w-2xl text-[30px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[46px]"
          >
            Know exactly where your money goes. Before it&rsquo;s gone.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/70"
          >
            Connect your first account in under 4 minutes. No card required, no
            data team, no spreadsheets.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] sm:w-auto"
            >
              Get Started Free
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#product"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-paper backdrop-blur transition-all duration-300 hover:bg-white/[0.12] sm:w-auto"
            >
              Book a Demo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
