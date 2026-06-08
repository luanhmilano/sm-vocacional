export default function WhatIs() {
  const stages = [
    {
      name: "Postulantado",
      subtitle: "Amadurecimento Formativo",
      duration: "6 meses",
      phaseLabel: "Pré-Vocacional",
      tone: {
        card: "bg-white",
        border: "border-slate-200",
        eyebrow: "text-slate-600",
        badge: "bg-slate-900 text-white",
        dot: "bg-slate-500",
        item: "bg-slate-50 text-slate-700 border-slate-200",
      },
      description:
        "Texto de exemplo sobre o Postulantado. Aqui colocamos um parágrafo curto que descreve em linhas gerais o que acontece nessa fase e quais práticas são esperadas.",
    },
    {
      name: "Vocacional",
      subtitle: "Oração e Discernimento",
      duration: "1 ano",
      tone: {
        card: "bg-blue-50",
        border: "border-blue-100",
        eyebrow: "text-blue-700",
        badge: "bg-blue-600 text-white",
        dot: "bg-blue-600",
        item: "bg-white/90 text-blue-950 border-blue-100",
      },
      description:
        "Breve descrição mock sobre a fase Vocacional. Texto de apoio explicando atividades típicas, encontros e momentos de acompanhamento espiritual.",
    },
    {
      name: "Aspirantado",
      subtitle: "Serviço e Sacrifício",
      duration: "1 ano",
      tone: {
        card: "bg-red-50",
        border: "border-red-100",
        eyebrow: "text-red-700",
        badge: "bg-red-600 text-white",
        dot: "bg-red-600",
        item: "bg-white/90 text-red-950 border-red-100",
      },
      description:
        "Texto de exemplo sobre o Aspirantado. Um parágrafo mock para ilustrar as responsabilidades, experiências de serviço e provas de amadurecimento.",
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
            Uma leitura em formato de timeline, com etapas organizadas do acolhimento ao amadurecimento da resposta vocacional.
          </p>
        </div>

        <ol className="relative mt-10 space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-slate-300 before:via-blue-300 before:to-red-300 sm:before:left-6 lg:mx-auto lg:max-w-5xl">
          {stages.map((stage, index) => {
            const isLast = index === stages.length - 1;

            return (
              <li key={stage.name} className="relative flex gap-4 pl-14 sm:gap-5 sm:pl-16">
                {!isLast ? (
                  <span className="absolute left-5 top-11 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-brand-crimson/40 via-brand-cream to-transparent sm:left-6" />
                ) : null}

                <div
                  className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full ${stage.tone.badge} shadow-sm ring-4 ring-brand-pearl/80 sm:h-12 sm:w-12`}
                >
                  {/* Icons replacing numeric step */}
                  {index === 0 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden>
                      <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                  ) : index === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden>
                      <path fill="currentColor" d="M12 2a2 2 0 00-2 2v6H6a2 2 0 000 4h4v6a2 2 0 004 0v-6h4a2 2 0 000-4h-4V4a2 2 0 00-2-2z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden>
                      <path fill="currentColor" d="M12 2s-4 4-4 7a4 4 0 008 0c0-3-4-7-4-7zM6 20a6 6 0 0112 0H6z" />
                    </svg>
                  )}
                </div>

                <article
                  className={`min-w-0 flex-1 rounded-3xl border p-5 shadow-sm shadow-brand-crimson/5 sm:p-6 ${stage.tone.card} ${stage.tone.border}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${stage.tone.eyebrow}`}>
                        {stage.phaseLabel ?? `Estágio ${index}`}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                        {stage.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-700">{stage.subtitle}</p>
                    </div>

                    <span className={`rounded-full px-3 py-1 text-xs font-semibold sm:text-sm ${stage.tone.badge}`}>
                      {stage.duration}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-700">{stage.description}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
