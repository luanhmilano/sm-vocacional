import img1 from "../../assets/img-carrosel-1.jpeg";
import img2 from "../../assets/img-carrosel-2.jpeg";
import img3 from "../../assets/img-carrosel-3.jpeg";
import logo from "../../assets/main-logo.png";

import { EmblaCarousel } from "../utils/embla";

const carouselImages = [
    { src: img1, alt: "Vocacional imagem 1" },
    { src: img2, alt: "Vocacional imagem 2" },
    { src: img3, alt: "Vocacional imagem 3" },
];

function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
}

export default function Intro() {
    return (
        <section className="flex h-[calc(100svh-3.5rem)] flex-col lg:h-[calc(100svh-4rem)]">
            <div className="relative h-[50svh] shrink-0 md:h-3/6 md:max-h-[615px] lg:h-3/6 lg:max-h-[615px]">
                <EmblaCarousel
                    images={carouselImages}
                    className="h-full"
                    imageClassName="block h-full w-full object-cover brightness-25"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center text-white sm:gap-2">
                    <img src={logo} alt="Sementes da Misericórdia" className="h-40 w-auto object-contain sm:h-44 md:h-44 lg:h-40" />
                    <h1 className="text-xl font-semibold tracking-widest uppercase sm:text-2xl md:text-2xl lg:text-3xl">
                        Processo Vocacional 2026
                    </h1>
                    <hr className="w-16 border-t border-white/50 sm:w-20" />
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm md:text-sm">
                        Movimento Sementes da Misericórdia
                    </p>
                </div>
            </div>

            {/* CITAÇÃO + BOTÃO */}
            <div className="flex flex-1 flex-col items-center justify-center gap-5 bg-brand-pearl px-6 text-center sm:px-10">
                <blockquote className="max-w-2xl">
                    <p className="text-3xl leading-snug font-light tracking-tight text-brand-sienna sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl">
                        "Não fostes vós que me escolhestes; fui eu que vos escolhi."
                    </p>
                    <footer className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-sienna sm:text-base">
                        João 15, 16
                    </footer>
                </blockquote>

                <button
                    onClick={scrollToAbout}
                    className="mt-1 rounded-full bg-brand-crimson px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-crimson/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-crimson sm:px-10 sm:py-4 sm:text-base"
                >
                    Quero conhecer o processo
                </button>
            </div>
        </section>
    );
}