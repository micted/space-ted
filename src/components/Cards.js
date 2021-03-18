import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Articles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Mars.jpg'
              text='Explore more about the red planet'
              label='MARS'
              path='/planets'
            />
            <CardItem
              src='images/andromeda.jpg'
              text=' The constellation of Andromeda named after the Ethiopian princess '
              label='ANDROMEDA'
              path='/planets'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/black hole.jpg'
              text='Region of spacetime where gravity is so strong that nothing can escape from it'
              label='BLACK HOLE'
              path='/planets'
            />
          
          <CardItem
              src='images/wormhole.jpg'
              text='Einstein–Rosen bridge or Einstein–Rosen wormhole'
              label='WORM HOLE'
              path='/planets'
            />
          
            <CardItem
              src='images/milk way.jpg'
              text=' Milky Way gets its name from a Greek myth about the goddess Hera who sprayed milk across the sky.'
              
              label='MILKY WAY'
              path='/planets'
            />
            </ul>
            
        </div>
      </div>
    </div>
  );
}

export default Cards;

/*The Milky Way is the galaxy that contains our Solar System, with the name describing the galaxys appearance 
 from Earth a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye.
 The Galaxy is a barred spiral galaxy with an estimated visible diameter of 150-200,000 light-years. It is estimated to contain 100–400 billion and at least that number of planets '*/