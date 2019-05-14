import React, { useContext } from 'react'
import Upload from '../components/Upload'
import Logout from "./auth/Logout"
import GroupList from "./GroupList"
import { AuthContext } from "../lib/auth"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
// import { connect } from "../actions/actions"


const Home = props => {
    const { user } = useContext(AuthContext)

    return (
         
        <div className="homePage">

            <span>{user}</span>
            <Logout />
            <GroupList />
            <Upload />
        </div>
    
    
    )
}


export default Home