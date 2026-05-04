import loremasterImg from "../../assets/projects/loremaster.png";
import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function LoreMasterModal() {
  return (
    <>
      <div className="w-full h-52 overflow-hidden bg-[#0a1120]">
        <img src={loremasterImg} alt="LoreMaster" className="w-full h-full object-contain object-center" />
      </div>

      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">fun</span>
            <span className="text-xs font-mono text-slate-600">2026</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-100">LoreMaster</h2>
          <p className="text-sm text-slate-500 font-mono mt-1">Multi-Realm Lore Quiz · Solo Developer</p>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4">
          A multi-realm fantasy/sci-fi lore quiz built solo from end to end: UI design and branding, the Android app, the admin panel, the marketing site, the Firebase backend, and the ops around them. One TypeScript monorepo carries the code, glued together by shared packages so types and logic never drift.
        </p>

        <ModalSection label="The App">
          <p className="text-slate-400 text-sm leading-relaxed">
            Players pick from a roster of realms that grows over time. Today the live set spans fantasy and sci-fi favorites such as LOTR, Harry Potter, Game of Thrones, Star Wars, Marvel, Warhammer, and Dune, with more realms added through the admin panel without shipping a new build. The daily flow is simple: pick a realm, answer the day&apos;s short quiz, and your streak ticks up. Wrong answers reveal the correct one immediately, and the auth funnel starts anonymous so no signup gate stands between a curious tap and the first question.
          </p>
        </ModalSection>

        <ModalSection label="The Monorepo">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "apps/mobile", desc: "Expo / React Native, Zustand, React Navigation, i18next" },
              { name: "apps/admin", desc: "Next.js 15 + Tailwind. Question authoring, moderation, ops" },
              { name: "apps/marketing", desc: "Next.js static export. Landing site at playloremaster.com" },
              { name: "functions/", desc: "Firebase Cloud Functions v2. Server-authoritative scoring" },
              { name: "packages/shared", desc: "Types, constants, pure logic. Single source of truth" },
              { name: "packages/email", desc: "Resend (transactional) + Loops (lifecycle) wrappers" },
            ].map(({ name, desc }) => (
              <div key={name} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="font-mono text-xs text-emerald-400/90 mb-1">{name}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4 leading-relaxed">
            npm workspaces tie everything together. Pure logic (XP curves, streak math, display-name rules, achievement detection) lives in <span className="font-mono text-slate-400">@lore-quiz/shared/core</span> and is imported by every app and the cloud functions, so the rules can never disagree across surfaces.
          </p>
        </ModalSection>

        <ModalSection label="Game Mechanics">
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "One short daily quiz per realm, once per day per user. Question count is configured from the admin panel, not hardcoded into the client",
              "Four-option multiple choice across three difficulty tiers: easy, medium, and hard",
              "Global streak and per-realm streaks tracked simultaneously",
              "StreakDuel: async 1v1, locked to a single realm, 30 seconds per question, point-based, race to 100",
              "RealmCrown: async cross-realm 1v1, crowns earned per realm, requires at least three shared realms",
              "Anonymous-first auth, account prompted only after the player is genuinely engaged",
            ]}
          />
        </ModalSection>

        <ModalSection label="Server-Authoritative by Design">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Nothing the client sends about progression is trusted. XP, correct counts, levels, and streaks are re-graded on the server every time. The whole backend is built around a few non-negotiable rules:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Idempotent writes",
                desc: "Every mutation uses a deterministic document ID and a tx.get early-return; replays of the same submission converge to the same state instead of double-crediting.",
              },
              {
                title: "Disciplined transactions",
                desc: "Read-all → compute → write-all. Never tx.get after tx.set. The pattern is enforced across every callable that touches scoring or duel state.",
              },
              {
                title: "Wrapped callables",
                desc: "Every onCall is wrapped in withCallableMonitoring; every scheduled job in withScheduledMonitoring. Failures, latencies, and quota burn are observable per-function.",
              },
              {
                title: "Reads vs writes split",
                desc: "Mobile reads Firestore directly via a thin services layer. Mobile never writes; every write goes through a callable, which keeps validation and re-grading on the server side.",
              },
            ].map(({ title, desc }) => (
              <div key={title}>
                <p className="text-slate-300 text-xs font-medium mb-1">{title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </ModalSection>

        <ModalSection label="Engineering Discipline">
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "Theme via useAppTheme() only, every screen verified in dark and light, no raw hex",
              "Every action goes through a debounced <Button> primitive with a stable testID for E2E",
              "All user-visible text routed through i18next t('key'), no inline strings",
              "Admin /api/* routes start with verifyAdminToken; cron and webhooks return 500 if their secret is missing",
              "No @ts-ignore, no --no-verify, no patchwork. Root-cause fixes only",
              "Mobile binary ships with zero secrets, only EXPO_PUBLIC_FIREBASE_* vars",
            ]}
          />
        </ModalSection>

        <ModalSection label="Deploys & CI">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Every web deploy is path-triggered through GitHub Actions: a docs edit ships nothing, a functions change deploys only the functions.
          </p>
          <div className="space-y-2 mb-4">
            {[
              { label: "Admin", desc: "Vercel on push to main, served at admin.playloremaster.com, a subdomain of the marketing domain bought from Cloudflare." },
              { label: "Marketing", desc: "Cloudflare Pages via wrangler-action Direct Upload, a static Next.js export at playloremaster.com." },
              { label: "Functions", desc: "Firebase, scoped to functions/, shared/, or email/ paths. workflow_dispatch can redeploy specific functions by name." },
              { label: "Mobile", desc: "EAS Build (Expo) on demand, Android target, Play Store bound." },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-3 text-xs">
                <span className="shrink-0 font-mono text-emerald-400/80 w-20 pt-0.5">{label}</span>
                <p className="text-slate-500 leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Verify ladder runs on every push and PR: Prettier, ESLint, typecheck across the six tsconfigs, Jest unit projects (shared, admin, mobile, functions), and Firestore + Auth emulator tests on JDK 21 with cached binaries. Smoke tests against emulators and Maestro E2E on Android run locally before release cuts. Sentry covers mobile, admin, and functions; Resend handles transactional email, Loops drives lifecycle.
          </p>
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["TypeScript", "React Native", "Expo", "Next.js 15", "Tailwind CSS", "Firebase Firestore", "Firebase Auth", "Firebase FCM", "Cloud Functions v2", "Zustand", "React Navigation", "i18next", "Resend", "Loops", "Sentry", "GitHub Actions", "Cloudflare Pages", "Vercel", "EAS Build", "npm workspaces"]} />
        </ModalSection>
      </div>
    </>
  );
}
