import React from 'react'

import g20 from './media/g20.png'
import afrideslogo from './media/logo.png'
import t20 from './media/t20.png'

const Navbar = () => {
    return (
        <div className='w-screen h-20 bg-white flex justify-center items-center px-8 shadow hover:h-24 duration-300'>
            <div className='flex h-1/2 items-center mr-auto w-40'>
                <img className='h-full relative -top-1' src={g20} />
                <img className='h-1/2' src={afrideslogo} />
                <img className='h-2/3' src={t20} />
            </div>
            <div className='flex items-center space-x-6 text-[#3f3f3f] text-xl'>
                <h1 className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Home</h1>
                <h1 className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Speakers</h1>
                <h1 className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Schedule</h1>
                <h1 className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Deal Room</h1>
            </div>
            <div className='ml-auto w-40'>
                <h1>Sponsor Today</h1>
            </div>
        </div>
    )
}

export default Navbar
