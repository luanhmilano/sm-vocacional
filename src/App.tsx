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
      <span className="block w-8 h-8 rounded-full border-2 border-stone-200 border-t-movimento-red animate-spin" />
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-stone-900">
        <FadeInScroll>
          <Intro />
        </FadeInScroll>

        <Suspense fallback={<SectionFallback />}>
          <FadeInScroll>
            <About />
          </FadeInScroll>
          <FadeInScroll>
            <WhatIs />
          </FadeInScroll>
          <FadeInScroll>
            <WhatIsNot />
          </FadeInScroll>
          <FadeInScroll>
            <Timeline />
          </FadeInScroll>
          <FadeInScroll>
            <Testemonial />
          </FadeInScroll>
          <FadeInScroll>
            <Checklist />
          </FadeInScroll>
          <FadeInScroll>
            <FooterCTA />
          </FadeInScroll>
        </Suspense>
      </main>
    </>
  )
}

export default App
