import ModalShell from "./ModalShell";
import { AnimatePresence } from "framer-motion";

export default function ResumeModal({ onClose }) {
  return (
    <AnimatePresence>
      <ModalShell onClose={onClose}>
        <div className="flex flex-col" style={{ height: "85vh" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 pr-14 border-b border-white/[0.06] shrink-0">
            <div>
              <p className="text-slate-200 text-sm font-medium">Oğuzhan Yetimoğlu</p>
              <p className="text-slate-500 text-xs font-mono">Resume</p>
            </div>
            <a
              href="/OguzhanYetimoglu_resume.pdf"
              download="OguzhanYetimoglu_resume.pdf"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 transition-all text-sm"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="font-mono text-xs">Download PDF</span>
            </a>
          </div>

          {/* PDF viewer */}
          <iframe
            src="/OguzhanYetimoglu_resume.pdf"
            className="flex-1 w-full"
            title="Resume"
          />
        </div>
      </ModalShell>
    </AnimatePresence>
  );
}
