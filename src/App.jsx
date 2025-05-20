import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import Navbar from "./Components/Navbar/navbar"
import LogoShowcase from "./sections/LogoShowcase"
import FeatureCards from "./sections/FeatureCards"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoShowcase/>
      <FeatureCards/>
    </>

  )
}

export default App
