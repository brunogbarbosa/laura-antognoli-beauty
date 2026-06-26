import { photos } from "./data";
import { Reveal, Divider } from "./Reveal";

const badges = ["Injetora Expert", "Professora & Mentora", "CRBM-1 48838"];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-10">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[1.8rem] bg-rosegold/20" />
            <img
              src={photos.whiteSuit}
              alt="Dra. Laura Antognoli em foto editorial"
              loading="lazy"
              width={600}
              height={750}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top shadow-soft"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="label-caps text-rosegold">Apresentação</p>
            <h2 className="mt-4 font-display text-4xl font-light italic leading-tight text-wine md:text-5xl">
              Especialista em transformar beleza em arte
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base font-light leading-relaxed text-taupe">
              Biomédica esteta e mentora, a Dra. Laura Antognoli é referência em
              harmonização facial avançada. Com técnica autoral e olhar estético
              apurado, dedica-se a revelar a melhor versão de cada paciente —
              sempre com naturalidade, segurança e sofisticação.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-taupe">
              Apaixonada por lábios e perfiloplastia, transforma confiança em
              resultados que falam por si.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-rosegold/40 bg-card px-5 py-2 label-caps text-[0.58rem] text-wine"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Divider className="mt-10 justify-start" />
        </div>
      </div>
    </section>
  );
}
