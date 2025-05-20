import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import Navbar from "./Components/Navbar/navbar"
import LogoShowcase from "./sections/LogoShowcase"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoShowcase/>
      <FeatureCards/>
      <Experience/>
    </>

  )
}

export default App
