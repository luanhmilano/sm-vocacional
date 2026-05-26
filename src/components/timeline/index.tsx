export default function Timeline() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            {/* TIMELINE VERTICAL DAS ETAPAS DO PROCESSO */}
            <div className="mx-auto max-w-4xl rounded-3xl bg-brand-pearl/50 px-6 py-8 shadow-sm ring-1 ring-brand-cream sm:px-8 sm:py-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">Etapas</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Caminho de acompanhamento vocacional</h2>
                </div>

                <ul className="mt-10 space-y-6">
                    <li className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">1</span>
                        <div>
                            <h3 className="text-lg font-semibold">Interesse Inicial</h3>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">2</span>
                        <div>
                            <h3 className="text-lg font-semibold">Contato com equipe</h3>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">3</span>
                        <div>
                            <h3 className="text-lg font-semibold">Inscrição</h3>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">4</span>
                        <div>
                            <h3 className="text-lg font-semibold">Acompanhamento</h3>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">5</span>
                        <div>
                            <h3 className="text-lg font-semibold">Vivência do processo</h3>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">6</span>
                        <div>
                            <h3 className="text-lg font-semibold">Discernimento</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}