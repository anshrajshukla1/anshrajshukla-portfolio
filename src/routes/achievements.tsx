import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Trophy, Code2, Star, GitCommit, Flame, Award } from "lucide-react";

export const Route = createFileRoute("/achievements")({ component: Achievements });

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const STATS = [
  { i: Code2, v: 1200, s: "+", l: "Contributions" },
  { i: Star, v: 350, s: "+", l: "GitHub stars" },
  { i: GitCommit, v: 30, s: "+", l: "Projects shipped" },
  { i: Flame, v: 180, s: "", l: "Day streak" },
];

const BADGES = [
  { t: "Hackathon Finalist", d: "Top 10 / 800+ teams — Placeholder Hackathon 2025" },
  { t: "Open Source Maintainer", d: "Maintaining a Java tooling library with 1k+ stars" },
  { t: "Top 1% LeetCode", d: "Solved 600+ problems, weekly contest rated" },
  { t: "Cloud Builder Award", d: "Internal recognition for cloud migration work" },
];

function Achievements() {
  return (
    <PageShell eyebrow="// achievements" title={<>Receipts, not just <span className="text-gradient">resumes.</span></>} subtitle="Numbers and milestones that speak for themselves. Placeholder data — swap with yours.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass rounded-2xl p-6 text-center">
            <s.i className="w-7 h-7 text-primary mx-auto mb-3" />
            <div className="font-display text-4xl font-semibold text-gradient"><Counter value={s.v} suffix={s.s} /></div>
            <div className="text-xs text-muted-foreground mt-2">{s.l}</div>
          </motion.div>
        ))}
      </div>

      <h2 className="font-display text-3xl font-semibold mt-20 mb-6">Trophy cabinet</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {BADGES.map((b, i) => (
          <motion.div key={b.t} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group glass rounded-2xl p-6 flex gap-4 items-start hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center glow group-hover:scale-110 transition-transform">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-display font-semibold">{b.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="font-display text-3xl font-semibold mt-20 mb-6">Activity</h2>
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
          <Award className="w-4 h-4 text-primary" /> Placeholder contribution heatmap
        </div>
        <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px]">
          {Array.from({ length: 52 * 7 }).map((_, i) => {
            const v = Math.random();
            const op = v < 0.4 ? 0.08 : v < 0.7 ? 0.3 : v < 0.9 ? 0.6 : 1;
            return <div key={i} className="aspect-square rounded-[2px]" style={{ background: `oklch(0.78 0.18 195 / ${op})` }} />;
          })}
        </div>
      </div>
    </PageShell>
  );
}
