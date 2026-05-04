import { profile } from "../data";
import { resetClarityConsent } from "../hooks/useClarity";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs font-mono">
          © {new Date().getFullYear()} Oğuzhan Yetimoğlu
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-xs font-mono transition-colors">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-xs font-mono transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-slate-600 hover:text-slate-400 text-xs font-mono transition-colors">
            Email
          </a>
          <button onClick={resetClarityConsent} className="text-slate-600 hover:text-slate-400 text-xs font-mono transition-colors">
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  );
}
