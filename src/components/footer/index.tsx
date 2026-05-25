export default function FooterCTA() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-stone-900 px-6 py-10 text-stone-50 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ficou interessado(a) em conhecer mais?</h2>
                    <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">Se após conhecer o processo você sente o desejo de dar um passo no discernimento vocacional, entre em contato conosco. Teremos alegria em caminhar com você.</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                    <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100 sm:text-base">Entre em contato</button>

                    <p className="text-sm text-stone-300">Instagram / Email</p>
                </div>
            </div>
        </section>
    )
}