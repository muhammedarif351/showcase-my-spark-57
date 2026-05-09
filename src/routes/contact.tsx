import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Muhammed Arif" },
      { name: "description", content: "Commission a project, request a quote or just say hello. Based between Kerala and Saudi Arabia." },
      { property: "og:title", content: "Contact — Muhammed Arif" },
      { property: "og:description", content: "Reach out for commissions, collaborations and quotes." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32 pb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-6">— Say hello / 04</p>
        <h1 className="font-display text-6xl md:text-[10rem] leading-[0.92]">
          Let's make<br /><em className="gold-text not-italic">something</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Direct</p>
            <a href="mailto:muhammedarif351@gmail.com" className="font-display text-2xl md:text-3xl hover:text-gold break-all">
              muhammedarif351@gmail.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">India</p>
              <a href="tel:+919633336628" className="font-display text-xl hover:text-gold">+91 96333 366228</a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Saudi Arabia</p>
              <a href="tel:+966548842832" className="font-display text-xl hover:text-gold">+966 54 884 2832</a>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Available for</p>
            <ul className="space-y-2 font-display text-xl">
              <li>· Weddings & events worldwide</li>
              <li>· Brand & product commissions</li>
              <li>· Short film direction</li>
              <li>· Long-term creative partnerships</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Languages</p>
            <p className="font-display text-xl">English · Tamil · Malayalam</p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 border border-border p-8 md:p-12 bg-card/40 space-y-8"
        >
          {sent ? (
            <div className="py-20 text-center space-y-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">— Message sent</p>
              <h2 className="font-display text-4xl">Thanks. I'll be in touch shortly.</h2>
              <button onClick={() => setSent(false)} className="font-mono text-xs uppercase tracking-[0.25em] underline underline-offset-4 hover:text-gold">
                Send another →
              </button>
            </div>
          ) : (
            <>
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Project type" name="type" placeholder="Wedding · Brand · Film · Other" />
              <Field label="Tell me about it" name="msg" textarea required />
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-10 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-gold-soft transition"
              >
                Send message →
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", textarea = false, required = false, placeholder }: {
  label: string; name: string; type?: string; textarea?: boolean; required?: boolean; placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-display text-xl text-foreground placeholder:text-muted-foreground/60 resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-display text-xl text-foreground placeholder:text-muted-foreground/60"
        />
      )}
    </label>
  );
}
