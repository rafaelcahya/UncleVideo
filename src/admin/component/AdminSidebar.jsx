import React from 'react'

function AdminSidebar() {
    return (
        <>
            <div className='fixed left-0 top-0 bg-[#F9F9F9] w-[250px] h-full'>
                <div className='flex flex-col items-start gap-10 p-10 nunito-500 tracking-wide'>
                    <p className='nunito-800'>UncleHub Admin</p>
                    <div className='flex flex-col gap-5'>
                        <p className='nunito-800 uppercase text-[#575757] text-[11px] tracking-widest'>menu</p>
                        <div className='flex flex-col gap-5 pl-4'>
                            <p className='text-[#7E7E7E]'>My Uploaded</p>
                            <p className='text-[#7E7E7E]'>Performance</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>   
                        <p className='nunito-800 uppercase text-[#575757] text-[11px] tracking-widest'>input</p>
                        <div className='flex flex-col gap-5 pl-4'>
                            <p className='text-[#7E7E7E]'>Upload Video</p>
                            <p className='text-[#7E7E7E]'>Upload Photo</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar