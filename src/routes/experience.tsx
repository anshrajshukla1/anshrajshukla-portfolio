import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Briefcase, Quote } from "lucide-react";

export const Route = createFileRoute("/experience")({ component: Experience });

const EXP = [
  { role: "Backend Engineer Intern", company: "Placeholder Cloud Co.", period: "2025 — Present", bullets: ["Owned core API performance, reduced p99 latency by 38%.", "Migrated monolith endpoints to event-driven services on Kafka.", "Wrote runbooks adopted by the on-call rotation."], stack: ["Java", "Spring Boot", "Kafka", "AWS"] },
  { role: "Full Stack Developer", company: "Placeholder Studio", period: "2024 — 2025", bullets: ["Shipped 4 product features end-to-end with React + Spring.", "Built internal admin tooling used by 60+ teammates.", "Set up CI/CD that cut deploy time from 30 to 4 minutes."], stack: ["React", "TypeScript", "Spring", "Docker"] },
  { role: "DevOps Intern", company: "Placeholder Labs", period: "2024", bullets: ["Built Terraform modules for repeatable AWS environments.", "Introduced Grafana dashboards & SLO alerting.", "Wrote a chaos test suite to catch regressions early."], stack: ["AWS", "Terraform", "Grafana", "K8s"] },
];

const TESTIMONIALS = [
  { q: "Among the most thoughtful junior engineers I've worked with. Cares deeply about correctness and DX.", a: "Engineering Manager, Placeholder Co." },
  { q: "Owns problems end-to-end. Ships fast without ever feeling reckless.", a: "Tech Lead, Placeholder Labs" },
];

function Experience() {
  return (
    <PageShell
      eyebrow="// experience"
      title={<>Where I've <span className="text-gradient">shipped</span> things.</>}
      subtitle="Placeholder roles and outcomes. Replace with your own track record."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <ul className="space-y-12">
          {EXP.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <span className="absolute left-2 md:left-1/2 -translate-x-1/2 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary glow" />
              <div className={`pl-12 md:pl-0 md:pr-12 ${i % 2 ? "md:[direction:ltr]" : "md:text-right"}`}>
                <div className="text-xs font-mono text-primary">{e.period}</div>
                <div className="font-display text-2xl font-semibold mt-1">{e.role}</div>
                <div className="text-muted-foreground">{e.company}</div>
              </div>
              <div className={`pl-12 md:pl-0 mt-4 md:mt-0 ${i % 2 ? "md:[direction:ltr]" : ""}`}>
                <div className="glass rounded-2xl p-5">
                  <Briefcase className="w-4 h-4 text-primary mb-3" />
                  <ul className="space-y-2 text-sm">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><span className="text-primary mt-1">▸</span><span className="text-muted-foreground">{b}</span></li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                    {e.stack.map((s) => (<span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{s}</span>))}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6">
            <Quote className="w-6 h-6 text-primary mb-3" />
            <p className="text-lg">"{t.q}"</p>
            <div className="mt-4 text-sm text-muted-foreground">— {t.a}</div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
