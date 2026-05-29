import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Upload, FileText } from "lucide-react";

export const Route = createFileRoute("/resume")({ component: Resume });

const SLOTS = [
  { key: "fullstack", title: "Full Stack Resume", desc: "Java • Spring Boot • React • SQL" },
  { key: "devops", title: "DevOps Resume", desc: "Docker • Kubernetes • AWS • CI/CD" },
];

function Resume() {
  return (
    <PageShell
      eyebrow="// resume"
      title={<>Two tracks, one <span className="text-gradient">engineer.</span></>}
      subtitle="Upload your Full Stack and DevOps resumes here. Drop the PDFs into /public and link them, or wire up uploads later."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {SLOTS.map((s) => (
          <div key={s.key} className="glass-strong rounded-3xl p-8">
            <div className="text-xs font-mono text-primary">// {s.key}</div>
            <div className="font-display text-2xl font-semibold mt-1">{s.title}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>

            <div className="mt-6 glass rounded-2xl border-2 border-dashed border-white/10 p-10 text-center">
              <Upload className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm font-medium">Upload {s.title.toLowerCase()} (PDF)</div>
              <div className="text-xs text-muted-foreground mt-1">Placeholder upload zone — wire to storage later.</div>
            </div>

            <div className="mt-6 aspect-[8.5/11] rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
              <div className="text-center text-muted-foreground">
                <FileText className="w-10 h-10 mx-auto" />
                <div className="mt-2 text-sm">No PDF uploaded yet</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
