import React from 'react'
import AdminSidebar from '../component/AdminSidebar'

export default function AdminMyUploaded() {
    return (
        <>
            <AdminSidebar/>
            <div className='nunito-500 ml-[250px] tracking-wide'>
                <div className='fixed top-0 z-10 w-full bg-[#F9F9F9] pl-10 py-5'>
                    <p className='text-[20px] nunito-600 text-[#575757]'>My Uploaded</p>
                </div>
                <div className='flex flex-col gap-5 px-10 py-32'>
                    {
                        Array.from({length: 5}).map((_, i) => (
                            <div className='flex justify-between items-center pr-32'>
                                <div className='flex items-center gap-5'>
                                    <p className='bg-gray-200 w-[300px] h-[150px] rounded-md'></p>
                                    <div className='flex flex-col gap-3'>
                                        <p className='nunito-700 text-[#575757]'>Victory Of Exploration</p>
                                        <p className='text-[14px] text-[#7E7E7E] line-clamp-2 w-[600px]'>Cameron Doop had always loved derelict Berlin with its eggy, enchanting estuaries. It was a place where he felt lonely. Cameron Doop had always loved derelict Berlin with its eggy, enchanting estuaries. It was a place where he felt lonely.</p>
                                        <div className='flex items-center gap-10 nunito-600 text-[14px] text-[#7E7E7E]'>
                                            <p>200k views</p>
                                            <div className='flex items-center gap-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D30000" stroke="#D30000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                <p>200k</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#575757]"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
