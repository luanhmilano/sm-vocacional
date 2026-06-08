import InstagramIcon from "../../assets/instagram-2016-logo-svgrepo-com.svg";
import GmailIcon from "../../assets/gmail-svgrepo-com.svg";
import LogoVocacional from "../../assets/vocacional-logo.png";
import { formsUrl } from "../utils/constants/form";

export default function FooterCTA() {
  return (
    <>
      <section id="footer" className="px-3 py-12 sm:px-4 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl bg-gradient-to-br from-brand-crimson via-[#9A5034] to-[#7f3f29] px-4 py-8 text-white shadow-[0_24px_80px_-40px_rgba(66,31,19,0.8)] sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,clamp(180px,24vw,240px))_minmax(0,1fr)] lg:items-center lg:px-10 lg:py-12">
          <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
            <img
              src={LogoVocacional}
              alt="Logo do Processo Vocacional"
              className="h-auto w-full max-w-[clamp(132px,42vw,220px)] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)] sm:max-w-[clamp(160px,32vw,240px)] lg:max-w-none"
            />
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <h2 className="text-[clamp(1.7rem,7vw,3rem)] font-semibold leading-tight tracking-tight">
                Ficou interessado(a)?
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-7 text-white/78 sm:text-base lg:mx-0">
                Se após conhecer o processo você sente o desejo de dar um passo
                no discernimento vocacional, se inscreva pelo formulário. Teremos
                alegria em caminhar com você.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={formsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir formulário de contato"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-brand-crimson shadow-[0_18px_40px_-22px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 hover:bg-brand-pearl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-7 sm:text-base"
              >
                Abrir formulário de inscrição
              </a>

              <div className="grid gap-2 border-t border-white/12 pt-4 text-sm text-white/72 sm:grid-cols-2 sm:gap-3">
                <a
                  href="https://instagram.com/sementesdamisericordia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar Instagram"
                  className="inline-flex items-center gap-2 self-start transition hover:text-white"
                >
                  <img
                    src={InstagramIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 opacity-75"
                  />
                  <span>@sementesdamisericordia</span>
                </a>

                <a
                  href="mailto:sementesdamisericordia@gmail.com?subject=Informações%20Processo%20Vocacional&body=Olá!%20Gostaria%20de%20receber%20mais%20informações%20sobre%20o%20Processo%20Vocacional."
                  aria-label="Enviar email"
                  className="inline-flex items-center gap-2 self-start transition hover:text-white"
                >
                  <img
                    src={GmailIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 opacity-75"
                  />
                  <span>sementesdamisericordia@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-sand/30 bg-brand-pearl px-4 py-5 text-center text-xs text-brand-sienna sm:px-6 sm:py-6 sm:text-sm lg:px-8">
        <p className="mx-auto max-w-5xl font-medium leading-5 tracking-wide sm:leading-6">
          Movimento Sementes da Misericórdia - Basílica Nossa Senhora de Nazaré
          do Desterro
        </p>
      </footer>
    </>
  );
}
