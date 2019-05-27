import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../lib/auth"
import { Link } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import Logout from './auth/Logout.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faBookOpen, faBookReader, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faUpload, faBookReader, faBookOpen, faUserFriends)

const LogoutButton = props => {

    const { user } = useContext(AuthContext)

    useEffect(() => {

    }, [user])

    const options = [

        { key: 1, text: <Link to="/user_profile">My Profile</Link>, value: 1 },
        { key: 3, text: <Logout />, value: 3 },

      ]

    return (

        <div className="logoutDiv">
        <Link to="/upload"><button id="upload-recipe-bttn"><FontAwesomeIcon className='fa' icon="upload" /> Upload Recipe</button></Link>
        <div className='space'></div>
        {/* <Link to="/user_profile"><button className='userSpan'>{user}</button></Link> */}

         <Dropdown className='dropdownBtn' text={user} selection options={options}  />


        </div>
    )
}

export default LogoutButton
