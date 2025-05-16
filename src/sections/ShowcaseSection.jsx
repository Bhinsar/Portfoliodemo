import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);

  
  
  
  useGSAP(()=>{
    const project = [projectRef1.current, projectRef2.current, projectRef3.current]
    project.forEach((cards, index)=>{
      gsap.fromTo(cards,{
        opacity:0,
        y:50,
      },
      {
        opacity:1,
        y:0,
        duration:1,
        delay: 0.3*(index+1),
        scrollTrigger:{
          trigger:cards,
          start:"top bottom -=100",
        }
      })
    })
    // gsap.fromTo(sectionRef.current,{
    //   opacity:0,
    //   y:50,
    // },
    // {
    //   opacity:1,
    //   y:0,
    //   duration:1,

    // })
  })
  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={projectRef1}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="showcase" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called App
              </h2>
              <p className="text-white-50 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={projectRef2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="project" />
              </div>
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called App
              </h2>
            </div>
            <div className="project" ref={projectRef3}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/images/project3.png" alt="project" />
              </div>
              <h2>Lorem, ipsum dolor.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
