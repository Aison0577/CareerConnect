import React from 'react'
import images from '../constant/Images'
import { Link } from 'react-router-dom'

export default function MainHero() {
  return (
    <section className='h-screen w-full'>
        <img src={images.herobg} alt="" className='absolute h-full w-full object-cover'/>
        <div class="relative bg-gradient-to-r from-[#141414] to-[#181818a4] h-full flex items-center">
            <div class="adjust">
                <h1 class="text-4xl md:text-6xl font-bold mb-3 text-white">CareerConnect</h1>
                <p class="text-gray-100  w-full md:w-[60%]">CareerConnect is your gateway to discovering meaningful job
                    opportunities tailored to your skills and ambitions. Whether you're kickstarting your career or seeking
                    a new direction, we bring you closer to top employers and unique roles across industries. Find, apply,
                    and connect with the perfect job to elevate your career journey.</p>

                    <div className='space-x-5'>
                        <Link to="/signin">
                            <button class="py-3 px-7 rounded-md bg-gray-800 mt-5 text-white font-poppins font-semibold">
                                Get Started
                            </button>
                        </Link>
                        <Link to="/compsignin">
                            <button class="py-3 px-7 rounded-md bg-gray-800 mt-5 text-white font-poppins font-semibold">
                                Company Dashboard
                            </button>
                        </Link>

                    </div>
            </div>
        </div>
    </section>
  )
}
