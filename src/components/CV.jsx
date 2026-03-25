import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education } from "../data";

function TimelineItem({ item, isLast, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8"
    >
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-transparent" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cyan-500/50 bg-slate-950" />

      <div className="glass rounded-xl p-5 mb-4">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-semibold text-slate-100 text-sm">{item.title ?? item.degree}</h3>
            <p className="text-cyan-400 text-sm font-mono">{item.company ?? item.school}</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs font-mono text-slate-500 block">{item.period}</span>
            <span className="text-xs text-slate-600">{item.location}</span>
          </div>
        </div>
        <ul className="mt-3 space-y-1">
          {item.items.map((point) => (
            <li key={point} className="text-xs text-slate-400 flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function CV() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState("experience");

  const list = tab === "experience" ? experience : education;

  return (
    <section id="cv" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-cyan-400 mb-2 tracking-widest uppercase">03 — CV</p>
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Experience & Education</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-1 p-1 glass rounded-xl w-fit mb-10"
        >
          {["experience", "education"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                tab === t
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {t}
            </button>
          ))}
        </motion.div>

        <div className="max-w-2xl">
          {list.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              isLast={i === list.length - 1}
              inView={inView}
              delay={0.15 + i * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="/OguzhanYetimoglu_resume.pdf"
            download="OguzhanYetimoglu_resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 glass hover:bg-white/8 border border-white/10 hover:border-cyan-500/30 text-slate-300 text-sm rounded-lg transition-all duration-200"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download full resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
