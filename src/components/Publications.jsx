import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { publications } from "../data";

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-cyan-400 mb-2 tracking-widest uppercase">04 — Research</p>
          <h2 className="text-3xl font-bold text-slate-100 mb-12">Publications</h2>
        </motion.div>

        <div className="space-y-3 max-w-3xl">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-5 flex gap-5 items-start"
            >
              <div className="shrink-0 mt-0.5">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded border ${
                    pub.type === "Journal Article"
                      ? "text-violet-400 bg-violet-500/10 border-violet-500/20"
                      : "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
                  }`}
                >
                  {pub.type === "Journal Article" ? "journal" : "conf."}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-200 text-sm font-medium leading-snug mb-1">{pub.title}</p>
                <p className="text-slate-500 text-xs font-mono">
                  {pub.venue} · {pub.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="https://scholar.google.com/citations?user=UIJ8VVwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono"
          >
            View on Google Scholar
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
