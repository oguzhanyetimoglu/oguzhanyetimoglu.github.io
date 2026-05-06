import nanosimImg from "../../assets/projects/nanosim.png";
import brownianGif from "../../assets/projects/brownian-motion.gif";
import { ModalSection, TagList } from "../ModalShell";

export default function NanosimModal() {
  return (
    <>
      <div className="w-full h-52 overflow-hidden bg-[#0a1120]">
        <img src={nanosimImg} alt="Nanosim" className="w-full h-full object-cover object-center" />
      </div>

      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded border text-violet-400 bg-violet-500/10 border-violet-500/20">research</span>
            <span className="text-xs font-mono text-slate-600">2020</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-100">NanoSim</h2>
          <p className="text-sm text-slate-500 font-mono mt-1">GPU-Accelerated Molecular Communication Simulator</p>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-violet-500/30 pl-4">
          A research simulation tool for modeling how nanoparticles move and interact in biological environments. Think drug-carrying molecules diffusing through a blood vessel, or signaling particles being absorbed by a receiver cell.
        </p>

        <ModalSection label="The Problem It Solves">
          <p className="text-slate-400 text-sm leading-relaxed">
            Molecular communication is an emerging research field where information is encoded not in electrical signals, but in the release and detection of molecules. To study how these systems behave (how reliably a signal gets through, how long it takes, how physical conditions affect it), you need to simulate large numbers of particles moving through realistic environments. Doing that at scale on a CPU is too slow to be useful for research.
          </p>
        </ModalSection>

        <ModalSection label="What It Does">
          <div className="flex gap-4 items-start">
            <div className="shrink-0 flex flex-col items-center gap-1">
              <div className="rounded-lg overflow-hidden border border-white/[0.06]">
                <img src={brownianGif} alt="Brownian motion simulation" className="w-48 h-48 object-cover" />
              </div>
              <p className="text-xs font-mono text-slate-600 text-center">Brownian diffusion</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              NanoSim can simulate hundreds of thousands of particles simultaneously using GPU acceleration. Researchers can configure the physical setup (fluid flow, diffusivity, obstacle geometry, receiver placement) and observe how particle populations behave over time. Results are visualized as 3D particle position plots and reception time histograms, which reveal the communication channel's behavior and let researchers measure things like signal delay and absorption rate.
            </p>
          </div>
        </ModalSection>

        <ModalSection label="My Contribution">
          <p className="text-slate-400 text-sm leading-relaxed">
            My role was on the research and design side. I contributed to shaping how the simulator should behave, what physical scenarios it should support, and how its outputs should be interpreted, including thinking through the underlying models, guiding structural decisions, and validating that results held up against real-world expectations.
          </p>
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["C++", "CUDA", "Python", "matplotlib"]} />
        </ModalSection>
      </div>
    </>
  );
}
