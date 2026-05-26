import img1 from '../../assets/img-carrosel-1.jpeg';
import img2 from '../../assets/img-carrosel-2.jpeg';
import img3 from '../../assets/img-carrosel-3.jpeg';
import { FadeInScroll } from '../utils/wrapper';
import { AboutCard } from './AboutCard';

const cards = [
    {
        image: img1,
        title: 'História do Movimento',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.',
    },
    {
        image: img2,
        title: 'Carisma',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.',
    },
    {
        image: img3,
        title: 'Espiritualidade',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.',
    },
    {
        image: img1,
        title: 'Formas de Vida',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.',
    },
    {
        image: img2,
        title: 'Ministérios',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.',
    },
    {
        image: img3,
        title: 'Serviço Paroquial',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur nisi quisquam, obcaecati harum ad reiciendis nobis beatae iusto neque quaerat aliquam, est architecto facilis maxime? Aliquid iusto eos hic.',
    },
];

export default function About() {
    return (
        <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <FadeInScroll>
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-sienna">Sobre o movimento</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Conheça a história, o carisma e a forma de viver essa missão</h2>
                    </div>
                </FadeInScroll>

                <div className="mt-10 grid gap-6">
                    {cards.map((card, index) => (
                        <FadeInScroll key={card.title} delay={index * 0.1}>
                            <AboutCard
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        </FadeInScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}