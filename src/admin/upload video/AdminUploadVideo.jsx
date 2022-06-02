import React from 'react'
import AdminSidebar from '../component/AdminSidebar'
import InputMultipleImage from '../component/InputMultipleImage'
import InputTags from '../component/InputTags'
import InputVideo from '../component/InputVideo'

function AdminUploadVideo() {
    return (
        <>
            <AdminSidebar/>
            <div className='nunito-500 ml-[250px] tracking-wide'>
                <div className='fixed top-0 z-10 w-full bg-[#F9F9F9] pl-10 py-5'>
                    <p className='text-[20px] nunito-600 text-[#575757]'>Input Video</p>
                    <p className='text-[14px] text-[#7E7E7E]'>The video itself will be uploaded at uncleprepporn.com along with the details. Make sure all forms are entered correctly.</p>
                </div>
                <div className='px-10 py-32'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <InputVideo width={400} height={300} />
                        </div>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <label htmlFor="" className='text-[#575757]'>Video Title</label>
                            <input type="text" placeholder='Input the video title' className='border border-[#DCDCDC] tracking-wide rounded-md py-2 px-5 outline-none placeholder:text-[14px]'/>
                        </div>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <label htmlFor="" className='text-[#575757]'>Video Tags</label>
                            <InputTags tags={[]}/>
                        </div>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <label htmlFor="" className='text-[#575757]'>Description</label>
                            <textarea name="" id="" cols="20" rows="5" placeholder='Input the video title' className='border border-[#DCDCDC] tracking-wide rounded-md py-2 px-5 outline-none placeholder:text-[14px] resize-y'></textarea>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <InputMultipleImage/>
                        </div>
                    </div>
                    <p className='bg-[#FF7272] text-white nunito-600 text-[14px] py-3 px-5 rounded-md w-fit'>Upload video</p>
                </div>
            </div>
        </>
    )
}

export default AdminUploadVideo