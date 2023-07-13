import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Resume from './Resume'
import Home from './Home'

export default function Main() {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<AboutMe />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/resume' element={<Resume />}/>
         </Routes>
    </div>
  )
}
