"use client";

import { motion } from "framer-motion";
import { Activity, LineChart, Link2 } from "lucide-react";
import { fadeUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    no: "01",
    tag: "CONNECT",
    icon: Link2,
    title: "Connect your accounts",
    desc: "Link Stripe, QuickBooks, Mercury and 40+ tools. Sync starts instantly — no spreadsheets, no setup calls.",
    accounts: [
      { name: "Stripe", meta: "Revenue · Subscriptions" },
      { name: "QuickBooks", meta: "Expenses · Payroll · P&L" },
      { name: "Mercury", meta: "Cash balance · Transactions" },
    ],
  },
  {
    no: "02",
    tag: "DETECT",
    icon: Activity,
    title: "We watch for problems",
    desc: "NXRSkyaa Labs reads every transaction, flags anomalies, and tells you what to do — not just what happened.",
  },
  {
    no: "03",
    tag: "FORECAST",
    icon: LineChart,
    title: "See your future cash",
    desc: "Projected runway, cash-out dates, and scenario modeling that update the moment your numbers change.",
  },
];

export default function HowItWorks() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            How it works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-[32px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[46px]"
          >
            From Raw Data to Clear Decisions in Seconds
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base"
          >
            Most finance tools hand you more charts to interpret. NXRSkyaa Labs
            does the interpreting for you — connecting your accounts, watching
            for problems, and telling you what to do next.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.no}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: i * 0.08 }}
              className="card group p-6 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/[0.08] text-brand transition-colors group-hover:bg-brand group-hover:text-paper">
                  <s.icon size={19} />
                </span>
                <span className="text-xs font-semibold tracking-[0.14em] text-muted/70">
                  {s.no} — {s.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>

              {s.accounts && (
                <div className="mt-5 space-y-2">
                  {s.accounts.map((a) => (
                    <div
                      key={a.name}
                      className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-[#FCFCFD] px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-[10px] font-bold text-paper">
                          {a.name.slice(0, 2)}
                        </span>
                        <div>
                          <p className="text-[13px] font-medium leading-none">
                            {a.name}
                          </p>
                          <p className="mt-1 text-[11px] text-muted">{a.meta}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        LIVE
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {s.tag === "DETECT" && (
                <div className="mt-5 rounded-xl border border-brand/15 bg-brand/[0.04] p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand">
                    Anomaly detected
                  </p>
                  <p className="mt-1.5 text-[13px] leading-snug text-ink">
                    AWS spend spiked 340% on Mar 18
                  </p>
                  <p className="mt-2 text-[11px] text-muted">
                    Estimated saving{" "}
                    <span className="font-semibold text-brand">$2,400 / mo</span>
                  </p>
                </div>
              )}

              {s.tag === "FORECAST" && (
                <div className="mt-5 rounded-xl border border-black/[0.06] bg-[#FCFCFD] p-3.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                      Cash runway
                    </p>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                      +4 MO
                    </span>
                  </div>
                  <div className="mt-3 flex items-end gap-1">
                    {[40, 52, 48, 66, 60, 80].map((h, k) => (
                      <div
                        key={k}
                        style={{ height: `${h}%` }}
                        className="h-12 flex-1 rounded-sm bg-brand/30"
                      />
                    ))}
                  </div>
                  <p className="mt-2.5 text-[11px] text-muted">
                    Projected cash-out · 18 months away
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
