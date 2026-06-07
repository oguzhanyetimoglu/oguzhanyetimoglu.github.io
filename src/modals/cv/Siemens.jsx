import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function SiemensModal() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">06/2024 – 09/2025 · Munich, Germany</p>
        <h2 className="text-2xl font-bold text-slate-100">Software Engineer</h2>
        <p className="text-cyan-400 font-mono text-sm mt-1">Siemens</p>
        <p className="text-xs text-slate-500 mt-1">Cybersecurity & Trust</p>
      </div>

      <ModalSection label="Context">
        <div className="space-y-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            Worked on an internal cloud platform that ingests, processes, and monitors security telemetry at scale across Siemens infrastructure. The platform is used by security operations to detect network anomalies and correlate events across distributed systems.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            My thesis work was directly integrated here. I built an LLM-based network intrusion detection module that complements the existing rule-based detection pipeline.
          </p>
        </div>
      </ModalSection>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Reworked Apache NiFi internals on a Java microservices security analytics platform, clearing pipeline bottlenecks and fixing inter-service communication issues that were limiting stability",
            "Built an LLM-based network intrusion detection module in Python as my master's thesis, applied to the platform's ingested traffic data",
            "Made the NiFi data pipeline configurable via JSON so non-engineering teammates could compose pipelines without touching Java",
            "Cut Docker image size and build time by restructuring base images, dependency layers, and build scripts for reproducible container builds on Azure (AKS)",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["Java", "Python", "Docker", "Azure (AKS)", "Apache NiFi", "GitLab CI", "LLMs"]} />
      </ModalSection>
    </div>
  );
}
