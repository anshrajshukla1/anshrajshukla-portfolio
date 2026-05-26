import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Award, ExternalLink, X } from "lucide-react";

export const Route = createFileRoute("/certifications")({ component: Certifications });

const CERTS = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2025", id: "AWS-XXXX-XXXX" },
  { name: "Certified Kubernetes Administrator", issuer: "CNCF", date: "2025", id: "CKA-XXXX" },
  { name: "Oracle Java SE 17 Developer", issuer: "Oracle", date: "2024", id: "OCP-XXXX" },
  { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", date: "2024", id: "HC-XXXX" },
  { name: "Spring Professional", issuer: "VMware", date: "2024", id: "SP-XXXX" },
  { name: "GitHub Actions Certified", issuer: "GitHub", date: "2024", id: "GH-XXXX" },
];

function Certifications() {
  const [active, setActive] = useState<typeof CERTS[number] | null>(null);
  return (
    <PageShell eyebrow="// certifications" title={<>Verified <span className="text-gradient">skills.</span></>} subtitle="Placeholder certificate gallery — replace with your actual credentials.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTS.map((c, i) => (
          <motion.button
            key={c.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }} onClick={() => setActive(c)}
            className="text-left group glass rounded-3xl p-6 hover:border-primary/40 transition-colors"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-transparent grid place-items-center mb-5 border border-white/5 relative overflow-hidden">
              <Award className="w-12 h-12 text-primary/80 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.18_195/0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="font-display font-semibold">{c.name}</div>
            <div className="text-sm text-muted-foreground mt-1">{c.issuer} • {c.date}</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg grid place-items-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="glass-strong rounded-3xl w-full max-w-xl p-8 relative">
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full glass"><X className="w-4 h-4" /></button>
              <Award className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-display text-2xl font-semibold">{active.name}</h3>
              <div className="text-muted-foreground mt-1">{active.issuer} • {active.date}</div>
              <div className="mt-4 font-mono text-sm text-muted-foreground">ID: {active.id}</div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2 text-sm font-medium glow">
                <ExternalLink className="w-4 h-4" /> Verify credential
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
