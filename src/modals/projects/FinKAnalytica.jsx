import finkImg from "../../assets/projects/fink.png";
import { ModalSection, TagList, BulletList } from "../ModalShell";

const GitHubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function FinKAnalyticaModal() {
  return (
    <>
      <div className="w-full h-52 overflow-hidden bg-[#0a1120]">
        <img src={finkImg} alt="FinK Analytica" className="w-full h-full object-cover object-center" />
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded border text-amber-400 bg-amber-500/10 border-amber-500/20">school</span>
              <span className="text-xs font-mono text-slate-600">2024</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">FinK Analytica</h2>
            <p className="text-sm text-slate-500 font-mono mt-1">Full-Stack NLP Platform · TU Munich</p>
          </div>
          <a
            href="https://github.com/oguzhanyetimoglu/algorithmic-textual-comparison-app"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-4 py-2 glass rounded-lg text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 transition-all"
          >
            <GitHubIcon />
            <span className="font-mono text-xs">GitHub</span>
          </a>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-amber-500/30 pl-4">
          A containerized web application that lets analysts search and cluster thousands of SEC 10-K filings using multiple NLP techniques — built as a team project at TU Munich.
        </p>

        <ModalSection label="What It Does">
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            The platform ingests SEC 10-K annual report filings and lets users explore them in two main ways: semantic search — find filings most similar to a text query — and clustering — group documents by content and visualize them as an interactive scatter plot. There's also a full database management interface and admin user controls.
          </p>
        </ModalSection>

        <ModalSection label="How It Works">
          <div className="space-y-4">
            <div>
              <p className="text-slate-300 text-xs font-mono uppercase tracking-wider mb-1">Three Ways to Understand Text</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Users can choose between three embedding strategies depending on the speed vs. accuracy tradeoff they need:
              </p>
              <div className="space-y-2">
                {[
                  { label: "TF-IDF", desc: "Keyword frequency — fast and lightweight, good for straightforward lexical similarity." },
                  { label: "Word2Vec", desc: "Trained on the filing corpus at query time — captures word relationships and works better across paraphrased content." },
                  { label: "BERT", desc: "Deep contextual embeddings — the most semantically rich option, but significantly slower. Can use GPU acceleration." },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex gap-3">
                    <span className="shrink-0 font-mono text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded h-fit mt-0.5">{label}</span>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-slate-300 text-xs font-mono uppercase tracking-wider mb-1">Clustering & Visualization</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                For clustering, filings are embedded, then compressed into two dimensions using PCA or t-SNE, then grouped using K-Means or Agglomerative Clustering. The result is an interactive scatter plot where each dot is a company, colored by cluster. Optional text preprocessing — stopword removal, stemming, lemmatization — can be toggled per request.
              </p>
            </div>

            <div>
              <p className="text-slate-300 text-xs font-mono uppercase tracking-wider mb-1">API Design</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                SEC filings contain a lot of text — up to 15 numbered item fields per document. The API is designed so that list views never load the full text content unless explicitly asked, keeping responses fast. Dashboard stats are loaded in parallel with separate aggregate endpoints rather than computing them client-side.
              </p>
            </div>
          </div>
        </ModalSection>

        <ModalSection label="Engineering Highlights">
          <BulletList
            color="bg-amber-400/60"
            items={[
              "Three embedding strategies interchangeable at runtime — users pick the speed/accuracy tradeoff per query",
              "API designed to avoid loading heavy text fields by default, keeping list responses lean",
              "All ML parameters — embedding, clustering, dimensionality reduction, preprocessing — are independent and composable in a single request",
              "10,000 real SEC filings bundled as a fixture — the platform is demo-ready immediately after startup",
              "Started as a standalone NLP research module, then integrated into the production backend — clear prototype-to-production path",
            ]}
          />
        </ModalSection>

        <ModalSection label="Team">
          <p className="text-slate-400 text-sm">
            Abdurrahman Dilmac, Berkay Kozan, Oğuzhan Yetimoğlu — equal contributions, developed at TU Munich.
          </p>
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["Nuxt.js 3", "Vue 3", "TypeScript", "Django", "PostgreSQL", "scikit-learn", "Gensim", "sentence-transformers", "NLTK", "JWT", "Docker", "Gunicorn"]} />
        </ModalSection>
      </div>
    </>
  );
}
