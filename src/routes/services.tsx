import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Muhammed Arif" },
      { name: "description", content: "Photography, videography, editing, creative direction and brand visuals — bespoke services from concept to delivery." },
      { property: "og:title", content: "Services — Muhammed Arif" },
      { property: "og:description", content: "Photography, video, direction, editing and design services." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    n: "01",
    t: "Photography",
    items: ["Wedding & engagement", "Portrait & editorial", "Product & catalogue", "Event coverage"],
    body: "From the first look to the final toast — covered with a documentary eye and an editorial hand.",
  },
  {
    n: "02",
    t: "Videography & Film",
    items: ["Cinematic wedding films", "Brand & promo videos", "Short film direction", "Reels & short-form"],
    body: "Concept, shoot, edit and color — delivered as cohesive films, not stitched clips.",
  },
  {
    n: "03",
    t: "Creative Direction",
    items: ["Concept development", "Script writing", "Campaign ideation", "Brand storytelling"],
    body: "I help you find the idea before we point a single camera at it.",
  },
  {
    n: "04",
    t: "Design & Edit",
    items: ["Photo editing & retouching", "Video editing & color", "Posters & social design", "Branding support"],
    body: "Polished post — quiet retouching, deliberate cuts, considered typography.",
  },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32 pb-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-6">— Capabilities / 03</p>
        <h1 className="font-display text-6xl md:text-[9rem] leading-[0.92] max-w-5xl">
          Concept through <em className="gold-text not-italic">final cut</em>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-lg">
          A small studio practice covering the full visual workflow — so the idea you start with
          is the idea that reaches your audience.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {SERVICES.map((s) => (
            <div key={s.n} className="grid md:grid-cols-12 gap-8 py-16 border-b border-border group">
              <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.3em] text-gold">{s.n}</div>
              <div className="md:col-span-4">
                <h2 className="font-display text-4xl md:text-6xl group-hover:text-gold transition">{s.t}</h2>
              </div>
              <div className="md:col-span-3 text-muted-foreground">{s.body}</div>
              <ul className="md:col-span-3 space-y-2 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-gold">✦</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-card/40 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">— How we work</p>
          <h2 className="font-display text-5xl md:text-7xl mb-16">A four-act process.</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { n: "I", t: "Listen", b: "We talk through the idea, the audience and the constraints." },
              { n: "II", t: "Design", b: "Concept, references, shot list, schedule — a clear plan before day one." },
              { n: "III", t: "Capture", b: "On location with intention. Calm sets produce the best frames." },
              { n: "IV", t: "Deliver", b: "Edit, color, retouch and hand-off — built for where it'll live." },
            ].map((p) => (
              <div key={p.n} className="border-t border-gold pt-6">
                <span className="font-display text-5xl text-gold">{p.n}</span>
                <h3 className="font-display text-2xl mt-3">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 text-center">
        <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto text-balance">
          Ready when you are. Let's design the next thing.
        </h2>
        <Link
          to="/contact"
          className="inline-flex mt-10 items-center gap-3 bg-gold text-primary-foreground px-10 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-gold-soft transition"
        >
          Get in touch →
        </Link>
      </section>
    </>
  );
}
