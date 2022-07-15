import React from 'react'
import Navbar from '../../component/Navbar'

import ImageDummyHomepage from '../../../asset/imageDummyHomepage.jpg'

export default function Explore() {
    return (
        <>
            <div className='bg-[#0D0B0B] text-white'>
                <Navbar/>
                <div className='flex flex-col gap-10 px-5 md:px-16 pt-32'>
                    <p className='nunito-700 text-[25px]'>Explore</p>
                    <div className='flex flex-wrap gap-5'>
                        {
                            Array.from({length:6}).map((i) => (
                                <div className='w-[250px] bg-[#171717] nunito-600 tracking-wider p-5 pt-10 rounded-md bg-opacity-60 backdrop-filter backdrop-blur-lg'>
                                    <p>Trending</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-20 px-5 md:px-16 py-20'>
                    <div className='flex flex-col gap-10 tracking-wider '>
                        <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                            <p className='nunito-700 text-[25px]'>Trending video</p>
                            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-wrap gap-10'>
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
                                            <p className='nunito-600'>Stranger To My Space Journey</p>
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
                    <div className='flex flex-col gap-10 tracking-wider'>
                        <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                            <p className='nunito-700 text-[25px]'>Recently releases</p>
                            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='flex flex-wrap gap-10'>
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
                                            <p className='nunito-600'>Stranger To My Space Journey</p>
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
        </>
    )
}
