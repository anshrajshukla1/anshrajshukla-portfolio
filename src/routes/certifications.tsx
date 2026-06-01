import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certifications")({ component: Certifications });

const CERTS = [
  {
    name: "Java Spring Boot Full Stack: eCommerce Project Masterclass",
    issuer: "Udemy — Faisal Memon (EmbarkX)",
    date: "April 3, 2026 · 90.5 hours",
    image: "/certificates/java-spring-boot-ecommerce.png",
  },
];

function Certifications() {
  return (
    <PageShell
      eyebrow="// certifications"
      title={<>Verified <span className="text-gradient">skills.</span></>}
      subtitle="Credentials earned while mastering modern software development."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group glass rounded-3xl p-6 hover:border-primary/40 transition-colors"
          >
            <div className="aspect-[4/3] rounded-2xl bg-white overflow-hidden mb-5 border border-white/5 relative">
              <img src={c.image} alt={c.name} className="w-full h-full object-contain" loading="lazy" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.18_195/0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-display font-semibold leading-tight">{c.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.issuer}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.date}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
