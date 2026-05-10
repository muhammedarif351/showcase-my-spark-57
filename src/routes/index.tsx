import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";
import rain from "@/assets/photo-rain.jpg";
import red from "@/assets/photo-red.jpg";
import bike from "@/assets/photo-bike.jpg";
import mist from "@/assets/photo-mist.jpg";
import ibex from "@/assets/photo-ibex.jpg";
import parrot from "@/assets/photo-parrot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Arif — Visual Storyteller Studio" },
      { name: "description", content: "Photographer, videographer & creative producer. Cinematic stories from concept to final cut. Kerala / KSA." },
      { property: "og:title", content: "Muhammed Arif — Visual Storyteller Studio" },
      { property: "og:description", content: "Photography, video, direction. A studio of one." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: Index,
});

const CHAPTERS = [
  { n: "01", chapter: "Lady in Red", kind: "Portrait · 2024", img: red, title: "A frame, a feeling.", body: "A controlled study in red — light shaped to carve presence from a single colour.", stat: "1", statLabel: "Frame · one shot" },
  { n: "02", chapter: "Monsoon Roar", kind: "Street · 2023", img: rain, title: "Weather as character.", body: "Kerala's monsoon as a living protagonist — water, motion and shutter conspiring.", stat: "1/30", statLabel: "Shutter · handheld" },
  { n: "03", chapter: "Munnar Fog", kind: "Landscape · 2024", img: mist, title: "Silence at altitude.", body: "Tea hills under a slow ceiling of cloud. Patience over plan.", stat: "5am", statLabel: "Call time · cold" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={portrait}
            alt="Muhammed Arif"
            className="h-full w-full object-cover object-right opacity-40 md:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative mx-auto max-w-[1500px] w-full px-6 md:px-10 pt-24 pb-20">
          <div className="flex items-center gap-3 mb-10 reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Visual Storytelling Studio · Est. 2015
            </span>
          </div>

          <h1 className="font-display font-light text-[14vw] md:text-[10rem] leading-[0.88] tracking-[-0.05em] reveal max-w-[16ch]">
            We craft <span className="inline-block align-middle mx-2">✦</span><br />
            <em className="not-italic font-light">cinematic</em> stories<br />
            <span className="text-muted-foreground">that travel.</span>
          </h1>

          <div className="mt-16 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-base md:text-lg text-muted-foreground leading-relaxed reveal">
              <span className="text-foreground">Muhammed Arif</span> — a one-person studio building stills,
              motion and direction from raw concept to final cut. A decade of frames between Kerala and KSA.
            </p>
            <div className="md:col-span-6 flex md:justify-end gap-4 reveal">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-muted-foreground transition"
              >
                View work <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-border px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] hover:border-foreground transition"
              >
                Commission
              </Link>
            </div>
          </div>

          {/* Rotating circular badge */}
          <div className="hidden lg:block absolute bottom-12 right-10 w-32 h-32">
            <svg viewBox="0 0 200 200" className="rotate-text w-full h-full text-foreground/80">
              <defs>
                <path id="circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text fontSize="14" letterSpacing="4" fill="currentColor" fontFamily="Space Grotesk">
                <textPath href="#circle">Muhammed Arif · Visual Studio · Kerala / KSA · </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-foreground text-xl">✦</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 md:left-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll ↓
        </div>
        <div className="absolute bottom-6 right-6 md:right-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          100<span className="text-foreground/60">%</span>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-3 gap-6 md:gap-12">
          {[
            { n: "10", l: "Years behind the lens" },
            { n: "200+", l: "Projects delivered" },
            { n: "2", l: "Countries · India / KSA" },
          ].map((s) => (
            <div key={s.l} className="border-l border-border pl-6">
              <p className="font-display font-light text-5xl md:text-8xl tracking-[-0.04em] leading-none">{s.n}</p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTRINE */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-40">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-8">
          00 · A Studio Doctrine
        </p>
        <h2 className="font-display font-light text-5xl md:text-8xl leading-[0.92] tracking-[-0.04em] max-w-[18ch]">
          Visual work that <em className="not-italic text-muted-foreground">drives</em> real feeling.
        </h2>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Three chapters · One belief — Concept · Capture · Edit
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/70">
          Continue scrolling — chapters travel below ↓
        </p>
      </section>

      {/* CHAPTERS */}
      <section className="border-t border-border">
        {CHAPTERS.map((c, i) => (
          <article key={c.n} className="border-b border-border">
            <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-7 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-card order-2 md:order-1">
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80 mix-blend-difference">{c.n}</span>
              </div>
              <div className="md:col-span-5 flex flex-col justify-between order-1 md:order-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    Chapter · {c.chapter}
                  </p>
                  <h3 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[0.95] tracking-[-0.04em]">
                    {c.title}
                  </h3>
                  <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{c.body}</p>
                  <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                    <li>· Concept</li><li>· Capture</li><li>· Edit</li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0 pt-8 border-t border-border flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">By the numbers</p>
                    <p className="font-display font-light text-5xl tracking-[-0.04em]">{c.stat}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{c.statLabel}</p>
                  </div>
                  <Link to="/work" className="font-mono text-[10px] uppercase tracking-[0.3em] border-b border-foreground pb-1 hover:text-muted-foreground">
                    View project →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[1500px] px-6 md:px-10 pb-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>0{i + 1} / 0{CHAPTERS.length}</span>
              <span>{c.kind}</span>
            </div>
          </article>
        ))}
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 flex justify-between items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">000%</p>
          <Link to="/work" className="font-display font-light text-3xl md:text-5xl tracking-[-0.04em] hover:text-muted-foreground transition">
            View all projects →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-12">
            [ Studio Services ]
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            {[
              { t: "Photography.", items: ["Portrait & Editorial", "Weddings & Events", "Brand & Product", "Documentary"] },
              { t: "Videography.", items: ["Short Films", "Brand Films", "Reels & Social", "Event Coverage"] },
              { t: "Direction.", items: ["Concept Development", "Storyboarding", "On-set Direction", "Creative Producing"] },
              { t: "Post-Production.", items: ["Color Grading", "Editing", "Sound Design", "Final Delivery"] },
            ].map((s) => (
              <div key={s.t}>
                <h3 className="font-display font-light text-4xl md:text-6xl tracking-[-0.04em] leading-none mb-8">{s.t}</h3>
                <ul className="space-y-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.items.map((i) => <li key={i} className="flex justify-between border-b border-border pb-3">
                    <span>{i}</span><span className="text-foreground/40">→</span>
                  </li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE TILES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-8">Case studies</p>
          <h2 className="font-display font-light text-5xl md:text-8xl leading-[0.9] tracking-[-0.04em] mb-16">
            Deep dives into <em className="not-italic text-muted-foreground">our craft.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { n: "01", cat: "Wildlife · 2024", title: "Nilgiri Tahr", img: ibex, m1: "5h", m1l: "Hike · solo", m2: "1", m2l: "Frame · keeper" },
              { n: "02", cat: "Nature · 2023", title: "Backyard Parrot", img: parrot, m1: "1/500", m1l: "Shutter · stillness", m2: "200mm", m2l: "Lens · patient" },
              { n: "03", cat: "Mood · 2023", title: "KL 25", img: bike, m1: "1", m1l: "Bike · analog soul", m2: "Dusk", m2l: "Light · golden" },
              { n: "04", cat: "Animal · 2024", title: "Garden Cat", img: ibex, m1: "0.4s", m1l: "Exposure · intimate", m2: "50mm", m2l: "Lens · honest" },
            ].map((c) => (
              <Link to="/work" key={c.n} className="group bg-background p-8 md:p-10 hover:bg-card transition">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  <span>{c.n}</span><span>{c.cat}</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden bg-card mb-8">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <h3 className="font-display font-light text-3xl md:text-4xl tracking-[-0.04em]">{c.title}</h3>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div><p className="font-display font-light text-2xl">{c.m1}</p><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{c.m1l}</p></div>
                  <div><p className="font-display font-light text-2xl">{c.m2}</p><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{c.m2l}</p></div>
                </div>
                <span className="mt-8 inline-block font-mono text-[10px] uppercase tracking-[0.3em] border-b border-foreground pb-1 group-hover:text-muted-foreground">Read case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-32 md:py-48 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-10">— Philosophy</p>
          <blockquote className="font-display font-light text-3xl md:text-7xl leading-[1] tracking-[-0.04em] text-balance max-w-5xl mx-auto">
            "Every idea — a business, a wedding, a film — deserves to be developed
            <em className="not-italic text-muted-foreground"> to its next level.</em>"
          </blockquote>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Muhammed Arif S</p>
        </div>
      </section>
    </>
  );
}
