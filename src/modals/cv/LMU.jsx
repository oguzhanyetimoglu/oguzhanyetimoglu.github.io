import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function LMUModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">10/2023 – 06/2024 · Munich, Germany</p>
        <h2 className="text-2xl font-bold text-slate-100">Graduate Research Assistant</h2>
        <p className="text-cyan-400 font-mono text-sm mt-1">Ludwig Maximilian University (LMU)</p>
        <p className="text-xs text-slate-500 mt-1">Neuroimaging Research Group</p>
      </div>

      <ModalSection label="Context">
        <div className="space-y-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            Joined a neuroimaging research group to assist with large-scale brain MRI data analysis. The goal was to build ML classifiers that could distinguish disease subtypes from structural brain scan features extracted from thousands of patient scans.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            I primarily worked on the data pipeline: ingesting raw MRI volumes, running preprocessing (skull stripping, normalization, feature extraction), and scheduling batch jobs on the university's HPC cluster with SLURM.
          </p>
        </div>
      </ModalSection>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Processed large-scale brain MRI neuroimaging datasets using ML and statistical modeling to classify disease presence and subtype patterns",
            "Parallelized preprocessing and processing pipelines on HPC clusters, significantly accelerating feature extraction and model execution",
            "Automated ETL steps, standardized feature extraction, and optimized job scheduling for improved research workflow reliability",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy", "SLURM", "HPC"]} />
      </ModalSection>
    </div>
  );
}
