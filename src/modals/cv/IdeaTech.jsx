import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function IdeaTechModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">06/2019 – 07/2019 · Istanbul, Turkey</p>
        <h2 className="text-2xl font-bold text-slate-100">NLP / ML Intern</h2>
        <p className="text-cyan-400 font-mono text-sm mt-1">Idea Technology</p>
      </div>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Developed NLP and ML components using Python, Pandas, and statistical modeling",
            "Built classification prototypes and exploratory pipelines to support model evaluation",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["Python", "Pandas", "scikit-learn", "NLP"]} />
      </ModalSection>
    </div>
  );
}
