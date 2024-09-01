import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import FAQ from './components/FAQ'

import about1 from './components/media/about1.jpeg'
import about2 from './components/media/about2.jpeg'
import hotel from './components/media/hotelsaopualo.jpeg'
import kelvin from './components/media/kelvinhost.jpeg'

import host1 from './components/media/profkelly.jpeg'
import partner1 from './components/media/partner1.jpeg'

import venue from './components/media/hilton.png'
import phone from './components/media/phone.png'
import email from './components/media/email.png'

import g20 from './components/media/g20.png'
import afrideslogo from './components/media/logo.png'
import t20 from './components/media/t20.png'

import linkedin from './components/media/linkedin.png'

import speakerbrooks from './components/media/speaker3.jpeg'
import speakerraj from './components/media/speakerraj.jpeg'
import speakerrafael from './components/media/rafael.jpeg'
import speakeramanda from './components/media/speakeramanda.jpeg'
import speakersarah from './components/media/speakerSarah.jpeg'
import speakerradek from './components/media/speaker6.jpeg'
import speakerarmand from './components/media/speakerarmand.jpeg'
import speakerkelly from './components/media/profkelly.jpeg'
import speakersalisu from './components/media/speaker5.jpeg'
import speakeradetunji from './components/media/adetunji.jpeg'

import tick from './components/media/tick.png'

const Homepage = () => {
    return (
        <div id='home-section'>
            <div className='w-screen h-20 relative bg-white flex justify-center items-center px-8 shadow hover:h-24 duration-300'>
                <div className='flex h-1/2 items-center mr-auto w-40'>
                    <img className='h-full relative -top-1' src={g20} />
                    <img className='h-1/2' src={afrideslogo} />
                    <img className='h-2/3' src={t20} />
                </div>
                <div className='flex items-center space-x-6 text-[#3f3f3f] text-xl'>
                    <a href="#home-section" className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Home</a>
                    <a href="#speakers-section" className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Speakers</a>
                    <a href="#schedule" className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Schedule</a>
                    <a href='/dealroom.pdf' download className='hover:border-b-2 duration-100 border-[#3f3f3f]'>Deal Room</a>
                </div>

                <div className='ml-auto w-40 hover:scale-110 duration-200'>
                    <a href="sponsors.pdf" download className='bg-gradient-to-r from-[#005720] to-[#10582b] text-white font-semibold text-center py-3 px-4 rounded-lg'>Sponsor Today</a>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full flex justify-center bg-cover bg-[url("./components/media/landingbg.jpeg")] hero'>
                    <div className='w-[50%] h-[500px] my-20'></div>
                    <div className='flex flex-col w-[50%]  p-8 py-20 backdrop-blur-[150px]'>
                        <h1 className='text-8xl text-[#35bc3d] font-bold'>Africa Digital Economy Summit 2024</h1>
                        <div className='flex mt-8'>
                            <h1 className='bg-[#005720] font-semibold mr-8 p-3 py-2 rounded-xl text-gray-200 text-2xl shadow-gray-200 shadow-sm'>G20 Edition</h1>
                            <h1 className='font-bold text-[#95d5b2] text-2xl p-4 py-2'>27-31 October, 2024</h1>
                        </div>
                        <div className='mt-6 text-3xl text-gray-100'>Digital Transformation for Sustainable Growth: Africa’s Path to a Connected Future</div>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center aboutsection'>
                    <div className='backdrop-blur-[100px] w-full flex py-12 flex-col items-center'>
                        <h1 className='font-bold text-6xl text-[#3f3f3f]'>About The Event</h1>
                        <div className='flex w-full justify-center items-center mt-12'>
                            <div>
                                <img className='w-[400px] h-[300px] overflow-hidden rounded-xl shadower' src={about1} />
                            </div>
                            <div className='w-[45%] pl-8'>
                                <p className='text-xl text-right text-gray-200'>The African Digital Economy Summit is an impactful and forward-thinking conference designed to expedite the realization of Africa’s digital economy aspirations. The summit serves as a dynamic platform where key stakeholders, thought leaders, innovators, policymakers, and industry experts converge to foster collaboration, share insights, and device strategic solutions for advancing Africa’s digital landscape.</p>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse w-full justify-center items-center'>
                            <div className='w-[400px] h-[300px] overflow-hidden rounded-xl shadower'>
                                <img className='h-[300px] w-[600px]' src={about2} />
                            </div>
                            <div className='w-[45%] pr-8'>
                                <p className='text-xl text-gray-200'>In November 2024, the Group of 20 Industrialized Nations (G20) will hold their annual summit, focusing on the theme "Building a Just World and a Sustainable Planet." Understanding the critical role of inclusive digital transformation in fostering economic growth at both national and local levels, the G20 is actively engaging with global stakeholders to promote and enhance inclusive digital development.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full flex justify-center bg-cover bg-center bg-[url("./components/media/venuebg.jpeg")] py-12 items-center'>
                    <div className='h-[300px] w-[450px] overflow-hidden mr-4 shadower rounded-xl overflow-hidden'>
                        <img className='h-full' src={hotel} />
                    </div>
                    <div className='h-[300px] w-[450px] flex flex-col shadower rounded-xl ml-4 p-4 backdrop-blur-xl'>
                        <h1 className='text-6xl font-bold text-gray-500'>The Venue</h1>
                        <h1 className='mt-4 text-3xl font-semibold text-white'>Intercontinental Hotels, Sao Paulo</h1>
                        <div className='flex items-center mt-auto'>
                            <a target='blank' href='https://www.ihg.com/intercontinental/hotels/us/en/sao-paulo/saoha/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-BR-_-SAOHA'>
                                <button className='mr-4 p-2 px-3 rounded-lg bg-gray-600 text-white hover:text-gray-600 hover:bg-white duration-200 font-bold border-white-2 shadower'>Book Today</button>
                            </a>
                            <a target='blank' href='https://www.google.com/maps/dir//Alameda+Santos,+1123+-+Jardim+Paulista,+S%C3%A3o+Paulo+-+SP,+01419-001,+Brazil/@-23.5657743,-46.7364809,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce59c643816cef:0xc82580c2052d077e!2m2!1d-46.6540793!2d-23.565796?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D'>
                                <button className='mr-4 p-2 px-3 rounded-lg bg-gray-600 text-white font-bold border-white-2 shadower hover:text-gray-600 hover:bg-white duration-200'>Get Directions</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center py-12 bg-gradient-to-r from-green-500 to-lime-500'>
                    <div className='text-8xl font-bold text-white'>
                        <h1>Meet<br /> the Host</h1>
                    </div>
                    <div className='h-[250px] w-[250px] rounded-full overflow-hidden ml-4'>
                        <img className='w-full' src={kelvin} />
                    </div>
                    <div className='ml-4 flex flex-col justify-center items-start h-[200px]'>
                        <h1 className='text-6xl text-gray-100 font-semibold'>Kelvin Tersoo Jiraji</h1>
                        <h1 className='text-gray-600'>Co-convener</h1>
                        <a className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></a>
                    </div>
                </div>
                <div id="speakers-section" className='w-full bg-gradient-to-r from-[#005720] to-[#10582b] flex flex-col items-center py-12'>
                    <h1 className='text-6xl font-semibold text-white'>The Speakers</h1>
                    <div className='mt-16 grid grid-cols-2 justify-center'>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[300px] h-[300px] rounded-full overflow-hidden shadower'>
                                <img src={speakerbrooks} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Dr. Christopher Brooks</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>Managing Partner: Brown Venture Group, USA.</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[300px] h-[300px] rounded-full overflow-hidden shadower'>
                                <img src={speakerraj} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Raj Kapoor</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>Founder: India Blockchain Alliance, New Delhi, India</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                    </div>
                    <div className='mt-8 grid grid-cols-3 gap-y-12'>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerrafael} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Rafael Biemmi Espirito</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'></h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'><a>Connect</a> <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakeramanda} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Amanda Awange</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>AI Product Manager : Factset LTD, London, England</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakersarah} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Sarah Fernn</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>CEO: Stardust, Sao Paulo, Brasil</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerradek} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Radek Wierzbicki</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>Managing Director-Unsung Heroes Foundation, Warsaw POLAND</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerarmand} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Armand NGUETI</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>Founder & CEO: Universal Broadband & Technology Services - International Corp (UBTS)</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerkelly} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Prof. Kelly Kingsly</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>Finance Engineer and Board Member, ATIDA</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakersalisu} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Dr Salisu Uba</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>FCIPS - Founder and CEO NatQuest</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakeradetunji} />
                            </div>
                            <h1 className='text-3xl mt-2 text-white font-semibold'>Anthony Adetuji Adeleke</h1>
                            <h1 className='text-lg w-[90%] text-center text-gray-300'>Co-founder: CHIMENET, Indiapolis, USA</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></button>
                        </div>
                    </div>
                </div>
                <div className='w-full p-12 flex flex-col items-center bg-[#5d9074]'>
                    <h1 className='text-6xl font-bold text-[#005720] '>Choose your Ticket</h1>
                    <div className='flex items-center w-full mt-12'>
                        <div className='flex flex-col items-center text-center w-1/3 mx-4  rounded-xl overflow-hidden shadower pb-4 h-[560px] bg-gray-200'>
                            <h1 className='w-full bg-[#005720] py-4 text-4xl font-semibold text-white'>Virtual</h1>
                            <h1 className='my-4 text-6xl font-bold text-[#005720]'>$500</h1>
                            <div className='w-full p-8 pt-0 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>Virtual access to the event</h1>
                            </div>
                            <div className='w-[90%] rounded-xl bg-[#95d5b2] flex flex-col mt-auto'>
                                <h1 className='text-2xl text-[#005720] font-semibold mt-2'>Fidelity Bank</h1>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4 mb-0'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center w-1/3  rounded-xl overflow-hidden shadower pb-4 mx-4 h-[600px] bg-gray-200'>
                            <h1 className='w-full bg-[#005720] py-4 text-4xl font-semibold text-white'>Startup</h1>
                            <h1 className='my-4 text-6xl font-bold text-[#005720]'>$500</h1>
                            <div className='w-full p-8 py-0 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>Virtual access to the event</h1>
                            </div>
                            <div className='w-full p-8 pt-4 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>In-person Access to the deal Room</h1>
                            </div>
                            <div className='w-[90%] rounded-xl bg-[#95d5b2] flex flex-col mt-auto'>
                                <h1 className='text-2xl text-[#005720] font-semibold mt-2'>Fidelity Bank</h1>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4 mb-0'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center w-1/3  rounded-xl overflow-hidden shadower pb-4 mx-4 bg-gray-200'>
                            <h1 className='w-full bg-[#005720] py-4 text-4xl font-semibold text-white'>Standard</h1>
                            <h1 className='my-4 text-6xl font-bold text-[#005720]'>$1000</h1>
                            <div className='w-full p-2 pl-6 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>Visa</h1>
                            </div>
                            <div className='w-full p-2 pl-6 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>Airport pickup</h1>
                            </div>
                            <div className='w-full p-2 pl-6 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>Access to all event sessions</h1>
                            </div>
                            <div className='w-full p-2 pl-6 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>City Tour</h1>
                            </div>
                            <div className='w-full p-2 pl-6 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1>African Business Dinner Night</h1>
                            </div>
                            <div className='w-[90%] rounded-xl bg-[#95d5b2] flex flex-col'>
                                <h1 className='text-2xl text-[#005720] font-semibold mt-2'>Fidelity Bank</h1>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4 mb-0'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-[300px] flex '>
                    <div className='flex flex-col items-start w-1/2 h-full p-4'>
                        <h1 className='text-8xl '>Get in Touch</h1>
                        <div className='flex items-center mt-auto'>
                            <img className='h-4 mr-2' src={phone}></img>
                            <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'>+2347035652264</h1>
                        </div>
                        <div className='flex items-center mt-auto'>
                            <img className='h-4 mr-2' src={phone}></img>
                            <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'>+1 (617) 602-6272</h1>
                        </div>
                        <div className='flex items-center'>
                            <img className='h-4 mr-2' src={email}></img>
                            <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'> info@africandigitaleconomysummit.com</h1>
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
