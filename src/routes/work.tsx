import { createFileRoute, Link } from "@tanstack/react-router";
import wedding from "@/assets/work-wedding.jpg";
import film from "@/assets/work-film.jpg";
import product from "@/assets/work-product.jpg";
import event from "@/assets/work-event.jpg";
import social from "@/assets/work-social.jpg";
import brand from "@/assets/work-brand.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Muhammed Arif" },
      { name: "description", content: "Selected photography, videography, brand and short-film work spanning weddings, products, events and creative campaigns." },
      { property: "og:title", content: "Work — Muhammed Arif" },
      { property: "og:description", content: "Photography, video and direction across weddings, brands and films." },
      { property: "og:image", content: wedding },
    ],
  }),
  component: Work,
});

const PROJECTS = [
  { img: wedding, kind: "Wedding", title: "Aishwarya & Rohan", year: "2024", body: "Two-day Kerala wedding documented in candid and editorial frames.", span: "md:col-span-7 aspect-[4/5]" },
  { img: film, kind: "Short Film", title: "After Hours", year: "2024", body: "Atmospheric set diary — concept, direction and edit.", span: "md:col-span-5 aspect-[4/5]" },
  { img: event, kind: "Live Event", title: "Coastal Festival", year: "2023", body: "Full-night stage coverage and post-event reel package.", span: "md:col-span-5 aspect-[5/4]" },
  { img: product, kind: "Commercial", title: "Maison No. 7", year: "2025", body: "Cinematic product films and stills for a fragrance launch.", span: "md:col-span-7 aspect-[5/4]" },
  { img: social, kind: "Reels", title: "Studio Series", year: "2024", body: "Vertical-first content built around a single warm gel.", span: "md:col-span-4 aspect-[4/5]" },
  { img: brand, kind: "Brand", title: "Quiet Editions", year: "2025", body: "Identity stills and poster system for a hospitality brand.", span: "md:col-span-8 aspect-[5/4]" },
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
          {PROJECTS.map((p, i) => (
            <article key={p.title} className={`group relative overflow-hidden ${p.span}`}>
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
          ))}
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
