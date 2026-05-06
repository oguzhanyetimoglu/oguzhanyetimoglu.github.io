import { ModalSection, TagList, BulletList } from "../ModalShell";

const stages = [
  { name: "discover", desc: "Pick pages" },
  { name: "ingest", desc: "Wikitext → SQLite" },
  { name: "generate", desc: "Qwen 235B / Mistral Large / Gemma 27B" },
  { name: "tier 1", desc: "Substring + format" },
  { name: "tier 2", desc: "Llama 3.3 70B + Mistral Small" },
  { name: "tier 3", desc: "Gemini 3 Flash" },
  { name: "dedup", desc: "BGE + ChromaDB" },
  { name: "export", desc: "Pipe-separated .txt" },
];

function PipelineDiagram() {
  return (
    <div className="w-full bg-[#070b14] border-b border-white/5 px-5 py-6">
      <div className="flex flex-col gap-1.5">
        {stages.map((s, i) => (
          <div key={s.name} className="flex items-center gap-3">
            <div className="shrink-0 w-6 text-right">
              <span className="font-mono text-[10px] text-slate-600">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="shrink-0 w-2 h-2 rounded-full bg-cyan-400/70" />
            <div className="flex-1 flex items-baseline gap-2 border-b border-dashed border-white/5 pb-1.5">
              <span className="font-mono text-xs text-cyan-300/90">{s.name}</span>
              <span className="font-mono text-[10px] text-slate-500">{s.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="font-mono text-[10px] text-slate-600 mt-4 text-center tracking-widest uppercase">
        7 realms · sequential · resumable
      </p>
    </div>
  );
}

export default function QuizForgeModal() {
  return (
    <>
      <PipelineDiagram />

      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">fun</span>
            <span className="text-xs font-mono text-slate-600">2026</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-100">quiz-forge</h2>
          <p className="text-sm text-slate-500 font-mono mt-1">Free-Tier RAG Pipeline · Solo Developer</p>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4">
          A free-tier-only RAG pipeline that turns Fandom wiki pages into ~200K validated trivia questions across seven realms. The output feeds the LoreMaster question bank. CLI tool, not a service.
        </p>

        <ModalSection label="The Three Discipline Rules">
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Free tier only",
                desc: "Zero paid models, end to end, even during development. Cerebras, Groq, Mistral, and Google AI Studio cover every stage. If a free-tier provider degrades, the affected stage halts cleanly rather than silently routing to a paid model.",
              },
              {
                n: "2",
                title: "Cross-family validation",
                desc: "Generator and validator never come from the same model family. Different families fail in different ways, which is the only way to dodge the real failure mode here: correlated hallucination.",
              },
              {
                n: "3",
                title: "Source-grounded",
                desc: "Every shipped question carries a source_quote that must be a literal substring of the wiki page it came from. The first validator gate is a deterministic substring check, no LLM involved, no second-guessing.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-center mt-0.5">{n}</span>
                <div>
                  <p className="text-slate-300 text-sm font-medium">{title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ModalSection>

        <ModalSection label="The Pipeline">
          <div className="space-y-3">
            {[
              { label: "discover", desc: "Walk the wiki via list=allpages, filter by category, audit-log every keep/skip decision." },
              { label: "ingest", desc: "Fetch wikitext, parse with mwparserfromhell, cache to SQLite. Resumable per (realm, page_id)." },
              { label: "generate", desc: "Cerebras Qwen 3 235B by default; Mistral Large 2411 for ≥60K-token pages; Gemma 3 27B as fallback. Always 10 questions per call; single-question prompts blow the token budget." },
              { label: "tier 1", desc: "Deterministic gate. source_quote substring match, format & field validation, duplicate check. No LLM call." },
              { label: "tier 2", desc: "Cross-family LLM validator (Groq Llama-4-Scout / Llama 3.3 70B). Mistral Small runs in parallel. Literal-extract bypass when applicable." },
              { label: "tier 3", desc: "Tie-breaker only. Gemini 3 Flash on a ~20 RPD budget, fires only when tier 2 disagrees." },
              { label: "dedup", desc: "BGE-small-en-v1.5 embeddings into ChromaDB. Cosine > 0.92 → reject." },
              { label: "export", desc: "Pipe-separated UTF-8 .txt: realm | type | difficulty | q | correct | w1 | w2 | w3 | explanation." },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-3">
                <span className="shrink-0 font-mono text-xs text-emerald-400/80 w-20 pt-0.5">{label}</span>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </ModalSection>

        <ModalSection label="The Model Lineup">
          <div className="space-y-2">
            {[
              { role: "Generator (primary)", model: "Cerebras Qwen 3 235B", limit: "1M tokens/day" },
              { role: "Generator (large pages)", model: "Mistral Large 2411", limit: "1B tokens/month" },
              { role: "Generator (fallback)", model: "Google Gemma 3 27B", limit: "~14K RPD" },
              { role: "Validator (tier 2)", model: "Groq Llama 3.3 70B", limit: "1000 RPD" },
              { role: "Validator (parallel)", model: "Mistral Small 2603", limit: "unlimited daily" },
              { role: "Tie-breaker (tier 3)", model: "Gemini 3 Flash", limit: "~20 RPD" },
              { role: "Embeddings (dedup)", model: "BGE-small-en-v1.5", limit: "local, unlimited" },
            ].map(({ role, model, limit }) => (
              <div key={role} className="flex items-center gap-3 text-xs border-b border-white/[0.04] pb-2">
                <span className="text-slate-500 w-44 shrink-0">{role}</span>
                <span className="font-mono text-slate-300 flex-1">{model}</span>
                <span className="font-mono text-slate-600 text-[11px]">{limit}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4 leading-relaxed">
            Quota numbers are reference, not invariants; actual limits are read from response headers at runtime so the pipeline adapts when providers change tiers.
          </p>
        </ModalSection>

        <ModalSection label="Why This Is Hard">
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "One Cerebras account = one daily token pool, so realms must run sequentially; parallelizing would race the quota and crash the run",
              "Batched generation is mandatory: 10 questions per call uses ~4.9M tokens per realm; one-question prompts would need ~45M",
              "Resumable at every stage. SQLite is the source of truth, so killing the process and rerunning converges to the same final state",
              "Per-page atomic facts only: no multi-page retrieval, no cross-page relational questions. Full-page context into a 235B model is the design",
              "Fallback hierarchy fires only on real signals (quota exhaustion, 3 consecutive 5xx, 60s+ persistent 429). A single 429 is not a fallback trigger; back off and retry",
            ]}
          />
        </ModalSection>

        <ModalSection label="Honest Limits">
          <p className="text-slate-400 text-sm leading-relaxed">
            Source-grounded does not mean objectively true. Fandom wikis are user-edited, and canon/fanon drift, outdated edition data, and undetected vandalism are residual error sources. Estimated leakage is 2 to 3% of shipped questions, caught downstream by community in-app reports. Time cost is roughly 6 to 8 days per realm on free-tier limits, so the full seven-realm run takes about 7 to 8 weeks end-to-end.
          </p>
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["Python 3.11", "uv", "litellm", "mwparserfromhell", "sentence-transformers", "BGE-small-en-v1.5", "ChromaDB", "Pydantic", "Tenacity", "tiktoken", "SQLite"]} />
        </ModalSection>
      </div>
    </>
  );
}
