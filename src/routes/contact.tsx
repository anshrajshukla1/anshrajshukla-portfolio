import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Send, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell eyebrow="// contact" title={<>Let's build something <span className="text-gradient">together.</span></>} subtitle="Recruiters, founders, collaborators — drop me a line. I reply within 24 hours.">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
        <motion.form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 space-y-5 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: "radial-gradient(circle at top right, oklch(0.65 0.25 305 / 0.25), transparent 60%)" }} />
          <div className="relative grid sm:grid-cols-2 gap-5">
            <Field label="Your name" placeholder="Ada Lovelace" />
            <Field label="Email" type="email" placeholder="ada@company.com" />
            <Field label="Company" placeholder="Optional" />
            <Field label="Role / Opportunity" placeholder="Backend Engineer · Full-time" />
          </div>
          <div className="relative">
            <label className="text-xs font-mono text-muted-foreground">Message</label>
            <textarea required rows={5} placeholder="Tell me about the role, team, and timeline…" className="mt-1 w-full glass rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 resize-none" />
          </div>
          <div className="relative">
            <label className="text-xs font-mono text-muted-foreground">Project details (optional)</label>
            <textarea rows={3} placeholder="Tech stack, scope, scale, success metrics…" className="mt-1 w-full glass rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 resize-none" />
          </div>
          <div className="relative flex items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">{sent ? "✓ Sent — I'll get back to you." : "By sending, you agree to a friendly reply."}</div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 text-sm font-medium glow hover:scale-[1.02] transition-transform">
              {sent ? "Sent" : "Send message"} <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.form>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
              Available for opportunities
            </div>
            <div className="mt-3 text-xs text-muted-foreground">Open to full-time roles & internships starting Q3 2026.</div>
          </div>
          <div className="glass rounded-2xl p-6 space-y-3 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-4 h-4 text-primary" /> hello@example.com</div>
            <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /> Remote · Worldwide</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Find me on</div>
            <div className="flex gap-2">
              {[Github, Linkedin, Twitter, Mail].map((I, i) => (
                <a key={i} href="#" className="glass w-10 h-10 grid place-items-center rounded-full hover:text-primary hover:glow transition-all"><I className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-mono text-muted-foreground">{label}</label>
      <input {...rest} className="mt-1 w-full glass rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50" />
    </div>
  );
}
