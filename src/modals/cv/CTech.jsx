import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function CTechModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">01/2019 – 02/2019 · Istanbul, Turkey</p>
        <h2 className="text-2xl font-bold text-slate-100">Cybersecurity ML Intern</h2>
        <p className="text-cyan-400 font-mono text-sm mt-1">CTech Information Technologies</p>
      </div>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Implemented deep learning-based attack classification models for cybersecurity datasets",
            "Improved preprocessing pipelines for network traffic feature extraction",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["Python", "Deep Learning", "scikit-learn", "Network Security"]} />
      </ModalSection>
    </div>
  );
}
