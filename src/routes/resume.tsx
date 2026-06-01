import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resume")({ component: Resume });

const FULLSTACK_PDF = "/Ansh_Raj_Shukla_Resume.pdf";

function Resume() {
  return (
    <div className="relative pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 gradient-hero opacity-60" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Stack */}
          <div className="glass-strong rounded-3xl p-8">
            <div className="text-xs font-mono text-primary">// fullstack</div>
            <div className="font-display text-2xl font-semibold mt-1">Full Stack Resume</div>
            <div className="text-sm text-muted-foreground mt-1">
              Java • Spring Boot • React • SQL
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={FULLSTACK_PDF}
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
              <a
                href={FULLSTACK_PDF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
              >
                <ExternalLink className="w-4 h-4" /> Open in new tab
              </a>
            </div>

            <div className="mt-6 aspect-[8.5/11] rounded-2xl overflow-hidden border border-white/10 bg-white">
              <object
                data={`${FULLSTACK_PDF}#view=FitH`}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="w-full h-full grid place-items-center text-muted-foreground">
                  <div className="text-center">
                    <FileText className="w-10 h-10 mx-auto" />
                    <div className="mt-2 text-sm">Preview unavailable — download the PDF.</div>
                  </div>
                </div>
              </object>
            </div>
          </div>

          {/* DevOps */}
          <div className="glass-strong rounded-3xl p-8">
            <div className="text-xs font-mono text-primary">// devops</div>
            <div className="font-display text-2xl font-semibold mt-1">DevOps Resume</div>
            <div className="text-sm text-muted-foreground mt-1">
              Docker • Kubernetes • AWS • CI/CD
            </div>

            <div className="mt-6 aspect-[8.5/11] rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
              <div className="text-center text-muted-foreground">
                <FileText className="w-10 h-10 mx-auto" />
                <div className="mt-2 text-sm">Coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
