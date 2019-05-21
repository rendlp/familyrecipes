import React, { Component } from 'react'
import LogoutButton from './logout-button'
import nettles from '../components/assets/nettle.jpg'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='logosDiv'>
        <img className='logoImg'src={nettles} alt={nettles} />
        <p className="logo">nettles</p>
        </div>
        <LogoutButton />
      </div>
    )
  }
}

export default Header;
