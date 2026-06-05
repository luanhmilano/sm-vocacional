import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import ProgressStepper from "./ProgressStepper";
import smLogoMonocrome from '../../assets/sm-logo-monocromatic.png';

const navLinks = [
    { id: "about", label: "Sobre", href: "#about" },
    { id: "what-is", label: "O que é", href: "#what-is" },
    { id: "what-is-not", label: "O que não é", href: "#what-is-not" },
    { id: "timeline", label: "Etapas", href: "#timeline" },
    { id: "testimonial", label: "Depoimentos", href: "#testimonial" },
    { id: "checklist", label: "Inscrição", href: "#checklist" },
];

const steps = [
    { id: "intro", label: "Início" },
    ...navLinks.map((link) => ({ id: link.id, label: link.label })),
    { id: "footer", label: "Contato" },
];

const sectionIds = steps.map((step) => step.id);

function scrollTo(href: string) {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const activeSection = useIntersectionObserver(sectionIds);

    return (
        <header className="sticky top-0 z-50 bg-brand-pearl/95 backdrop-blur-md">
            <div className="mx-auto flex h-14 lg:h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 text-white"
                >
                    <img
                        src={smLogoMonocrome}
                        alt="Logo do Processo Vocacional"
                        className="h-auto w-[clamp(2.5rem,8vw,3.125rem)] shrink-0 object-contain"
                    />
                </a>
            
                <div className="hidden lg:flex flex-1 justify-center">
                    <ProgressStepper steps={steps} activeSection={activeSection} />
                </div>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="text-sm font-medium tracking-wide text-black transition-colors hover:scale-110 hover:underline cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <button
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex items-center justify-center text-black lg:hidden"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <div className="lg:hidden px-5 py-2 border-t border-brand-sand/20">
                <ProgressStepper steps={steps} activeSection={activeSection} />
            </div>

            {open && (
                <div className="border-t border-white/10 bg-brand-crimson lg:hidden">
                    <nav className="flex flex-col px-5 py-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => {
                                    setOpen(false);
                                    // Wait for mobile menu to collapse before calculating scroll target.
                                    requestAnimationFrame(() => {
                                        scrollTo(link.href);
                                    });
                                }}
                                className="py-3 text-left text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
