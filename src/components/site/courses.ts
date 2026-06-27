import startFaceCover from "@/assets/courses/start_face-cover.jpg";
import startFacePdf from "@/assets/courses/start_face.pdf.asset.json";
import tresmCover from "@/assets/courses/tresm-cover.jpg";
import tresmPdf from "@/assets/courses/tresm.pdf.asset.json";
import lavieenCover from "@/assets/courses/lavieen-cover.jpg";
import lavieenPdf from "@/assets/courses/lavieen.pdf.asset.json";
import essenciaCover from "@/assets/courses/essencia-cover.jpg";
import essenciaPdf from "@/assets/courses/essencia.pdf.asset.json";
import perfiloCover from "@/assets/courses/perfiloplastia-cover.jpg";
import perfiloPdf from "@/assets/courses/perfiloplastia.pdf.asset.json";
import labialCover from "@/assets/courses/labial-cover.jpg";
import labialPdf from "@/assets/courses/labial.pdf.asset.json";
import rinoCover from "@/assets/courses/rino-cover.jpg";
import rinoPdf from "@/assets/courses/rino.pdf.asset.json";

const pageModules = import.meta.glob("../../assets/courses/pages/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function pages(id: string): string[] {
  const out: string[] = [];
  for (let n = 1; n <= 8; n++) {
    const match = Object.entries(pageModules).find(([path]) =>
      path.endsWith(`/${id}-${n}.jpg`),
    );
    if (match) out.push(match[1]);
  }
  return out;
}

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  pdf: string;
  pages: string[];
};

export const courses: Course[] = [
  {
    id: "labial",
    title: "Preenchimento Labial",
    subtitle: "Método L.A Lips",
    description:
      "Domine a técnica autoral de lábios harmônicos, naturais e definidos — do planejamento à entrega do resultado.",
    cover: labialCover.url,
    pdf: labialPdf.url,
    pages: pages("labial"),
  },
  {
    id: "perfiloplastia",
    title: "Perfiloplastia",
    subtitle: "Harmonia em Nariz, Lábios e Mento",
    description:
      "Aprenda a ler o perfil e equilibrar nariz, lábios e mento com segurança e elegância.",
    cover: perfiloCover.url,
    pdf: perfiloPdf.url,
    pages: pages("perfiloplastia"),
  },
  {
    id: "rino",
    title: "Rinomodelação",
    subtitle: "Método Dra. Laura Antognoli",
    description:
      "Refinamento do nariz sem cirurgia, com protocolo seguro de avaliação e aplicação.",
    cover: rinoCover.url,
    pdf: rinoPdf.url,
    pages: pages("rino"),
  },
  {
    id: "start_face",
    title: "Start Face",
    subtitle: "Primeiros Preenchedores",
    description:
      "O ponto de partida ideal para iniciar na injeção de preenchedores com confiança e técnica.",
    cover: startFaceCover.url,
    pdf: startFacePdf.url,
    pages: pages("start_face"),
  },
  {
    id: "tresm",
    title: "Harmonia dos 3M",
    subtitle: "Malar, Mento e Mandíbula",
    description: "Estruture o terço inferior e médio da face com a estratégia dos três pilares.",
    cover: tresmCover.url,
    pdf: tresmPdf.url,
    pages: pages("tresm"),
  },
  {
    id: "essencia",
    title: "Essência Vital",
    subtitle: "Rejuvenescimento com Bioestimuladores",
    description: "Estimule colágeno e revitalize a pele com protocolos de bioestimuladores.",
    cover: essenciaCover.url,
    pdf: essenciaPdf.url,
    pages: pages("essencia"),
  },
  {
    id: "lavieen",
    title: "Lavieen Glow",
    subtitle: "Tecnologia de Glow & Skin Quality",
    description: "Protocolo de luminosidade e qualidade de pele com a tecnologia Lavieen.",
    cover: lavieenCover.url,
    pdf: lavieenPdf.url,
    pages: pages("lavieen"),
  },
];
