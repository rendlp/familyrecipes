import React, { Component } from 'react'
import nettles from '../components/assets/nettle.jpg'
import LogoutButton from './logout-button'
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {

    return (
      
      <div className="header">
        <div className='logosDiv'>
        <Link className='logoLink' to='/'><img className='logoImg'src={nettles} alt={nettles} /></Link>
        <p className="logo">nettles</p>
        </div>
        <LogoutButton />
      </div>
    )
  }
}

export default Header;
