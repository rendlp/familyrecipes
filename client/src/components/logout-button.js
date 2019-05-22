import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../lib/auth"
import { Link } from 'react-router-dom'

const LogoutButton = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {

    }, [user])

    return (

        <div className="logoutDiv">
          <Link to="/upload"><button className="uploadButton">Upload Recipe</button></Link>
          <Link to="/user_profile"><button className='userSpan'>{user}</button></Link>
    
        </div>
    )
}

export default LogoutButton
