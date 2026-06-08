import { HandsPrayingIcon, BookOpenIcon, HandHeartIcon } from "@phosphor-icons/react";

export default function WhatIs() {
  const stages = [
    {
      name: "Postulantado",
      subtitle: "Amadurecimento Formativo",
      duration: "6 meses",
      phaseLabel: "Pré-Vocacional",
      tone: {
        card: "bg-white",
        border: "border-slate-400",
        eyebrow: "text-slate-600",
        badge: "bg-slate-400 text-white",
        dot: "bg-slate-500",
        item: "bg-slate-50 text-slate-700 border-slate-200",
      },
      description:
        "Nesse período, o postulante é convidado a aprofundar sua relação com Deus, ordenar sua vida espiritual, fortalecer as virtudes cristãs e crescer no conhecimento da Igreja e dos ensinamentos da fé. Trata-se de um tempo de formação humana, espiritual e doutrinal, preparando o coração para que, posteriormente, possa discernir com maior liberdade e maturidade um possível chamado ao carisma.",
    },
    {
      name: "Vocacional",
      subtitle: "Oração e Discernimento",
      duration: "1° ano",
      tone: {
        card: "bg-white",
        border: "border-brand-blue/50",
        eyebrow: "text-brand-blue/100",
        badge: "bg-brand-blue text-white",
        dot: "bg-brand-blue/60",
        item: "bg-white/90 text-blue-950 border-blue-100",
      },
      description:
        "É um tempo de construção da vida interior, de crescimento espiritual e de conhecimento do carisma do Movimento. Ao longo desse caminho, a pessoa também conhece os diversos ministérios e serviços existentes na comunidade, buscando compreender melhor sua identidade e missão. O objetivo principal dessa etapa é ajudar o vocacionado a discernir, diante de Deus, se deseja continuar caminhando rumo às etapas seguintes da consagração.",
    },
    {
      name: "Aspirantado",
      subtitle: "Serviço e Sacrifício",
      duration: "2° ano",
      tone: {
        card: "bg-white",
        border: "border-brand-red/50",
        eyebrow: "text-brand-red",
        badge: "bg-brand-red text-white",
        dot: "bg-brand-red",
        item: "bg-white/90 text-brand-red border-brand-red/20",
      },
      description:
        "Após concluir o Vocacional, o membro ingressa no Aspirantado, que também é um período de formação e amadurecimento. Nessa etapa, o foco está no serviço e no sacrifício da vivência comunitária. O aspirante passa por todos os ministérios do Movimento, conhecendo de forma mais concreta suas atividades, espiritualidade e missão. É um tempo de integração, no qual ele aprende a servir, desenvolve seus dons e aprofunda sua experiência com o carisma, buscando uma identificação cada vez maior com a vocação à qual está sendo chamado.",
    },
  ];

  return (
    <section id="what-is" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-brand-pearl/50 px-5 py-8 shadow-sm ring-1 ring-brand-cream sm:px-8 sm:py-10 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">
            O que é
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Como o processo vocacional é vivido
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-sienna/75 sm:text-base">
            Uma leitura em formato de timeline, com etapas organizadas do
            acolhimento ao amadurecimento da resposta vocacional.
          </p>
        </div>

        <ol className="relative mt-10 space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-slate-300 before:via-blue-300 before:to-brand-red sm:before:left-6 lg:mx-auto lg:max-w-5xl">
          {stages.map((stage, index) => {
            const isLast = index === stages.length - 1;

            return (
              <li
                key={stage.name}
                className="relative flex gap-4 pl-14 sm:gap-5 sm:pl-16"
              >
                {!isLast ? (
                  <span className="absolute left-5 top-11 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-brand-red/40 via-brand-cream to-transparent sm:left-6" />
                ) : null}

                <div
                  className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full ${stage.tone.badge} shadow-sm ring-4 ring-brand-pearl/80 sm:h-12 sm:w-12`}
                >
                  {index === 0 ? (
                    <BookOpenIcon size={20} weight="fill" className="text-white" aria-hidden />
                  ) : index === 1 ? (
                    <HandsPrayingIcon size={20} weight="fill" className="text-white" aria-hidden />
                  ) : (
                    <HandHeartIcon size={20} weight="fill" className="text-white" aria-hidden />
                  )}
                </div>

                <article
                  className={`min-w-0 flex-1 rounded-3xl border p-5 shadow-sm shadow-brand-crimson/5 sm:p-6 ${stage.tone.card} ${stage.tone.border}`}
                >
                  <div className="flex flex-col items-start gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold sm:text-sm ${stage.tone.badge}`}
                    >
                      {stage.duration}
                    </span>

                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.3em] ${stage.tone.eyebrow}`}
                      >
                        {stage.phaseLabel ?? `Estágio ${index}`}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                        {stage.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-700">
                    {stage.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
