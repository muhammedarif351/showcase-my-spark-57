import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-foreground" />
          <span className="font-display font-medium text-base tracking-[-0.02em]">muhammedarif</span>
          <span className="hidden md:inline text-[10px] font-mono uppercase text-muted-foreground tracking-[0.25em] ml-1">
            / studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item, i) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group relative text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-foreground/40 mr-2">0{i + 1}</span>
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-foreground transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <nav className="px-6 py-8 flex flex-col gap-6">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl flex items-baseline gap-3"
              >
                <span className="text-gold text-xs font-mono">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Studio</p>
          <h3 className="font-display text-3xl text-balance">
            Let's create something <em className="text-gold not-italic">cinematic</em>.
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-6 text-sm font-mono uppercase tracking-[0.2em] border-b border-gold pb-1 hover:gap-5 transition-all"
          >
            Start a project →
          </Link>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:muhammedarif351@gmail.com" className="hover:text-gold">muhammedarif351@gmail.com</a></li>
            <li className="text-muted-foreground">+91 96333 36228 · India</li>
            <li className="text-muted-foreground">+966 54 884 2832 · KSA</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Index</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Muhammed Arif S</span>
          <span>Producer · Photographer · Videographer</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
