import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl font-semibold text-gradient">404</div>
        <p className="mt-4 text-muted-foreground">Lost in the void. This route doesn't exist.</p>
        <a href="/" className="mt-6 inline-block glass rounded-full px-5 py-2 text-sm hover:text-primary">← Back home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl">Something broke</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 glass rounded-full px-5 py-2 text-sm">Retry</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ansh Raj Shukla | Portfolio" },
      { name: "description", content: "Java Full Stack Developer passionate about Spring Boot, React, Cloud, and DevOps. Explore projects, certifications, technical skills, and engineering journey." },
      { name: "theme-color", content: "#0a0a14" },
      { property: "og:title", content: "Ansh Raj Shukla | Portfolio" },
      { property: "og:description", content: "Java Full Stack Developer passionate about Spring Boot, React, Cloud, and DevOps. Explore projects, certifications, technical skills, and engineering journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ansh Raj Shukla | Portfolio" },
      { name: "twitter:description", content: "Java Full Stack Developer passionate about Spring Boot, React, Cloud, and DevOps. Explore projects, certifications, technical skills, and engineering journey." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CmVxnjvX2QMdk1n8H0z9bXIn0Ji1/social-images/social-1780290388731-c737401c-d05a-445a-888c-0d8d19dcef60.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CmVxnjvX2QMdk1n8H0z9bXIn0Ji1/social-images/social-1780290388731-c737401c-d05a-445a-888c-0d8d19dcef60.webp" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body className="dark">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const path = useRouterState({ select: (r) => r.location.pathname });
  const isAdmin = path.startsWith("/admin");
  return (
    <QueryClientProvider client={queryClient}>
      {!isAdmin && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.main
          key={path}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {!isAdmin && <Footer />}
    </QueryClientProvider>
  );
}
