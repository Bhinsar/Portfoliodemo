import Button from "../Components/Button";
import HeroExperince from "../Components/HeroModels/HeroExperince";
import { words } from "../Constants";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from "../Components/AnimatedCounter";
function Hero() {
  useGSAP(()=>{
    gsap.fromTo(".hero-text h1",{
      opacity:0,
      y:50,
    },{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.2,
      ease:'power2.inOut',
    })
  })
  return (
    <section id="hero" className="relative overflow-hiddne">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* left : hero section */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping
                <sapn className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center mp:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </sapn>
              </h1>
              <h1>Into Real Project</h1>
              <h1>That Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-sm relative z-10 pointer-events-none">
              Hi, I'm Bhinsar Jagdish a software engineer with a passion for
              building scalable and efficient systems.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              text="See My Work"
              link="/"
              id="button"
            />
          </div>
        </header>
        {/* right : hero section */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperince/>
          </div>
        </figure>
      </div>
        <AnimatedCounter/>  
    </section>
  );
}
export default Hero;
