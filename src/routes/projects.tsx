import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Search, Github, ExternalLink, X, Sparkles } from "lucide-react";

export const Route = createFileRoute("/projects")({ component: Projects });

const CATEGORIES = ["All", "Full Stack", "Backend", "DevOps", "Cloud", "Java", "Spring Boot", "Frontend", "Experimental"] as const;

type Project = {
  title: string; description: string; category: typeof CATEGORIES[number]; stack: string[]; features: string[];
};

const PROJECTS: Project[] = [
  { title: "Distributed Order Engine", description: "Event-driven order processing handling millions of events daily.", category: "Backend", stack: ["Java", "Spring Boot", "Kafka", "Postgres", "Redis"], features: ["Idempotent processing", "Saga pattern", "Outbox + CDC", "Grafana SLOs"] },
  { title: "Kube Cloud Platform", description: "Internal developer platform on Kubernetes with GitOps + autoscale.", category: "Cloud", stack: ["AWS", "EKS", "Terraform", "ArgoCD", "Prometheus"], features: ["GitOps", "Auto rollback", "Cost dashboards", "RBAC by team"] },
  { title: "CI/CD Mesh", description: "Cross-repo CI/CD with caching, secrets and dynamic environments.", category: "DevOps", stack: ["GitHub Actions", "Docker", "Helm", "Vault"], features: ["Preview envs", "Reusable workflows", "Drift detection"] },
  { title: "Spring Microservice Template", description: "Opinionated starter with observability, auth and resilience baked in.", category: "Spring Boot", stack: ["Spring Boot", "Resilience4j", "OpenTelemetry"], features: ["JWT auth", "Circuit breakers", "OTel tracing"] },
  { title: "Realtime Dashboard UI", description: "React + WebSocket dashboard for streaming infra metrics.", category: "Frontend", stack: ["React", "TypeScript", "Tailwind", "WS"], features: ["Live charts", "Dark mode", "Virtualized lists"] },
  { title: "Job Tracker SaaS", description: "Full stack app for managing job applications and recruiter outreach.", category: "Full Stack", stack: ["React", "Spring Boot", "Postgres"], features: ["OAuth", "Email pipeline", "Analytics"] },
  { title: "Coffee Compiler", description: "Experimental DSL that compiles to Java bytecode just for fun.", category: "Experimental", stack: ["Java", "ANTLR", "ASM"], features: ["AST viewer", "REPL", "Bytecode dump"] },
  { title: "Algo Visualizer", description: "Interactive visualizer for graph & DP algorithms used in interviews.", category: "Java", stack: ["Java", "JavaFX"], features: ["Step debugger", "Custom inputs"] },
];

function Projects() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => (cat === "All" || p.category === cat) && (q === "" || (p.title + p.description + p.stack.join(" ")).toLowerCase().includes(q.toLowerCase())));
  }, [cat, q]);

  return (
    <PageShell
      eyebrow="// projects"
      title={<>The work that <span className="text-gradient">shipped.</span></>}
      subtitle="A selection of placeholder projects across backend, full stack, DevOps and cloud. Swap with your actual repos."
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all ${cat === c ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow" : "glass text-muted-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="w-full glass rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50" />
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.button
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setActive(p)}
              className="group text-left glass rounded-3xl p-6 hover:border-primary/40 transition-colors [transform-style:preserve-3d]"
            >
              <div className="relative aspect-[5/3] rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent grid place-items-center mb-5 overflow-hidden">
                <Sparkles className="w-10 h-10 text-primary/70" />
                <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 backdrop-blur border border-white/10">{p.category}</span>
              </div>
              <div className="font-display text-lg font-semibold">{p.title}</div>
              <div className="text-sm text-muted-foreground mt-1.5">{p.description}</div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{s}</span>
                ))}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg grid place-items-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-8 relative"
            >
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full glass">
                <X className="w-4 h-4" />
              </button>
              <div className="text-xs font-mono text-primary">{active.category}</div>
              <h3 className="font-display text-3xl font-semibold mt-2">{active.title}</h3>
              <p className="mt-3 text-muted-foreground">{active.description}</p>

              <div className="aspect-video mt-6 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent border border-white/5 grid place-items-center">
                <Sparkles className="w-12 h-12 text-primary/70" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.stack.map((s) => (
                      <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Key Features</div>
                  <ul className="text-sm space-y-1.5">
                    {active.features.map((f) => (
                      <li key={f} className="flex items-start gap-2"><span className="text-primary mt-1">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2 text-sm font-medium glow">
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-medium">
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
