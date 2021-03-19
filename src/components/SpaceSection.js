import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SpaceSection.css';

function SpaceSection() {
    return (
        <div className='space-container'>
            <video src="/videos/GALAXY.mp4" autoPlay loop muted/>            
            <h2 class="heading">Welcome to SPACE-TED</h2>
            <p1 className='paragraph'>Explore the infinty stars!</p1>
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
