import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Code2, Cloud, Database, Sparkles, Zap, Github, Star, GitBranch } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const ROLES = ["Java Full Stack Engineer", "Backend Architect", "DevOps & Cloud Engineer", "Distributed Systems Builder"];

function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), pause);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((p) => p + 1); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

function Hero() {
  const typed = useTypewriter(ROLES);
  return (
    <section className="relative min-h-screen flex items-center pt-28">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      {/* floating orbs */}
      <motion.div className="absolute top-32 right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl" animate={{ y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            v2026.shipping_quietly
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight"
          >
            Engineering the<br />
            <span className="text-gradient">backbone</span> of<br />
            modern products.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-xl font-mono text-muted-foreground"
          >
            <span className="text-primary">{">"}</span> {typed}
            <span className="inline-block w-2 h-5 bg-primary ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-muted-foreground"
          >
            I design and deploy resilient, observable, cloud-native systems with Java, Spring Boot, Docker, Kubernetes and AWS — turning complex requirements into shipped product.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 font-medium glow hover:scale-[1.02] transition-transform">
              See my work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:border-primary/50 transition-colors">
              Let's talk
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
            {[
              { v: "30+", l: "Projects shipped" },
              { v: "5★", l: "Avg recruiter rating" },
              { v: "99.9%", l: "Uptime targets" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <DeveloperVisual />
      </div>
    </section>
  );
}

function DeveloperVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative aspect-square w-full max-w-lg mx-auto"
    >
      {/* orbit rings */}
      <div className="absolute inset-0 rounded-full border border-white/10 animate-orbit" style={{ animationDuration: "40s" }}>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary glow" />
      </div>
      <div className="absolute inset-6 rounded-full border border-white/5 animate-orbit" style={{ animationDirection: "reverse", animationDuration: "30s" }}>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow-violet" />
      </div>
      <div className="absolute inset-14 rounded-full border border-white/10 animate-orbit" style={{ animationDuration: "20s" }}>
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neon" />
      </div>
      {/* core */}
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-24 rounded-3xl glass-strong overflow-hidden p-6 flex flex-col font-mono text-xs">
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="space-y-1.5 text-muted-foreground">
          <div><span className="text-accent">@RestController</span></div>
          <div><span className="text-primary">public class</span> <span className="text-neon">PortfolioApi</span> {"{"}</div>
          <div className="pl-3"><span className="text-accent">@GetMapping</span>(<span className="text-emerald-400">"/hire"</span>)</div>
          <div className="pl-3"><span className="text-primary">Mono</span>&lt;Offer&gt; <span className="text-neon">hire</span>() {"{"}</div>
          <div className="pl-6">return offers.next();</div>
          <div className="pl-3">{"}"}</div>
          <div>{"}"}</div>
        </div>
        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-emerald-400">● running</span>
          <span>:8080</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeatureRow() {
  const items = [
    { icon: Code2, t: "Full Stack", d: "End-to-end product engineering, from React UIs to Spring services." },
    { icon: Cloud, t: "Cloud Native", d: "AWS, containers, observability and infra-as-code by default." },
    { icon: Database, t: "Backend Depth", d: "Scalable APIs, event-driven systems, SQL & NoSQL tuned." },
    { icon: Zap, t: "Shipping Speed", d: "Pragmatic decisions and CI/CD that ships safely, often." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((x, i) => (
        <motion.div
          key={x.t}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center mb-4 group-hover:glow transition-shadow">
            <x.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="font-display font-semibold">{x.t}</div>
          <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
        </motion.div>
      ))}
    </section>
  );
}

function FeaturedProjects() {
  const p = [
    { t: "Distributed Order Engine", d: "Event-driven microservices with Kafka, Spring Boot & Postgres.", stack: ["Java", "Spring", "Kafka", "Postgres"] },
    { t: "Cloud Native Platform", d: "K8s on AWS with GitOps, autoscaling & full observability.", stack: ["AWS", "K8s", "Terraform", "Grafana"] },
    { t: "Realtime Analytics API", d: "Low-latency aggregation pipeline serving 10k rps.", stack: ["Go", "Redis", "ClickHouse"] },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="text-xs font-mono text-primary">// featured</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2">Selected work</h2>
        </div>
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
          All projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {p.map((x, i) => (
          <motion.div
            key={x.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-3xl p-6 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-[5/3] rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent grid place-items-center mb-5 border border-white/5">
              <Sparkles className="w-10 h-10 text-primary/70" />
            </div>
            <div className="font-display text-lg font-semibold">{x.t}</div>
            <div className="text-sm text-muted-foreground mt-1.5">{x.d}</div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {x.stack.map((s) => (
                <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  const stack = ["Java", "Spring Boot", "React", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Kafka", "Redis", "Terraform", "GitHub Actions", "TypeScript"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs font-mono text-primary">// the stack</div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2">Tools I reach for daily</h2>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {stack.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="glass rounded-full px-4 py-2 text-sm font-mono hover:text-primary hover:border-primary/40 transition-all"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(ellipse at top, oklch(0.65 0.25 305 / 0.4), transparent 60%)" }} />
        <div className="relative">
          <Github className="w-10 h-10 mx-auto text-primary mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Have an ambitious idea?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            I'm open to full-time roles, internships and freelance challenges. Let's ship something memorable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/hire" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 font-medium glow">
              Hire me <Star className="w-4 h-4" />
            </Link>
            <Link to="/opensource" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium">
              <GitBranch className="w-4 h-4" /> See open source
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <FeatureRow />
      <FeaturedProjects />
      <TrustSection />
      <CTA />
    </>
  );
}
