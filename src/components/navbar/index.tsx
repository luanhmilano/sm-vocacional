import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Sobre", href: "#about" },
    { label: "O que é", href: "#what-is" },
    { label: "Etapas", href: "#timeline" },
    { label: "Inscrição", href: "#checklist" },
];

function scrollTo(href: string) {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 h-14 bg-movimento-red/95 backdrop-blur-md lg:h-16">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 text-white"
                >
                    <Flame className="h-5 w-5 text-movimento-gold" strokeWidth={1.75} />
                    <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                        SM
                    </span>
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <button
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex items-center justify-center text-white lg:hidden"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-movimento-red lg:hidden">
                    <nav className="flex flex-col px-5 py-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => {
                                    scrollTo(link.href);
                                    setOpen(false);
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
