export default function About() {
    return (
        <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
            {/* CARDS, ÍCONES E FOTOS DE ALGUMAS MISSÕES */}
            <div className="mx-auto max-w-6xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-movimento-blue">Sobre o movimento</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Conheça a história, o carisma e a forma de viver essa missão</h2>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-xl font-semibold">História do Movimento</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-xl font-semibold">Carisma</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-xl font-semibold">Espiritualidade</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-xl font-semibold">Formas de Vida</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-xl font-semibold">Ministérios</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                        <h3 className="text-xl font-semibold">Serviço Paroquial</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}