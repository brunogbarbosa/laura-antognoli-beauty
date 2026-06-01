import { INSTAGRAM, WHATSAPP } from "./data";

export function Footer() {
  return (
    <footer className="bg-ivory pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-champagne" />
          <span className="size-1.5 rotate-45 bg-champagne" />
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-champagne" />
        </div>

        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <p className="font-display text-2xl italic text-wine">Dra. Laura Antognoli</p>
            <p className="label-caps mt-2 text-[0.55rem] text-taupe">Estética Avançada</p>
          </div>

          <nav className="flex flex-col gap-2">
            <a href="#sobre" className="text-sm font-light text-taupe hover:text-wine">Sobre</a>
            <a href="#tratamentos" className="text-sm font-light text-taupe hover:text-wine">Tratamentos</a>
            <a href="#resultados" className="text-sm font-light text-taupe hover:text-wine">Resultados</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-taupe hover:text-wine">Instagram</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-taupe hover:text-wine">WhatsApp</a>
          </nav>

          <div className="text-sm font-light text-taupe">
            <p>CRBM-1: 48838</p>
            <p>Sumaré, SP — Brasil</p>
            <p className="mt-3">@dralauraantognoli</p>
          </div>
        </div>

        <p className="mt-12 text-center text-xs font-light text-taupe/80">
          Procedimentos realizados exclusivamente por profissional habilitada. ·
          © {new Date().getFullYear()} Dra. Laura Antognoli
        </p>
      </div>
    </footer>
  );
}
