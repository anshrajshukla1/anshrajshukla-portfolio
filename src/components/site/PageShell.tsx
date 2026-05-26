import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 gradient-hero opacity-60" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-primary mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
        <div className="mt-16">{children}</div>
      </div>
    </div>
  );
}
