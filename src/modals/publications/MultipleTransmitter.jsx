import { ModalSection, TagList } from "../ModalShell";

export default function MultipleTransmitterModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded border text-violet-400 bg-violet-500/10 border-violet-500/20">journal</span>
          <span className="text-xs font-mono text-slate-600">2022</span>
        </div>
        <h2 className="text-xl font-bold text-slate-100 leading-snug">
          Multiple Transmitter Localization via Single Receiver in 3-D Molecular Communication via Diffusion
        </h2>
        <p className="text-cyan-400 font-mono text-sm mt-2">Digital Signal Processing</p>
      </div>

      <ModalSection label="Authors">
        <p className="text-slate-400 text-sm">Oguzhan Yetimoglu, M. Kerem Avci, Bayram Cevdet Akdeniz, H. Birkan Yilmaz, Ali E. Pusane, Tuna Tugcu</p>
      </ModalSection>

      <ModalSection label="Abstract">
        <p className="text-slate-400 text-sm leading-relaxed">
          Molecular communications enable information exchange at the nanoscale where conventional paradigms fail — but the diffusion-based nature of the channel makes traditional techniques like transmitter localization difficult to apply, especially with multiple transmitters present. This paper proposes a solution for localizing multiple point transmitters absorbed by a spherical receiver in a 3-D diffusion medium. The approach uses the absorption coordinates of molecules on the receiver's surface as spherical data, clusters them via K-Means, Gaussian mixture model, or Bayesian mixture model, and estimates the direction-of-arrival for each cluster. Distances between the receiver and each transmitter are further estimated from cluster sizes and molecule hitting probabilities over time.
        </p>
      </ModalSection>

      <ModalSection label="Venue">
        <p className="text-slate-400 text-sm">Digital Signal Processing · Volume 124, p. 103185 · Academic Press · May 2022</p>
      </ModalSection>

      <div>
        <a
          href="https://www.sciencedirect.com/science/article/abs/pii/S1051200421002244"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono"
        >
          View on ScienceDirect
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      <ModalSection label="Keywords">
        <TagList tags={["Molecular Communication", "Transmitter Localization", "Diffusion", "Clustering", "Direction-of-Arrival", "3-D"]} />
      </ModalSection>
    </div>
  );
}
