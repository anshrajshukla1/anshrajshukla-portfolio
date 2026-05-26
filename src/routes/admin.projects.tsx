import { createFileRoute } from "@tanstack/react-router";
import { Plus, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/projects")({ component: AdminProjects });

const ROWS = [
  { t: "Distributed Order Engine", cat: "Backend", status: "Live" },
  { t: "Kube Cloud Platform", cat: "Cloud", status: "Live" },
  { t: "CI/CD Mesh", cat: "DevOps", status: "Draft" },
  { t: "Spring Microservice Template", cat: "Spring Boot", status: "Live" },
];

function AdminProjects() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl font-semibold">Projects</h1>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-sm font-medium glow"><Plus className="w-4 h-4" /> New project</button>
      </div>
      <div className="glass rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground uppercase tracking-widest">
            <tr><th className="text-left p-4">Title</th><th className="text-left p-4">Category</th><th className="text-left p-4">Status</th><th className="p-4" /></tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {ROWS.map((r) => (
              <tr key={r.t} className="hover:bg-white/5">
                <td className="p-4 font-medium">{r.t}</td>
                <td className="p-4 text-muted-foreground">{r.cat}</td>
                <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full ${r.status === "Live" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>{r.status}</span></td>
                <td className="p-4 text-right">
                  <button className="glass w-8 h-8 rounded-full inline-grid place-items-center mr-1 hover:text-primary"><Pencil className="w-3.5 h-3.5" /></button>
                  <button className="glass w-8 h-8 rounded-full inline-grid place-items-center hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
