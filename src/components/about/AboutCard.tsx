import type { ReactNode } from "react";

interface AboutCardProps {
    image: string;
    title: string;
    description: ReactNode;
}

export function AboutCard({ image, title, description }: AboutCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl bg-brand-pearl/50 shadow-sm ring-1 ring-brand-cream flex flex-col sm:flex-row sm:items-stretch">
            <div className="relative h-56 w-full shrink-0 sm:h-auto sm:w-96 sm:self-stretch">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-sienna/70 sm:text-base">{description}</p>
            </div>
        </article>
    );
}
