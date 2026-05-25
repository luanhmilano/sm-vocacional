export default function Intro() {
    return (
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            {/* BANNER / CARROSEL DE IMAGENS */}
            <div className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-white px-6 py-12 text-center shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-16">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Vocacional</p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">Processo Vocacional 2026</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">"Não fostes vós que me escolhestes; fui eu que vos escolhi."</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-stone-500 sm:text-base">João 15, 16</p>
            </div>
        </section>
    )
}