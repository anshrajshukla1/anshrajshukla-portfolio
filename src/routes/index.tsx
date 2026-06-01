import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const ROLES = ["Java Full Stack Developer", "DevOps and Cloud Enthusiast", "Backend Focused"];

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
            Building <span className="text-gradient">scalable backend</span> and cloud-native applications
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
            Developing modern web applications using Java, Spring Boot, React, Docker and AWS while continuously exploring cloud, DevOps and scalable backend systems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 font-medium glow hover:scale-[1.02] transition-transform">
              See my work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:border-primary/50 transition-colors">
              Let's talk
            </Link>
          </motion.div>
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
      <div className="absolute inset-0 rounded-full border border-white/10 animate-orbit" style={{ animationDuration: "40s" }}>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary glow" />
      </div>
      <div className="absolute inset-6 rounded-full border border-white/5 animate-orbit" style={{ animationDirection: "reverse", animationDuration: "30s" }}>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow-violet" />
      </div>
      <div className="absolute inset-14 rounded-full border border-white/10 animate-orbit" style={{ animationDuration: "20s" }}>
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neon" />
      </div>
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

function ProjectsRedirect() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass-strong rounded-3xl p-10 md:p-14 overflow-hidden text-center"
      >
        <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(ellipse at top, oklch(0.78 0.18 195 / 0.25), transparent 60%)" }} />
        <div className="relative">
          <div className="text-xs font-mono text-primary">// featured</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2">See the work in action</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A curated set of full stack and DevOps builds — code, architecture and decisions, all in one place.
          </p>
          <div className="mt-8">
            <Link to="/projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 font-medium glow">
              Explore projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TrustSection() {
  const stack = ["Java", "Spring Boot", "React", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Kafka", "Redis", "Terraform", "GitHub Actions"];
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

function Home() {
  return (
    <>
      <Hero />
      <ProjectsRedirect />
      <TrustSection />
    </>
  );
}
