import React from 'react'

import g20 from './media/g20.png'
import afrideslogo from './media/logo.png'
import t20 from './media/t20.png'

const Navbar = () => {
    return (
        <div className='w-screen h-20 bg-red-200 flex justify-center items-center px-8'>
            <div className='flex h-1/2 items-center mr-auto w-40'>
                <img className='h-full relative -top-1' src={g20} />
                <img className='h-1/2' src={afrideslogo} />
                <img className='h-2/3' src={t20} />
            </div>
            <div className='flex mx-auto space-x-6'>
                <h1 className='hover:border-b-2'>Home</h1>
                <h1>Speakers</h1>
                <h1>Schedule</h1>
                <h1>Sponsors</h1>
                <h1>Deal Room</h1>
            </div>
            <div className='ml-auto w-40'>
                <h1>Sponsor Today</h1>
            </div>
        </div>
    )
}

export default Navbar
