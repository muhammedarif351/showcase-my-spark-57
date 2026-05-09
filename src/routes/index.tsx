import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";
import rain from "@/assets/photo-rain.jpg";
import red from "@/assets/photo-red.jpg";
import bike from "@/assets/photo-bike.jpg";
import mist from "@/assets/photo-mist.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Arif — Cinematic Visual Storyteller" },
      { name: "description", content: "Photographer, videographer & creative producer building visual stories from concept to final cut. Based between Kerala and Saudi Arabia." },
      { property: "og:title", content: "Muhammed Arif — Cinematic Visual Storyteller" },
      { property: "og:description", content: "Photography, video, direction. Cinematic work from Kerala & KSA." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: Index,
});

const MARQUEE = ["Photography", "Videography", "Direction", "Editing", "Concept", "Branding", "Short Films", "Reels"];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden grain">
        <div className="absolute inset-0">
          <img
            src={portrait}
            alt="Muhammed Arif looking up toward a hand of light"
            width={1080}
            height={1920}
            className="h-full w-full object-cover object-right slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 md:via-background/70 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-40 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                Est. 2015 · India / KSA
              </span>
            </div>
            <h1 className="font-display text-[15vw] md:text-[9rem] leading-[0.92] tracking-tight reveal">
              Stories told<br />
              in <em className="gold-text not-italic">light</em><br />
              & motion.
            </h1>
            <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed reveal">
              I'm <span className="text-foreground">Muhammed Arif</span> — a creative media producer,
              photographer and videographer. I build cinematic stories from raw concept to final cut,
              with a decade of technical craft behind every frame.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 reveal">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-gold-soft transition"
              >
                View Work
                <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition"
              >
                Commission a Project
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-end gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
            <span className="h-16 w-px bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-background overflow-hidden py-8">
        <div className="marquee whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="font-display text-5xl md:text-7xl px-8 text-muted-foreground/60">
              {w} <span className="text-gold mx-4">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">— Selected work</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">A reel of moments.</h2>
          </div>
          <Link to="/work" className="font-mono text-xs uppercase tracking-[0.25em] hover:text-gold transition">
            All projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <FeatureCard className="md:col-span-7 md:row-span-2 aspect-[4/5]" img={red} kind="Portrait" title="Lady in Red" year="2024" />
          <FeatureCard className="md:col-span-5 aspect-[5/4]" img={rain} kind="Street" title="Monsoon Roar" year="2023" />
          <FeatureCard className="md:col-span-5 aspect-[5/4]" img={mist} kind="Landscape" title="Munnar Fog" year="2024" />
          <FeatureCard className="md:col-span-5 aspect-[4/5]" img={bike} kind="Mood" title="KL 25" year="2023" />
          <div className="md:col-span-7 flex flex-col justify-end p-10 border border-border">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">— Disciplines</p>
            <ul className="space-y-3 font-display text-2xl md:text-3xl">
              {["Wedding & Portrait", "Brand & Product", "Short Film & Reels", "Event Coverage"].map((d) => (
                <li key={d} className="border-b border-border pb-3 flex items-center justify-between">
                  <span>{d}</span>
                  <span className="text-gold text-base font-mono">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-40 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-8">— Philosophy</p>
          <blockquote className="font-display text-3xl md:text-6xl leading-tight text-balance max-w-5xl mx-auto">
            "I believe every idea — a business, a wedding, a film —
            deserves to be developed to its <em className="gold-text not-italic">next level</em>."
          </blockquote>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            — Muhammed Arif S
          </p>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ img, kind, title, year, className = "" }: { img: string; kind: string; title: string; year: string; className?: string }) {
  return (
    <Link to="/work" className={`group relative block overflow-hidden bg-card ${className}`}>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
          <span className="text-gold">{kind}</span>
          <span className="text-muted-foreground">{year}</span>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-4xl">{title}</h3>
          <span className="inline-block mt-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-gold transition">
            View case →
          </span>
        </div>
      </div>
    </Link>
  );
}
