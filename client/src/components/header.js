import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './logout-button'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="logo">nettles</p>
        <LogoutButton />
      </div>
    )
  }
}

export default Header
