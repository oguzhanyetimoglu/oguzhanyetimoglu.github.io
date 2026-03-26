import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function VeriParkModal() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">07/2018 – 09/2018 · Istanbul, Turkey</p>
        <h2 className="text-2xl font-bold text-slate-100">Database Engineering Intern</h2>
        <p className="text-cyan-400 font-mono text-sm mt-1">VeriPark</p>
      </div>

      <ModalSection label="What I Did">
        <BulletList
          items={[
            "Developed and optimized SQL modules for CRM-oriented backend systems",
            "Improved data consistency and internal tooling workflows",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["SQL", "CRM Systems", "Database Design"]} />
      </ModalSection>
    </div>
  );
}
