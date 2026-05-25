import About from "./components/about"
import Checklist from "./components/checklist"
import FooterCTA from "./components/footer"
import Intro from "./components/intro"
import Testemonial from "./components/testimonial"
import Timeline from "./components/timeline"
import WhatIs from "./components/what-is"
import WhatIsNot from "./components/what-is-not"

function App() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <Intro />
      <About />
      <WhatIs />
      <WhatIsNot />
      <Timeline />
      <Testemonial />
      <Checklist />
      <FooterCTA />
    </main>
  )
}

export default App
