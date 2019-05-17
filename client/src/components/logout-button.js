import React, { useEffect, useContext } from 'react'
import Logout from "./auth/Logout"
import { AuthContext } from "../lib/auth"
import { BrowserRouter as Router, Link } from 'react-router-dom'

const LogoutButton = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {

    }, [user])

    return (

        <div className="homePage">

            <span>{user}</span>
            <Logout />


        </div>

    )
}


export default LogoutButton
