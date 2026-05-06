import beatifyImg from "../../assets/projects/beatify.png";
import home from "../../assets/projects/beatify/01_home.jpeg";
import statsArtists from "../../assets/projects/beatify/02_stats_artists.jpeg";
import statsTracks from "../../assets/projects/beatify/03_stats_tracks.jpeg";
import discover from "../../assets/projects/beatify/04_discover.jpeg";
import genreDrift from "../../assets/projects/beatify/05_genre_drift.jpeg";
import search from "../../assets/projects/beatify/06_search.jpeg";
import trackDetail from "../../assets/projects/beatify/07_track_detail.jpeg";
import dms from "../../assets/projects/beatify/08_dms.jpeg";
import shareArchetype from "../../assets/projects/beatify/09_share_archetype.jpeg";
import shareEra from "../../assets/projects/beatify/10_share_era.jpeg";
import shareObscurity from "../../assets/projects/beatify/11_share_obscurity.jpeg";
import shareGenre from "../../assets/projects/beatify/12_share_genre.jpeg";
import { ModalSection, TagList, BulletList } from "../ModalShell";
import ScreenGallery from "../ScreenGallery";

const GitHubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function BeatifyModal() {
  return (
    <>
      <div className="w-full h-52 overflow-hidden bg-black">
        <img src={beatifyImg} alt="Beatify" className="w-full h-full object-contain object-center" />
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">fun</span>
              <span className="text-xs font-mono text-slate-600">2026</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">Beatify</h2>
            <p className="text-sm text-slate-500 font-mono mt-1">Your music, decoded · Solo Developer</p>
          </div>
          <a
            href="https://github.com/oguzhanyetimoglu/beatify"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-4 py-2 glass rounded-lg text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 transition-all"
          >
            <GitHubIcon />
            <span className="font-mono text-xs">GitHub</span>
          </a>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4">
          A React Native mobile app that turns your Spotify listening history into deep analytics, a music personality profile, and shareable cards. Spotify is the identity provider; Supabase is the backend; everything else is wired together end to end.
        </p>

        <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
          <p className="text-xs font-mono text-amber-400/90 uppercase tracking-wider mb-2">Why this is a private app</p>
          <p className="text-slate-400 text-xs leading-relaxed">
            Spotify&apos;s Web API is practically closed to indie developers. New apps stay capped in development mode (25 hand-allowlisted users), and the extended-access review process is, in practice, gated to commercial products with significant traction. So Beatify is intentionally a personal project, built for fun, for me and a small circle of friends, with no plan to ship publicly.
          </p>
        </div>

        <ModalSection label="What It Does">
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "Music Archetype: assigns one of 14 personalities (The Explorer, The Loyalist, The Night Owl, and more) from genre diversity, obscurity, mood, and era spread",
              "Stats: top artists and tracks across three time ranges; mood profile, listening clock, era breakdown, genre drift, and an obscurity score",
              "Discover: playlist analyzer scores any playlist by mood, diversity, and era; hidden gems surfaced from your library",
              "Social: follow friends, view public profiles, compare taste similarity (Jaccard-based compatibility), and DM each other with music sharing cards",
              "Shareable cards: archetype, genre DNA, compatibility, and more, captured as PNGs through the native share sheet",
              "Daily listening streak tracked in the cloud",
            ]}
          />
        </ModalSection>

        <ModalSection label="Screens">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            A tour through the app, tab by tab: a daily snapshot, deeper stats, discovery analytics, search, track audio features, and in-app DMs.
          </p>
          <ScreenGallery
            gridClass="grid grid-cols-2 sm:grid-cols-4 gap-3"
            figureClass="bg-black/40"
            items={[
              { src: home, label: "Home" },
              { src: statsArtists, label: "Stats: Artists" },
              { src: statsTracks, label: "Stats: Tracks" },
              { src: discover, label: "Discover" },
              { src: genreDrift, label: "Genre Drift" },
              { src: search, label: "Search" },
              { src: trackDetail, label: "Track Detail" },
              { src: dms, label: "DMs" },
            ]}
          />

          <p className="text-slate-500 text-xs mt-6 mb-3 leading-relaxed">
            Every card category renders with its own theme tokens, captured as PNG via <span className="font-mono text-slate-400">react-native-view-shot</span> and routed through the native share sheet.
          </p>
          <ScreenGallery
            gridClass="grid grid-cols-2 sm:grid-cols-4 gap-3"
            figureClass="bg-black/40"
            items={[
              { src: shareArchetype, label: "Archetype" },
              { src: shareEra, label: "Era" },
              { src: shareObscurity, label: "Obscurity" },
              { src: shareGenre, label: "Genre DNA" },
            ]}
          />
        </ModalSection>

        <ModalSection label="Auth Architecture">
          <p className="text-slate-400 text-sm leading-relaxed">
            The app does not use Supabase Auth natively. Spotify PKCE OAuth runs first, then a <span className="font-mono text-slate-300">spotify-auth</span> Edge Function verifies the Spotify token, creates a matching Supabase auth user with the same UUID as the app&apos;s own <span className="font-mono text-slate-300">users.id</span>, and issues a real Supabase session. The client then calls <span className="font-mono text-slate-300">supabase.auth.setSession()</span>, so <span className="font-mono text-slate-300">auth.uid()</span> works in every RLS policy while Spotify stays the single identity provider.
          </p>
        </ModalSection>

        <ModalSection label="Archetype Engine">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            One source of truth, one place to break it. The <span className="font-mono text-slate-300">useArchetype</span> hook merges Spotify data with GetSongKey audio features, runs <span className="font-mono text-slate-300">calculateArchetype()</span>, and writes the result to Zustand. Every screen reads from the store, never from a local recompute.
          </p>
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "14 archetypes scored 0 to 100, only displayed when score ≥ 35 so weak signals do not pin a personality",
              "featuresReady guard prevents premature calculation in the gap between Spotify data arriving and GetSongKey returning",
              "GetSongKey calls are title-only (artist field hurts hit rate), batched in groups of 5, and degrade gracefully when the provider is unavailable",
              "Spotify endpoints that Spotify removed (/audio-features, batched /artists) are routed through fallbacks instead of throwing in production",
            ]}
          />
        </ModalSection>

        <ModalSection label="Social, Realtime, Notifications">
          <div className="space-y-3">
            {[
              { label: "Follow", desc: "followUser, unfollowUser, isFollowing, follower and following lists, all RLS-scoped to auth.uid()." },
              { label: "DMs", desc: "Canonical UUID-ordered conversation IDs; sendMessage bumps last_message_at and triggers a notification in the same call." },
              { label: "Realtime", desc: "ChatScreen subscribes to Supabase postgres_changes for live messages, with optimistic send and rollback on failure." },
              { label: "Push", desc: "Expo push tokens stored in push_tokens; send-notification Edge Function inserts the in-app row and calls the Expo Push API in one shot." },
              { label: "Sharing", desc: "react-native-view-shot captures any card as PNG, uploads to a public shared-cards Storage bucket, then opens the native share sheet." },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-3 text-xs">
                <span className="shrink-0 font-mono text-emerald-400/80 w-20 pt-0.5">{label}</span>
                <p className="text-slate-500 leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </ModalSection>

        <ModalSection label="Engineering Discipline">
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "TypeScript everywhere; any is avoided and Spotify responses are normalized at the API boundary so screens never touch raw payloads",
              "All theming through src/constants/theme.ts; Ionicons only, no emojis in the UI",
              "Every new table ships with RLS enabled and policies keyed on auth.uid()::text",
              "Logging routed through a createLogger() wrapper that safely serializes Supabase error objects, never raw console.* in API or auth files",
              "Jest unit tests colocated with every utility (archetype, mood, era, genre, obscurity, taste similarity, streaks, playlist analyzer)",
              "i18next with English, Turkish, Spanish, and German; device language detected and persisted via AsyncStorage",
            ]}
          />
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["React Native", "Expo SDK 54", "TypeScript", "Zustand", "Supabase Postgres", "Supabase Realtime", "Supabase Storage", "Edge Functions", "Spotify Web API", "Spotify PKCE OAuth", "GetSongKey API", "Expo Push Notifications", "react-native-view-shot", "i18next", "Ionicons", "Jest"]} />
        </ModalSection>
      </div>
    </>
  );
}
