import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({ component: Contact });

const CHANNELS = [
  {
    I: Linkedin,
    label: "LinkedIn",
    handle: "ansh-raj-shukla-84572831a",
    href: "https://www.linkedin.com/in/ansh-raj-shukla-84572831a",
  },
  {
    I: Github,
    label: "GitHub",
    handle: "anshrajshukla1",
    href: "https://github.com/anshrajshukla1",
  },
  {
    I: Mail,
    label: "Email",
    handle: "anshrajshukla.official@gmail.com",
    href: "mailto:anshrajshukla.official@gmail.com",
  },
];

function Contact() {
  return (
    <PageShell
      eyebrow="// contact"
      title={<>Let's build something <span className="text-gradient">together.</span></>}
    >
      <div className="grid md:grid-cols-3 gap-5">
        {CHANNELS.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group glass-strong rounded-3xl p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center group-hover:glow transition-shadow">
                <c.I className="w-5 h-5 text-primary" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div className="mt-5 font-display text-xl font-semibold">{c.label}</div>
            <div className="text-sm font-mono text-muted-foreground mt-1 break-all">{c.handle}</div>
            
          </motion.a>
        ))}
      </div>

      <div className="mt-10 glass rounded-2xl p-6 flex items-center gap-3 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span>Available for opportunities — open to full-time roles & internships.</span>
      </div>
    </PageShell>
  );
}
