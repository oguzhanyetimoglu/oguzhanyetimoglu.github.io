import { motion } from "framer-motion";

export default function CookieBanner({ onAccept, onDecline }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 sm:max-w-md z-50 glass rounded-lg p-4 shadow-2xl"
    >
      <p className="text-sm text-slate-300 leading-relaxed">
        This site uses privacy-friendly analytics to understand how visitors interact with it. Personal data is masked, and you can change your choice anytime from the footer.
      </p>
      <div className="flex gap-2 mt-3 justify-end">
        <button
          onClick={onDecline}
          className="text-xs font-mono px-3 py-1.5 rounded border border-white/10 text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-colors"
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          className="text-xs font-mono px-3 py-1.5 rounded border border-cyan-500/30 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
        >
          Accept
        </button>
      </div>
    </motion.div>
  );
}
