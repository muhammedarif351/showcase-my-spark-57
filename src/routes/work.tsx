import { createFileRoute, Link } from "@tanstack/react-router";
import rain from "@/assets/photo-rain.jpg";
import mist from "@/assets/photo-mist.jpg";
import cat from "@/assets/photo-cat.jpg";
import ibex from "@/assets/photo-ibex.jpg";
import bike from "@/assets/photo-bike.jpg";
import parrot from "@/assets/photo-parrot.jpg";
import red from "@/assets/photo-red.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Muhammed Arif" },
      { name: "description", content: "Selected photography, videography, brand and short-film work spanning weddings, products, events and creative campaigns." },
      { property: "og:title", content: "Work — Muhammed Arif" },
      { property: "og:description", content: "Photography, video and direction across weddings, brands and films." },
      { property: "og:image", content: rain },
    ],
  }),
  component: Work,
});

const PROJECTS = [
  { img: rain, kind: "Street / Festival", title: "Monsoon Roar", year: "2023", body: "A frozen second of joy — water, light and a crowd held in suspended motion." },
  { img: red, kind: "Portrait", title: "Lady in Red", year: "2024", body: "Forest-floor editorial portrait shot in available light, Kerala." },
  { img: mist, kind: "Landscape", title: "Munnar Fog", year: "2024", body: "A lone tree, three birds and the silence of a tea-estate dawn." },
  { img: bike, kind: "Product / Mood", title: "KL 25", year: "2023", body: "A Royal Enfield resting in deep forest green — moody automotive frame." },
  { img: parrot, kind: "Wildlife", title: "Backyard Parrot", year: "2024", body: "Telephoto study of a rose-ringed parakeet in monsoon-soft greens." },
  { img: ibex, kind: "Wildlife", title: "Nilgiri Tahr", year: "2024", body: "Roadside encounter with a Nilgiri Tahr on the Munnar climb." },
  { img: cat, kind: "Quiet Frames", title: "Garden Cat", year: "2024", body: "A white cat at golden hour — bokeh, breath and stillness." },
];

function Work() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32 pb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-6">— Index of work / 01</p>
        <h1 className="font-display text-6xl md:text-[10rem] leading-[0.92]">
          Selected<br /><em className="gold-text not-italic">projects</em>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-lg">
          A rotating archive of recent commissions and personal experiments —
          spanning photography, video, direction and design.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => {
            const spans = [
              "md:col-span-7 aspect-[4/5]",
              "md:col-span-5 aspect-[4/5]",
              "md:col-span-5 aspect-[5/4]",
              "md:col-span-7 aspect-[5/4]",
              "md:col-span-4 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
            ];
            return (
            <article key={p.title} className={`group relative overflow-hidden ${spans[i]}`}>
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-background/10" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-gold">{String(i + 1).padStart(2, "0")} / {p.kind}</span>
                  <span className="text-muted-foreground">{p.year}</span>
                </div>
                <div className="max-w-md">
                  <h2 className="font-display text-3xl md:text-5xl leading-none">{p.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl">
            Have a story that needs <em className="gold-text not-italic">a frame</em>?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-gold-soft transition"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}
