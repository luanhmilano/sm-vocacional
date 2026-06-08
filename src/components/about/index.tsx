import aboutHistoryImg from "../../assets/about/about-historia.jpeg";
import aboutCarismaImg from "../../assets/about/about-carisma-resized.jpeg";
import aboutFormasVidaImg from "../../assets/about/about-formas_de_vida.jpeg";
import aboutMinisteriosImg from "../../assets/about/about-ministerios.jpeg";
import { FadeInScroll } from "../utils/wrapper";
import { AboutCard } from "./AboutCard";

const cards = [
  {
    image: aboutHistoryImg,
    title: "História",
    description: (
      <>
        Fundado em 8 de fevereiro de 2015, o{" "}
        <strong>Movimento Sementes da Misericórdia</strong> nasceu na{" "}
        <strong>
          Paróquia Basílica Santuário de Nossa Senhora de Nazaré do Desterro
        </strong>
        , em Belém do Pará, inspirado no carisma da{" "}
        <strong>Divina Misericórdia</strong>. O movimento reúne pessoas que
        desejam conhecer, viver e anunciar a{" "}
        <strong>Misericórdia Divina</strong>, oferecendo um caminho de
        crescimento na fé, evangelização e florescimento vocacional.
      </>
    ),
  },
  {
    image: aboutCarismaImg,
    title: "Carisma",
    description: (
      <>
        Experimentar, viver e testemunhar a{" "}
        <strong>Divina Misericórdia de Jesus</strong>, por Este transmitida à{" "}
        <strong>Santa Faustina Kowalska</strong>, em uma vida de adoração,
        oração, celebração eucarística, ação de graças, evangelização e serviço.
        O consagrado do Movimento Sementes da Misericórdia é{" "}
        <strong>adorador eucarístico por excelência</strong>.
      </>
    ),
  },
  {
    image: aboutFormasVidaImg,
    title: "Formas de Vida",
    description: (
      <>
        No Movimento Sementes da Misericórdia, o chamado à santidade é vivido em{" "}
        <strong>diferentes estados de vida</strong>. Nossa{" "}
        <strong>família SM</strong> é formada por jovens, mulheres e homens
        solteiros, bem como por famílias que desejam crescer na fé e anunciar a{" "}
        <strong>Misericórdia Divina</strong> em seu cotidiano. Cada vocação
        encontra seu lugar para servir, evangelizar e testemunhar o{" "}
        <strong>amor de Deus</strong>.
      </>
    ),
  },
  {
    image: aboutMinisteriosImg,
    title: "Ministérios",
    description: (
      <>
        Nossa missão se concretiza através dos ministérios, onde{" "}
        <strong>cada membro encontra um lugar para servir e evangelizar</strong>
        . O Movimento Sementes da Misericórdia é formado pelos ministérios de{" "}
        <strong>Vocacional</strong>, <strong>Música</strong>,{" "}
        <strong>Artes</strong>, <strong>Formação e Pregação</strong>,{" "}
        <strong>Comunicação</strong>, <strong>Liturgia</strong>,{" "}
        <strong>Intercessão</strong>, <strong>Cáritas</strong> e{" "}
        <strong>Kids</strong>, que juntos promovem a vivência do nosso carisma e
        o anúncio da <strong>Misericórdia Divina</strong>.
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeInScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">
              Sobre o movimento
            </p>
          </div>
        </FadeInScroll>

        <div className="mt-5 grid gap-6">
          {cards.map((card, index) => (
            <FadeInScroll key={card.title} delay={index * 0.1}>
              <AboutCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </FadeInScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
