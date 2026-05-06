import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experience, education } from "../data";
import ModalShell from "../modals/ModalShell";
import SiemensModal from "../modals/cv/Siemens";
import LMUModal from "../modals/cv/LMU";
import AimycaModal from "../modals/cv/Aimyca";
import NETLABModal from "../modals/cv/NETLAB";
import IdeaTechModal from "../modals/cv/IdeaTech";
import CTechModal from "../modals/cv/CTech";
import VeriParkModal from "../modals/cv/VeriPark";
const experienceModalMap = {
  Siemens: SiemensModal,
  "Ludwig Maximilian University (LMU)": LMUModal,
  "Aimyca GmbH": AimycaModal,
  "NETLAB, Boğaziçi University": NETLABModal,
  "Idea Technology": IdeaTechModal,
  "CTech Information Technologies": CTechModal,
  VeriPark: VeriParkModal,
};


function TimelineItem({ item, isLast, inView, delay, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8"
    >
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-transparent" />
      )}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cyan-500/50 bg-slate-950" />

      <div
        className={`glass rounded-xl p-5 mb-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-cyan-500/30 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(6,182,212,0.08)] group ${onClick ? "cursor-pointer" : ""}`}
        onClick={onClick ?? undefined}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className={`font-semibold text-slate-100 text-sm transition-colors ${onClick ? "group-hover:text-cyan-400" : ""}`}>
              {item.title ?? item.degree}
            </h3>
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
        {onClick && (
          <p className="mt-3 text-xs font-mono text-cyan-500/40 group-hover:text-cyan-400/60 transition-colors">
            click for details →
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function CV() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState("experience");
  const [selected, setSelected] = useState(null);

  const list = tab === "experience" ? experience : education;

  const ModalContent = selected ? experienceModalMap[selected.company] ?? null : null;

  return (
    <>
      <section id="background" ref={ref} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-cyan-400 mb-2 tracking-widest uppercase text-center">03 · Background</p>
            <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">Experience & Education</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex gap-1 p-1 glass rounded-xl w-fit mb-10 mx-auto"
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

          <div className="max-w-2xl mx-auto">
            {list.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                isLast={i === list.length - 1}
                inView={inView}
                delay={0.15 + i * 0.1}
                onClick={tab === "experience" ? () => setSelected(item) : null}
              />
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {selected && ModalContent && (
          <ModalShell onClose={() => setSelected(null)}>
            <ModalContent />
          </ModalShell>
        )}
      </AnimatePresence>
    </>
  );
}
