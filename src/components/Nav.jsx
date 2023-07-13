import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navList'>
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/aboutMe">
            <li>About Me</li>
            </Link>
            <Link to="/portfolio">
            <li>Portfolio</li>
            </Link>
            <Link to="/resume">
            <li>Resume</li>
            </Link>
        </ul>
    </div>
  )
}
