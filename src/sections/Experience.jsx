import React from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import { expCards } from '../Constants'
import GlowCards from '../Components/GlowCards/GlowCards'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Experience() {
  return (
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader title = "Professional Work Experience" sub ="My Career Overview"/>
            <div className='mt-32 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-2'>
                    {expCards.map((card, i)=>(
                        <div key={card.title} className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                                <GlowCards card={card} index = {i}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCards>
                            </div>
                            <div className='xl:w-4/6'>
                                <div className='flex items-start'>
                                    <div className='timeline-wrapper'>
                                        <div className='timeline'/>
                                        <div className='gradient-line w-1 h-full'/>
                                    </div>
                                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-50'>
                                        <div className='timeline-logo'>
                                            <img src={card.logoPath} alt="logo" />
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                            <p className='my-5 text-white-50'>
                                                {card.date}
                                            </p>
                                            <p className='text-[#839cb5] italic'>
                                                Responsibilities
                                            </p>
                                            <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                                {card.responsibilities.map((res, i)=>(
                                                    <li key={i} className='text-lg'>
                                                        {res}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience