import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certifications", label: "Certs" },
  { to: "/stack", label: "Stack" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (r) => r.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "glass rounded-full flex items-center justify-between gap-2 px-4 py-2 transition-all",
            scrolled && "glass-strong shadow-lg shadow-black/40",
          )}
        >
          <Link to="/" className="flex items-center gap-2 pl-2 group">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow">
              <Terminal className="w-4 h-4" />
            </span>
            <span className="font-display font-semibold tracking-tight">
              Ansh <span className="text-gradient">Raj Shukla</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors",
                    active && "text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{n.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/hire"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity glow"
            >
              Hire me
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-3xl p-3 grid grid-cols-2 gap-1"
            >
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5",
                    path === n.to && "text-foreground bg-white/5",
                  )}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/hire"
                className="col-span-2 mt-1 px-3 py-2 rounded-xl text-sm font-medium text-center bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Hire me
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
