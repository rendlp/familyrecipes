import React, { Component } from 'react'
import nettles from '../components/assets/nettle.jpg'


class LoginHeader extends Component {

  render() {

    return (
      
      <div className="loginHeader">
        <div className='logosLoginDiv'>
        <img className='logoImgLogin'src={nettles} alt={nettles} />
        <p className="logoLogin">nettles</p>
        <p className='traditionP'>what's your tradition?</p>

        </div>
  
      </div>
    )
  }
}

export default LoginHeader;