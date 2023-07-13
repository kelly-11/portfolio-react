import React from 'react'
import myImg from '../components/Images/myImg.jpeg'
import github from '../components/Images/gitHub.jpeg'
import linkedIn from '../components/Images/linkedIn.jpeg'


export default function HomePt1() {
  return (
    <div classname='homePt1'>
        <div className='intro'>
          <div id='intro'>
            <h2>HOLA! I'm Kelly,</h2> 
            <br/> 
            <p>I am a Software Engineer, eager to tackle new challenging projects! I have a passion for making apps/ websites come to life. Creative & out of the box thinker here that’s ready to be a part of a team or handle a any given project on my own!</p>
          </div>
          <div id='logoLinks'>
            <a href='https://github.com/kelly-11'><img src={github} alt='GitHub Logo'/></a>
            <a href='https://www.linkedin.com/in/kelly-guzman-92308b245/'><img src={linkedIn} alt='LinkedIn Logo'/></a>
          </div>
        </div>
        <div className='myImg'>
            <img src={myImg} alt='headshot'/>
        </div>
    </div>
  )
}
