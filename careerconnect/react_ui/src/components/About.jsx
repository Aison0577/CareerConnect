import React from 'react'
import Title from '../typo/Title'
import AboutView from './AboutView'

function About() {
  return (
    <div className='adjust py-16'>
      <h1 className='font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-10'>About <span className='text-blue-800'>CareerConenct.</span></h1>
    
      <div>
        <AboutView
            title={'Who We Are'}
            info={'CareerConnect was founded with the belief that finding the right job or the perfect candidate should be simple and accessible to everyone. Our platform is designed to make this process smooth, efficient, and personalized for each user.'}
        />
        <AboutView
            title={'What We Offer'}
            info={"For Job Seekers: Explain the platform's resources, such as job search tools, career guidance, and profile-building support.For Employers: Detail the hiring features, including targeted listings, access to a broad candidate pool, and applicant management tools."}
        />
        <AboutView
            title={'Our Vision'}
            info={"Outline the long-term vision of CareerConnect, such as promoting economic empowerment, reducing unemployment, and helping users achieve career success.Example: 'Our vision is a world where job seekers can unlock their potential, and businesses can thrive by finding the right people at the right time'."}
        />
        <AboutView
            title={'Core Values'}
            info={"Describe core values, such as trust, transparency, innovation, and user-centricity, to show what drives CareerConnect's development and user relationships"}
        />
        <AboutView
            title={'Why Choose CareerConnect?'}
            info={"Summarize CareerConnect’s unique advantages: personalized job matches, up-to-date listings, responsive support, and a user-friendly interface designed to make the job search and hiring processes more effective and enjoyable."}
        />
        <AboutView
            title={'Join Us on the Journey'}
            info={"Summarize CareerConnect’s unique advantages: personalized job matches, up-to-date listings, responsive support, and a user-friendly interface designed to make the job search and hiring processes more effective and enjoyable."}
        />
      </div>
    </div>
  )
}

export default About
