import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallTOAction from '../../components/student/CallTOAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center '>
      <Hero/>
      <Companies/>
      <CoursesSection/>
      <TestimonialsSection/>
      <CallTOAction/>
      <Footer/>
    </div>
  )
}

export default Home