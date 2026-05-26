export default function Checklist() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-3xl bg-brand-pearl/50 px-6 py-8 shadow-sm ring-1 ring-brand-cream sm:px-8 sm:py-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">Antes de iniciar</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Confira se você se reconhece nesse caminho</h2>
                </div>

                <div className="mt-8 grid gap-4">
                    <label htmlFor="check-one" className="flex items-start gap-3 rounded-2xl border border-brand-cream p-4">
                        <input className="mt-1 h-4 w-4 rounded border-brand-cream text-brand-crimson" type="checkbox" id="check-one" name="check-one" value="sim" />
                        <span className="text-sm leading-6 text-brand-sienna/80 sm:text-base">Entendo que o processo exige compromisso.</span>
                    </label>

                    <label htmlFor="check-two" className="flex items-start gap-3 rounded-2xl border border-brand-cream p-4">
                        <input className="mt-1 h-4 w-4 rounded border-brand-cream text-brand-crimson" type="checkbox" id="check-two" name="check-two" value="sim" />
                        <span className="text-sm leading-6 text-brand-sienna/80 sm:text-base">Desejo viver um caminho de discernimento.</span>
                    </label>

                    <label htmlFor="check-three" className="flex items-start gap-3 rounded-2xl border border-brand-cream p-4">
                        <input className="mt-1 h-4 w-4 rounded border-brand-cream text-brand-crimson" type="checkbox" id="check-three" name="check-three" value="sim" />
                        <span className="text-sm leading-6 text-brand-sienna/80 sm:text-base">Estou aberto(a) ao acompanhamento.</span>
                    </label>

                    <label htmlFor="check-four" className="flex items-start gap-3 rounded-2xl border border-brand-cream p-4">
                        <input className="mt-1 h-4 w-4 rounded border-brand-cream text-brand-crimson" type="checkbox" id="check-four" name="check-four" value="sim" />
                        <span className="text-sm leading-6 text-brand-sienna/80 sm:text-base">Compreendo que este caminho envolve disponibilidade humana e espiritual.</span>
                    </label>
                </div>
            </div>
        </section>
    )
}