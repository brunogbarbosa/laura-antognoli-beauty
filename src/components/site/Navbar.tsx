import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP } from "./data";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Cursos", href: "#cursos" },
  { label: "Produtos", href: "#produtos" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Antes & Depois", href: "#antes-depois" },
  { label: "Resultados", href: "#resultados" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md shadow-[0_8px_30px_-20px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl italic text-wine md:text-2xl">
            Dra. Laura Antognoli
          </span>
          <span className="label-caps mt-0.5 text-[0.55rem] text-taupe">
            Estética Avançada
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-caps text-[0.62rem] text-ink/70 transition-colors hover:text-wine"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-wine px-6 py-2.5 label-caps text-[0.6rem] text-ivory transition-all hover:bg-wine-deep hover:shadow-soft md:inline-block"
        >
          Agendar
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className="h-px w-7 bg-ink" />
          <span className="h-px w-7 bg-ink" />
          <span className="h-px w-5 self-end bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-ivory/95 px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="label-caps text-xs text-ink/75"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-wine px-6 py-2.5 label-caps text-[0.6rem] text-ivory"
              >
                Agendar pelo WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
