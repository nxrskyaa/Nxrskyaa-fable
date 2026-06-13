"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  CreditCard,
  LayoutGrid,
  Search,
  Settings,
  TrendingUp,
  Wallet,
  Bell,
} from "lucide-react";
import { BrandMark } from "./Brand";

const NAV = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: TrendingUp, label: "Revenue" },
  { icon: Wallet, label: "Expenses" },
  { icon: CreditCard, label: "Banking" },
  { icon: Settings, label: "Settings" },
];

const BARS = [42, 58, 50, 72, 64, 88, 76, 96, 84];

export default function DashboardMockup() {
  // Subtle parallax tied to pointer position
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 18 });
  const sry = useSpring(ry, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(sry, [-0.5, 0.5], ["-5deg", "5deg"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    rx.set((e.clientY - r.top) / r.height - 0.5);
    ry.set((e.clientX - r.left) / r.width - 0.5);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div className="relative mt-16 sm:mt-20" style={{ perspective: 1600 }}>
      {/* glow under the dashboard */}
      <div className="pointer-events-none absolute -inset-x-10 -bottom-10 top-10 -z-10 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(24,73,139,0.16),transparent)] blur-2xl" />

      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="mx-auto max-w-[1080px]"
      >
        <div className="overflow-hidden rounded-[22px] border border-black/[0.08] bg-white shadow-[0_40px_120px_-30px_rgba(14,10,7,0.35)]">
          {/* top window bar */}
          <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#FBFBFC] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <div className="mx-auto flex items-center gap-2 rounded-lg border border-black/[0.06] bg-white px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
              app.nxrskyaa.ai
            </div>
          </div>

          <div className="grid grid-cols-12">
            {/* sidebar */}
            <aside className="col-span-3 hidden flex-col gap-1 border-r border-black/[0.06] bg-[#FCFCFD] p-3 sm:flex">
              <div className="flex items-center gap-2.5 px-2 py-2">
                <BrandMark size={30} rounded="rounded-[9px]" />
                <span className="text-[13px] font-semibold tracking-[-0.02em]">
                  NXRSkyaa Labs
                </span>
              </div>
              <div className="mt-2 space-y-0.5">
                {NAV.map((n) => (
                  <div
                    key={n.label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors ${
                      n.active
                        ? "bg-brand/[0.08] text-brand"
                        : "text-muted hover:bg-black/[0.03]"
                    }`}
                  >
                    <n.icon size={15} />
                    {n.label}
                  </div>
                ))}
              </div>
              <div className="mt-auto rounded-xl border border-black/[0.06] bg-white p-3">
                <p className="text-[11px] font-medium text-muted">Cash runway</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">
                  18 months
                </p>
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  <TrendingUp size={11} /> +4 mo
                </div>
              </div>
            </aside>

            {/* main panel */}
            <main className="col-span-12 p-4 sm:col-span-9 sm:p-6">
              {/* header row */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    Overview
                  </p>
                  <h3 className="mt-0.5 text-lg font-semibold tracking-tight sm:text-xl">
                    Good morning, Skyaa
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden items-center gap-2 rounded-lg border border-black/[0.06] bg-white px-2.5 py-1.5 text-xs text-muted sm:flex">
                    <Search size={13} /> Search
                  </div>
                  <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.06] bg-white text-muted">
                    <Bell size={14} />
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand" />
                  </div>
                </div>
              </div>

              {/* stat cards */}
              <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
                {[
                  { label: "Monthly Revenue", value: "$284.6k", delta: "+12.4%", up: true },
                  { label: "Burn Rate", value: "$96.2k", delta: "-3.1%", up: true },
                  { label: "Net Margin", value: "41.8%", delta: "+2.0%", up: true },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className={`rounded-xl border border-black/[0.06] bg-white p-3.5 ${
                      i === 2 ? "col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <p className="text-[11px] font-medium text-muted">{s.label}</p>
                    <p className="mt-1.5 text-xl font-semibold tracking-tight">
                      {s.value}
                    </p>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                      <ArrowUpRight size={12} />
                      {s.delta}
                    </span>
                  </div>
                ))}
              </div>

              {/* chart + insight */}
              <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-5">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4 lg:col-span-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold">Revenue trend</p>
                    <span className="rounded-md bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-muted">
                      Last 9 months
                    </span>
                  </div>
                  <div className="mt-4 flex h-28 items-end gap-2">
                    {BARS.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`flex-1 rounded-md ${
                          i === BARS.length - 1
                            ? "bg-brand"
                            : "bg-brand/25"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-brand/15 bg-brand/[0.04] p-4 lg:col-span-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                      AI Insight
                    </span>
                    <p className="mt-2.5 text-[13px] font-medium leading-snug text-ink">
                      AWS spend spiked{" "}
                      <span className="font-semibold text-brand">340%</span> on
                      Mar 18 — likely a runaway job or misconfigured autoscaler.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-lg border border-brand/15 bg-white px-3 py-2">
                    <span className="text-[11px] text-muted">Est. saving</span>
                    <span className="text-sm font-semibold text-brand">
                      $2,400/mo
                    </span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </motion.div>

      {/* floating glass cards */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute top-1/3 -left-20 hidden animate-float 2xl:block"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
            <TrendingUp size={16} />
          </span>
          <div>
            <p className="text-[11px] text-muted">Cash runway</p>
            <p className="text-sm font-semibold">Improving · +4 mo</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.05, duration: 0.8 }}
        className="absolute -right-20 bottom-1/4 hidden animate-float 2xl:block"
      >
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Wallet size={16} />
          </span>
          <div>
            <p className="text-[11px] text-muted">3 accounts connected</p>
            <p className="text-sm font-semibold">Stripe · QuickBooks · Mercury</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
