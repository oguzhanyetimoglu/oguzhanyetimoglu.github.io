import elysioImg from "../../assets/projects/elysio.png";
import { ModalSection, TagList, BulletList } from "../ModalShell";

export default function ElysioModal() {
  return (
    <>
      <div className="w-full h-52 overflow-hidden bg-[#0a1120]">
        <img src={elysioImg} alt="Elysio.ai" className="w-full h-full object-cover object-center" />
      </div>

      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded border text-cyan-400 bg-cyan-500/10 border-cyan-500/20">work</span>
            <span className="text-xs font-mono text-slate-600">2023</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-100">Elysio.ai</h2>
          <p className="text-sm text-slate-500 font-mono mt-1">AI Fashion Platform · Lead Engineer</p>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-cyan-500/30 pl-4">
          A platform that lets fashion brands produce photo-realistic campaign imagery without a physical shoot — by building AI replicas of real models and dressing them in any garment, on demand.
        </p>

        <ModalSection label="The Idea">
          <p className="text-slate-400 text-sm leading-relaxed">
            The workflow was straightforward: a model or influencer uploads a set of their photos, and the platform builds a personalized AI replica of them. A fashion brand can then provide a garment image, describe a scene or mood in a prompt, and get back a photo-realistic image of that person wearing that piece — in whatever setting, lighting, or pose they want. Further refinements — background, color grading, posture — could be applied through follow-up prompts.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mt-3">
            The goal was to connect brands and talent through AI: brands get campaign-quality visuals without organizing a shoot, and models get a new passive revenue stream from their digital likeness.
          </p>
        </ModalSection>

        <ModalSection label="My Role">
          <p className="text-slate-400 text-sm leading-relaxed">
            I was responsible for the technology end-to-end — the full-stack web application, the AI pipeline, and the infrastructure. The team around me shifted over time, with others occasionally contributing on the technical side, but the architecture and implementation were mine throughout. The co-founders handled the business and product direction.
          </p>
        </ModalSection>

        <ModalSection label="How It Was Built">
          <BulletList
            color="bg-cyan-400/60"
            items={[
              "Users upload reference photos through a React frontend; the backend processes them and triggers fine-tuning jobs to create a personalized model",
              "AI inference ran through Replicate, which handled the heavy compute — diffusion model runs, image generation, and iterative refinement",
              "The backend API, user management, and job orchestration were built with FastAPI and deployed on AWS",
              "Each generation pass — initial outfit placement, scene setting, prompt-guided adjustments — was a separate API call with results streamed back to the UI",
            ]}
          />
        </ModalSection>

        <ModalSection label="What Happened">
          <p className="text-slate-400 text-sm leading-relaxed">
            The platform never launched publicly. The co-founders decided to step back before we reached users, and the project was shelved. The technology worked — the pipeline produced solid results in testing — but it didn't make it past the startup side of things.
          </p>
        </ModalSection>

        <ModalSection label="Tech Stack">
          <TagList tags={["React", "FastAPI", "AWS", "Replicate", "Diffusion Models", "Material UI", "Python"]} />
        </ModalSection>
      </div>
    </>
  );
}
