import React, { Component } from 'react'
import twitter from './assets/tweet.jpg'
import facebook  from './assets/facebook.png'
import instagram from './assets/instagram.png'
import pinterest from './assets/pinterest.png'


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className='footerSpan'>preserve culinary traditions as old as <strong>nettle pudding.</strong></span>
     
        <div className='label-footer-div'>
         <p className='footerP'>...want to be kept in the loop?</p>
         <input className='footerInput' placeholder='send us an email'></input>

          <div className='footerIcons'>
           <img className='footerImg' src={facebook} alt='' /> 
           <img className='footerImg' src={twitter} alt='' /> 
           <img className='footerImg' src={instagram} alt='' />
           <img className='footerImg' src={pinterest} alt='' />
          </div> 
          <p className='copyright'>Copyright Nettles ©  2019 | All Rights Reserved</p>
          <p className='policy'>Privacy Policy | Terms of Use</p>
          <div className='invisble2'></div>
        </div>
      </div>
    )
  }
}

export default Footer
