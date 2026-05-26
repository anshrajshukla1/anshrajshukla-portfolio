import { createFileRoute } from "@tanstack/react-router";
import { Mail, Reply, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/messages")({ component: Messages });

const MSGS = [
  { name: "Ada Lovelace", email: "ada@stripe.com", company: "Stripe", subject: "Backend Engineer role", time: "2h" },
  { name: "Linus Torvalds", email: "linus@linux.org", company: "Linux Foundation", subject: "DevOps internship chat", time: "5h" },
  { name: "Grace Hopper", email: "grace@navy.mil", company: "Navy", subject: "Open source collab", time: "1d" },
  { name: "Alan Kay", email: "alan@vpri.org", company: "VPRI", subject: "Mentorship", time: "3d" },
];

function Messages() {
  return (
    <div className="p-8">
      <h1 className="font-display text-3xl font-semibold mb-6">Messages</h1>
      <div className="glass rounded-2xl divide-y divide-white/5">
        {MSGS.map((m) => (
          <div key={m.email} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center text-sm font-medium">{m.name.split(" ").map((x) => x[0]).join("")}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium">{m.name}</span>
                <span className="text-xs text-muted-foreground">· {m.company}</span>
              </div>
              <div className="text-sm text-muted-foreground truncate">{m.subject}</div>
            </div>
            <div className="text-xs text-muted-foreground">{m.time}</div>
            <button className="glass w-8 h-8 grid place-items-center rounded-full hover:text-primary"><Reply className="w-3.5 h-3.5" /></button>
            <button className="glass w-8 h-8 grid place-items-center rounded-full hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
