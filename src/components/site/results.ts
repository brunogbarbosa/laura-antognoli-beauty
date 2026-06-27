import perfilo1 from "@/assets/results/perfiloplastia-1.jpg";
import perfilo2 from "@/assets/results/perfiloplastia-2.jpg";
import perfilo3 from "@/assets/results/perfiloplastia-3.jpg";
import labial1 from "@/assets/results/labial-1.jpg";
import labial2 from "@/assets/results/labial-2.jpg";
import labial3 from "@/assets/results/labial-3.jpg";
import bigbumm from "@/assets/results/bigbumm.jpg";
import botox from "@/assets/results/botox.jpg";
import lavieen1 from "@/assets/results/lavieen-1.jpg";
import lavieen2 from "@/assets/results/lavieen-2.jpg";
import hipro from "@/assets/results/hipro.jpg";

export type ResultPhoto = {
  src: string;
  title: string;
  caption: string;
};

export const resultPhotos: ResultPhoto[] = [
  { src: labial1, title: "Preenchimento Labial", caption: "Método L.A Lips — volume e definição naturais" },
  { src: perfilo1, title: "Perfiloplastia", caption: "Harmonia do perfil — nariz, lábios e mento" },
  { src: botox, title: "Toxina Botulínica", caption: "Suavização das linhas de expressão" },
  { src: lavieen1, title: "Lavieen Glow", caption: "Qualidade de pele e luminosidade" },
  { src: perfilo2, title: "Rinomodelação", caption: "Refinamento do nariz sem cirurgia" },
  { src: labial2, title: "Preenchimento Labial", caption: "Contorno e hidratação labial" },
  { src: lavieen2, title: "Lavieen Glow", caption: "Renovação e uniformização da pele" },
  { src: perfilo3, title: "Perfiloplastia", caption: "Equilíbrio do perfil facial" },
  { src: labial3, title: "Preenchimento Labial", caption: "Lábios harmônicos e definidos" },
  { src: bigbumm, title: "Bigbumm", caption: "Tratamento corporal — textura e firmeza" },
  { src: hipro, title: "HiPro", caption: "Ultrassom micro & macrofocado — lifting facial" },
];
