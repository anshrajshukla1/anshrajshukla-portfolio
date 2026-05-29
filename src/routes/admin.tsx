import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, MessageSquare, FolderKanban, Award, LogOut, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({ component: AdminLayout });

const ITEMS = [
  { to: "/admin", label: "Overview", i: LayoutDashboard, exact: true },
  { to: "/admin/messages", label: "Messages", i: MessageSquare },
  { to: "/admin/projects", label: "Projects", i: FolderKanban },
  { to: "/admin/certs", label: "Certs", i: Award },
];

function AdminLayout() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-64 border-r border-white/5 p-4 flex flex-col gap-1 sticky top-0 h-screen">
        <Link to="/admin" className="flex items-center gap-2 px-3 py-3 mb-4">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow"><Terminal className="w-4 h-4" /></span>
          <div>
            <div className="font-display font-semibold leading-tight">Ansh Raj Shukla</div>
            <div className="text-[10px] font-mono text-muted-foreground">admin · v0.1</div>
          </div>
        </Link>
        {ITEMS.map((it) => {
          const active = it.exact ? path === it.to : path.startsWith(it.to);
          return (
            <Link key={it.to} to={it.to} className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors", active ? "bg-white/8 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5")}>
              <it.i className="w-4 h-4" />{it.label}
            </Link>
          );
        })}
        <div className="mt-auto">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5">
            <LogOut className="w-4 h-4" /> Exit admin
          </Link>
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>
    </div>
  );
}
