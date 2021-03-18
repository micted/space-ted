import React from 'react';
import '../App.css';
import './planets.css'


function PlanetsSection() {
    return (
        <div className='planets-container'> 
      <h1 className='planets'>PLANETS</h1> 
        <video src="/videos/Earth.mp4" autoPlay loop muted/>    
      <p>Did you know that <br></br> there are more than 100 billion planets<br></br>in our galaxy?</p>
    </div>
    )
}

export default PlanetsSection
