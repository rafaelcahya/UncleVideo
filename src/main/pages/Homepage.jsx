import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

import Navbar from '../component/Navbar'

import ImageDummyHomepage from '../../asset/imageDummyHomepage.jpg'

function Homepage() {
    const title = ["Agent of The Vacuum", "Pilot With A Spaceship", " Volunteer Of Moondust", "Figures On My Ship", " Assassins And Spies"]
    return (
        <>
            <Navbar/>
            <Swiper
                slidesPerView={1}
                effect={"fade"}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                speed={1000}
                modules={[Autoplay, EffectFade]}>
                {
                    Array.from({length: 5}).map((_, i) => (
                        <SwiperSlide key={i}>
                            <div className='img'>
                                <div className='overlay'>
                                    <div className='flex flex-col gap-5 py-40 px-5 md:px-20 lg:px-32 text-white tracking-wide cursor-default'>
                                        <p className='nunito-700 text-[31px]'>{title[i]}</p>
                                        <div className='flex flex-col md:flex-row gap-5 md:gap-20 nunito-600 text-[14px]'>
                                            <div className='flex gap-20'>
                                                <p>2022</p>
                                                <p>15 Min</p>
                                            </div>
                                            <div className='flex gap-5'>
                                                {
                                                    Array.from({length: 5}).map((_, i) => (
                                                        <p>Sibilance</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <p className='nunito-400 text-[#A7A7A7] text-[14px] w-[500px] leading-8'>A young Japanese architect who has just finished college, meets a young Japanese woman. She is the woman he dreams of marrying.</p>
                                        <div className='bg-[#D30000] p-4 rounded-full w-fit'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                        </div>
                                    </div>
                                </div>
                                <img src={ImageDummyHomepage} alt="" className='h-[600px] object-cover w-full'/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default Homepage