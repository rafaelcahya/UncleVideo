import React, { useState } from 'react'

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isRevealBG, setIsRevealBG] = useState(false);

    function dropdownToggle() {
        setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
    }

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setIsRevealBG(true);
        }
        else{
            setIsRevealBG(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);
    return (
        <> 
            <div className={`${isRevealBG ? 'bg-black duration-200' : 'bg-transparent'} fixed top-0 z-10 w-full flex justify-between gap-5 px-5 md:px-14 py-5 nunito-400 text-white`}>
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
                <div className='flex items-center gap-2 hover:bg-[#090809] rounded-full p-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
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