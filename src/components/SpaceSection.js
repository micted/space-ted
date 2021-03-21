import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SpaceSection.css';

function SpaceSection() {
    return (
        <div className='space-container'>
            <video src="/videos/GALAXY.mp4" autoPlay loop muted/>            
           <h1>WELCOME to SPACE-TED</h1>
            <p>Explore the infinity stars!</p>
            <div className='space-btns'>
                <Button 
                  className='btns'
                  buttonStyle= 'btn--outline'
                  buttonSize= 'btn--large'>
                      Explore <i class="fab fa-wpexplorer"></i>
                  </Button>
            </div>
    
            
        </div>
    )
}

export default SpaceSection
