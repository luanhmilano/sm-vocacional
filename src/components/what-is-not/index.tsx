export default function WhatIsNot() {
  return (
    <section id="what-is-not" className="px-4 py-16 sm:px-6 lg:px-8">
      {/* O QUE NÃO É O PROCESSO VOCACIONAL */}
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">
            O que o processo vocacional não é
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Conhecimentos importantes
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-brand-cream bg-brand-cream/30 p-6">
            <h3 className="text-xl font-semibold">NÃO é apenas um grupo</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/80 sm:text-base">
              O processo vocacional vai além da participação em encontros e
              atividades. Ele é um caminho de discernimento, formação e
              crescimento na vivência do carisma da Divina Misericórdia.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-cream bg-brand-cream/30 p-6">
            <h3 className="text-xl font-semibold">NÃO é entretenimento</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/80 sm:text-base">
              Embora existam momentos de convivência e alegria, o objetivo
              principal é favorecer o encontro com Deus, o amadurecimento da fé
              e a resposta ao chamado vocacional.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-cream bg-brand-cream/30 p-6">
            <h3 className="text-xl font-semibold">NÃO é participação casual</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/80 sm:text-base">
              A caminhada vocacional exige compromisso, perseverança e abertura
              à ação de Deus. É um processo que convida cada pessoa a se
              envolver de forma consciente e responsável.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-cream bg-brand-cream/30 p-6">
            <h3 className="text-xl font-semibold">NÃO é algo superficial</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/80 sm:text-base">
              O processo vocacional busca uma transformação integral da vida.
              Por meio da oração, da formação e do serviço, o vocacionado é
              chamado a aprofundar sua relação com Deus e sua missão na Igreja.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
