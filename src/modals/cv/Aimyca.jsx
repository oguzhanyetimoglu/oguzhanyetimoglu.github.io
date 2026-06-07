import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function AimycaModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">03/2022 – 03/2023 · Munich, Germany</p>
        <h2 className="text-2xl font-bold text-slate-100">Software Engineer</h2>
        <p className="text-cyan-400 font-mono text-sm mt-1">Aimyca GmbH</p>
        <p className="text-xs text-slate-500 mt-1">Early-stage B2B SaaS startup · ~10 people</p>
      </div>

      <ModalSection label="Context">
        <div className="space-y-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            Aimyca was an early-stage SaaS startup building conversational AI tools to support companies through change and transformation processes. The team was small (around four or five engineers) and everyone wore every hat: fullstack development, DevOps, LLM operations, data science. There were no strict boundaries.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Working closely with the founding team on product decisions gave me exposure to both technical and business trade-offs in a fast-paced environment with short feedback loops.
          </p>
        </div>
      </ModalSection>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Delivered full-stack features using Python, Node.js, React, Vue, TypeScript, and REST APIs in an agile SaaS environment",
            "Built user-centric interfaces with clean component architectures and optimized interaction flows",
            "Set up CI/CD with Bitbucket Pipelines and Jira on GCP to stabilize deployments",
            "Improved conversational AI features through prompt engineering and refined extraction logic against LLM APIs",
            "Worked closely with the founding team on technical discussions and product decisions in a ~10 person startup",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["React", "Vue", "TypeScript", "Node.js", "Python", "Bitbucket Pipelines", "GCP", "LLMs", "REST API"]} />
      </ModalSection>
    </div>
  );
}
