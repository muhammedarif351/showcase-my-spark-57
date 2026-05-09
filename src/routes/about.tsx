import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Muhammed Arif S" },
      { name: "description", content: "From mechanical engineering and construction supervision in Saudi Arabia to wedding photography and creative direction — the story of a self-taught visual producer." },
      { property: "og:title", content: "About — Muhammed Arif" },
      { property: "og:description", content: "Self-taught creative. Decade of technical craft. Cinematic visual storytelling." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32 pb-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-6">— About / 02</p>
        <h1 className="font-display text-6xl md:text-[9rem] leading-[0.95] max-w-5xl">
          A technician who fell in love with <em className="gold-text not-italic">light</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="aspect-[3/4] overflow-hidden">
            <img src={portrait} alt="Muhammed Arif portrait" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <dl className="mt-10 space-y-4 font-mono text-xs uppercase tracking-[0.2em]">
            {[
              ["Born", "Kerala, India · 1995"],
              ["Based", "Saihat, Dammam — KSA"],
              ["Languages", "English · Hindi · Arabic"],
              ["Diploma", "Mechanical Engineering, 2015"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p className="font-display text-3xl md:text-4xl text-foreground leading-snug text-balance">
            I'm a multi-skilled creative and technical professional working across
            media production, photography, videography, editing and design.
          </p>
          <p>
            My journey began in technical education and field experience — supervising construction
            sites and managing facility operations across Saudi Arabia. Over the years, a quiet
            passion grew louder: a love for the way light, motion and story can change how someone
            feels in a single frame.
          </p>
          <p>
            Though I never studied creative subjects formally, I built my practice through
            self-learning, observation and relentless experimentation — wedding shoots in Kerala,
            product visuals, social reels, short film concepts and brand campaigns.
          </p>
          <p>
            Today, I combine technical discipline with visual instinct to develop every idea —
            a business concept, a campaign, a wedding day, a short film — to its next level.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-4 border-b border-gold pb-1 text-foreground font-mono text-xs uppercase tracking-[0.25em] hover:gap-5 transition-all"
          >
            Work with me →
          </Link>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">— Trajectory</p>
          <h2 className="font-display text-5xl md:text-7xl mb-16">Ten years, three crafts.</h2>
          <ol className="space-y-12">
            {[
              { yr: "2023 — now", role: "Building Maintenance & Admin Support", org: "Al-Dur Specialized Medical Center · Saihat, Dammam", body: "Facility operations, electrical & plumbing support, CCTV installation, technical coordination across the medical center." },
              { yr: "2020 — 2022", role: "Construction Supervisor", org: "Construction Co. · Saudi Arabia", body: "Site supervision, electrical & plumbing coordination, worker follow-up, material monitoring and progress reporting." },
              { yr: "2018 — 2020", role: "Wedding Photographer", org: "Independent · Kerala, India", body: "Candid and traditional wedding coverage, client coordination, photo selection and post-production." },
              { yr: "2015", role: "Diploma in Mechanical Engineering", org: "ISET College, Chanmur — 72%", body: "Foundation in mechanical systems, troubleshooting and structured engineering thinking." },
              { yr: "2012", role: "Higher Secondary Certificate", org: "APPM VHSS, Avanavanchery — 62%", body: "Completed HSC in Kerala before moving into technical training." },
              { yr: "2010", role: "Secondary School Leaving Certificate", org: "VHSS, Arakunnu — 60%", body: "Schooling completed in Arakunnu, Kerala." },
            ].map((row) => (
              <li key={row.yr} className="grid md:grid-cols-12 gap-6 border-t border-border pt-8">
                <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.25em] text-gold">{row.yr}</div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-3xl md:text-4xl">{row.role}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{row.org}</p>
                  <p className="mt-4 text-muted-foreground max-w-2xl">{row.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { t: "Creative", items: ["Photography", "Videography", "Video Editing", "Graphic Design", "Concept Development", "Script Writing", "Creative Direction"] },
            { t: "Technical", items: ["Building Maintenance", "Electrical Support", "Plumbing", "CCTV Install & Repair", "Site Supervision", "Team Coordination"] },
            { t: "Personal", items: ["Self-learning attitude", "Visual thinking", "Problem solving", "Fast learning", "Research mindset", "Idea development"] },
          ].map((g) => (
            <div key={g.t} className="border-t border-gold pt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6">{g.t}</h3>
              <ul className="space-y-3 font-display text-xl">
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
