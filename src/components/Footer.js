import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-social-heading">
                    Follow us on our social media pages to learn more about space science facts.
                </p>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link  className='link-text' to='/'>Who are we?</Link>
                        <Link className='link-text' to='/'>Learn more about the web developer</Link>
                    </div>

                    <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link className='link-text' to='/'>Telegram</Link>
                        <Link className='link-text' to='/'>Facebook</Link>
                        <Link className='link-text' to='/'>YouTube</Link>
                    </div>
                    </div>

                    
                </div>
            </div>
            <section>
                <div className="social media">
                    <div className="social-media-wrap">
                
                    
                    </div>
                     <small className="website-rights">SPACE-TED DEVELOPED BY MICTED © 2021</small>
                     <div className="social-icons">
                         <Link className="social-icon-link telegram"
                         to='/'
                         target='_blank'
                         aria-label='Telegram'>
                             <i class="fab fa-telegram"></i>
                         </Link>
                         <Link className="social-icon-link facebook"
                         to='/'
                         target='_blank'
                         aria-label='Facebook'>
                             <i className='fab fa-facebook-f' />
                         </Link>
                         <Link className="social-icon-link youtube"
                         to='/'
                         target='_blank'
                         aria-label='YouTube'>
                             <i class="fab fa-youtube"></i>
                         </Link>
                     </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
