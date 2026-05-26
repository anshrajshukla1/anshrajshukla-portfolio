import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({ component: Blog });

const CATS = ["All", "Backend", "DevOps", "Cloud", "Java", "Career"] as const;

const POSTS = [
  { t: "Designing for failure: building resilient Spring Boot services", d: "Patterns I use to make backends boring in the best way.", cat: "Backend", read: "8 min", date: "Mar 2026" },
  { t: "Zero-to-prod with Kubernetes & GitOps", d: "How I structure platforms that scale with teams.", cat: "DevOps", read: "12 min", date: "Feb 2026" },
  { t: "Cost-aware AWS: lessons after one big bill", d: "Practical knobs that actually move the needle.", cat: "Cloud", read: "6 min", date: "Jan 2026" },
  { t: "Java 21 features I actually use", d: "Pattern matching, virtual threads & friends.", cat: "Java", read: "9 min", date: "Dec 2025" },
  { t: "Interviewing as a backend engineer", d: "What I prepare and what I skip.", cat: "Career", read: "5 min", date: "Nov 2025" },
  { t: "Observability that pays for itself", d: "Logs, traces, metrics — what's worth the cost.", cat: "DevOps", read: "10 min", date: "Oct 2025" },
];

function Blog() {
  const [cat, setCat] = useState<typeof CATS[number]>("All");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(p * 100);
    };
    window.addEventListener("scroll", fn); fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const list = POSTS.filter((p) => cat === "All" || p.cat === cat);
  const [hero, ...rest] = list;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-white/5 z-[60]">
        <div className="h-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: `${progress}%` }} />
      </div>

      <PageShell eyebrow="// writing" title={<>Notes on <span className="text-gradient">systems & craft.</span></>} subtitle="Placeholder articles to be replaced with your own.">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all ${cat === c ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow" : "glass text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>

        {hero && (
          <motion.a href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="block group glass-strong rounded-3xl overflow-hidden mb-10 hover:border-primary/40 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" />
              <div className="p-8 md:p-10">
                <div className="text-xs font-mono text-primary">// featured</div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 leading-tight">{hero.t}</h2>
                <p className="mt-4 text-muted-foreground">{hero.d}</p>
                <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="glass rounded-full px-2.5 py-1">{hero.cat}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{hero.read}</span>
                  <span>{hero.date}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">Read article <ArrowRight className="w-4 h-4" /></div>
              </div>
            </div>
          </motion.a>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <motion.a key={p.t} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }} className="block glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-accent/15 to-transparent mb-4 border border-white/5" />
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest">{p.cat}</div>
              <div className="font-display text-lg font-semibold mt-2 leading-snug">{p.t}</div>
              <div className="text-sm text-muted-foreground mt-2">{p.d}</div>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.read}</span>
                <span>{p.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </PageShell>
    </>
  );
}
