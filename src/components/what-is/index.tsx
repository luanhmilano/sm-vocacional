import { HandsPrayingIcon, LightbulbIcon, BookOpenIcon, HandHeartIcon } from "@phosphor-icons/react";

export default function WhatIs() {
  const items = [
    {
      title: "Oração",
      Icon: HandsPrayingIcon,
      description:
        "A oração é o fundamento da caminhada vocacional. Por meio dela, o vocacionado cultiva sua intimidade com Deus, fortalece sua vida espiritual e aprende a reconhecer Sua presença e ação no cotidiano.",
    },
    {
      title: "Discernimento",
      Icon: LightbulbIcon,
      description:
        "O discernimento é o processo de escuta e busca da vontade de Deus. Com o auxílio da oração, da formação e do acompanhamento, o vocacionado aprende a compreender seu chamado e a responder com liberdade e generosidade.",
    },
    {
      title: "Aprofundamento",
      Icon: BookOpenIcon,
      description:
        "O aprofundamento favorece o crescimento humano, espiritual e carismático. É o tempo de conhecer mais profundamente a fé católica, a espiritualidade da Divina Misericórdia e a missão do Movimento Sementes da Misericórdia.",
    },
    {
      title: "Serviço",
      Icon: HandHeartIcon,
      description:
        "O serviço é a resposta concreta ao chamado de Deus. Por meio dele, o vocacionado coloca seus dons e talentos a serviço da evangelização, da comunidade e dos irmãos, vivendo a caridade e a missão no dia a dia.",
    },
  ];

  return (
    <section id="what-is" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-brand-pearl/50 px-5 py-8 shadow-sm ring-1 ring-brand-cream sm:px-8 sm:py-10 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">
            O que é
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Como o processo vocacional é vivido
          </h2>
        </div>

        <ol className="relative mt-10 space-y-6 before:absolute before:left-5 before:top-6 before:h-[calc(100%-1.5rem)] before:w-px before:bg-brand-cream sm:before:left-6 lg:mx-auto lg:max-w-4xl">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.title} className="relative flex gap-4 pl-14 sm:gap-5 sm:pl-16">
                {!isLast ? (
                  <span className="absolute left-5 top-11 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-brand-crimson/50 via-brand-cream to-brand-cream sm:left-6" />
                ) : null}

                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-brand-crimson/20 bg-white text-brand-crimson shadow-sm ring-4 ring-brand-pearl/80 sm:h-12 sm:w-12">
                  <item.Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                </div>

                <article className="min-w-0 flex-1 rounded-2xl border border-brand-cream bg-white/60 p-5 shadow-sm shadow-brand-crimson/5 sm:p-6">
                  <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">
                    {item.description}
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
