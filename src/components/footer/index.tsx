import WhatsAppIcon from "../../assets/whatsapp-brands-solid-full.svg";
import InstagramIcon from "../../assets/instagram-2016-logo-svgrepo-com.svg";
import GmailIcon from "../../assets/gmail-svgrepo-com.svg";
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
} from "../utils/constants/zap-numbers.constant";
import LogoVocacional from "../../assets/vocacional-logo.png";

const phoneNumbers = [PRIMARY_PHONE, SECONDARY_PHONE];

const text = encodeURIComponent(
  "Olá! Conheci o Processo Vocacional 2026 pelo site e gostaria de receber mais informações sobre o caminho vocacional.",
);

function getRandomWhatsAppUrl() {
  const phone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];

  return `https://wa.me/${phone}?text=${text}`;
}

export default function FooterCTA() {
  function handleWhatsAppClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.open(getRandomWhatsAppUrl(), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section id="footer" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl bg-gradient-to-br from-brand-crimson via-[#9A5034] to-[#7f3f29] px-6 py-10 text-white shadow-[0_24px_80px_-40px_rgba(66,31,19,0.8)] sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-center lg:px-10">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <img
              src={LogoVocacional}
              alt="Logo do Processo Vocacional"
              className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
            />
          </div>

          <div className="space-y-5">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Ficou interessado(a) em conhecer mais?
              </h2>
              <p className="text-sm leading-7 text-white/78 sm:text-base">
                Se após conhecer o processo você sente o desejo de dar um passo
                no discernimento vocacional, entre em contato conosco. Teremos
                alegria em caminhar com você.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <a
                href={getRandomWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contatar pelo WhatsApp"
                onClick={handleWhatsAppClick}
                className="flex w-full items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-left text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <img
                    src={WhatsAppIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-base">WhatsApp</span>
                  <span className="block text-xs font-normal text-white/80">
                    Fale com um coordenador
                  </span>
                </span>
              </a>

              <a
                href="https://instagram.com/sementesdamisericordia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram"
                className="flex w-full items-center gap-3 rounded-2xl border border-white/14 bg-white/8 px-5 py-4 text-left text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <img
                    src={InstagramIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-base">Instagram</span>
                  <span className="block break-words text-xs font-normal text-white/75">
                    @sementesdamisericordia
                  </span>
                </span>
              </a>

              <a
                href="mailto:sementesdamisericordia@gmail.com?subject=Informações%20Processo%20Vocacional&body=Olá!%20Gostaria%20de%20receber%20mais%20informações%20sobre%20o%20Processo%20Vocacional."
                aria-label="Enviar email"
                className="flex w-full items-center gap-3 rounded-2xl border border-white/14 bg-white/8 px-5 py-4 text-left text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:col-span-2 xl:col-span-1"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <img
                    src={GmailIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </span>
                <span className="min-w-0 break-words">
                  <span className="block text-base">E-mail</span>
                  <span className="block text-xs font-normal text-white/75">
                    sementesdamisericordia@gmail.com
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-sand/30 bg-brand-pearl px-4 py-6 text-center text-sm text-brand-sienna sm:px-6 lg:px-8">
        <p className="mx-auto max-w-5xl font-medium leading-6 tracking-wide">
          Movimento Sementes da Misericórdia - Basílica Nossa Senhora de Nazaré
          do Desterro
        </p>
      </footer>
    </>
  );
}
