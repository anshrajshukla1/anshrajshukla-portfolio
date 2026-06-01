import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/stack")({ component: Stack });

const CATEGORIES = [
  { name: "Languages", color: "from-cyan-500/40 to-cyan-500/0", items: ["Java", "JavaScript", "SQL", "Bash"] },
  { name: "Frameworks", color: "from-violet-500/40 to-violet-500/0", items: ["Spring Boot", "React"] },
  { name: "Databases", color: "from-emerald-500/40 to-emerald-500/0", items: ["PostgreSQL", "MySQL"] },
  { name: "DevOps", color: "from-amber-500/40 to-amber-500/0", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { name: "Cloud", color: "from-sky-500/40 to-sky-500/0", items: ["AWS", "Vercel"] },
  { name: "Tools", color: "from-pink-500/40 to-pink-500/0", items: ["Git", "Linux", "Postman", "Stripe"] },
];

function Stack() {
  return (
    <PageShell eyebrow="// the ecosystem" title={<>An interactive <span className="text-gradient">tech stack.</span></>} subtitle="My day-to-day toolset, grouped by purpose.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative group glass rounded-3xl p-6 overflow-hidden hover:border-primary/40 transition-colors"
          >
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${cat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
            <div className="relative">
              <div className="text-xs font-mono text-primary mb-2">// {cat.name.toLowerCase()}</div>
              <div className="font-display text-2xl font-semibold mb-5">{cat.name}</div>
              <div className="grid grid-cols-2 gap-2">
                {cat.items.map((it) => (
                  <div key={it} className="glass rounded-xl px-3 py-2.5 text-sm font-mono text-center hover:text-primary hover:glow transition-all">
                    {it}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
