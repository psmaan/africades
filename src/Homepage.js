import React from 'react'

import Navbar from './components/Navbar'
import FAQ from './components/FAQ'

import about1 from './components/media/about1.jpeg'
import hotel from './components/media/btpaulista.jpeg'
import kelvin from './components/media/kelvinhost.jpeg'

import host1 from './components/media/profkelly.jpeg'
import partner1 from './components/media/partner1.jpeg'

import venue from './components/media/hilton.png'
import phone from './components/media/phone.png'
import email from './components/media/email.png'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className='w-full'>
                <div className='w-full flex justify-center pt-20'>
                    <div className='w-[45%] h-[500px] bg-red-400'></div>
                    <div className='flex flex-col w-[55%] bg-blue-400 p-8'>
                        <h1 className='text-7xl'>Africa Digital Economy Summit 2024</h1>
                        <div className='flex mt-8'>
                            <h1 className='bg-red-400 mr-8 p-4 py-2'>A G20 Event</h1>
                            <h1 className='bg-red-400 p-4 py-2'>22-25 October 2024</h1>
                        </div>
                        <div className='mt-4 text-2xl'>Digital Transformation for Sustainable Growth: Africa’s Path to a Connected Future</div>
                        <div className='flex mt-8'>
                            <h1 className='bg-red-400 mr-8 p-4 py-2'>A G20 Event</h1>
                            <h1 className='bg-red-400 p-4 py-2'>22-25 October 2024</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-12 flex flex-col items-center'>
                    <h1 className='font-bold text-6xl'>About The Event</h1>
                    <div className='flex w-full justify-center items-center mt-12'>
                        <div>
                            <img className='w-[400px] h-[300px] overflow-hidden rounded-xl' src={about1} />
                        </div>
                        <div className='w-[45%] pl-8'>
                            <p className='text-xl text-right'>The African Digital Economy Summit is an impactful and forward-thinking conference designed to expedite the realization of Africa’s digital economy aspirations. The summit serves as a dynamic platform where key stakeholders, thought leaders, innovators, policymakers, and industry experts converge to foster collaboration, share insights, and device strategic solutions for advancing Africa’s digital landscape.</p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse w-full justify-center items-center'>
                        <div>
                            <img className='w-[400px] h-[300px] overflow-hidden rounded-xl' src={about1} />
                        </div>
                        <div className='w-[45%] pr-8'>
                            <p className='text-xl'>The African Digital Economy Summit is an impactful and forward-thinking conference designed to expedite the realization of Africa’s digital economy aspirations. The summit serves as a dynamic platform where key stakeholders, thought leaders, innovators, policymakers, and industry experts converge to foster collaboration, share insights, and device strategic solutions for advancing Africa’s digital landscape.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-12 bg-red-400 py-12 items-center'>
                    <div className='h-[300px] w-[450px] overflow-hidden mr-4'>
                        <img className='w-full' src={hotel} />
                    </div>
                    <div className='h-[300px] w-[450px] flex flex-col bg-blue-400 ml-4 p-4'>
                        <h1 className='text-6xl'>The Venue</h1>
                        <h1 className='mt-4 text-3xl'>Blue Tree Preium Paulista</h1>
                        <div className='flex items-center mt-auto'>
                            <button className='mr-4 p-2 px-3 rounded-xl bg-red-400'>Book Today</button>
                            <button className='mr-4 p-2 px-3 rounded-xl bg-red-400'>Get Directions</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <div className='text-8xl font-bold'>
                        <h1>Meet<br /> the Host</h1>
                    </div>
                    <div className='h-[200px] w-[200px] rounded-full overflow-hidden ml-4'>
                        <img className='w-full' src={kelvin} />
                    </div>
                    <div className='ml-4 flex flex-col justify-center items-start h-[200px]'>
                        <h1 className='text-6xl'>Kelvin Tersoo Jiraji</h1>
                        <h1>Designation</h1>
                        <button className='mt-4 p-2 px-3 bg-red-400'>Connect</button>
                    </div>
                </div>
                <div className='w-full bg-red-400 flex flex-col items-center py-12'>
                    <h1 className='text-6xl'>The Speakers</h1>
                    <div className='mt-8 grid grid-cols-3'>
                        <div className='flex flex-col items-center mx-2'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                                <img src={host1} />
                            </div>
                            <h1 className='text-3xl mt-2'>Prof. Kelly Kingsly Mua</h1>
                            <h1 className='text-lg w-[90%] text-center'>Finance Engineer | Board Director at ATIDI</h1>
                            <button className='bg-blue-600 p-2 px-4 text-white mt-2'>Connect</button>
                        </div>
                        <div className='flex flex-col items-center mx-2'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                                <img src={host1} />
                            </div>
                            <h1 className='text-3xl mt-2'>Prof. Kelly Kingsly Mua</h1>
                            <h1 className='text-lg w-[90%] text-center'>Finance Engineer | Board Director at ATIDI</h1>
                            <button className='bg-blue-600 p-2 px-4 text-white mt-2'>Connect</button>
                        </div>
                        <div className='flex flex-col items-center mx-2'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                                <img src={host1} />
                            </div>
                            <h1 className='text-3xl mt-2'>Prof. Kelly Kingsly Mua</h1>
                            <h1 className='text-lg w-[90%] text-center'>Finance Engineer | Board Director at ATIDI</h1>
                            <button className='bg-blue-600 p-2 px-4 text-white mt-2'>Connect</button>
                        </div>


                    </div>
                </div>
                <div className='w-full bg-blue-400 flex flex-col items-center py-12'>
                    <h1 className='text-6xl'>Our Partners</h1>
                    <div className='mt-12 grid grid-cols-3 w-full'>
                        <div className='flex flex-col items-center mx-2'>
                            <div className='w-[200px] overflow-hidden'>
                                <img className='w-full' src={partner1} />
                            </div>
                        </div>
                        <div className='flex flex-col items-center mx-2'>
                            <div className='w-[200px] h-[200px] overflow-hidden'>
                                <img src={partner1} />
                            </div>
                        </div>
                        <div className='flex flex-col items-center mx-2'>
                            <div className='w-[200px] h-[200px] overflow-hidden'>
                                <img src={partner1} />
                            </div>
                        </div>


                    </div>
                </div>
                <FAQ />
                <div className='w-full h-[300px] flex '>
                    <div className='flex flex-col items-start w-1/2 h-full p-4'>
                        <h1 className='text-8xl '>Get in Touch</h1>
                        <div className='flex items-center mt-auto'>
                            <img className='h-4 mr-2' src={phone}></img>
                            <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'>+2347035652264</h1>
                        </div>
                        <div className='flex items-center'>
                            <img className='h-4 mr-2' src={phone}></img>
                            <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'>+1(202)500-3323</h1>
                        </div>
                        <div className='flex items-center'>
                            <img className='h-4 mr-2' src={email}></img>
                            <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'> kelvin@email</h1>
                        </div>
                    </div>
                    <div className='h-full w-1/2 overflow-hidden'>
                        <img className='w-full' src={hotel}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
