"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { BrandMark } from "./Brand";

const STATS = [
  { value: "1,200+", top: "SAAS", bottom: "COMPANIES TRUST NXRSKYAA" },
  { value: "$4.2B", top: "REVENUE", bottom: "TRACKED MONTHLY" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid items-center gap-14 lg:grid-cols-2"
        >
          <div>
            <motion.span variants={fadeUp} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              How we think
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[32px] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[44px]"
            >
              We&rsquo;re engineers at heart and builders by obsession
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted"
            >
              <span className="font-semibold text-ink">NXRSkyaa Labs</span>
              <sup className="text-[10px]">™</sup> is built by a small team of
              founders who spent years watching great SaaS companies make bad
              financial decisions — not because they were careless, but because
              their tools made everything harder than it needed to be.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted"
            >
              We believe that understanding your money shouldn&rsquo;t require a
              CFO, a data team, or a PhD in spreadsheets.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <a href="#" className="btn-ghost group">
                Meet the Team
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right: stacked brand panel + stats */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-black/[0.07] bg-gradient-to-br from-[#0E0A07] to-[#15233a] p-8 text-paper shadow-card">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <BrandMark size={48} rounded="rounded-2xl" className="ring-white/15" />
                <div>
                  <p className="text-sm font-semibold">NXRSkyaa Labs</p>
                  <p className="text-xs text-white/60">Finance, on autopilot</p>
                </div>
              </div>
              <p className="relative mt-6 text-[15px] leading-relaxed text-white/80">
                One platform that connects your accounts, watches for problems,
                and tells you exactly what to do next.
              </p>

              <div className="relative mt-8 grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.top}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-white/55">
                      {s.top}
                      <br />
                      {s.bottom}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
