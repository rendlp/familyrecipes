import React, { useEffect, useContext } from 'react'
import Logout from "./auth/Logout"
import { AuthContext } from "../lib/auth"



const LogoutButton = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // connect(user)
    }, [user])

    return (
      <div>

        <div className="homePage">

            {/* <span>{user}</span> */}

            <span>{user}</span>
            <Logout />


        </div>

      </div>
    )
}


export default LogoutButton
