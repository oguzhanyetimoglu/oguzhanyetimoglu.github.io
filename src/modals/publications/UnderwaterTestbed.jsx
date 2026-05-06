import { ModalSection, TagList } from "../ModalShell";
import PublicationMedia from "../PublicationMedia";

export default function UnderwaterTestbedModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded border text-cyan-400 bg-cyan-500/10 border-cyan-500/20">conf.</span>
          <span className="text-xs font-mono text-slate-600">2021 · SIU</span>
        </div>
        <h2 className="text-xl font-bold text-slate-100 leading-snug">
          Underwater Testbed for Molecular Communication
        </h2>
        <p className="text-cyan-400 font-mono text-sm mt-2">SIU 2021</p>
      </div>

      <ModalSection label="Authors">
        <p className="text-slate-400 text-sm">Oğuzhan Yetimoğlu, Abdurrahman Dilmaç, Zeliha Cansu Canbek, H. Birkan Yilmaz</p>
      </ModalSection>

      <ModalSection label="Abstract">
        <p className="text-slate-400 text-sm leading-relaxed">
          Conventional underwater communication paradigms — electromagnetic, optic, and sonar — face reliability issues and limited range due to propagation loss. Molecular communication is proposed as an alternative. This paper introduces a water channel testbed for molecular communications, consisting of a water channel, water tanks, a circulation pump, information molecules, a molecule emitter, molecule filters, a laser, high-resolution programmable cameras, chemical sensors, and a synchronization unit coordinating the camera, laser, and computer.
        </p>
      </ModalSection>

      <ModalSection label="Testbed">
        <PublicationMedia
          items={[
            {
              type: "video",
              src: "/publications/underwater_testbed.mp4",
              label: "Experiment in operation",
              span: "full",
            },
            {
              type: "image",
              src: "/publications/underwater_testbed.jpeg",
              label: "Dye plume under laser sheet",
              alt: "Dye plume illuminated by laser sheet inside the water channel",
            },
            {
              type: "image",
              src: "/publications/underwater_testbed_2.jpeg",
              label: "Lab setup overview",
              alt: "Full lab setup with channel, camera, and acquisition monitor",
            },
          ]}
        />
      </ModalSection>

      <ModalSection label="Venue">
        <p className="text-slate-400 text-sm">2021 29th Signal Processing and Communications Applications Conference (SIU) · IEEE · pp. 1–4 · June 9, 2021</p>
      </ModalSection>

      <div>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/9477896"
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
        <TagList tags={["Molecular Communication", "Underwater", "Testbed", "Water Channel", "IEEE"]} />
      </ModalSection>
    </div>
  );
}
