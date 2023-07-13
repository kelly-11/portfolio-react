import React from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <div className='header'>
        <h1>Kelly's Page</h1>
        <div>
            <Nav />
        </div>
        <div>
            <button className='contactBtn'>Contact Me</button>
        </div>
        
    </div>
  )
}
