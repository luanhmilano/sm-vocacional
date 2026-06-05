export default function WhatIs() {
  return (
    <section id="what-is" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-brand-pearl/50 px-6 py-8 shadow-sm ring-1 ring-brand-cream sm:px-8 sm:py-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">
            O que é
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Como o processo vocacional é vivido
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-brand-cream p-5">
            <h3 className="text-xl font-semibold">Oração</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">
              A oração é o fundamento da caminhada vocacional. Por meio dela, o
              vocacionado cultiva sua intimidade com Deus, fortalece sua vida
              espiritual e aprende a reconhecer Sua presença e ação no
              cotidiano.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-cream p-5">
            <h3 className="text-xl font-semibold">Discernimento</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">
              O discernimento é o processo de escuta e busca da vontade de Deus.
              Com o auxílio da oração, da formação e do acompanhamento, o
              vocacionado aprende a compreender seu chamado e a responder com
              liberdade e generosidade.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-cream p-5">
            <h3 className="text-xl font-semibold">Aprofundamento</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">
              O aprofundamento favorece o crescimento humano, espiritual e
              carismático. É o tempo de conhecer mais profundamente a fé
              católica, a espiritualidade da Divina Misericórdia e a missão do
              Movimento Sementes da Misericórdia.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-cream p-5">
            <h3 className="text-xl font-semibold">Serviço</h3>
            <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">
              O serviço é a resposta concreta ao chamado de Deus. Por meio dele,
              o vocacionado coloca seus dons e talentos a serviço da
              evangelização, da comunidade e dos irmãos, vivendo a caridade e a
              missão no dia a dia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
