import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile, skills } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="font-mono text-xs text-cyan-400 mb-2 tracking-widest uppercase text-center">
            01 · About
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-slate-100 mb-2 text-center">
            Who I am
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center font-mono text-sm sm:text-base mb-12"
          >
            <span className="text-slate-300">Oğuzhan</span>
            <span className="text-slate-500"> [oˈuːzhan] </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400"> he/him</span>
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-4">
              {profile.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeUp} className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
