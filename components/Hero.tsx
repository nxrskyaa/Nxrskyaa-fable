"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Soft glowing background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_30%,transparent_75%)]" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(24,73,139,0.18),transparent)] blur-2xl animate-pulseGlow" />
        <div className="absolute right-[8%] top-40 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(120,170,255,0.18),transparent)] blur-2xl" />
        <div className="absolute left-[6%] top-56 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(24,73,139,0.10),transparent)] blur-2xl" />
      </div>

      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-muted shadow-soft backdrop-blur">
              <Sparkles size={13} className="text-brand" />
              Financial clarity for modern SaaS teams
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-[58px] md:text-[68px]"
          >
            Know Exactly Where Your{" "}
            <span className="text-gradient">Money Goes.</span>
            <br className="hidden sm:block" /> Before It&rsquo;s Gone.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            NXRSkyaa Labs connects your accounts, watches for problems, and
            tells you what to do next — so understanding your money never
            requires a CFO, a data team, or a PhD in spreadsheets.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#" className="btn-primary group w-full sm:w-auto">
              Connect your Accounts
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a href="#product" className="btn-ghost group w-full sm:w-auto">
              <Play size={14} className="text-brand" />
              See a Demo
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-xs text-muted/80"
          >
            No card required · Connect in under 4 minutes · Bank-grade security
          </motion.p>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
}
