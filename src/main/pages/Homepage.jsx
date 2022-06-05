/* eslint-disable no-useless-concat */
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination } from "swiper";

import Navbar from '../component/Navbar'

import ImageDummyHomepage from '../../asset/imageDummyHomepage.jpg'

function Homepage() {
    const title = ["Agent of The Vacuum", "Pilot With A Spaceship", " Volunteer Of Moondust", "Figures On My Ship", " Assassins And Spies"]

    const words = ["Pluviophile", "Idyllic", "Solitude", "Petrichor", "Clinomania"]
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
                allowTouchMove={false}
                modules={[Autoplay, EffectFade, Pagination]}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: 'true',
                    type: 'bullets',
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '<em>'+ 'tests' +'</em>' + '<i></i>' + '<b></b>' + '</span>';
                    },
                }}>
                {
                    Array.from({length: 5}).map((_, i) => (
                        <SwiperSlide key={i}>
                            <div className='overlay'>
                                <div className='flex flex-col gap-5 py-44 px-5 md:px-20 lg:px-32 text-white tracking-wider cursor-default'>
                                    <p className='nunito-700 text-[31px]'>{title[i]}</p>
                                    <div className='flex flex-col md:flex-row gap-5 md:gap-14 nunito-600 text-[14px]'>
                                        <div className='flex gap-14'>
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
                                    <p className='nunito-400 text-[#A7A7A7] w-[500px] leading-8'>A young Japanese architect who has just finished college, meets a young Japanese woman. She is the woman he dreams of marrying.</p>
                                    <div className='bg-[#D30000] p-4 rounded-full w-fit'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </div>
                                    <div className="swiper-pagination flex justify-between gap-5 py-10"></div>
                                </div>
                            </div>
                            <img src={ImageDummyHomepage} alt="" className='h-[600px] object-cover w-full'/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='flex xl:hidden flex-col gap-10 tracking-wider bg-[#0D0B0B] text-white px-5 md:px-16 pt-20'>
                <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                    <p className='nunito-700 text-[25px]'>Category</p>
                    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-wrap gap-4'>
                        {
                            Array.from({length: 25}).map((_, i) => (
                                <p className='text-[13px] bg-[#171717] hover:bg-[#343434] px-3 py-1.5 rounded-full w-fit cursor-pointer'>{words[Math.floor(Math.random()*words.length)]}</p>
                            ))
                        }
                    </div>
                    <div className='showmore-button-hover flex flex-col items-center py-2 cursor-pointer'>
                        <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-start gap-10 bg-[#0D0B0B] text-white px-5 md:px-16 py-20'>
                <div className='flex flex-col gap-20 w-full xl:w-3/4'>
                    <div className='flex flex-col gap-20 tracking-wider'>
                        <div className='flex flex-col gap-10'>
                            <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                                <p className='nunito-700 text-[25px]'>Trending video</p>
                                <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7'>
                                {
                                    Array.from({length: 8}).map((_, i) => (
                                        <div className='group flex flex-col gap-3 w-fit cursor-pointer'>
                                            <div>
                                                <div className='overlay-video opacity-0 group-hover:opacity-100 duration-200 transition rounded-md'>
                                                    <div className='absolute inset-0 flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <img src={ImageDummyHomepage} alt="" className='w-[225px] h-[125px] object-cover rounded-md'/>
                                            </div>
                                            <div className='flex flex-col gap-2 w-[225px]'>
                                                <p className='nunito-700'>Stranger To My Space Journey</p>
                                                <div className='flex justify-between items-center nunito-600 text-[#6D6D6D] text-[13px]'>
                                                    <p>200k views</p>
                                                    <div className='flex items-center gap-1'>
                                                        <svg width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="#D30000" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#D30000" strokeLinejoin="round"/>
                                                        </svg>
                                                        <p>15k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-20 tracking-wider'>
                        <div className='flex flex-col gap-10'>
                            <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                                <p className='nunito-700 text-[25px]'>Recently releases</p>
                                <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7'>
                                {
                                    Array.from({length: 8}).map((_, i) => (
                                        <div className='group flex flex-col gap-3 w-fit cursor-pointer'>
                                            <div>
                                                <div className='overlay-video opacity-0 group-hover:opacity-100 duration-200 transition rounded-md'>
                                                    <div className='absolute inset-0 flex items-center justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <img src={ImageDummyHomepage} alt="" className='w-[225px] h-[125px] object-cover rounded-md'/>
                                            </div>
                                            <div className='flex flex-col gap-2 w-[225px]'>
                                                <p className='nunito-700'>Stranger To My Space Journey</p>
                                                <div className='flex justify-between items-center nunito-600 text-[#6D6D6D] text-[13px]'>
                                                    <p>200k views</p>
                                                    <div className='flex items-center gap-1'>
                                                        <svg width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="#D30000" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#D30000" strokeLinejoin="round"/>
                                                        </svg>
                                                        <p>15k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden xl:flex flex-col gap-20 w-1/4'>
                    <div className='flex flex-col gap-10 tracking-wider'>
                        <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                            <p className='nunito-700 text-[25px]'>Category</p>
                            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {
                                Array.from({length: 30}).map((_, i) => (
                                    <p className='text-[13px] bg-[#171717] hover:bg-[#343434] px-3 py-1.5 rounded-full w-fit cursor-pointer'>{words[Math.floor(Math.random()*words.length)]}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-10 tracking-wider'>
                        <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                            <p className='nunito-700 text-[25px]'>History watch</p>
                            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-4'>
                                {
                                    Array.from({length: 5}).map((_, i) => (
                                        <div className='flex items-center gap-5'>
                                            <img src={ImageDummyHomepage} alt="" className='w-[120px] h-[60px] object-cover rounded-md'/>
                                            <div>
                                                <p className='nunito-600 text-[15px]'>Stranger To My Space Journey</p>
                                                <p className='nunito-600 text-[#6D6D6D] text-[13px]'>Yesterday</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <p className='showmore-button-hover text-[13px] py-2 text-center cursor-pointer w-full'>More history watch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block xl:hidden bg-[#0D0B0B] text-white px-5 md:px-16 py-10'>
                <div className='flex flex-col gap-20 tracking-wider'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                            <p className='nunito-700 text-[25px]'>History watch</p>
                            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10'>
                            {
                                Array.from({length: 8}).map((_, i) => (
                                    <div className='flex items-center gap-5 cursor-pointer'>
                                        <img src={ImageDummyHomepage} alt="" className='w-[225px] h-[125px] object-cover rounded-md'/>
                                        <div className='flex flex-col gap-5 w-[250px] lg:w-full'>
                                            <div className='flex flex-col gap-1'>
                                                <p className='nunito-600 text-[15px]'>Stranger To My Space Journey</p>
                                                <p className='nunito-400 text-[15px] text-[#A7A7A7]  line-clamp-2'>A young Japanese architect who has just finished college, meets a young Japanese woman. She is the woman he dreams of marrying.</p>
                                            </div>
                                            <p className='nunito-600 text-[#6D6D6D] text-[13px]'>Yesterday</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage