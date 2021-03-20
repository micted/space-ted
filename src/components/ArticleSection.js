import React from 'react';
import '../App.css';
import './Articles.css'


function ArticleSection() {
    return (
        <div className='articles-container'> 
      <h1>SPACE SCIENCE &amp; TECHNOLOGY</h1> 
        <video src="/videos/rocket.mp4" autoPlay loop muted/>    
      <p>Learn more about emerging technologies in the space industry</p>
    </div>
    )
}

export default ArticleSection
