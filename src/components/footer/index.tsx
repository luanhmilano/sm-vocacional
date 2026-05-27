import WhatsAppIcon from "../../assets/whatsapp-brands-solid-full.svg";
import InstagramIcon from "../../assets/instagram-2016-logo-svgrepo-com.svg";
import GmailIcon from "../../assets/gmail-svgrepo-com.svg";

const phone = "5511999999999";
const text = encodeURIComponent(
  "Olá! Conheci o Processo Vocacional 2026 pelo site e gostaria de receber mais informações sobre o caminho vocacional",
);
const url = `https://wa.me/${phone}?text=${text}`;

export default function FooterCTA() {
  return (
    <>
      <section id="footer" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-brand-crimson px-6 py-10 text-white sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ficou interessado(a) em conhecer mais?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Se após conhecer o processo você sente o desejo de dar um passo no
              discernimento vocacional, entre em contato conosco. Teremos
              alegria em caminhar com você.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contatar pelo WhatsApp"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5b] transition sm:text-base"
            >
              <img
                src={WhatsAppIcon}
                alt="Ícone do WhatsApp"
                className="h-5 w-5"
              />
              Entre em contato
            </a>

            <div className="flex flex-col items-center gap-4 text-sm text-white/70">
              <a
                href="https://instagram.com/sementesdamisericordia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <img
                  src={InstagramIcon}
                  alt="Ícone do Instagram"
                  className="h-5 w-5"
                />
                <span>@sementesdamisericordia</span>
              </a>

              <a
                href="mailto:sementesdamisericordia@gmail.com?subject=Informações%20Processo%20Vocacional&body=Olá!%20Gostaria%20de%20receber%20mais%20informações%20sobre%20o%20Processo%20Vocacional."
                aria-label="Enviar email"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <img src={GmailIcon} alt="Ícone do Email" className="h-5 w-5" />
                <span>sementesdamisericordia@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-sand/30 bg-brand-pearl px-4 py-6 text-center text-sm text-brand-sienna sm:px-6 lg:px-8">
        <p className="mx-auto max-w-5xl font-medium tracking-wide">
          Movimento Sementes da Misericórdia - Basílica Nossa Senhora de Nazaré
          do Desterro
        </p>
      </footer>
    </>
  );
}
