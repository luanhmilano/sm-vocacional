const videoTestimonials = [
    {
        url: 'https://www.youtube.com/embed/MN1PvG1ri20?si=CV5qyTXmD2gSBBN3',
        name: 'Cássia',
        level: 'Consagrada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime.',
    },
    {
        url: 'https://www.youtube.com/embed/zDyweCSUlrw?si=vAzMTJJXBIEmoDVE',
        name: 'Laura',
        level: 'Aspirante',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime.',
    },
];

const textTestimonials = [
    {
        name: 'XXX',
        level: 'Aspirante',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto eos hic dignissimos consectetur nisi quisquam obcaecati harum ad reiciendis nobis beatae iusto.',
    },
    {
        name: 'XXX',
        level: 'Consagrado',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto eos hic dignissimos consectetur nisi quisquam obcaecati harum ad reiciendis nobis beatae iusto.',
    },
    {
        name: 'XXX',
        level: 'Consagrada',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto eos hic dignissimos consectetur nisi quisquam obcaecati harum ad reiciendis nobis beatae iusto.',
    },
    {
        name: 'XXX',
        level: 'Aspirante',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto eos hic dignissimos consectetur nisi quisquam obcaecati harum ad reiciendis nobis beatae iusto.',
    },
];

export default function Testemonial() {
    return (
        <section id="testimonial" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">Testemunhos</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Experiências de quem já percorreu esse caminho</h2>
                </div>

                {/* Vídeos */}
                <div className="mt-10 grid gap-6">
                    {videoTestimonials.map((item) => (
                        <article
                            key={item.url}
                            className="overflow-hidden rounded-2xl bg-brand-pearl/50 shadow-sm ring-1 ring-brand-cream flex flex-col sm:flex-row"
                        >
                            <div className="relative w-full aspect-video sm:aspect-auto sm:h-72 sm:w-96 sm:shrink-0">
                                <iframe
                                    className="absolute inset-0 h-full w-full"
                                    src={item.url}
                                    title={item.name}
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-sm font-semibold uppercase tracking-wide text-brand-sienna mt-1">{item.level}</p>
                                <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Depoimentos em texto */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {textTestimonials.map((item) => (
                        <blockquote
                            key={item.name}
                            className="rounded-2xl bg-brand-pearl/50 p-6 shadow-sm ring-1 ring-brand-cream"
                        >
                            <p className="text-sm leading-7 text-brand-sienna/70 sm:text-base">"{item.text}"</p>
                            <footer className="mt-4">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm font-medium uppercase tracking-wide text-brand-sienna">{item.level}</p>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}