import React, { useEffect, useContext } from 'react'
import Upload from '../components/Upload'
import Logout from "./auth/Logout"
import { AuthContext } from "../lib/auth"
// import { connect } from "../actions/actions"


const Home = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // connect(user)
    }, [user])

    return (
        <div className="homePage">

            {/* <span>{user}</span> */}

            <span>{user}</span>
            <Logout />

            <Upload />
        </div>
    )
}


export default Home