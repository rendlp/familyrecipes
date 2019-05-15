import React, { useContext, useEffect } from 'react'
import Logout from "./auth/Logout"
import { AuthContext } from "../lib/auth"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
// import { connect } from "../actions/actions"


const LogoutButton = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // connect(user)
    }, [user])

    return (
      <div>

        <div className="homePage">

            <span>{user}</span>
            <Logout />

        </div>

      </div>

    )
}


export default LogoutButton
