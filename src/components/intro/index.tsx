import img1 from "../../assets/img-carrosel-1.jpeg";
import img2 from "../../assets/img-carrosel-2.jpeg";
import img3 from "../../assets/img-carrosel-3.jpeg";
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
            {/* CARROSEL COM TÍTULO SOBREPOSTO */}
            <div className="relative h-[50svh] shrink-0 lg:h-3/5 lg:max-h-[615px]">
                <EmblaCarousel
                    images={carouselImages}
                    className="h-full"
                    imageClassName="block h-full w-full object-cover brightness-50"
                />

                {/* OVERLAY COM TÍTULO */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 sm:text-sm">
                        Vocacional
                    </p>
                    <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        Processo Vocacional 2026
                    </h1>
                </div>
            </div>

            {/* CITAÇÃO + BOTÃO */}
            <div className="flex flex-1 flex-col items-center justify-center gap-5 bg-stone-50 px-6 text-center sm:px-10">
                <blockquote className="max-w-2xl">
                    <p className="text-2xl leading-snug font-light tracking-tight text-stone-900 sm:text-3xl lg:text-4xl xl:text-5xl">
                        "Não fostes vós que me escolhestes; fui eu que vos escolhi."
                    </p>
                    <footer className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 sm:text-base">
                        João 15, 16
                    </footer>
                </blockquote>

                <button
                    onClick={scrollToAbout}
                    className="mt-1 rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:px-10 sm:py-4 sm:text-base"
                >
                    Continuar
                </button>
            </div>
        </section>
    );
}