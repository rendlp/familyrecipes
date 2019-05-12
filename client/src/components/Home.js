import React, { useEffect, useContext } from 'react'
import Upload from '../components/Upload'
import { AuthContext } from "../lib/auth"

const Home = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // connect(user)
    }, [user])

    return (
        <div className="homePage">
            {/* <span>{user}</span> */}
            <Upload />
        </div>
    )
}


export default Home