import React, { useEffect, useContext } from 'react'
import Logout from "./auth/Logout"
import { AuthContext } from "../lib/auth"
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Home = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // connect(user)
    }, [user])

    return (
       
        <div className="homePage">

            <span>{user}</span>
            <Logout />
            <button><Link to ='/upload'>Upload A Recipe</Link></button>
        
        </div>

    )
}


export default Home;