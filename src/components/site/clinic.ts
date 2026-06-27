import recepcao from "@/assets/clinic/recepcao.jpg";
import salaVitrine from "@/assets/clinic/sala-vitrine.jpg";
import loungeRecepcao from "@/assets/clinic/lounge-recepcao.jpg";
import salaProcedimento1 from "@/assets/clinic/sala-procedimento-1.jpg";
import salaAtendimento from "@/assets/clinic/sala-atendimento.jpg";
import consultorio from "@/assets/clinic/consultorio.jpg";
import salaMural from "@/assets/clinic/sala-mural.jpg";
import loungeEspera from "@/assets/clinic/lounge-espera.jpg";
import mezanino from "@/assets/clinic/mezanino.jpg";
import loungeLabios from "@/assets/clinic/lounge-labios.jpg";
import salaVinho from "@/assets/clinic/sala-vinho.jpg";
import copaVitrine from "@/assets/clinic/copa-vitrine.jpg";
import salaProdutos from "@/assets/clinic/sala-produtos.jpg";
import salaReuniao from "@/assets/clinic/sala-reuniao.jpg";
import lavaboMarmore from "@/assets/clinic/lavabo-marmore.jpg";
import lavabo from "@/assets/clinic/lavabo.jpg";

export type ClinicPhoto = {
  src: string;
  title: string;
  caption: string;
};

export const clinicPhotos: ClinicPhoto[] = [
  { src: recepcao, title: "Recepção", caption: "Vitrine de produtos e identidade da marca em destaque" },
  { src: mezanino, title: "Mezanino", caption: "Pé-direito duplo, lustre escultural e mural artístico" },
  { src: loungeLabios, title: "Lounge dos Lábios", caption: "Parede vinho com esculturas douradas e poltronas cremes" },
  { src: loungeEspera, title: "Lounge de Espera", caption: "Conforto e leveza para a sua chegada" },
  { src: salaAtendimento, title: "Sala de Atendimento", caption: "Maca clínica e ambiente acolhedor para procedimentos" },
  { src: salaProcedimento1, title: "Sala de Procedimentos", caption: "Bancada técnica com vitrine iluminada" },
  { src: consultorio, title: "Consultório", caption: "Espaço reservado para avaliação e planejamento" },
  { src: salaMural, title: "Sala do Mural", caption: "Mural assinatura e maca em ambiente sofisticado" },
  { src: salaVitrine, title: "Sala Vitrine", caption: "Bancada de mármore e prateleiras de exposição" },
  { src: salaVinho, title: "Sala Vinho", caption: "Tons profundos, ouro e esculturas de lábios" },
  { src: copaVitrine, title: "Copa & Vitrine", caption: "Mesa de reuniões com arcos de exposição iluminados" },
  { src: salaProdutos, title: "Sala de Produtos", caption: "Prateleiras arqueadas repletas de produtos premium" },
  { src: salaReuniao, title: "Sala de Reunião", caption: "Mesa redonda e mural de olhar marcante" },
  { src: loungeRecepcao, title: "Recepção Lounge", caption: "Sofá curvo vinho e arte em linha contínua" },
  { src: lavaboMarmore, title: "Lavabo Mármore", caption: "Bancada de mármore com prateleiras douradas" },
  { src: lavabo, title: "Lavabo", caption: "Paredes vinho, ouro e mármore iluminado" },
];