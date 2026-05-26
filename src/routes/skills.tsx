import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/skills")({ component: Skills });

const GROUPS = [
  { name: "Languages", skills: ["Java", "TypeScript", "Python", "Go", "SQL", "Bash"] },
  { name: "Backend", skills: ["Spring Boot", "Spring Security", "REST APIs", "GraphQL", "gRPC", "Kafka"] },
  { name: "Frontend", skills: ["React", "Next.js", "Tailwind", "Framer Motion", "Vite"] },
  { name: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "ClickHouse"] },
  { name: "DevOps", skills: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Helm"] },
  { name: "Cloud", skills: ["AWS", "GCP", "Cloudflare", "Vercel"] },
  { name: "Tools", skills: ["Git", "Linux", "Postman", "JIRA", "Grafana", "Prometheus"] },
];

function Skills() {
  return (
    <PageShell
      eyebrow="// skills"
      title={<>An ecosystem, not a <span className="text-gradient">list.</span></>}
      subtitle="Tools and technologies I actively use in production. Hover the orbit to feel the depth."
    >
      <div className="relative aspect-square max-w-2xl mx-auto mb-20">
        <div className="absolute inset-0 grid place-items-center">
          <div className="glass-strong rounded-full w-28 h-28 grid place-items-center font-display text-lg glow">core</div>
        </div>
        {[0.4, 0.65, 0.9].map((scale, ring) => {
          const items = ["Java", "Spring", "Kafka", "K8s", "AWS", "Docker", "React", "Postgres"].slice(0, 6 + ring);
          return (
            <div key={ring} className="absolute inset-0 animate-orbit" style={{ animationDuration: `${30 + ring * 15}s`, animationDirection: ring % 2 ? "reverse" : "normal" }}>
              {items.map((s, i) => {
                const angle = (i / items.length) * Math.PI * 2;
                const r = scale * 50;
                return (
                  <div
                    key={s}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-full px-3 py-1.5 text-xs font-mono hover:text-primary hover:glow transition-all"
                    style={{ transform: `translate(${Math.cos(angle) * r}%, ${Math.sin(angle) * r}%) translate(-50%,-50%)` }}
                  >
                    {s}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
          >
            <div className="text-xs font-mono text-primary mb-3">// {g.name.toLowerCase()}</div>
            <div className="font-display text-lg font-semibold mb-4">{g.name}</div>
            <div className="flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
