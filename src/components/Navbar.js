import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

import g20 from './media/g20.png'
import afrideslogo from './media/logo.png'
import t20 from './media/t20.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='w-screen h-20 relative bg-white flex justify-between items-center px-4 lg:px-8 shadow sm:h-24 duration-300'>
                {/* Logo Section */}
                <div className='flex h-1/3 lg:h-1/2 items-center mr-auto w-24 md:w-32 lg:w-40'>
                    <img className='h-full relative -top-1' src={g20} alt="G20 Logo" />
                    <img className='h-1/2' src={afrideslogo} alt="Afrides Logo" />
                    <img className='h-2/3' src={t20} alt="T20 Logo" />
                </div>

                {/* Menu Links */}
                <div className={`absolute top-0 left-0 h-screen w-screen bg-white z-40 flex flex-col items-center justify-center space-y-8 transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-all duration-500 ease-in-out sm:hidden`}>
                    <a href="#home-section" className='text-4xl text-[#3f3f3f] font-bold hover:text-[#005720] transform hover:scale-110 transition duration-300'>Home</a>
                    <a href="#speakers-section" className='text-4xl text-[#3f3f3f] font-bold hover:text-[#005720] transform hover:scale-110 transition duration-300'>Speakers</a>
                    <a href="/schedule.docx" download className='text-4xl text-[#3f3f3f] font-bold hover:text-[#005720] transform hover:scale-110 transition duration-300'>Schedule</a>
                    <a href='/dealroom.pdf' download className='text-4xl text-[#3f3f3f] font-bold hover:text-[#005720] transform hover:scale-110 transition duration-300'>Deal Room</a>
                </div>



                {/* Sponsor Button */}
                <div className='ml-auto w-40 sm:w-48 hover:scale-110 duration-200'>
                    <a href="sponsors.pdf" download className='bg-gradient-to-r from-[#005720] to-[#10582b] text-white font-semibold text-center py-2 px-3 md:py-3 md:px-4 rounded-lg'>Sponsor Today</a>
                </div>

                {/* Menu Toggle Button */}
                <div className='sm:hidden z-50'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            <div className='w-screen h-20 relative bg-white hidden sm:flex justify-center items-center px-4 lg:px-8 shadow hover:h-24 duration-300'>
                <div className='flex  h-1/3 lg:h-1/2 items-center mr-auto md:w-40 lg:w-40'>
                    <img className='h-full relative -top-1' src={g20} />
                    <img className='h-1/2' src={afrideslogo} />
                    <img className='h-2/3' src={t20} />
                </div>
                <div className='flex items-center space-x-2 md:space-x-4 lg:space-x-6 text-[#3f3f3f]  text-md md:text-lg lg:text-xl'>
                    <a href="#home-section" className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Home</a>
                    <a href="#speakers-section" className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Speakers</a>
                    <a href="/schedule.docx" download className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Schedule</a>
                    <a href='/dealroom.pdf' download className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Deal Room</a>
                </div>
                <div className='ml-auto w-32 md:w-40 hover:scale-110 duration-200'>
                    <a href="sponsors.pdf" download className='bg-gradient-to-r from-[#005720] to-[#10582b] text-white font-semibold text-center py-2 px-1 md:py-3 md:px-4 rounded-lg'>Sponsor Today</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
