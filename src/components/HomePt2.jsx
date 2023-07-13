import React from 'react'
import skillsLogos from '../components/Images/skillsLogos.jpeg'

export default function HomePt2() {
  return (
    <div className='homePt2'>
        <div className='skillsWeb'>
            <img src={skillsLogos} alt='Skills Web'/>
        </div>
        <div className='summaryContainers'>
          <div id='contain1'>
            <h1>* JavaScript *</h1> 
            <p>With JavaScript, the sky is the limit! It's what I consider, gives life to a webpage, making it have function. I am a picasso, when it comes to using the DOM to build the site!</p>
          </div>
          <div id='contain2'>
            <h1>* MERN *</h1> 
            <p><strong>M</strong>ongo <strong>E</strong>xpress <strong>R</strong>eact <strong>N</strong>ode <br/> Need a multi-page full-stack App built? Well look no further! I have the skills to build a full CRUD App using MERN.</p>
          </div>
          <div id='contain3'>
            <h1>* CSS *</h1> 
            <p>You can call me modern day Leonardo Da Vinci, when it comes to meeting your styling needs. I'll turn your ideas into a work of art by utilizing whatever styling elements necessary.</p>
          </div>
        </div>
    </div>
  )
}
