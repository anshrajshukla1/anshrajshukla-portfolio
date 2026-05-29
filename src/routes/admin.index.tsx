import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, MessageSquare, FolderKanban, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/admin/")({ component: AdminOverview });

const STATS = [
  { i: Eye, l: "Visitors (7d)", v: "12,489", trend: "+18%" },
  { i: MessageSquare, l: "New messages", v: "23", trend: "+4" },
  { i: FolderKanban, l: "Active projects", v: "8", trend: "+1" },
  { i: TrendingUp, l: "Avg session", v: "3m 42s", trend: "+12s" },
];

const SPARK = Array.from({ length: 30 }, () => 10 + Math.random() * 70);

function AdminOverview() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold">Overview</h1>
          <p className="text-sm text-muted-foreground mt-1">Welcome back, admin.</p>
        </div>
        <div className="text-xs font-mono text-muted-foreground">{new Date().toLocaleString()}</div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <s.i className="w-4 h-4 text-primary" />
              <span className="text-xs text-emerald-400">{s.trend}</span>
            </div>
            <div className="mt-3 font-display text-2xl font-semibold">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="font-display font-semibold">Traffic</div>
            <div className="flex gap-2 text-xs">
              {["7d", "30d", "90d"].map((t, i) => (<button key={t} className={`px-2.5 py-1 rounded-full ${i === 0 ? "bg-primary text-primary-foreground" : "glass"}`}>{t}</button>))}
            </div>
          </div>
          <svg viewBox="0 0 300 100" className="w-full h-48">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.18 195)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.78 0.18 195)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`M0,100 ${SPARK.map((v, i) => `L${(i / (SPARK.length - 1)) * 300},${100 - v}`).join(" ")} L300,100 Z`} fill="url(#g)" />
            <path d={`M0,${100 - SPARK[0]} ${SPARK.map((v, i) => `L${(i / (SPARK.length - 1)) * 300},${100 - v}`).join(" ")}`} fill="none" stroke="oklch(0.78 0.18 195)" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="font-display font-semibold mb-4">Top pages</div>
          <ul className="space-y-3 text-sm">
            {[["/", "5.2k"], ["/projects", "3.1k"], ["/certifications", "2.4k"], ["/hire", "980"], ["/resume", "640"]].map(([p, v]) => (
              <li key={p} className="flex items-center justify-between">
                <span className="font-mono text-muted-foreground">{p}</span><span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
