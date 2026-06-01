import { photos } from "./data";
import { Reveal } from "./Reveal";

const items = [
  { n: "01", title: "Técnica Exclusiva", desc: "Cada protocolo é personalizado para a anatomia única do seu rosto." },
  { n: "02", title: "Olhar Artístico", desc: "Resultado natural e harmonioso, pensado nos mínimos detalhes." },
  { n: "03", title: "Atendimento Premium", desc: "Uma experiência acolhedora e sofisticada do início ao fim." },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="grain relative overflow-hidden bg-ivory py-24 md:py-32"
      style={{ backgroundImage: `linear-gradient(rgba(250,247,242,0.92), rgba(250,247,242,0.92)), url(${photos.biogelis})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps text-rosegold">Por que a Dra. Laura</p>
          <h2 className="mt-4 font-display text-4xl font-light italic text-wine md:text-5xl">
            Diferenciais que fazem a diferença
          </h2>
        </Reveal>

        <div className="mt-16 space-y-px">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1}>
              <div className="relative flex items-center gap-6 border-t border-wine/15 py-10 md:gap-12">
                <span className="font-display text-6xl font-light italic text-wine/15 md:text-8xl">
                  {it.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl italic text-wine md:text-3xl">{it.title}</h3>
                  <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-taupe md:text-base">
                    {it.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
