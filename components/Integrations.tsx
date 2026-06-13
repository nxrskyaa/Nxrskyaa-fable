"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const TABS = [
  "Revenue",
  "Expenses",
  "Banking",
  "Payroll",
  "Analytics",
  "Communication",
];

const LOGOS = [
  "Stripe",
  "QuickBooks",
  "AWS",
  "Mercury",
  "Gusto",
  "Ramp",
  "Brex",
  "Plaid",
  "Wise",
  "Xero",
  "Chase",
  "Relay",
];

export default function Integrations() {
  const [active, setActive] = useState("Banking");

  return (
    <section id="integrations" className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid items-end gap-8 lg:grid-cols-2"
        >
          <div>
            <motion.span variants={fadeUp} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Your financial hub
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[32px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[46px]"
            >
              Your Entire Stack, Connected in Minutes
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-[15px] leading-relaxed text-muted lg:pb-2"
          >
            40+ integrations across banking, billing, payroll and analytics.
            Banking sync starts instantly — no engineering required.
          </motion.p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap gap-2"
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === t
                  ? "bg-white text-ink shadow-card ring-1 ring-black/[0.06]"
                  : "bg-black/[0.025] text-muted hover:bg-black/[0.05]"
              }`}
            >
              {t}
            </button>
          ))}
        </motion.div>

        {/* logo grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {LOGOS.map((name) => (
            <motion.div
              key={name}
              variants={scaleVariant}
              className="group flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-xs font-bold text-paper transition-transform duration-300 group-hover:scale-105">
                {name.slice(0, 2)}
              </span>
              <div>
                <p className="text-[14px] font-semibold tracking-tight">{name}</p>
                <p className="text-[11px] text-muted">Connected</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted/70"
        >
          9 in banking · sync starts instantly · 40+ integrations
        </motion.p>
      </div>
    </section>
  );
}

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};
