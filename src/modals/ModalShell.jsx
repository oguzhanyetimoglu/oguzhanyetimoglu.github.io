import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ModalShell({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a1120] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-black/40 hover:bg-black/60 text-white/60 hover:text-white transition-all"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {children}
      </motion.div>
    </motion.div>
  );
}

export function ModalBanner({ gradient, label }) {
  return (
    <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-xs text-white/20 tracking-widest uppercase">{label}</span>
      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

export function ModalSection({ label, children }) {
  return (
    <div>
      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">{label}</p>
      {children}
    </div>
  );
}

export function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function BulletList({ items, color = "bg-cyan-400/60" }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
          <span className={`mt-2 w-1.5 h-1.5 rounded-full ${color} shrink-0`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ImagePlaceholders({ count }) {
  return (
    <div className={`grid gap-3 ${count > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="aspect-video rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center"
        >
          <span className="font-mono text-xs text-white/15">[ screenshot {i + 1} ]</span>
        </div>
      ))}
    </div>
  );
}
