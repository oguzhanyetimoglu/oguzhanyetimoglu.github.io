import watchfaceImg from "../../assets/projects/watchface.png";
import { ModalSection, TagList, BulletList } from "../ModalShell";

const GitHubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function InstinctDarkInfoModal() {
  return (
    <>
      <div className="w-full h-52 overflow-hidden bg-[#0a1120]">
        <img src={watchfaceImg} alt="Instinct Dark Info Watch Face" className="w-full h-full object-contain object-center" />
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">fun</span>
              <span className="text-xs font-mono text-slate-600">2026</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">Instinct Dark Info</h2>
            <p className="text-sm text-slate-500 font-mono mt-1">Garmin Watch Face · Monkey C · Solo Developer</p>
          </div>
          <a
            href="https://github.com/oguzhanyetimoglu/Instinct2WatchFace"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-4 py-2 glass rounded-lg text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 transition-all"
          >
            <GitHubIcon />
            <span className="font-mono text-xs">GitHub</span>
          </a>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4">
          A custom watch face for the Garmin Instinct 2, built entirely from scratch in Monkey C using the Garmin Connect IQ SDK. Published on the Garmin Connect IQ Store.
        </p>

        <ModalSection label="Features">
          <BulletList
            color="bg-emerald-400/60"
            items={[
              "Real-time heart rate, step count, and stress level ring",
              "Live weather data: condition, temperature, humidity, daily low/high",
              "GPS-based dynamic sunrise and sunset times",
              "24-hour day/night timeline bar with current time marker",
              "Bluetooth connection and unread notification indicators",
              "Per-second clock update via onPartialUpdate for battery efficiency",
              "Fully monochrome design optimized for MIP (Memory-in-Pixel) display",
            ]}
          />
        </ModalSection>

        <ModalSection label="Technical Highlights">
          <div className="space-y-4">
            {[
              {
                title: "Battery-efficient rendering",
                desc: "Implemented partial screen update (onPartialUpdate) to refresh the seconds display every second without triggering a full screen redraw — the standard approach on Garmin devices to preserve battery life.",
              },
              {
                title: "Pixel-perfect text layout",
                desc: "Runtime text centering using dc.getTextDimensions() to group HH:MM and seconds as a visually unified clock, without relying on a layout system.",
              },
              {
                title: "Custom icon pipeline",
                desc: "Automated black-to-white pixel conversion via Python and Pillow to prepare PNG icons for the monochrome MIP display — no manual editing per asset.",
              },
              {
                title: "Programmatic timeline bar",
                desc: "The 24-hour bar renders dynamically: a checkerboard pattern for night segments, solid fill for daytime, with the current time marker positioned based on real sunrise/sunset times from GPS.",
              },
            ].map(({ title, desc }) => (
              <div key={title}>
                <p className="text-slate-300 text-xs font-medium mb-1">{title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["Monkey C", "Garmin Connect IQ SDK 8.2.1", "Toybox API", "Python", "Pillow"]} />
        </ModalSection>
      </div>
    </>
  );
}
