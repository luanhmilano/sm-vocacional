import img1 from '../../assets/img-carrosel-1.jpeg';
import img2 from '../../assets/testimonials/alessandro-testimonial.jpg';
import img3 from '../../assets/testimonials/emilly-testemonial.jpg';

const textTestimonials = [
    {
        name: '1',
        level: 'Aspirante',
        imageUrl: img1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto eos hic dignissimos consectetur nisi quisquam obcaecati harum ad reiciendis nobis beatae iusto.',
    },
    {
        name: 'Alessandro',
        level: 'Consagrado',
        imageUrl: img2,
        text: 'Vocacional acolhedor, cheio de desafios espirituais, físicos, lutas e persistências. Uma família que Deus me deu nesse processo que foi essencial para a caminhada, até a consagração.',
    },
    {
        name: 'Emilly',
        level: 'Consagrada',
        imageUrl: img3,
        text: 'Meu processo vocacional foi progressivo, onde meus medos e traumas foram sendo curados à medida que ia avançando nos ministérios! Encontrei meu lugar, minha família que me acolheu com amor misericordioso e a cada processo a cada avanço Deus foi confirmado que ali Ele queria me fazer santa.',
    },
    {
        name: '4',
        level: 'Aspirante',
        imageUrl: img1,
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

                

                {/* Depoimentos em texto */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {textTestimonials.map((item) => (
                        <blockquote
                            key={item.name}
                            className="rounded-2xl bg-brand-pearl/50 p-6 shadow-sm ring-1 ring-brand-cream"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="h-16 w-16 rounded-full object-cover ring-2 ring-brand-cream"
                                />
                                <footer>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm font-medium uppercase tracking-wide text-brand-sienna">{item.level}</p>
                                </footer>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-brand-sienna/70 sm:text-base">"{item.text}"</p>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}