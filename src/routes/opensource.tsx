import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Github, Star, GitFork, GitPullRequest, Activity } from "lucide-react";

export const Route = createFileRoute("/opensource")({ component: OpenSource });

const STATS = [
  { i: Star, l: "Total stars", v: "1.2k" },
  { i: GitFork, l: "Forks", v: "180" },
  { i: GitPullRequest, l: "PRs merged", v: "230" },
  { i: Activity, l: "Repos", v: "42" },
];

const REPOS = [
  { name: "spring-boot-starter-x", desc: "Opinionated Spring Boot template with observability built in.", lang: "Java", stars: 412, forks: 38 },
  { name: "kube-dev-toolkit", desc: "CLI to streamline local Kubernetes development.", lang: "Go", stars: 280, forks: 22 },
  { name: "react-glass-ui", desc: "Glassmorphism component library for React.", lang: "TypeScript", stars: 198, forks: 31 },
  { name: "actions-deploy-mesh", desc: "Reusable GitHub Actions for multi-env deployment.", lang: "YAML", stars: 156, forks: 19 },
  { name: "java-algoviz", desc: "Interactive algorithm visualizer in JavaFX.", lang: "Java", stars: 110, forks: 14 },
  { name: "terraform-aws-modules", desc: "Battle-tested AWS Terraform modules.", lang: "HCL", stars: 96, forks: 12 },
];

const LANG_COLORS: Record<string, string> = {
  Java: "bg-orange-400", Go: "bg-cyan-400", TypeScript: "bg-blue-400", YAML: "bg-fuchsia-400", HCL: "bg-violet-400",
};

function OpenSource() {
  return (
    <PageShell eyebrow="// open source" title={<>Shipping <span className="text-gradient">in the open.</span></>} subtitle="Public repos, contributions, and tools I've built and maintain. Placeholder data.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {STATS.map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center">
              <s.i className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-display text-2xl font-semibold">{s.v}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="font-display text-3xl font-semibold mb-6">Pinned repositories</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {REPOS.map((r, i) => (
          <motion.a
            key={r.name} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="block glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"><Github className="w-4 h-4 text-primary" /><span className="font-mono font-medium">{r.name}</span></div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" />{r.stars}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{r.forks}</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className={`w-2 h-2 rounded-full ${LANG_COLORS[r.lang] || "bg-primary"}`} />
              <span className="text-muted-foreground">{r.lang}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}
