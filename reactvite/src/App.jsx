import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {


  return (
    <div style={{textalign:'center',border:'2px solid black',width:'400px',backgroundColor:'white',margin:'0 auto',height:'700px'}}>
      <h1 style={{color:'brown',}}>ABES</h1>
      <h2 style={{color:'brown'}}>Engineering College</h2>
      <h3 style={{color:'brown'}}>College Code 032</h3>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0xX69lHPeS3RJYQtub4yHzxYXMTKgJW8a2JMGB-mIg&s=10' style={{height:'200px',width:'200px'}}></img>
      <h3 style={{color:'black'}}>RIYANSHI JAIN</h3>
      <div style={{color:'black'}}>B.TECH(CSE)</div>
      <div style={{color:'black'}}>Admission No: 2024b01011205</div>
      <div style={{color:'black'}}>DOB: 09-02-2007</div>
      <div style={{color:'black'}}>Blood Group: B+</div>
      <div style={{color:'black'}}>Hostel: No</div>
      <div style={{color:'black'}}>Valid Till: 31.07.2028</div>

<ICard />
    </div>
  )
}

export default App
