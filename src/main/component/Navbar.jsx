import React, { useState } from 'react'

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    function dropdownToggle() {
        setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
    }
    return (
        <>
            <div className='fixed top-0 z-10 w-full flex justify-between gap-5 p-5 nunito-400 text-white'>
                <div className='flex items-center gap-5 tracking-wide'>
                    <div className='bg-gray-800 w-10 h-10'></div>
                    <p className='block md:hidden cursor-pointer' onClick={dropdownToggle}>Menu</p>
                    <div className='hidden md:flex items-center gap-10 nunito-400'>
                        <p>Home</p>
                        <p>Explore</p>
                        <p>Trending</p>
                        <p>Category</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 bg-[#090809] w-auto md:w-[400px] rounded-full md:rounded-md p-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#6D6D6D]"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder='Search your favorite video' className='hidden md:block bg-[#090809] placeholder:text-[#6D6D6D] nunito-400 w-full outline-none tracking-wide' />
                </div>
            </div>
            {isDropdownOpen && (
                <div className='block md:hidden fixed top-20 z-10 nunito-400 text-white bg-black w-full'>
                    <div className='flex flex-col nunito-400 tracking-wide'>
                        <p className='py-3 px-5 hover:bg-stone-900'>Home</p>
                        <p className='py-3 px-5 hover:bg-stone-900'>Explore</p>
                        <p className='py-3 px-5 hover:bg-stone-900'>Trending</p>
                        <p className='py-3 px-5 hover:bg-stone-900'>Category</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar