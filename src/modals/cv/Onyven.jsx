import { ModalSection, TagList, BulletList } from "../ModalShell";
import onyvenWordmark from "../../assets/onyven-wordmark.svg";

export default function OnyvenModal() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-mono text-slate-600 mb-1">06/2026 – Present · Munich, Germany</p>
        <h2 className="text-2xl font-bold text-slate-100">Founding Engineer</h2>
        <a
          href="https://onyven.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ONYVEN"
          className="inline-block mt-2 opacity-90 hover:opacity-100 transition-opacity"
        >
          <img src={onyvenWordmark} alt="ONYVEN" width="180" className="h-auto" />
        </a>
        <p className="text-xs text-slate-500 mt-1">AI agents for supply chain operations · TUM ecosystem</p>
      </div>

      <ModalSection label="Context">
        <div className="space-y-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            ONYVEN builds AI agents that help companies run their supply chains. The work that keeps a supply chain moving is spread across ERP systems, email, PDFs, Excel sheets, and the people in between. ONYVEN's agents connect those systems, detect what needs attention, route decisions to the right person, and execute approved actions. Customers are supply chain and operations teams in manufacturing, logistics, automotive, wholesale, and life sciences.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Founding engineer here covers engineering, product, go-to-market, and sales at once. I lead the product. Strategy and sales are worked out with the founder in a running conversation rather than handed down. There is no hand-off between the person who talks to the customer and the person who builds the thing. On most days that is the same person, and I like it that way.
          </p>
        </div>
      </ModalSection>

      <ModalSection label="Engineering">
        <BulletList
          items={[
            "Design and build AI agents that run supply chain workflows end to end: ingest from ERP, email, PDFs, and Excel, detect events, route decisions, and execute approved actions",
            "Integration work against customer systems, and the plumbing that keeps agents reliable and auditable in production",
            "Prototype quickly with real customer data, then harden what works into product",
          ]}
        />
      </ModalSection>

      <ModalSection label="Product">
        <BulletList
          items={[
            "Run customer discovery sessions with operations teams and map their workflows step by step",
            "Turn what we learn into requirements, prototypes, and the roadmap, and lead what gets built next",
            "Support customer implementations, and feed the patterns that show up across customers back into the product",
          ]}
        />
      </ModalSection>

      <ModalSection label="Go-to-Market & Sales">
        <BulletList
          items={[
            "Work out the go-to-market and sales strategy with the founder: which segments we go after, how we position, and how we enter accounts",
            "Execute it end to end with enterprise accounts, from first conversation through discovery to close",
            "Feed what the market says back into positioning, targeting, and the product",
          ]}
        />
      </ModalSection>

      <ModalSection label="Stack">
        <TagList tags={["Python", "TypeScript", "LLMs", "AI Agents", "RAG", "APIs & Integrations", "SQL", "ERP / Email / PDF / Excel Ingestion", "Customer Discovery", "GTM Strategy", "Enterprise Sales"]} />
      </ModalSection>
    </div>
  );
}
