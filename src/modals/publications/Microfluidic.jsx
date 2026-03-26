import { ModalSection, TagList } from "../ModalShell";

export default function MicrofluidicModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded border text-cyan-400 bg-cyan-500/10 border-cyan-500/20">conf.</span>
          <span className="text-xs font-mono text-slate-600">2023 · BalkanCom</span>
        </div>
        <h2 className="text-xl font-bold text-slate-100 leading-snug">
          A Microfluidic Platform for Modeling Molecular Communication
        </h2>
        <p className="text-cyan-400 font-mono text-sm mt-2">BalkanCom 2023</p>
      </div>

      <ModalSection label="Authors">
        <p className="text-slate-400 text-sm">Gokce Duzyol, Merve Gorkem Durmaz, Oguzhan Yetimoglu, Abdurrahman Dilmac, Zeliha Cansu Canbek Ozdil, Ali Emre Pusane, Tuna Tugcu</p>
      </ModalSection>

      <ModalSection label="Abstract">
        <p className="text-slate-400 text-sm leading-relaxed">
          Molecular communication (MC) exploits small-scale communication links to improve the capabilities of nanomachines networked together. While theoretical frameworks for MC are well-developed, practical experimental work — especially at the micro-scale — remains scarce. This paper presents a microfluidic experimental platform to investigate the physical response of MC environments. Polystyrene microbeads carry information through a controlled microenvironment under continuous pressure-driven flow, observed via an integrated optical setup. Videos are processed by an image processing algorithm for automated particle recognition and counting, and decoded to reproduce transmitted bit sequences. Signals are modulated using on-off keying. The platform successfully achieves information transmission and particle detection at the micro-scale, with behavior verified through COMSOL simulations.
        </p>
      </ModalSection>

      <ModalSection label="Venue">
        <p className="text-slate-400 text-sm">2023 International Balkan Conference on Communications and Networking (BalkanCom) · IEEE · pp. 1–6 · June 5, 2023</p>
      </ModalSection>

      <div>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/10167928"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono"
        >
          View on IEEE Xplore
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      <ModalSection label="Keywords">
        <TagList tags={["Molecular Communication", "Microfluidics", "On-Off Keying", "Particle Detection", "COMSOL", "IEEE"]} />
      </ModalSection>
    </div>
  );
}
