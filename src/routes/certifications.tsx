import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Award, ImagePlus } from "lucide-react";

export const Route = createFileRoute("/certifications")({ component: Certifications });

const CERTS = [
  {
    name: "Java Full Stack Developer Course",
    issuer: "Udemy — Instructor: Faisal Memon",
    date: "Course Completion Certificate",
  },
];

function Certifications() {
  return (
    <PageShell
      eyebrow="// certifications"
      title={<>Verified <span className="text-gradient">skills.</span></>}
      subtitle="Coursework and credentials that back up the resume."
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
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-transparent grid place-items-center mb-5 border border-white/5 relative overflow-hidden">
              <div className="flex flex-col items-center text-muted-foreground">
                <ImagePlus className="w-10 h-10 text-primary/70" />
                <div className="mt-2 text-xs">Certificate image placeholder</div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.18_195/0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
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
