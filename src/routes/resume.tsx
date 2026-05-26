import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Download, FileText, Mail, MapPin, Linkedin, Github } from "lucide-react";

export const Route = createFileRoute("/resume")({ component: Resume });

function Resume() {
  return (
    <PageShell eyebrow="// resume" title={<>The TL;DR for <span className="text-gradient">recruiters.</span></>} subtitle="Quick-scan summary plus a downloadable, ATS-friendly PDF.">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
        <aside className="glass rounded-3xl p-6 h-fit sticky top-28">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent mb-4 grid place-items-center text-4xl font-display font-semibold text-primary">YN</div>
          <div className="font-display text-xl font-semibold">Your Name</div>
          <div className="text-sm text-muted-foreground">Java Full Stack • Backend • DevOps</div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-3.5 h-3.5" /> Remote · Worldwide</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Mail className="w-3.5 h-3.5" /> hello@example.com</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Linkedin className="w-3.5 h-3.5" /> /in/placeholder</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Github className="w-3.5 h-3.5" /> /placeholder</div>
          </div>
          <a href="#" className="mt-6 w-full inline-flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2.5 text-sm font-medium glow">
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </aside>

        <div className="glass-strong rounded-3xl p-8 space-y-8">
          <Section title="Summary">
            <p className="text-muted-foreground">Placeholder summary. Backend-leaning full-stack engineer with experience designing event-driven systems, deploying on Kubernetes, and shipping product features end-to-end.</p>
          </Section>
          <Section title="Experience">
            {[
              ["Backend Engineer Intern", "Placeholder Cloud Co. · 2025 – Present", "Owned p99 latency, migrated services to Kafka, ran on-call."],
              ["Full Stack Developer", "Placeholder Studio · 2024 – 2025", "Shipped product features and reduced deploy time 8×."],
              ["DevOps Intern", "Placeholder Labs · 2024", "Built Terraform modules and Grafana SLO dashboards."],
            ].map(([r, m, d]) => (
              <div key={r} className="mb-4">
                <div className="font-medium">{r}</div>
                <div className="text-xs text-muted-foreground">{m}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </Section>
          <Section title="Skills">
            <div className="flex flex-wrap gap-1.5">
              {["Java", "Spring Boot", "React", "TypeScript", "Kafka", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"].map((s) => (
                <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
              ))}
            </div>
          </Section>
          <Section title="Education">
            <div className="font-medium">B.Tech · Computer Science</div>
            <div className="text-xs text-muted-foreground">Placeholder University · 2022 – 2026</div>
          </Section>
        </div>
      </div>

      <div className="mt-12 glass rounded-3xl p-2 overflow-hidden">
        <div className="aspect-[8.5/11] bg-white/95 text-black rounded-2xl grid place-items-center text-muted-foreground">
          <div className="text-center">
            <FileText className="w-12 h-12 mx-auto text-zinc-400" />
            <div className="mt-3 text-zinc-600 font-medium">PDF preview placeholder</div>
            <div className="text-xs text-zinc-500 mt-1">Drop your resume.pdf in /public and link it here.</div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-mono text-primary uppercase tracking-widest mb-3">{title}</div>
      {children}
    </div>
  );
}
