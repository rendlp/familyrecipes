import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className='footerSpan'>preserve culinary traditions as old as <strong>nettle pudding.</strong></span>

        <div className='label-footer-div'>
        <p className='footerP'>Want to be kept in the loop?</p>
        <input className='footerInput' placeholder='send us an email'></input>

        </div>
        
      </div>
    )
  }
}

export default Footer
