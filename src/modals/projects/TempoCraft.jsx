import tempocraftImg from "../../assets/projects/tempocraft.png";
import { ModalSection, TagList, BulletList } from "../ModalShell";

const GitHubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function TempoCraftModal() {
  return (
    <>
      <div className="w-full h-52 overflow-hidden bg-[#0a1120]">
        <img src={tempocraftImg} alt="TempoCraft" className="w-full h-full object-cover object-center" />
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">fun</span>
              <span className="text-xs font-mono text-slate-600">2025</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">TempoCraft</h2>
            <p className="text-sm text-slate-500 font-mono mt-1">Spotify BPM Playlist Creator · Solo Developer</p>
          </div>
          <a
            href="https://github.com/oguzhanyetimoglu/tempo-craft"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-4 py-2 glass rounded-lg text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 transition-all"
          >
            <GitHubIcon />
            <span className="font-mono text-xs">GitHub</span>
          </a>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4">
          A Python CLI tool that connects to your Spotify account, analyzes your top tracks for BPM and genre using a multi-source fallback pipeline, and automatically creates filtered playlists.
        </p>

        <ModalSection label="What It Does">
          <p className="text-slate-400 text-sm leading-relaxed">
            TempoCraft pulls your top tracks from Spotify, figures out the BPM of each one, and builds a new playlist filtered by tempo range and genre — all from the terminal. The idea came from wanting gym playlists at a specific BPM without manually sorting through hundreds of tracks.
          </p>
        </ModalSection>

        <ModalSection label="The Interesting Part — BPM Sourcing">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Getting reliable BPM data turns out to be harder than expected. Spotify's own audio analysis covers most tracks, but has gaps and rate limits. So the tool falls back through three independent sources in sequence:
          </p>
          <div className="space-y-3">
            {[
              { n: "1", label: "Spotify", desc: "The primary source. Fast and reliable for most tracks." },
              { n: "2", label: "AcousticBrainz", desc: "A free academic audio analysis database. The track has to be looked up by artist and title first to get a matching ID, then the tempo is pulled from the analysis result." },
              { n: "3", label: "GetSongBPM", desc: "A last resort when the others fail. The tricky part here is fuzzy matching — track titles on Spotify often include extra suffixes like 'Remastered' or 'Radio Edit' that cause exact lookups to fail, so a similarity scorer is used to find the closest match." },
            ].map(({ n, label, desc }) => (
              <div key={n} className="flex gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-center mt-0.5">{n}</span>
                <div>
                  <span className="text-slate-300 text-xs font-medium">{label}</span>
                  <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4 leading-relaxed">
            Each source fails independently — if one is down or returns nothing, the next one takes over without crashing the whole run. The final result always includes which source the BPM came from.
          </p>
        </ModalSection>

        <ModalSection label="Engineering Highlights">
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "Resilient BPM sourcing — three independent data sources with graceful fallback and per-track attribution",
              "Fuzzy title matching — handles real-world inconsistencies in track naming across different databases",
              "Strict data validation — invalid tracks are rejected early and never enter the analysis pipeline",
              "No backend server required — auth tokens are cached locally using the standard OAuth flow",
              "Two modes — a quick analysis run and a full interactive flow where the user sets BPM range and genre filters",
            ]}
          />
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["Python 3.9+", "Spotipy", "OAuth2 / PKCE", "AcousticBrainz", "GetSongBPM", "pytest", "mypy"]} />
        </ModalSection>
      </div>
    </>
  );
}
