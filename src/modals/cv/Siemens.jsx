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
            My thesis work was directly integrated here. I built an LLM-based anomaly detection module that embeds network flow features and flags suspicious patterns, complementing the existing rule-based detection pipeline.
          </p>
        </div>
      </ModalSection>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Modernized a cloud-based security analytics platform using Java, Docker, Azure, and Apache NiFi, improving stability and dataflow reliability across ingestion and monitoring workloads",
            "Built an LLM-powered network intrusion detection module (Python, embeddings, anomaly detection) that strengthened detection quality in distributed data pipelines",
            "Optimized containerized microservices to reduce resource consumption and improve runtime efficiency in Azure-based environments",
            "Improved microservice build consistency by restructuring Dockerfile stages and ensuring reproducible container environments",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["Java", "Python", "Docker", "Azure", "Apache NiFi", "LLMs", "Embeddings", "Vector Search"]} />
      </ModalSection>
    </div>
  );
}
