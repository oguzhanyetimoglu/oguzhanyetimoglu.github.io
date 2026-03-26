import { ModalSection, TagList } from "../ModalShell";

export default function MockCirculatoryModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded border text-cyan-400 bg-cyan-500/10 border-cyan-500/20">conf.</span>
          <span className="text-xs font-mono text-slate-600">2021 · SIU</span>
        </div>
        <h2 className="text-xl font-bold text-slate-100 leading-snug">
          A Mock Circulatory Network Testbed for Molecular Communications
        </h2>
        <p className="text-cyan-400 font-mono text-sm mt-2">SIU 2021</p>
      </div>

      <ModalSection label="Authors">
        <p className="text-slate-400 text-sm">Barış Büyüktaş, Oğuzhan Yetimoğlu, Abdurrahman Dilmaç, Zeliha Cansu Canbek, H. Birkan Yilmaz</p>
      </ModalSection>

      <ModalSection label="Abstract">
        <p className="text-slate-400 text-sm leading-relaxed">
          Molecular communication is applied to advance the capabilities of healthcare and medical systems — for cancer cell localization, in-body synchronization, and anomaly detection. This paper introduces a mock circulatory network testbed for molecular communication, designed to realistically model human circulatory hemodynamics. The testbed consists of a pulsatile pump mimicking the heart, 3D-printed pulmonary arteries, a silicone vessel network, non-invasive pressure sensors, valves, information molecules, chemical sensors, and a data acquisition center.
        </p>
      </ModalSection>

      <ModalSection label="Testbed">
        <div className="space-y-3">
          <img
            src="/publications/mcn_mold_testbed.jpeg"
            alt="Mock circulatory network mold and testbed structure"
            className="w-full rounded-lg border border-white/10 object-cover"
          />
          <video
            src="/publications/mcn_testbed_sensor_setup.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg border border-white/10 object-cover"
          />
          <p className="text-xs font-mono text-slate-600">Mock circulatory network — mold structure and sensor setup in operation</p>
        </div>
      </ModalSection>

      <ModalSection label="Venue">
        <p className="text-slate-400 text-sm">2021 29th Signal Processing and Communications Applications Conference (SIU) · IEEE · pp. 1–4 · June 9, 2021</p>
      </ModalSection>

      <div>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/9478034"
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
        <TagList tags={["Molecular Communication", "Circulatory Network", "Testbed", "Hemodynamics", "IEEE"]} />
      </ModalSection>
    </div>
  );
}
