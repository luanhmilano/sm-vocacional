export default function Testemonial() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            {/* VÍDEOS E TEXTOS DE TESTEMUNHO */}
            <div className="mx-auto max-w-6xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">Testemunhos</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Experiências de quem já percorreu esse caminho</h2>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <article className="flex min-h-56 items-end rounded-3xl bg-brand-cream/50 p-6">
                            <p className="text-lg font-semibold text-brand-sienna/80">VÍDEO 1</p>
                        </article>
                        <article className="flex min-h-56 items-end rounded-3xl bg-brand-cream/50 p-6">
                            <p className="text-lg font-semibold text-brand-sienna/80">VÍDEO 2</p>
                        </article>
                    </div>

                    <aside className="rounded-3xl bg-brand-pearl/50 p-6 shadow-sm ring-1 ring-brand-cream">
                        <h3 className="text-xl font-semibold">Outros</h3>
                        <div className="mt-4 space-y-4 text-sm leading-7 text-brand-sienna/70 sm:text-base">
                            <p>Depoimento 1</p>
                            <p>Depoimento 2</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}