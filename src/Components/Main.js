import React from 'react'
import FitCalC from './Fit CalC'
import top from  './Assets/up-arrow.png';
import './Header.css'

function Main() {
  return (
    <>
    <main>
    <a href='#header'><img id='top' src={top} alt='go to top'></img></a>
    <FitCalC/>
    </main>
    </> 
  )
}

export default Main
