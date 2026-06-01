import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Github, X, Sparkles, Wrench } from "lucide-react";

export const Route = createFileRoute("/projects")({ component: Projects });

const CATEGORIES = ["All", "Full Stack", "DevOps"] as const;
type Category = typeof CATEGORIES[number];

type Project = {
  title: string;
  description: string;
  category: Category;
  stack: string[];
  features: string[];
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "E-commerce Application",
    description: "Production-ready e-commerce platform featuring JWT authentication, role-based access control, seller and admin dashboards, secure payments, and complete order management workflows.",
    category: "Full Stack",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Stripe"],
    features: ["JWT auth & RBAC", "Seller & admin dashboards", "Secure Stripe payments", "Order management workflows"],
    repo: "https://github.com/anshrajshukla1/E-commerceApplication",
  },
  {
    title: "Trading Platform",
    description: "Full-stack trading platform prototype with portfolios, orders and live market views.",
    category: "Full Stack",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL"],
    features: ["Portfolio dashboard", "Order placement flow", "Watchlists", "JWT secured APIs"],
    repo: "https://github.com/anshrajshukla1/Trading-Platform",
  },
];

function Projects() {
  const [cat, setCat] = useState<Category>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = PROJECTS.filter((p) => cat === "All" || p.category === cat);
  const showDevOpsEmpty = cat === "DevOps" || (cat === "All" && PROJECTS.every((p) => p.category !== "DevOps"));

  return (
    <PageShell
      eyebrow="// projects"
      title={<>The work that <span className="text-gradient">shipped.</span></>}
      subtitle="Selected full stack builds. DevOps projects coming soon."
    >
      <div className="flex flex-wrap gap-2 mb-8">
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

      {showDevOpsEmpty && (
        <div className="mt-10 glass rounded-3xl border-2 border-dashed border-white/10 p-12 text-center">
          <Wrench className="w-8 h-8 text-primary mx-auto mb-3" />
          <div className="font-display text-lg font-semibold">DevOps projects — coming soon</div>
          <div className="text-sm text-muted-foreground mt-1">This space is reserved for upcoming DevOps & cloud builds.</div>
        </div>
      )}

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

              {active.repo && (
                <div className="mt-6 flex gap-3">
                  <a href={active.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2 text-sm font-medium glow">
                    <Github className="w-4 h-4" /> View on GitHub
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
