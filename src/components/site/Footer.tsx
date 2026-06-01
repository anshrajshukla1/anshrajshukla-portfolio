import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  { I: Github, href: "https://github.com/anshrajshukla1", label: "GitHub" },
  { I: Linkedin, href: "https://www.linkedin.com/in/ansh-raj-shukla-84572831a", label: "LinkedIn" },
  { I: Mail, href: "mailto:anshrajshukla.official@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">
            Building <span className="text-gradient">resilient systems</span>
            <br /> for the next wave of products.
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Java • Spring Boot • Cloud Native • DevOps. Available for full-time roles and high-impact internships.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            {["projects","certifications","stack","resume","contact"].map(p=>(
              <li key={p}><Link to={`/${p}`} className="hover:text-primary transition-colors capitalize">{p}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Connect</div>
          <div className="flex gap-2">
            {SOCIALS.map(({ I, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass w-10 h-10 grid place-items-center rounded-full hover:text-primary hover:glow transition-all">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ansh Raj Shukla — Crafted with obsession.
      </div>
    </footer>
  );
}
