import { Quote } from "lucide-react";
import { Reveal, Divider } from "./Reveal";

const data = [
  { name: "Juliana", treat: "Lábios & Perfiloplastia", text: "Resultado dos sonhos, natural e elegante. A Dra. Laura tem mãos de artista!" },
  { name: "Camila", treat: "Full Face", text: "Me senti acolhida do início ao fim. Cada detalhe pensado para mim." },
  { name: "Patrícia", treat: "Bioestimuladores", text: "Minha pele nunca esteve tão viva. Profissionalismo e sofisticação." },
  { name: "Renata", treat: "HiPro", text: "Firmeza e glow sem cortes. Experiência premium de verdade." },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps text-rosegold">Depoimentos</p>
          <h2 className="mt-4 font-display text-4xl font-light italic text-wine md:text-5xl">
            Histórias de transformação
          </h2>
          <Divider className="mt-8" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {data.map((d, i) => (
            <Reveal key={d.name} delay={(i % 2) * 0.1}>
              <figure className="h-full rounded-2xl border border-rosegold/30 bg-card p-8 shadow-[0_12px_40px_-32px_rgba(0,0,0,0.5)]">
                <Quote className="size-8 text-rosegold/70" strokeWidth={1.2} />
                <blockquote className="mt-4 font-display text-xl font-light italic leading-relaxed text-ink">
                  “{d.text}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-display text-lg text-wine">{d.name}</span>
                  <span className="label-caps text-[0.55rem] text-taupe">{d.treat}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
