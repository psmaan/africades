import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

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
import unsung from './components/media/sponsorunsungheroes.png'
import stardust from './components/media/sporsorstardust.png'
import tii from './components/media/TII.png'
import natquest from './components/media/sponsornatquest.png'
import ashcraft from './components/media/snorsorashcraft.png'

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
import speakermary from './components/media/speakermary.jpeg'

import tick from './components/media/tick.png'

const Homepage = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id='home-section'>
            <div className='sm:hidden w-screen h-20 relative bg-white flex justify-between items-center px-4 lg:px-8 shadow sm:h-24 duration-300'>
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
                    {/* Sponsor Button */}
                    <div className='ml-auto w-full flex justify-center sm:w-48 hover:scale-110 duration-200'>
                        <a href="sponsors.pdf" download className='bg-gradient-to-r from-[#005720] to-[#10582b] text-white font-semibold text-center py-2 px-3 md:py-3 md:px-4 rounded-lg'>Sponsor Today</a>
                    </div>
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
            <div className='w-full'>
                <div className='w-full flex justify-center items-center bg-cover bg-[url("./components/media/landingbg.jpeg")] hero bg-center min-h-[600px]'>
                    <div className=' hidden md:flex w-[50%] h-[500px] my-20'></div>
                    <div className='flex flex-col w-[95%] h-[50%] md:h-full md:w-[50%] p-2 sm:p-8 py-20 backdrop-blur-[150px] sm:mr-4'>
                        <h1 className='text-4xl sm:text-6xl xl:text-8xl text-[#35bc3d] font-bold'>Africa Digital Economy Summit 2024</h1>
                        <div className='flex mt-8 flex-col sm:flex-row'>
                            <h1 className='bg-[#005720] font-semibold sm:mr-8 p-2 xl:p-3 py-2 rounded-xl text-gray-200 text-lg sm:text-xl xl:text-2xl shadow-gray-200 shadow-sm'>G20 Edition</h1>
                            <h1 className='font-bold text-[#95d5b2] text-lg sm:text-xl xl:text-2xl sm:p-4 py-2 my-2 sm:my-0'>16 November, 2024</h1>
                        </div>
                        <div className='mt-2 sm:mt-6 text-lg sm:text-2xl lg:text-3xl text-gray-100'>Digital Transformation for Sustainable Growth: Africa’s Path to a Connected Future</div>
                        <div className='mt-8'>
                            <a href='brochure.pdf' download className='border-2 border-gray-300 text-gray-200 rounded-xl font-semibold p-3 px-4 bg-[#35bc3d] hover:scale-105 duration-200'>Download Brochure</a>
                        </div>

                    </div>
                </div>
                <div className='w-full flex flex-col items-center aboutsection'>
                    <div className='backdrop-blur-[100px] w-full flex py-12 flex-col items-center'>
                        <h1 className='font-bold text-4xl sm:text-6xl text-[#3f3f3f] text-center'>About The Event</h1>
                        <div className='flex flex-col md:flex-row w-full justify-center items-center mt-12'>
                            <div>
                                <img className='w-[300px] h-[225px] sm:w-[400px] sm:h-[300px] overflow-hidden rounded-xl shadower' src={about1} />
                            </div>
                            <div className='w-full md:w-[45%] md:pl-8 my-4 md:my-0'>
                                <p className='text-md xl:text-lg md:text-right text-gray-800 sm:text-gray-200 text-center'>The Group of 20 Industrialized Nations (G20) will convene their annual summit in November 2024. The central theme of this summit is "Building a Just World and a Sustainable Planet." Recognizing the significant impact of inclusive digital transformation on national and sub-national economies as catalysts for economic growth, the G20 is fostering synergies with critical stakeholders worldwide to advance and enhance inclusive digital transformation. In alignment with this objective, the G20 has approved the convening of the Africa Digital Economy Summit as a strategic component of its general assembly. This event is scheduled to take place in Sao Paulo, Brazil, from October 27th to 31st October, 2024.</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row-reverse w-full justify-center items-center'>
                            <div className='w-[300px] h-[225px] sm:w-[400px] sm:h-[300px] overflow-hidden rounded-xl shadower'>
                                <img className='w-[300px] h-[225px] sm:w-[400px] sm:h-[300px]' src={about2} />
                            </div>
                            <div className='w-full md:w-[45%] md:pr-8 my-4 md:my-0'>
                                <p className='text-md xl:text-lg text-gray-200 sm:text-gray-200 text-center md:text-left w-full'>The Africa Digital Economy Summit aims to bring together Heads of Government, policymakers, innovators, entrepreneurs, and a broad range of stakeholders to explore the challenges and opportunities in stimulating and consolidating Africa's digital economy for robust engineering and economic growth. Deliberations from this pre-summit will contribute to the main agenda of the G20 program, which will be attended by leaders from the G20 member countries (Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Republic of Korea, Mexico, Russia, Saudi Arabia, South Africa, Türkiye, United Kingdom, and the United States) alongside the African Union and the European Union.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full flex flex-col sm:flex-row justify-center items-center bg-cover bg-center bg-[url("./components/media/venuebg.jpeg")] py-12 items-center'>
                    <div className='h-[300px] sm:w-[450px] overflow-hidden sm:mr-4 shadower rounded-xl overflow-hidden'>
                        <img className='h-full' src={hotel} />
                    </div>
                    <div className='h-[300px] sm:w-[450px] flex flex-col shadower rounded-xl sm:ml-4 p-4 backdrop-blur-xl'>
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
                <div className='flex flex-col sm:flex-row justify-center items-center py-12 bg-gradient-to-r from-green-500 to-lime-500'>
                    <div className='hidden sm:block text-center sm:text-left text-4xl lg:text-6xl xl:text-8xl font-bold text-white'>
                        <h1>Meet<br /> the Host</h1>
                    </div>
                    <div className='sm:hidden text-center sm:text-left text-4xl lg:text-6xl xl:text-8xl font-bold text-white my-4'>
                        <h1>Meet the Host</h1>
                    </div>
                    <div className='h-[250px] w-[250px] rounded-full overflow-hidden ml-4'>
                        <img className='w-full' src={kelvin} />
                    </div>
                    <div className='ml-4 flex flex-col justify-center items-center sm:items-start h-[200px]'>
                        <h1 className='text-2xl lg:text-4xl xl:text-6xl text-gray-100 font-semibold'>Kelvin Tersoo Jiraji</h1>
                        <h1 className='text-gray-700 text-xl lg:text-2xl xl:text-4xl font-semibold text-center sm:text-left w-full'>Co-convener</h1>
                        <a target='blank' href='https://www.linkedin.com/in/kelvinjiraji/' className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></a>
                    </div>
                </div>
                <div id="speakers-section" className='w-full bg-gradient-to-r from-[#005720] to-[#10582b] flex flex-col items-center py-12'>
                    <h1 className='text-6xl font-semibold text-white'>The Speakers</h1>
                    <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 justify-center'>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadower'>
                                <img src={speakerbrooks} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Dr. Christopher Brooks</h1>
                            <h1 className='text-md lg:text-lg w-[90%] text-center text-gray-300'>Managing Partner: Brown Venture Group, USA.</h1>
                            <a target='blank' href='https://www.linkedin.com/in/drchrisbrooks/' className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8'>
                            <div className='w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadower'>
                                <img src={speakerraj} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Raj Kapoor</h1>
                            <h1 className='text-md lg:text-lg w-[90%] text-center text-gray-300'>Founder: India Blockchain Alliance, New Delhi, India</h1>
                            <a href='https://www.linkedin.com/in/indieblock/' target='blank' className='bg-blue-600 text-xl p-2 px-4 text-gray-100 font-bold rounded-md mt-2 flex items-center'>Connect <img src={linkedin} className='ml-4 h-[80%] ' /></a>
                        </div>
                    </div>
                    <div className='mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-12'>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerrafael} />
                            </div>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Rafael Biemmi Espirito</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'></h1>
                            <a href='https://www.linkedin.com/in/biemmi-innovation-compliance-risks-quality?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md mt-auto mb-4 flex items-center'><a>Connect</a> <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakeramanda} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Amanda Awange</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>AI Product Manager : Factset LTD, London, England</h1>
                            <a href='https://africandigitaleconomysummit.com/index.html' target='blank' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md  mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakersarah} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Sarah Fernn</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>CEO: Stardust, Sao Paulo, Brasil</h1>
                            <button className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md  mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></button>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerradek} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Radek Wierzbicki</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>Managing Director-Unsung Heroes Foundation, Warsaw POLAND</h1>
                            <a href='https://www.linkedin.com/in/radwierz/' target='blank' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerarmand} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Armand NGUETI</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>Founder & CEO: Universal Broadband & Technology Services - International Corp (UBTS)</h1>
                            <a href='https://www.linkedin.com/in/armandngueti/' target='blank' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakerkelly} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Prof. Kelly Kingsly</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>Finance Engineer and Board Member, ATIDA</h1>
                            <a href='https://www.linkedin.com/in/kellykingsley/' target='blank' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakersalisu} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl text-center mt-2 text-white font-semibold'>Dr Salisu Uba</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>FCIPS - Founder and CEO NatQuest</h1>
                            <a href='https://www.linkedin.com/in/salisuuba/' target='blank' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakeradetunji} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl mt-2 text-white font-semibold text-center'>Anthony Adetuji Adeleke</h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>Co-founder: CHIMENET, Indiapolis, USA</h1>
                            <a target='blank' href='https://www.linkedin.com/in/salisuuba/' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                        <div className='flex flex-col items-center mx-8 h-[400px]'>
                            <div className='w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadower'>
                                <img src={speakermary} />
                            </div>
                            <h1 className='text-2xl lg:text-3xl mt-2 text-white font-semibold text-center'>Mary Ohalete-Uwaoma </h1>
                            <h1 className='text-xs sm:text-md lg:text-lg w-[90%] text-center text-gray-300'>GM, Marketing and Business Development: FirstCentral Credit Bureau Limited</h1>
                            <a target='blank' href='https://www.linkedin.com/in/mary-ohalete-uwaoma-9893a844/' className='bg-blue-600 text-xl p-2 px-4 pr-8 text-gray-100 font-bold rounded-md mt-auto mb-4 flex items-center'>Connect <img src={linkedin} className='sm:ml-4 h-[80%] ' /></a>
                        </div>
                    </div>
                </div>
                {/*
                <div className='w-full p-4 py-8 sm:p-12 flex flex-col items-center bg-gradient-to-r from-lime-600 to-emerald-700'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white'>Our Partners</h1>
                    <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 mt-4'>
                        <div className='flex h-[120px] md:h-[240px] rounded-2xl justify-center items-center backdrop-blur-xl border-2 border-gray-400 hover:bg-white/15 hover:scale-105 duration-200 bg-white/10'>
                            <img className='w-2/3' src={g20} />
                        </div>
                        <div className='flex h-[120px] md:h-[240px] rounded-2xl justify-center items-center backdrop-blur-xl border-2 border-gray-400 hover:bg-white/15 hover:scale-105 duration-200 bg-white/10'>
                            <img className='w-full' src={t20} />
                        </div>
                        <div className='flex h-[120px] md:h-[240px] rounded-2xl justify-center items-center backdrop-blur-xl border-2 border-gray-400 hover:bg-white/15 hover:scale-105 duration-200 bg-white/10'>
                            <img className='w-full' src={unsung} />
                        </div>
                        <div className='flex h-[120px] md:h-[240px] rounded-2xl justify-center items-center backdrop-blur-xl border-2 border-gray-400 hover:bg-white/15 hover:scale-105 duration-200 bg-white/10'>
                            <img className='w-full' src={stardust} />
                        </div>
                        <div className='flex h-[120px] md:h-[240px] rounded-2xl justify-center items-center backdrop-blur-xl border-2 border-gray-400 hover:bg-white/15 hover:scale-105 duration-200 bg-white/10'>
                            <img className='w-full' src={tii} />
                        </div>
                        <div className='flex h-[120px] md:h-[240px] rounded-2xl justify-center items-center backdrop-blur-xl border-2 border-gray-400 hover:bg-white/15 hover:scale-105 duration-200 bg-white/10'>
                            <img className='w-full' src={natquest} />
                        </div>
                        <div className='flex h-[120px] md:h-[240px] rounded-2xl justify-center items-center backdrop-blur-xl border-2 border-gray-400 hover:bg-white/15 hover:scale-105 duration-200 bg-white/10'>
                            <img className='w-full' src={ashcraft} />
                        </div>
                    </div>
                </div>
                */}
                <div className='w-full p-4 py-8 sm:p-12 flex flex-col items-center bg-gradient-to-r to-cyan-600 from-emerald-500'>
                    <h1 className='text-6xl font-bold text-[#aae1c2] '>Choose your Ticket</h1>
                    <div className='flex flex-col lg:flex-row items-center w-full mt-12'>
                        <div className='flex flex-col items-center text-center w-full lg:w-1/3 mx-4  rounded-xl overflow-hidden shadower pb-4 backdrop-blur-[200px] bg-white/50 border-4 border-gray-200/20 hover:scale-105 duration-200 my-4 lg:my-0 lg:h-[640px]'>
                            <h1 className='w-full bg-green-600 py-4 text-4xl font-semibold text-white'>Virtual</h1>
                            <h1 className='my-4 text-6xl font-bold text-[#005720]'>$50</h1>
                            <div className='w-full p-8 pt-0 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1 className='text-left' >Virtual access to the event</h1>
                            </div>
                            <div className='w-[90%] rounded-xl bg-green-600 flex flex-col mt-auto'>
                                <h1 className='text-2xl text-[#005720] font-semibold mt-2'>Fidelity Bank</h1>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4 mb-0'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center w-full lg:w-1/3 mx-4  rounded-xl overflow-hidden shadower pb-4 backdrop-blur-[200px] bg-white/50 border-4 border-gray-200/20 hover:scale-105 duration-200 my-4 lg:my-0 lg:h-[640px]'>
                            <h1 className='w-full bg-green-600 py-4 text-4xl font-semibold text-white'>Standard</h1>
                            <h1 className='my-4 text-6xl font-bold text-[#005720]'>$300</h1>
                            <div className='w-full p-8 py-0 flex items-center'>
                                <div className='h-6 w-6 rounded-full overflow-hidden bg-[#005720] flex justify-center items-center mr-2'>
                                    <img className='h-[60%]' src={tick} />
                                </div>
                                <h1 className='text-left'>Phyical access to the event</h1>
                            </div>
                            <div className='w-[90%] rounded-xl bg-green-600 flex flex-col mt-auto'>
                                <h1 className='text-2xl text-[#005720] font-semibold mt-2'>Fidelity Bank</h1>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4 mb-0'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                                <div className='border-2-white flex items-center border-gray-200 border-2 rounded-xl p-2 px-6 m-4'>
                                    <h1 className='font-semibold text-white text-xl'><span className='font-bold'>USD Account: </span>5250458608</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center w-full lg:w-1/3 mx-4  rounded-xl overflow-hidden shadower pb-4 backdrop-blur-[200px] bg-white/50 border-4 border-gray-200/20 hover:scale-105 duration-200 my-4 lg:my-0 lg:h-[640px]'>
                            <h1 className='w-full bg-green-600 py-4 text-4xl font-semibold text-white'>Premium</h1>
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
                                <h1 className='text-left'>African Business Dinner Night</h1>
                            </div>
                            <div className='w-[90%] rounded-xl bg-green-600 flex flex-col mt-auto'>
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
                <div className='w-full h-[200px] md:h-[300px] flex '>
                    <div className='flex flex-col items-start w-full md:w-1/2 h-full bg-[url("components/media/hotelsaopualo.jpeg")]' >
                        <div className='flex flex-col items-start w-full backdrop-blur-[200px] h-full p-4'>
                            <h1 className='text-4xl sm:text-6xl lg:text-7xl '>Get in Touch</h1>
                            <div className='flex items-center mt-auto'>
                                <img className='h-4 mr-2' src={phone}></img>
                                <h1 className='text-sm md:text-lg lg:text-xl color-[#1a1a1a] font-bold'>+2347035652264</h1>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-4 mr-2' src={phone}></img>
                                <h1 className='text-sm md:text-lg lg:text-xl font-bold color-[#1a1a1a]'>+1 (617) 602-6272</h1>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-4 mr-2' src={email}></img>
                                <h1 className='text-sm md:text-lg lg:text-xl font-bold color-[#1a1a1a]'> info@africandigitaleconomysummit.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block h-full w-1/2 overflow-hidden'>
                        <img className='h-full min-w-full' src={hotel}></img>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Homepage
