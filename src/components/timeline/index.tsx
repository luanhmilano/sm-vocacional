import { FootprintsIcon } from "@phosphor-icons/react";

export default function Timeline() {
    return (
        <section id="timeline" className="px-4 py-16 sm:px-6 lg:px-8">
            {/* TIMELINE VERTICAL DAS ETAPAS DO PROCESSO */}
            <div className="mx-auto max-w-4xl rounded-3xl bg-brand-pearl/50 px-6 py-8 shadow-sm ring-1 ring-brand-cream sm:px-8 sm:py-10">
                <div className="max-w-2xl">
                    <FootprintsIcon className="h-6 w-6 text-brand-sienna" weight={"thin"} />
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">Etapas</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Percurso do processo vocacional</h2>
                </div>

                <ul className="mt-10 space-y-6">
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">1</span>
                        <div>
                            <h3 className="text-lg font-semibold">Consentimento sobre o processo</h3>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">2</span>
                        <div>
                            <h3 className="text-lg font-semibold">Inscrição via Forms</h3>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">3</span>
                        <div>
                            <h3 className="text-lg font-semibold">Contato da coordenação vocacional com o interessado</h3>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">4</span>
                        <div>
                            <h3 className="text-lg font-semibold">Entrevistas</h3>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">5</span>
                        <div>
                            <h3 className="text-lg font-semibold">Início do Postulantado (6 meses)</h3>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">6</span>
                        <div>
                            <h3 className="text-lg font-semibold">Ingresso Vocacional (1 ano)</h3>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">7</span>
                        <div>
                            <h3 className="text-lg font-semibold">Transição para o Aspirantado (1 ano)</h3>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-crimson text-sm font-semibold text-white">8</span>
                        <div>
                            <h3 className="text-lg font-semibold">Discernimento para a vida consagrada</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}