import { lazy, Suspense } from "react"
import Navbar from "./components/navbar"
import Intro from "./components/intro"
import { FadeInScroll } from "./components/utils/wrapper"

const About = lazy(() => import("./components/about"))
const Checklist = lazy(() => import("./components/checklist"))
const FooterCTA = lazy(() => import("./components/footer"))
const Testemonial = lazy(() => import("./components/testimonial"))
const Timeline = lazy(() => import("./components/timeline"))
const WhatIs = lazy(() => import("./components/what-is"))
const WhatIsNot = lazy(() => import("./components/what-is-not"))

function SectionFallback() {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <span className="block w-8 h-8 rounded-full border-2 border-brand-cream border-t-brand-crimson animate-spin" />
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-pearl text-brand-sienna">
        <FadeInScroll>
          <section id="intro">
            <Intro />
          </section>
        </FadeInScroll>

        <Suspense fallback={<SectionFallback />}>
          <FadeInScroll>
            <section id="about">
              <About />
            </section>
          </FadeInScroll>
          <FadeInScroll>
            <section id="what-is">
              <WhatIs />
            </section>
          </FadeInScroll>
          <FadeInScroll>
            <section id="what-is-not">
              <WhatIsNot />
            </section>
          </FadeInScroll>
          <FadeInScroll>
            <section id="timeline">
              <Timeline />
            </section>
          </FadeInScroll>
          <FadeInScroll>
            <section id="testimonial">
              <Testemonial />
            </section>
          </FadeInScroll>
          <FadeInScroll>
            <section id="checklist">
              <Checklist />
            </section>
          </FadeInScroll>
          <FadeInScroll>
            <section id="footer">
              <FooterCTA />
            </section>
          </FadeInScroll>
        </Suspense>
      </main>
    </>
  )
}

export default App
