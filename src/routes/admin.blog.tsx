import { createFileRoute } from "@tanstack/react-router";
import { Plus, Pencil } from "lucide-react";

export const Route = createFileRoute("/admin/blog")({ component: AdminBlog });

const POSTS = [
  { t: "Designing for failure: Spring Boot resilience", status: "Published", date: "Mar 2026" },
  { t: "Zero-to-prod with Kubernetes & GitOps", status: "Published", date: "Feb 2026" },
  { t: "Cost-aware AWS lessons", status: "Draft", date: "—" },
];

function AdminBlog() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl font-semibold">Blog</h1>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-sm font-medium glow"><Plus className="w-4 h-4" /> New post</button>
      </div>
      <div className="glass rounded-2xl divide-y divide-white/5">
        {POSTS.map((p) => (
          <div key={p.t} className="flex items-center gap-4 p-4 hover:bg-white/5">
            <div className="flex-1">
              <div className="font-medium">{p.t}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{p.date}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${p.status === "Published" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>{p.status}</span>
            <button className="glass w-8 h-8 rounded-full inline-grid place-items-center hover:text-primary"><Pencil className="w-3.5 h-3.5" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
