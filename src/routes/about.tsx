import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Sparkles, Target, Compass, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({ component: About });

const TIMELINE = [
  { y: "2026", t: "Building cloud-native platforms", d: "Shipping production microservices on AWS + K8s." },
  { y: "2025", t: "Backend internship", d: "Owned API performance and migration to event-driven architecture." },
  { y: "2024", t: "First open-source contribution", d: "PRs merged into popular Java tooling repos." },
  { y: "2023", t: "Discovered systems thinking", d: "Fell in love with distributed systems and observability." },
];

const QUALITIES = [
  { i: Target, t: "Outcome obsessed", d: "Ship what moves business metrics, not what feels busy." },
  { i: Compass, t: "First-principles", d: "Question defaults, choose simple over clever." },
  { i: HeartHandshake, t: "Calm under load", d: "Production incidents make me focus, not panic." },
  { i: Sparkles, t: "Craft mindset", d: "Code reviews, tests, and docs treated as the product." },
];

function About() {
  return (
    <PageShell
      eyebrow="// whoami"
      title={<>An engineer obsessed with <span className="text-gradient">resilient systems.</span></>}
      subtitle="I turn ambiguous product requirements into reliable, observable, scalable software. Placeholder bio — swap with your story."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-medium">Placeholder narrative.</span> I started writing software because systems thinking felt like a superpower — small primitives composing into anything. Today I focus on Java, Spring Boot, container platforms and the cloud-native ecosystem.
          </p>
          <p>
            I believe great backend engineering disappears: APIs respond, queues drain, dashboards stay green. My job is to make complexity invisible to the people using the product.
          </p>
          <p>
            Outside of work, I write about distributed systems, contribute to open source, and prototype tools to make engineers faster.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <ul className="space-y-6">
            {TIMELINE.map((e, i) => (
              <motion.li
                key={e.y}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-12"
              >
                <span className="absolute left-2 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary glow" />
                <div className="text-xs font-mono text-primary">{e.y}</div>
                <div className="font-display text-lg font-semibold">{e.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.d}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-display text-3xl font-semibold mb-8">Operating principles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUALITIES.map((q, i) => (
            <motion.div
              key={q.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <q.i className="w-6 h-6 text-primary mb-3" />
              <div className="font-display font-semibold">{q.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{q.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
