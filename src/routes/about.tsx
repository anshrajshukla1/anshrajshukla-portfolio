import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Server, Layers, Cloud, Network } from "lucide-react";

export const Route = createFileRoute("/about")({ component: About });

const QUALITIES = [
  { i: Server, t: "Java & Spring Boot", d: "Building secure backend applications and REST APIs." },
  { i: Layers, t: "Full Stack Development", d: "Creating end-to-end products using React and modern frontend tools." },
  { i: Cloud, t: "Cloud & DevOps", d: "Learning Docker, AWS, CI/CD, and deployment workflows." },
  { i: Network, t: "System Design", d: "Understanding scalable architectures and software engineering principles." },
];

function About() {
  return (
    <PageShell
      eyebrow="// whoami"
      title={<>Creating <span className="text-gradient">production-ready applications.</span></>}
      subtitle="Java Full Stack Developer passionate about Spring Boot, React, Cloud, and DevOps. Building production-ready applications while continuously learning modern software engineering."
    >
      <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>
          I'm a <span className="text-foreground font-medium">Java Full Stack Developer</span> focused on building modern web applications with Spring Boot, React, and cloud technologies.
        </p>
        <p>
          Through hands-on projects, I have developed experience in backend systems, authentication, databases, and deployment workflows while continuously exploring DevOps and scalable software architecture.
        </p>
      </div>

      <div className="mt-24">
        <h2 className="font-display text-3xl font-semibold mb-8">Current focus</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUALITIES.map((q, i) => (
            <motion.div
              key={q.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <q.i className="w-6 h-6 text-primary mb-3" />
              <div className="font-display font-semibold">{q.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{q.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
