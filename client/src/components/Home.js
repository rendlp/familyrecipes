import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../lib/auth"
import { connect } from "../actions/actions"

const Home = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // connect(user)
    }, [user])

    return (
        <div className="homePage">
            <span>{user}</span>
        </div>
    )
}


export default Home