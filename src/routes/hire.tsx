import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Check, Sparkles, Code2, Cloud, Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hire")({ component: Hire });

const SERVICES = [
  { i: Code2, t: "Backend Engineering", d: "Spring Boot APIs, event-driven architectures, integrations.", p: "from $X/hr" },
  { i: Cloud, t: "Cloud & DevOps", d: "K8s, Terraform, observability, CI/CD on AWS / GCP.", p: "from $Y/hr" },
  { i: Sparkles, t: "Full Product Sprint", d: "Idea → MVP in weeks with React + Spring + Cloud.", p: "fixed scope" },
  { i: Wrench, t: "Code Review & Audit", d: "Architecture, performance and security reviews.", p: "per engagement" },
];

const WHY = ["End-to-end ownership", "Senior-level code quality", "Async-friendly & timezone flexible", "Clear comms, weekly demos", "Tests, docs, observability included", "No surprise scope creep"];

const FLOW = [
  { s: "01", t: "Discovery", d: "We align on goals, constraints and success metrics." },
  { s: "02", t: "Proposal", d: "I send a tight scope, timeline and price." },
  { s: "03", t: "Build", d: "Weekly demos, async updates, clean commits." },
  { s: "04", t: "Handoff", d: "Docs, runbooks, and a calm production switch." },
];

function Hire() {
  return (
    <PageShell eyebrow="// hire me" title={<>Senior craft. <span className="text-gradient">Startup speed.</span></>} subtitle="Pick a starting point — or describe what you need and I'll shape the engagement.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {SERVICES.map((s, i) => (
          <motion.div key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="relative group glass rounded-3xl p-6 hover:border-primary/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center mb-4 group-hover:glow transition-shadow">
              <s.i className="w-5 h-5 text-primary" />
            </div>
            <div className="font-display text-lg font-semibold">{s.t}</div>
            <div className="text-sm text-muted-foreground mt-1.5">{s.d}</div>
            <div className="mt-4 text-xs font-mono text-primary">{s.p}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="glass-strong rounded-3xl p-8">
          <h2 className="font-display text-2xl font-semibold mb-5">Why hire me</h2>
          <ul className="space-y-2.5">
            {WHY.map((w) => (
              <li key={w} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5" />{w}</li>
            ))}
          </ul>
        </div>
        <div className="glass-strong rounded-3xl p-8">
          <h2 className="font-display text-2xl font-semibold mb-5">How we'll work</h2>
          <ol className="space-y-4">
            {FLOW.map((f) => (
              <li key={f.s} className="flex gap-4">
                <span className="font-display text-2xl text-gradient">{f.s}</span>
                <div>
                  <div className="font-medium">{f.t}</div>
                  <div className="text-sm text-muted-foreground">{f.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="glass-strong rounded-3xl p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(ellipse at top, oklch(0.78 0.18 195 / 0.35), transparent 60%)" }} />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Ready when you are.</h2>
          <p className="mt-3 text-muted-foreground">Send a short brief — I'll reply within 24h with a plan.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 font-medium glow">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
