import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import nettles from '../components/assets/nettle.jpg'
import LogoutButton from './logout-button'
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {

    return (

      <div className="header">
        <div className='logosDiv'>

          <Link to="/"><img className='logoImg'src={nettles} alt={nettles} /></Link>
          <Link to="/"><p className="logo">nettles</p></Link>

        </div>
        <LogoutButton />
      </div>
    )
  }
}

export default Header;
