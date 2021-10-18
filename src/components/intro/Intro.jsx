import React from 'react'
import './intro.css'
function Intro() {
    return (
        <div className="i">
           <div className="i-left">
               <div className="i-left-wrapper">
               <h2 className="i-intro">Hello, My name is </h2>
               <h1 className="i-name">Iqra Muhammad</h1>
               <div className="i-title">
               <div className="i-title-wrapper">
                   <div className="i-title-item">Full-stack Developer</div>
                   <div className="i-title-item">Stupid Developer 1</div>
                   <div className="i-title-item">Stupid Developer 2</div>
                   <div className="i-title-item">Stupid Developer 3</div>
                   <div className="i-title-item">Stupid Developer 4</div>
                   <div className="i-title-item">Stupid Developer 5</div>
                   <div className="i-title-item">Stupid Developer 6</div>
               </div>
               </div>

               <div className="desc">
                   An avid reader An avid reader
                   An avid reader An avid reader
                   An avid reader
                   An avid reader
                   An avid reader
                   An avid reader 
               </div>
           
               </div>
               
           </div>
           <div className="i-right">right</div>
        </div>
    )
}

export default Intro
