import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function NETLABModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">02/2020 – 12/2021 · Istanbul, Turkey</p>
        <h2 className="text-2xl font-bold text-slate-100">Research Assistant / Software Engineer</h2>
        <p className="text-cyan-400 font-mono text-sm mt-1">NETLAB, Boğaziçi University</p>
        <p className="text-xs text-slate-500 mt-1">Molecular Communications Research Lab · TÜBİTAK (The Scientific and Technological Research Council of Turkey)-funded</p>
      </div>

      <ModalSection label="Context">
        <div className="space-y-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            Worked across two research labs on TÜBİTAK-funded projects in molecular communication, a field studying how nanoscale devices can communicate using molecules rather than radio waves. Applications range from targeted drug delivery to bio-cyber interfaces.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            I built the simulation and hardware testbed infrastructure that supported the labs' experiments. This work directly led to the Nanosim library and contributed to four published papers.
          </p>
          <div className="flex flex-col gap-2 pt-1">
            <a href="https://nrg.cmpe.bogazici.edu.tr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono">
              Nanonetworking Research Group (NRG)
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <a href="https://sites.google.com/view/netlabcmpe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono">
              Computer Network Laboratory (NETLAB)
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </ModalSection>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Implemented simulation algorithms and C++/Python testbeds for molecular communication research, improving experiment reproducibility",
            "Built the Nanosim GPU-accelerated simulation library using CUDA, achieving 100x+ speedup over CPU baseline",
            "Built embedded integrations with Raspberry Pi and Arduino for hardware-based data acquisition pipelines",
            "Contributed to 4 international publications (conference and journal)",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["Python", "C++", "CUDA", "Raspberry Pi", "Arduino", "NumPy", "Signal Processing"]} />
      </ModalSection>
    </div>
  );
}
