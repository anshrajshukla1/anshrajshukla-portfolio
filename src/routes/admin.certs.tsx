import { createFileRoute } from "@tanstack/react-router";
import { Upload, Award } from "lucide-react";

export const Route = createFileRoute("/admin/certs")({ component: AdminCerts });

const CERTS = [
  { n: "AWS Solutions Architect", d: "2025" },
  { n: "Certified Kubernetes Administrator", d: "2025" },
  { n: "Oracle Java SE 17", d: "2024" },
];

function AdminCerts() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl font-semibold">Certifications</h1>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-sm font-medium glow"><Upload className="w-4 h-4" /> Upload</button>
      </div>
      <div className="glass rounded-2xl border-2 border-dashed border-white/10 p-12 text-center mb-6">
        <Upload className="w-8 h-8 text-primary mx-auto mb-3" />
        <div className="text-sm">Drop certificate PDFs or images here</div>
        <div className="text-xs text-muted-foreground mt-1">Placeholder upload zone</div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTS.map((c) => (
          <div key={c.n} className="glass rounded-2xl p-5">
            <Award className="w-6 h-6 text-primary mb-3" />
            <div className="font-medium">{c.n}</div>
            <div className="text-xs text-muted-foreground mt-1">{c.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
