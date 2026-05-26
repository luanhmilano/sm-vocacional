interface AboutCardProps {
    image: string;
    title: string;
    description: string;
}

export function AboutCard({ image, title, description }: AboutCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl bg-brand-pearl/50 shadow-sm ring-1 ring-brand-cream flex flex-col sm:flex-row">
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover sm:h-72 sm:w-96 sm:shrink-0"
            />
            <div className="p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">{description}</p>
            </div>
        </article>
    );
}
